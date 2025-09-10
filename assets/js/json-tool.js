document.addEventListener('DOMContentLoaded', () => {
    const jsonInput = document.getElementById('json-input');
    const copyBtn = document.getElementById('copy-btn');
    const copyFeedback = document.getElementById('copy-feedback');
    const statusBar = document.getElementById('input-status-bar');
    const tabs = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const inputLineNumbers = document.getElementById('input-line-numbers');

    // Line number elements
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

    let currentJson = null;
    let activeTab = 'tree';
    let copyTimeout;

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
        updateLineNumbers('1', lineNumbers.formatted);
        updateLineNumbers('1', lineNumbers.yaml);
        updateLineNumbers('1', lineNumbers.xml);
    };

    const processJson = () => {
        const jsonString = jsonInput.value;
        updateLineNumbers(jsonString, inputLineNumbers);

        if (!jsonString.trim()) {
            updateStatus('');
            clearOutputs();
            currentJson = null;
            return;
        }

        try {
            currentJson = JSON.parse(jsonString);
            updateStatus('Valid JSON', false);
            renderOutputs();
        } catch (e) {
            currentJson = null;
            updateStatus(`Invalid JSON: ${e.message}`, true);
            for (const key in outputs) {
                if (outputs[key]) {
                    if (key === 'tree') outputs[key].innerHTML = '';
                    else outputs[key].textContent = '';
                }
            }
            updateLineNumbers('1', lineNumbers.formatted);
            updateLineNumbers('1', lineNumbers.yaml);
            updateLineNumbers('1', lineNumbers.xml);
        }
    };

    const renderOutputs = () => {
        if (currentJson === null) return;

        const compactString = JSON.stringify(currentJson);

        // Formatted
        const formattedString = JSON.stringify(currentJson, null, 4);
        outputs.formatted.textContent = formattedString;
        updateLineNumbers(formattedString, lineNumbers.formatted);

        // Compact
        outputs.compact.textContent = compactString;

        // Tree View
        outputs.tree.innerHTML = '';
        outputs.tree.appendChild(createJsonTree(currentJson));

        // XML
        const xmlString = jsonToXml(currentJson);
        outputs.xml.textContent = xmlString;
        updateLineNumbers(xmlString, lineNumbers.xml);

        // YAML
        const yamlString = jsonToYaml(currentJson);
        outputs.yaml.textContent = yamlString;
        updateLineNumbers(yamlString, lineNumbers.yaml);

        // Base64
        try {
            outputs.base64.textContent = btoa(unescape(encodeURIComponent(compactString)));
        } catch (e) {
            outputs.base64.textContent = 'Error encoding to Base64.';
        }

        // URL Encode
        outputs.urlencode.textContent = encodeURIComponent(compactString);
    };

    // --- Event Listeners ---
    jsonInput.addEventListener('input', processJson);
    jsonInput.addEventListener('scroll', () => {
        if (inputLineNumbers) {
            inputLineNumbers.scrollTop = jsonInput.scrollTop;
        }
    });

    // Add scroll listeners for all output wrappers that have line numbers
    for (const key in lineNumbers) {
        const outputEl = outputs[key];
        const lineNumbersEl = lineNumbers[key];
        if (outputEl && outputEl.parentElement && outputEl.parentElement.classList.contains('output-wrapper')) {
            outputEl.parentElement.addEventListener('scroll', () => {
                if (lineNumbersEl) {
                    lineNumbersEl.scrollTop = outputEl.parentElement.scrollTop;
                }
            });
        }
    }

    copyBtn.addEventListener('click', () => {
        if (currentJson === null) {
            updateStatus('Nothing to copy.', true);
            return;
        }

        let contentToCopy = '';
        if (activeTab === 'tree') {
            contentToCopy = JSON.stringify(currentJson, null, 4);
        } else if (outputs[activeTab]) {
            contentToCopy = outputs[activeTab].textContent;
        }

        if (contentToCopy) {
            navigator.clipboard.writeText(contentToCopy).then(
                () => {
                    copyFeedback.textContent = 'Copied to clipboard!';
                    copyFeedback.classList.add('show');
                    clearTimeout(copyTimeout);
                    copyTimeout = setTimeout(() => {
                        copyFeedback.classList.remove('show');
                    }, 2000);
                },
                () => {
                    updateStatus('Failed to copy.', true);
                }
            );
        }
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            activeTab = tabName;

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            tabContents.forEach(content => {
                content.classList.toggle('hidden', content.id !== tabName);
            });
        });
    });

    // --- JSON Tree Viewer ---
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

    // --- Converters ---
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
                        const escapedValue = v[m].toString().replace(/"/g, '&quot;');
                        xml += ` ${m.substring(1)}="${escapedValue}"`;
                    } else {
                        hasChild = true;
                    }
                }
                xml += hasChild ? '>\n' : '/>\n';
                if (hasChild) {
                    for (const m in v) {
                        if (m === '#text') {
                            xml += v[m];
                        } else if (m === '#cdata') {
                            xml += `<![CDATA[${v[m]}]]>`;
                        } else if (!m.startsWith('@')) {
                            xml += toXml(v[m], m, indent + '  ');
                        }
                    }
                    xml += `${indent}</${name}>\n`;
                }
            } else {
                const escapedValue = v.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
                xml += `${indent}<${name}>${escapedValue}</${name}>\n`;
            }
            return xml;
        };

        try {
            let xml = '<?xml version="1.0" encoding="UTF-8" ?>\n';
            if (Array.isArray(json)) {
                xml += '<root>\n';
                json.forEach(item => {
                    xml += toXml(item, 'item', '  ');
                });
                xml += '</root>';
            } else {
                const rootName = Object.keys(json).length === 1 ? Object.keys(json)[0] : 'root';
                if (rootName === 'root') {
                     xml += '<root>\n';
                     for(const key in json) xml += toXml(json[key], key, '  ');
                     xml += '</root>';
                } else {
                    xml += toXml(json[rootName], rootName, '');
                }
            }
            return xml.trim();
        } catch (e) {
            return `Error converting to XML: ${e.message}`;
        }
    }

    function jsonToYaml(json) {
        const toYaml = (data, indent = 0) => {
            const indentStr = '  '.repeat(indent);
            if (data === null) return 'null';
            if (typeof data === 'string') {
                if (data.includes(': ') || data.startsWith('- ')) {
                    return `'${data.replace(/'/g, "''")}'`;
                }
                return data.includes('\n') ? `|\n${data.split('\n').map(l => `${indentStr}  ${l}`).join('\n')}` : data;
            }
            if (typeof data !== 'object') return String(data);

            if (Array.isArray(data)) {
                if (data.length === 0) return '[]';
                return data.map(item => {
                    const itemYaml = toYaml(item, indent + 1);
                    if(typeof item === 'object' && item !== null) {
                        return `${indentStr}- \n${itemYaml.replace(/^/gm, '  ')}`;
                    }
                    return `${indentStr}- ${itemYaml}`;
                }).join('\n');
            }

            if (Object.keys(data).length === 0) return '{}';
            return Object.keys(data).map(key => {
                const value = data[key];
                const valueYaml = toYaml(value, indent + 1);
                if (typeof value === 'object' && value !== null) {
                    return `${indentStr}${key}:\n${valueYaml}`;
                }
                return `${indentStr}${key}: ${valueYaml}`;
            }).join('\n');
        };

        try {
            return toYaml(json);
        } catch (e) {
            return `Error converting to YAML: ${e.message}`;
        }
    }

    // Initial processing
    processJson();
});
