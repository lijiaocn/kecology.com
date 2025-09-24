document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const jsonInput = document.getElementById('json-input');
    const copyBtn = document.getElementById('copy-btn');
    const copyFeedback = document.getElementById('copy-feedback');
    const statusBar = document.getElementById('input-status-bar');
    const tabs = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const inputLineNumbers = document.getElementById('input-line-numbers');
    const uploadFileBtn = document.getElementById('upload-file-btn');
    const fileInput = document.getElementById('file-input');
    const clearBtn = document.getElementById('clear-btn');
    const formatInputBtn = document.getElementById('format-input-btn');
    const compactInputBtn = document.getElementById('compact-input-btn');
    const highlightingLayer = document.getElementById('highlighting-layer');

    const lineNumbers = {
        formatted: document.getElementById('output-line-numbers'),
        yaml: document.getElementById('yaml-line-numbers'),
        xml: document.getElementById('xml-line-numbers'),
    };

    const outputs = {
        formatted: document.getElementById('formatted-output'),
        compact: document.getElementById('compact-output'),
        tree: document.getElementById('tree-output'),
        xml: document.getElementById('xml-output'),
        yaml: document.getElementById('yaml-output'),
        base64: document.getElementById('base64-output'),
        urlencode: document.getElementById('urlencode-output'),
    };

    // State
    let currentJson = null;
    let activeTab = 'tree';
    let copyTimeout;
    const STORAGE_KEY = 'json-tool-input';

    // --- Core Functions ---

    const updateStatus = (message, isError = false) => {
        statusBar.textContent = message;
        statusBar.className = 'status-bar';
        if (message) {
            statusBar.classList.add(isError ? 'error' : 'success');
        }
    };

    const updateLineNumbers = (text, element) => {
        if (!element) return;
        const lineCount = text.split('\n').length;
        const lines = Array.from({ length: lineCount }, (_, i) => i + 1).join('\n');
        if (element.innerHTML !== lines) {
            element.innerHTML = lines;
        }
    };

    const clearOutputs = () => {
        for (const key in outputs) {
            if (outputs[key]) {
                if (key === 'tree') outputs[key].innerHTML = '';
                else outputs[key].textContent = '';
            }
        }
        updateLineNumbers('1', inputLineNumbers);
        Object.values(lineNumbers).forEach(el => updateLineNumbers('1', el));
        highlightingLayer.innerHTML = '';
    };

    const processJson = (isInitialLoad = false) => {
        const jsonString = jsonInput.value;
        updateLineNumbers(jsonString, inputLineNumbers);
        highlightingLayer.innerHTML = ''; // Clear previous highlights

        if (!jsonString.trim()) {
            updateStatus('');
            clearOutputs();
            currentJson = null;
            if (!isInitialLoad) {
                localStorage.removeItem(STORAGE_KEY);
            }
            return;
        }

        try {
            currentJson = JSON.parse(jsonString);
            updateStatus('Gültiges JSON', false);
            renderOutputs();
            localStorage.setItem(STORAGE_KEY, jsonString);
        } catch (e) {
            currentJson = null;
            updateStatus(`Ungültiges JSON: ${e.message}`, true);
            for (const key in outputs) {
                if (outputs[key]) {
                    if (key === 'tree') outputs[key].innerHTML = '';
                    else outputs[key].textContent = '';
                }
            }
            Object.values(lineNumbers).forEach(el => updateLineNumbers('1', el));
            handleJsonError(jsonString, e);
        }
    };

    const renderOutputs = () => {
        if (currentJson === null) return;

        const compactString = JSON.stringify(currentJson);
        const formattedString = JSON.stringify(currentJson, null, 4);
        const xmlString = jsonToXml(currentJson);
        const yamlString = jsonToYaml(currentJson);

        outputs.formatted.textContent = formattedString;
        updateLineNumbers(formattedString, lineNumbers.formatted);

        outputs.compact.textContent = compactString;

        outputs.tree.innerHTML = '';
        outputs.tree.appendChild(createJsonTree(currentJson));

        outputs.xml.textContent = xmlString;
        updateLineNumbers(xmlString, lineNumbers.xml);

        outputs.yaml.textContent = yamlString;
        updateLineNumbers(yamlString, lineNumbers.yaml);

        try {
            outputs.base64.textContent = btoa(unescape(encodeURIComponent(compactString)));
        } catch (e) {
            outputs.base64.textContent = 'Fehler beim Kodieren nach Base64.';
        }

        outputs.urlencode.textContent = encodeURIComponent(compactString);
    };

    const handleJsonError = (text, error) => {
        // Regex for Chrome/Edge ("at position X") and Firefox ("line X column Y")
        const posRegex = /(?:at position|in JSON at position) (\d+)/;
        const lineColRegex = /line (\d+) column (\d+)/;
        
        const posMatch = error.message.match(posRegex);
        const lineColMatch = error.message.match(lineColRegex);

        let errorLine, errorCol;

        if (lineColMatch) {
            errorLine = parseInt(lineColMatch[1], 10);
            errorCol = parseInt(lineColMatch[2], 10);
        } else if (posMatch) {
            const charIndex = parseInt(posMatch[1], 10);
            let lines = text.substring(0, charIndex).split('\n');
            errorLine = lines.length;
            errorCol = lines[lines.length - 1].length + 1;
        } else {
            return; // Cannot determine error location
        }
        
        highlightError(text, errorLine, errorCol);
    };

    const highlightError = (text, line, col) => {
        const escapeHtml = (unsafe) => unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const lines = text.split('\n');
        if (line > lines.length || line < 1) return;

        const lineIndex = line - 1;
        const colIndex = col - 1;

        const highlightedLines = lines.map(escapeHtml);

        if (lineIndex < highlightedLines.length && colIndex >= 0) {
            let lineContent = lines[lineIndex]; // Use original line for char manipulation
            if (colIndex < lineContent.length) {
                const char = lineContent[colIndex];
                const part1 = escapeHtml(lineContent.substring(0, colIndex));
                const part2 = escapeHtml(lineContent.substring(colIndex + 1));
                const highlightedChar = `<span class="error-char">${escapeHtml(char)}</span>`;
                highlightedLines[lineIndex] = `${part1}${highlightedChar}${part2}`;
            }
        }

        highlightedLines[lineIndex] = `<span class="error-line">${highlightedLines[lineIndex]}</span>`;
        highlightingLayer.innerHTML = highlightedLines.join('\n');
    };

    // --- Event Listeners ---

    jsonInput.addEventListener('input', () => processJson());

    jsonInput.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = jsonInput.selectionStart;
            const end = jsonInput.selectionEnd;
            const spaces = '    '; // 4 spaces for a tab

            if (e.shiftKey) {
                // Shift + Tab: Outdent
                let lineStart = start;
                while (lineStart > 0 && jsonInput.value[lineStart - 1] !== '\n') {
                    lineStart--;
                }
                if (jsonInput.value.substring(lineStart, lineStart + spaces.length) === spaces) {
                    jsonInput.value = jsonInput.value.substring(0, lineStart) + jsonInput.value.substring(lineStart + spaces.length);
                    const newStart = Math.max(lineStart, start - spaces.length);
                    jsonInput.selectionStart = jsonInput.selectionEnd = newStart;
                }
            } else {
                // Tab: Indent
                jsonInput.value = jsonInput.value.substring(0, start) + spaces + jsonInput.value.substring(end);
                jsonInput.selectionStart = jsonInput.selectionEnd = start + spaces.length;
            }
            processJson(); // Re-process after changing content
        }
    });

    jsonInput.addEventListener('scroll', () => {
        if (inputLineNumbers) {
            inputLineNumbers.scrollTop = jsonInput.scrollTop;
            inputLineNumbers.scrollLeft = jsonInput.scrollLeft;
        }
        if (highlightingLayer) {
            highlightingLayer.scrollTop = jsonInput.scrollTop;
            highlightingLayer.scrollLeft = jsonInput.scrollLeft;
        }
    });

    for (const key in lineNumbers) {
        const outputEl = outputs[key];
        const lineNumbersEl = lineNumbers[key];
        if (outputEl && outputEl.parentElement && outputEl.parentElement.classList.contains('output-wrapper')) {
            outputEl.parentElement.addEventListener('scroll', () => {
                if (lineNumbersEl) {
                    lineNumbersEl.scrollTop = outputEl.parentElement.scrollTop;
                    lineNumbersEl.scrollLeft = outputEl.parentElement.scrollLeft;
                }
            });
        }
    }

    copyBtn.addEventListener('click', () => {
        if (currentJson === null) {
            updateStatus('Nichts zu kopieren.', true);
            return;
        }
        let contentToCopy = activeTab === 'tree' ? JSON.stringify(currentJson, null, 4) : (outputs[activeTab]?.textContent || '');
        if (contentToCopy) {
            navigator.clipboard.writeText(contentToCopy).then(() => {
                copyFeedback.textContent = 'In die Zwischenablage kopiert!';
                copyFeedback.classList.add('show');
                clearTimeout(copyTimeout);
                copyTimeout = setTimeout(() => copyFeedback.classList.remove('show'), 2000);
            }, () => updateStatus('Kopieren fehlgeschlagen.', true));
        }
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            activeTab = tab.dataset.tab;
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            tabContents.forEach(content => content.classList.toggle('hidden', content.id !== activeTab));
        });
    });

    clearBtn.addEventListener('click', () => {
        jsonInput.value = '';
        localStorage.removeItem(STORAGE_KEY);
        processJson();
    });

    formatInputBtn.addEventListener('click', () => {
        const currentVal = jsonInput.value;
        if (!currentVal.trim()) return;
        try {
            const parsed = JSON.parse(currentVal);
            jsonInput.value = JSON.stringify(parsed, null, 4);
            processJson(); // Re-process to update everything
        } catch (e) {
            // If formatting fails, it means JSON is invalid.
            // processJson() will catch and handle the error display.
            processJson();
        }
    });

    compactInputBtn.addEventListener('click', () => {
        const currentVal = jsonInput.value;
        if (!currentVal.trim()) return;
        try {
            const parsed = JSON.parse(currentVal);
            jsonInput.value = JSON.stringify(parsed);
            processJson(); // Re-process to update everything
        } catch (e) {
            // If compacting fails, it means JSON is invalid.
            // processJson() will catch and handle the error display.
            processJson();
        }
    });

    uploadFileBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            jsonInput.value = e.target.result;
            processJson();
        };
        reader.readAsText(file);
        fileInput.value = ''; // Reset for same-file uploads
    });

    

    // --- Initialization ---
    const loadFromStorage = () => {
        const savedJson = localStorage.getItem(STORAGE_KEY);
        if (savedJson) {
            jsonInput.value = savedJson;
        }
        processJson(true);
    };

    loadFromStorage();

    // --- Converters and Tree Viewer (omitted for brevity) ---
    function createJsonTree(data) {
        const tree = buildTree(data, 'root');
        return tree;
    }

    function buildTree(data, name) {
        const valType = typeof data;
        if (data === null || valType !== 'object') {
            const element = document.createElement('span');
            element.className = `value ${valType}`;
            element.textContent = JSON.stringify(data);
            return element;
        }

        const ul = document.createElement('ul');
        for (const key in data) {
            if (!Object.prototype.hasOwnProperty.call(data, key)) continue;

            const li = document.createElement('li');
            const keySpan = document.createElement('span');
            keySpan.className = 'key';

            const value = data[key];
            const isObject = typeof value === 'object' && value !== null;

            if (isObject) {
                keySpan.classList.add('collapsible');
                keySpan.innerHTML = `"${key}"<span>: ${Array.isArray(value) ? '[' : '{'}</span>`;
                const childTree = buildTree(value, key);
                childTree.style.display = 'none';
                li.appendChild(keySpan);
                li.appendChild(childTree);

                keySpan.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const isOpen = childTree.style.display === 'block';
                    childTree.style.display = isOpen ? 'none' : 'block';
                    keySpan.classList.toggle('open', !isOpen);
                });
            } else {
                keySpan.innerHTML = `"${key}"<span>: </span>`;
                li.appendChild(keySpan);
                li.appendChild(buildTree(value, key));
            }
            ul.appendChild(li);
        }
        return ul;
    }

    function jsonToXml(json) {
        const toXml = (v, name, ind) => {
            let xml = '';
            const indent = ind || '';
            if (v === null) {
                xml += `${indent}<${name}/>\n`;
            } else if (v instanceof Array) {
                v.forEach(item => {
                    xml += toXml(item, name, indent);
                });
            } else if (typeof v === 'object') {
                let hasChild = false;
                xml += `${indent}<${name}`;
                for (const m in v) {
                    if (m.startsWith('@')) {
                        const escapedValue = v[m].toString().replace(/