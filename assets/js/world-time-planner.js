document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const popularCitiesList = document.getElementById('popular-cities-list');
    const countryList = document.getElementById('country-list');
    const timezoneList = document.getElementById('timezone-list');
    const modal = document.getElementById('city-modal');
    const modalCountryName = document.getElementById('modal-country-name');
    const modalCountryInfo = document.getElementById('modal-country-info');
    const modalCityList = document.getElementById('modal-city-list');
    const closeModal = document.querySelector('.wtp-modal-close');
    const timeRows = document.getElementById('wtp-time-rows');
    const datePicker = document.getElementById('wtp-date-picker');
    const timelineRowTemplate = document.getElementById('wtp-timeline-row-template');
    const rowsWrapper = document.getElementById('wtp-rows-wrapper');
    const timeSelector = document.getElementById('wtp-time-selector');
    const nowBtn = document.getElementById('wtp-now-btn');
    const dateButtonsContainer = document.getElementById('wtp-date-buttons');
    const scrollLeftBtn = document.getElementById('wtp-scroll-left-btn');
    const scrollRightBtn = document.getElementById('wtp-scroll-right-btn');

    let TIMELINE_HOURS = 24;
    let TIMELINE_INTERVALS = TIMELINE_HOURS * 2;
    const HOUR_BLOCK_WIDTH = 50; // px

    // State
    let selectedCities = new Set(); // Store city keys like "Beijing,China" or "Label,Custom"
    let customCities = []; // Array of { label: string, timezone: string }
    let currentTimeValue = 24; // Represents 30-min intervals from midnight
    let timelineStartOffsetHours = 0;

    const timezoneData = {
        'USA': {
            'Washington D.C.': 'America/New_York', // Capital
            'New York': 'America/New_York',
            'Chicago': 'America/Chicago',
            'Denver': 'America/Denver',
            'Los Angeles': 'America/Los_Angeles',
        },
        'Canada': { 
            'Ottawa': 'America/Toronto', // Capital
            'Toronto': 'America/Toronto' 
        },
        'Brazil': { 
            'Brasília': 'America/Sao_Paulo', // Capital
            'São Paulo': 'America/Sao_Paulo' 
        },
        'UK': { 
            'London': 'Europe/London' // London is both capital and timezone representative
        },
        'France': { 
            'Paris': 'Europe/Paris' // Paris is both capital and timezone representative
        },
        'Germany': { 
            'Berlin': 'Europe/Berlin' // Berlin is both capital and timezone representative
        },
        'Russia': { 
            'Moscow': 'Europe/Moscow' // Moscow is both capital and timezone representative
        },
        'Egypt': { 
            'Cairo': 'Africa/Cairo' // Cairo is both capital and timezone representative
        },
        'South Africa': { 
            'Cape Town': 'Africa/Johannesburg', // Legislative capital
            'Johannesburg': 'Africa/Johannesburg' 
        },
        'UAE': { 
            'Abu Dhabi': 'Asia/Dubai', // Capital
            'Dubai': 'Asia/Dubai' 
        },
        'India': { 
            'New Delhi': 'Asia/Kolkata', // Capital
            'Kolkata': 'Asia/Kolkata' 
        },
        'Singapore': { 
            'Singapore': 'Asia/Singapore' // Singapore is both capital and timezone representative
        },
        'China': { 
            'Beijing': 'Asia/Shanghai', // Capital
            'Shanghai': 'Asia/Shanghai' 
        },
        'South Korea': { 
            'Seoul': 'Asia/Seoul' // Seoul is both capital and timezone representative
        },
        'Japan': { 
            'Tokyo': 'Asia/Tokyo' // Tokyo is both capital and timezone representative
        },
        'Australia': { 
            'Canberra': 'Australia/Sydney', // Capital
            'Sydney': 'Australia/Sydney' 
        },
        'New Zealand': { 
            'Wellington': 'Pacific/Auckland', // Capital
            'Auckland': 'Pacific/Auckland' 
        },
    };

    // Country timezone information data
    const countryTimeInfo = {
        'USA': {
            description: 'The United States uses 4 time zones: <strong>Eastern Time (EST/EDT)</strong>, <strong>Central Time (CST/CDT)</strong>, <strong>Mountain Time (MST/MDT)</strong>, and <strong>Pacific Time (PST/PDT)</strong>. Observes daylight saving time.'
        },
        'Canada': {
            description: 'Canada uses 1 time zone: <strong>Eastern Time (EST/EDT)</strong> and observes daylight saving time.'
        },
        'Brazil': {
            description: 'Brazil uses 1 time zone: <strong>Brasília Time (BRT)</strong> and does not observe daylight saving time.'
        },
        'UK': {
            description: 'The United Kingdom uses 1 time zone: <strong>Greenwich Mean Time (GMT)</strong> and <strong>British Summer Time (BST)</strong>, observing daylight saving time.'
        },
        'France': {
            description: 'France uses 1 time zone: <strong>Central European Time (CET)</strong> and <strong>Central European Summer Time (CEST)</strong>, observing daylight saving time.'
        },
        'Germany': {
            description: 'Germany uses 1 time zone: <strong>Central European Time (CET)</strong> and <strong>Central European Summer Time (CEST)</strong>, observing daylight saving time.'
        },
        'Russia': {
            description: 'Russia uses 1 time zone: <strong>Moscow Standard Time (MSK)</strong> and does not observe daylight saving time.'
        },
        'Egypt': {
            description: 'Egypt uses 1 time zone: <strong>Eastern European Time (EET)</strong> and <strong>Eastern European Summer Time (EEST)</strong>, observing daylight saving time.'
        },
        'South Africa': {
            description: 'South Africa uses 1 time zone: <strong>South African Standard Time (SAST)</strong> and does not observe daylight saving time.'
        },
        'UAE': {
            description: 'The UAE uses 1 time zone: <strong>Gulf Standard Time (GST)</strong> and does not observe daylight saving time.'
        },
        'India': {
            description: 'India uses 1 time zone: <strong>Indian Standard Time (IST)</strong> and does not observe daylight saving time.'
        },
        'Singapore': {
            description: 'Singapore uses 1 time zone: <strong>Singapore Standard Time (SGT)</strong> and does not observe daylight saving time.'
        },
        'China': {
            description: 'China uses 1 time zone: <strong>China Standard Time (CST)</strong> and does not observe daylight saving time. The entire country uses Beijing time.'
        },
        'South Korea': {
            description: 'South Korea uses 1 time zone: <strong>Korea Standard Time (KST)</strong> and does not observe daylight saving time.'
        },
        'Japan': {
            description: 'Japan uses 1 time zone: <strong>Japan Standard Time (JST)</strong> and does not observe daylight saving time.'
        },
        'Australia': {
            description: 'Australia uses 1 time zone: <strong>Australian Eastern Standard Time (AEST)</strong> and <strong>Australian Eastern Daylight Time (AEDT)</strong>, observing daylight saving time.'
        },
        'New Zealand': {
            description: 'New Zealand uses 1 time zone: <strong>New Zealand Standard Time (NZST)</strong> and <strong>New Zealand Daylight Time (NZDT)</strong>, observing daylight saving time.'
        }
    };

    const popularCities = [
        { city: 'New York', country: 'USA' },
        { city: 'Los Angeles', country: 'USA' },
        { city: 'London', country: 'UK' },
        { city: 'Paris', country: 'France' },
        { city: 'Berlin', country: 'Germany' },
        { city: 'Moscow', country: 'Russia' },
        { city: 'Dubai', country: 'UAE' },
        { city: 'Kolkata', country: 'India' },
        { city: 'Singapore', country: 'Singapore' },
        { city: 'Shanghai', country: 'China' },
        { city: 'Seoul', country: 'South Korea' },
        { city: 'Tokyo', country: 'Japan' },
        { city: 'Sydney', country: 'Australia' },
        { city: 'Auckland', country: 'New Zealand' },
        { city: 'Cairo', country: 'Egypt' },
        { city: 'Johannesburg', country: 'South Africa' },
        { city: 'São Paulo', country: 'Brazil' },
    ];

    function calculateAndSetTimelineHours() {
        const container = document.getElementById('wtp-timeline-container');
        const availableWidth = container.offsetWidth - 140 - (2 * 24); // container - info_box(140px) - container_padding
        const numHours = Math.floor(availableWidth / HOUR_BLOCK_WIDTH) - 1;
        TIMELINE_HOURS = Math.max(24, numHours);
        TIMELINE_INTERVALS = TIMELINE_HOURS * 2;
    }

    // Safely parse a YYYY-MM-DD string into a local date at midnight
    function parseDate(dateString) {
        if (!dateString) return null;
        const parts = dateString.split('-');
        return new Date(parts[0], parts[1] - 1, parts[2]);
    }

    function init() {
        loadSelectedCities();
        loadCustomCities();
        
        // Add default cities if none are selected
        if (selectedCities.size === 0) {
            selectedCities.add('New York,USA');
            selectedCities.add('London,UK');
            selectedCities.add('Shanghai,China');
            saveSelectedCities();
        }
        
        populatePopularCities();
        populateCountries();
        populateTimezones();
        addEventListeners();
        addTabListeners();
        loadSelectedTab(); // Load saved tab selection
        calculateAndSetTimelineHours();
        // Ensure date is set BEFORE first render so hour blocks get created
        goToNow(); // Set initial time to now and render
        renderInitialRows(); // Create rows after date is set
        renderAllTimelineGrids(); // Render again now that rows exist
        renderDateButtons();
        setInterval(renderAllTimelineGrids, 60 * 1000);
    }

    function renderDateButtons() {
        dateButtonsContainer.innerHTML = '';
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const selectedDate = parseDate(datePicker.value);

        // Calculate number of date buttons based on screen width
        const screenWidth = window.innerWidth;
        let buttonCount;
        if (screenWidth >= 1200) {
            buttonCount = 7; // Large screens: 7 days
        } else if (screenWidth >= 768) {
            buttonCount = 5; // Medium screens: 5 days
        } else if (screenWidth >= 480) {
            buttonCount = 2; // Small screens: 2 days
        } else {
            buttonCount = 1; // Very small screens: 1 day (minimum)
        }

        for (let i = 0; i < buttonCount; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);

            const button = document.createElement('button');
            button.classList.add('wtp-date-button');

            const dayStr = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                .toISOString()
                .split("T")[0];
            // Compact label: "Mon 9/22"
            const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
            const mm = date.getMonth() + 1;
            const dd = date.getDate();
            button.textContent = `${weekday} ${mm}/${dd}`;
            button.dataset.date = dayStr;

            // Mark weekend (Sat=6, Sun=0)
            const dayNum = date.getDay();
            if (dayNum === 0 || dayNum === 6) {
                button.classList.add('weekend');
            }

            if (selectedDate && date.getTime() === selectedDate.getTime()) {
                button.classList.add('active');
            }

            button.addEventListener('click', (e) => {
                timelineStartOffsetHours = 0;
                scrollLeftBtn.disabled = true;
                datePicker.value = e.currentTarget.dataset.date;
                renderAllTimelineGrids();
                renderDateButtons(); // Re-render to update active state
            });
            dateButtonsContainer.appendChild(button);
        }
    }

    function goToNow() {
        const now = new Date();
        // Set both valueAsDate and a safe YYYY-MM-DD string for broader compatibility
        datePicker.valueAsDate = now;
        const localISODate = new Date(now.getTime() - (now.getTimezoneOffset() * 60000))
            .toISOString()
            .split('T')[0];
        datePicker.value = localISODate;
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const diffMinutes = (now - startOfDay) / 60000;
        currentTimeValue = Math.round(diffMinutes / 30);
        timelineStartOffsetHours = new Date().getHours() - 2;
        scrollLeftBtn.disabled = false;
        renderAllTimelineGrids(); // Re-render grids for the new date and update times
        renderDateButtons();
    }

    function renderInitialRows() {
        selectedCities.forEach(cityKey => {
            const [city, country] = cityKey.split(',');
            let timezone;
            
            if (country === 'Timezone') {
                // For timezone entries, the city is actually the timezone string
                timezone = city;
            } else if (country === 'Custom') {
                // For custom entries, find the timezone from customCities
                const customEntry = customCities.find(c => c.label === city);
                timezone = customEntry ? customEntry.timezone : null;
            } else {
                // For regular city entries
                timezone = timezoneData[country] && timezoneData[country][city] ? timezoneData[country][city] : null;
            }
            
            if (timezone) createTimelineRow(timezone, city, country);
        });
        renderAllTimelineGrids();
    }

    function findCityCountryByTimezone(timezone) {
        for (const country in timezoneData) {
            for (const city in timezoneData[country]) {
                if (timezoneData[country][city] === timezone) return [city, country];
            }
        }
        return [null, null];
    }

    function addEventListeners() {
        popularCitiesList.addEventListener('change', handleCheckboxChange);
        timezoneList.addEventListener('change', handleCheckboxChange);
        countryList.addEventListener('click', handleCountryClick);
        closeModal.addEventListener('click', () => modal.style.display = 'none');
        window.addEventListener('click', (e) => { if (e.target == modal) modal.style.display = 'none'; });
        datePicker.addEventListener('change', () => {
            timelineStartOffsetHours = 0;
            scrollLeftBtn.disabled = true;
            renderAllTimelineGrids();
            renderDateButtons();
        });
        nowBtn.addEventListener('click', goToNow);

        const scrollContainer = document.getElementById('wtp-scroll-container');
        
        scrollContainer.addEventListener('mousemove', (e) => {
            const firstRow = timeRows.querySelector('.wtp-timeline-row');
            if (!firstRow) return;

            const timelineTrack = firstRow.querySelector('.wtp-timeline-track');
            const trackRect = timelineTrack.getBoundingClientRect();
            const containerRect = scrollContainer.getBoundingClientRect();

            if (e.clientX >= trackRect.left && e.clientX <= trackRect.right) {
                timeSelector.style.display = 'block';
                const offsetX = e.clientX - trackRect.left;
                const percent = (offsetX / trackRect.width) * 100;
                // Calculate selector position relative to the container, accounting for scroll
                const selectorLeft = e.clientX - containerRect.left + scrollContainer.scrollLeft;

                handleRowsMouseMove(percent, selectorLeft);
            } else {
                timeSelector.style.display = 'none';
            }
        });

        scrollContainer.addEventListener('mouseleave', () => {
            timeSelector.style.display = 'none';
            document.querySelectorAll('.wtp-hover-time-label').forEach(l => l.style.display = 'none');
        });

        // Touch events for mobile devices
        let isTouchingTimeline = false;
        let touchStartX = 0;
        let touchStartY = 0;
        let hasMoved = false;
        
        scrollContainer.addEventListener('touchstart', (e) => {
            const firstRow = timeRows.querySelector('.wtp-timeline-row');
            if (!firstRow) return;

            const timelineTrack = firstRow.querySelector('.wtp-timeline-track');
            const trackRect = timelineTrack.getBoundingClientRect();
            const touch = e.touches[0];
            
            touchStartX = touch.clientX;
            touchStartY = touch.clientY;
            hasMoved = false;
            
            // Only prevent default if touching within the timeline track area
            if (touch.clientX >= trackRect.left && touch.clientX <= trackRect.right) {
                isTouchingTimeline = true;
                // Don't prevent default immediately, wait to see if it's a scroll gesture
            }
        });

        scrollContainer.addEventListener('touchmove', (e) => {
            if (!isTouchingTimeline) return;
            
            const touch = e.touches[0];
            const deltaX = touch.clientX - touchStartX;
            const deltaY = touch.clientY - touchStartY;
            const absDeltaX = Math.abs(deltaX);
            const absDeltaY = Math.abs(deltaY);
            
            // If this is the first significant movement, decide whether to scroll or select
            if (!hasMoved && (absDeltaX > 8 || absDeltaY > 8)) {
                hasMoved = true;
                
                // Calculate the angle of movement (in degrees)
                const angle = Math.abs(Math.atan2(deltaY, deltaX) * 180 / Math.PI);
                
                // If movement is mostly vertical (angle > 60 degrees), allow page scrolling
                if (angle > 60) {
                    isTouchingTimeline = false; // Allow page scrolling
                    return;
                } else if (angle < 30) {
                    // Movement is mostly horizontal, allow timeline scrolling
                    isTouchingTimeline = false; // Allow timeline scrolling
                    return;
                } else {
                    // Diagonal movement - this is likely a selection gesture
                    e.preventDefault();
                }
            }
            
            // If we're in selection mode, handle the selection
            if (isTouchingTimeline && hasMoved) {
                e.preventDefault();
                handleTouchMove(e);
            }
        });

        scrollContainer.addEventListener('touchend', () => {
            if (isTouchingTimeline && hasMoved) {
                // Keep the time selector visible for a moment on touch end
                setTimeout(() => {
                    timeSelector.style.display = 'none';
                    document.querySelectorAll('.wtp-hover-time-label').forEach(l => l.style.display = 'none');
                }, 2000); // Hide after 2 seconds
            }
            isTouchingTimeline = false;
            hasMoved = false;
        });

        function handleTouchMove(e) {
            const firstRow = timeRows.querySelector('.wtp-timeline-row');
            if (!firstRow) return;

            const timelineTrack = firstRow.querySelector('.wtp-timeline-track');
            const trackRect = timelineTrack.getBoundingClientRect();
            const containerRect = scrollContainer.getBoundingClientRect();

            const touch = e.touches[0];
            if (touch.clientX >= trackRect.left && touch.clientX <= trackRect.right) {
                timeSelector.style.display = 'block';
                const offsetX = touch.clientX - trackRect.left;
                const percent = (offsetX / trackRect.width) * 100;
                // Calculate selector position relative to the container, accounting for scroll
                const selectorLeft = touch.clientX - containerRect.left + scrollContainer.scrollLeft;

                handleRowsMouseMove(percent, selectorLeft);
            } else {
                timeSelector.style.display = 'none';
            }
        }

        scrollRightBtn.addEventListener('click', () => {
            timelineStartOffsetHours += 1;
            renderAllTimelineGrids();
            scrollLeftBtn.disabled = false; // Enable left scroll
        });

        scrollLeftBtn.addEventListener('click', () => {
            timelineStartOffsetHours -= 1;
            renderAllTimelineGrids();
        });

        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                calculateAndSetTimelineHours();
                renderAllTimelineGrids();
                renderDateButtons(); // Re-render date buttons on resize
            }, 200);
        });
    }

    function addTabListeners() {
        const tabButtons = document.querySelectorAll('.wtp-tab-btn');
        const tabPanels = document.querySelectorAll('.wtp-tab-panel');
        const tabHint = document.getElementById('wtp-tab-hint');
        
        // Function to show hint
        function showHint() {
            tabHint.style.display = 'block';
        }
        
        // Function to hide hint
        function hideHint() {
            tabHint.style.display = 'none';
        }
        
        // Update hint visibility based on active tab
        function updateHintVisibility() {
            const hasActiveTab = document.querySelector('.wtp-tab-btn.active');
            if (hasActiveTab) {
                showHint();
            } else {
                hideHint();
            }
        }
        
        
        tabButtons.forEach(button => {
            const handleTabClick = () => {
                const targetTab = button.dataset.tab;
                const isCurrentlyActive = button.classList.contains('active');
                
                console.log('Tab clicked:', targetTab, 'isCurrentlyActive:', isCurrentlyActive);
                console.log('Button element:', button);
                console.log('Button classes:', button.className);
                
                // If clicking the currently active tab, toggle it off
                if (isCurrentlyActive) {
                    console.log('Toggling off active tab');
                    // Remove active class from all buttons and panels
                    tabButtons.forEach(btn => {
                        btn.classList.remove('active');
                    });
                    tabPanels.forEach(panel => panel.classList.remove('active'));
                    // Clear the saved tab selection
                    localStorage.removeItem('wtp-selected-tab');
                    // Update hint visibility
                    updateHintVisibility();
                    return;
                }
                
                // Save selected tab to localStorage
                localStorage.setItem('wtp-selected-tab', targetTab);
                
                // Remove active class from all buttons and panels
                tabButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                tabPanels.forEach(panel => panel.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Update hint visibility
                updateHintVisibility();
                
                // Show corresponding panel
                let targetPanelId;
                if (targetTab === 'popular') {
                    targetPanelId = 'popular-cities-panel';
                } else {
                    targetPanelId = `${targetTab}-panel`;
                }
                const targetPanel = document.getElementById(targetPanelId);
                console.log('Target panel ID:', targetPanelId);
                console.log('Target panel:', targetPanel);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                    console.log('Panel classes after adding active:', targetPanel.className);
                }
                
                // Ensure content is populated when switching tabs
                if (targetTab === 'popular') {
                    console.log('Switching to popular cities tab');
                    populatePopularCities();
                } else if (targetTab === 'country') {
                    console.log('Switching to country tab');
                    populateCountries();
                } else if (targetTab === 'timezone') {
                    console.log('Switching to timezone tab');
                    populateTimezones();
                }
            };
            
            // Use click event with proper iOS support
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                handleTabClick();
            });
            
            // Add touchstart for iOS to ensure the event fires
            button.addEventListener('touchstart', (e) => {
                // Don't prevent default here, let the click event handle it
            });
        });
    }

    function loadSelectedTab() {
        const savedTab = localStorage.getItem('wtp-selected-tab');
        if (savedTab) {
            const tabButton = document.querySelector(`[data-tab="${savedTab}"]`);
            if (tabButton) {
                // Manually set active state without triggering click event
                const tabButtons = document.querySelectorAll('.wtp-tab-btn');
                const tabPanels = document.querySelectorAll('.wtp-tab-panel');
                
                // Remove active class from all buttons and panels
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanels.forEach(panel => panel.classList.remove('active'));
                
                // Add active class to saved tab button
                tabButton.classList.add('active');
                
                // Show corresponding panel
                let targetPanelId;
                if (savedTab === 'popular') {
                    targetPanelId = 'popular-cities-panel';
                } else {
                    targetPanelId = `${savedTab}-panel`;
                }
                const targetPanel = document.getElementById(targetPanelId);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
                
                // Re-populate content for the active tab
                if (savedTab === 'popular') {
                    populatePopularCities();
                } else if (savedTab === 'country') {
                    populateCountries();
                } else if (savedTab === 'timezone') {
                    populateTimezones();
                }
            }
        } else {
            // If no saved tab, ensure all tabs are inactive
            const tabButtons = document.querySelectorAll('.wtp-tab-btn');
            const tabPanels = document.querySelectorAll('.wtp-tab-panel');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
        }
        
        // Update hint visibility on page load
        const tabHint = document.getElementById('wtp-tab-hint');
        if (tabHint) {
            const hasActiveTab = document.querySelector('.wtp-tab-btn.active');
            if (hasActiveTab) {
                tabHint.style.display = 'block';
            } else {
                tabHint.style.display = 'none';
            }
        }
        
    }

    function handleRowsMouseMove(percent, selectorLeft) {
        // Position relative to the rows wrapper, accounting for scroll
        timeSelector.style.left = `${selectorLeft}px`;
        timeSelector.style.transform = 'none';

        const totalMinutes = (percent / 100) * TIMELINE_HOURS * 60;
        currentTimeValue = Math.round(totalMinutes / 30);

        const rows = timeRows.querySelectorAll('.wtp-timeline-row');
        rows.forEach(row => {
            const label = row.querySelector('.wtp-hover-time-label');
            if (!label) return;

            const timezone = row.dataset.timezone;
            const baseDate = parseDate(datePicker.value);
            if (!baseDate) return;

            const timeAtCursor = new Date(baseDate);
            timeAtCursor.setHours(timeAtCursor.getHours() + timelineStartOffsetHours);
            timeAtCursor.setMinutes(timeAtCursor.getMinutes() + totalMinutes);

            const timeFormatter = new Intl.DateTimeFormat('en-US', {
                timeZone: timezone,
                hour: 'numeric',
                minute: 'numeric',
                hour12: false
            });

            label.textContent = timeFormatter.format(timeAtCursor);
            // Position relative to the timeline track using percentage
            label.style.left = `${percent}%`;
            label.style.transform = 'translate(-50%, -100%)';
            label.style.display = 'block';
        });
    }

    function loadSelectedCities() {
        const saved = localStorage.getItem('worldTimePlanner_selected');
        if (saved) {
            const savedList = JSON.parse(saved);
            if (Array.isArray(savedList) && savedList.length > 0) {
                const migrated = [];
                savedList.forEach(entry => {
                    if (typeof entry !== 'string') return;
                    if (entry.includes(',')) {
                        // Already in City,Country format
                        migrated.push(entry);
                    } else if (entry.includes('/')) {
                        // Old format: timezone string. Migrate to City,Country
                        const [city, country] = findCityCountryByTimezone(entry);
                        if (city && country) migrated.push(`${city},${country}`);
                    }
                });

                if (migrated.length > 0) {
                    selectedCities = new Set(migrated);
                    // Save back in new format to avoid migrating every load
                    saveSelectedCities();
                } else {
                    selectedCities.add('New York,USA');
                }
            } else {
                selectedCities.add('New York,USA'); // Default if saved is empty/invalid
            }
        } else {
            selectedCities.add('New York,USA'); // Default for first-time users
        }
    }

    function saveSelectedCities() {
        localStorage.setItem('worldTimePlanner_selected', JSON.stringify(Array.from(selectedCities)));
    }

    function loadCustomCities() {
        try {
            const saved = localStorage.getItem('worldTimePlanner_customCities');
            if (saved) {
                const arr = JSON.parse(saved);
                if (Array.isArray(arr)) customCities = arr.filter(x => x && typeof x.label === 'string' && typeof x.timezone === 'string');
            }
        } catch (_) { /* ignore */ }
    }

    function saveCustomCities() {
        localStorage.setItem('worldTimePlanner_customCities', JSON.stringify(customCities));
    }

    function addTimeline(timezone, city, country) {
        const cityKey = `${city},${country}`;
        if (selectedCities.has(cityKey)) return;
        selectedCities.add(cityKey);
        const row = createTimelineRow(timezone, city, country);
        // Ensure TIMELINE_HOURS is calculated before rendering
        calculateAndSetTimelineHours();
        renderTimelineGrid(row);
        updateSingleRowTimeDisplay(row);
        // Align widths after adding new row
        setTimeout(() => alignTimezoneInfoWidths(), 0);
        saveSelectedCities();
    }

    function updateSingleRowTimeDisplay(row) {
        const timezone = row.dataset.timezone;
        if (!row || !timezone) return;

        const now = new Date();

        const timeFormatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            hour: 'numeric',
            minute: 'numeric',
            hour12: false
        });

        const dateFormatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });

        const timeString = timeFormatter.format(now);
        const dateString = dateFormatter.format(now);

        const timeElement = row.querySelector('.wtp-current-time');
        timeElement.title = 'Current local time'; // Hint
        timeElement.innerHTML = `${timeString}<br><span style="font-size: 0.8em; color: #aaa;">${dateString}</span>`;
    }

    function updateAllTimeDisplays() {
        const rows = timeRows.querySelectorAll('.wtp-timeline-row');
        rows.forEach(updateSingleRowTimeDisplay);
    }

    // ... (other helper functions)
    function handleCheckboxChange(e) { 
        if (e.target.type !== 'checkbox') return; 
        const { value, checked, dataset } = e.target; 
        if (checked) {
            addTimeline(value, dataset.city, dataset.country); 
        } else {
            const cityKey = `${dataset.city},${dataset.country}`;
            removeTimeline(cityKey); 
        }
    }
    function handleCountryClick(e) { if (e.target.classList.contains('wtp-country-item')) openCityModal(e.target.dataset.country); }
    function updateCheckbox(cityKey, isChecked) { 
        const [city, country] = cityKey.split(',');
        const checkboxes = document.querySelectorAll('#popular-cities-list input[type="checkbox"], #modal-city-list input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            if (checkbox.dataset.city === city && checkbox.dataset.country === country) {
                checkbox.checked = isChecked;
            }
        });
    }

    function createTimelineRow(timezone, city, country) {
        const timelineRow = timelineRowTemplate.content.cloneNode(true).firstElementChild;
        const cityKey = `${city},${country}`;
        timelineRow.dataset.timezone = timezone;
        timelineRow.dataset.cityKey = cityKey;
        
        const cityElement = timelineRow.querySelector('.wtp-city');
        
        // For timezone entries, show only the city part after the slash
        let displayName = city;
        if (country === 'Timezone' && city.includes('/')) {
            displayName = city.split('/').pop();
        }
        
        cityElement.textContent = displayName;
        
        // Adjust font size based on display name length
        if (displayName.length > 15) {
            cityElement.setAttribute('data-very-long', 'true');
        } else if (displayName.length > 10) {
            cityElement.setAttribute('data-long', 'true');
        }
        
        timelineRow.querySelector('.wtp-current-time').textContent = '--:--';
        timelineRow.querySelector('.wtp-remove-btn').onclick = () => removeTimeline(cityKey);
        timeRows.appendChild(timelineRow);
        return timelineRow;
    }

    function populatePopularCities() { 
        const popularCitiesList = document.getElementById('popular-cities-list');
        if (!popularCitiesList) {
            console.error('popular-cities-list element not found');
            return;
        }
        
        console.log('populatePopularCities called, popularCities:', popularCities);
        console.log('popularCitiesList element:', popularCitiesList);
        popularCitiesList.innerHTML = '';
        // Built-in popular cities
        let addedCount = 0;
        popularCities.forEach(({ city, country }) => { 
            const timezone = timezoneData[country] && timezoneData[country][city] ? timezoneData[country][city] : null;
            if (!timezone) {
                console.warn(`Timezone not found for ${city}, ${country}`);
                return;
            }
            const cityKey = `${city},${country}`;
            const label = document.createElement('label'); 
            const checkbox = document.createElement('input'); 
            checkbox.type = 'checkbox'; 
            checkbox.value = timezone; 
            checkbox.dataset.city = city; 
            checkbox.dataset.country = country; 
            if (selectedCities.has(cityKey)) checkbox.checked = true; 
            label.appendChild(checkbox); 
            label.append(city); 
            popularCitiesList.appendChild(label);
            addedCount++;
        });
        console.log(`Added ${addedCount} popular cities to DOM`);
        console.log('popularCitiesList children count:', popularCitiesList.children.length);

        // Custom cities persisted by user
        customCities.forEach(({ label: displayName, timezone }) => {
            const cityKey = `${displayName},Custom`;
            const labelEl = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = timezone;
            checkbox.dataset.city = displayName;
            checkbox.dataset.country = 'Custom';
            if (selectedCities.has(cityKey)) checkbox.checked = true;
            labelEl.appendChild(checkbox);
            labelEl.append(displayName);
            popularCitiesList.appendChild(labelEl);
        });

    }


    function populateTimezones() {
        timezoneList.innerHTML = '';
        const timezoneData = [
            { label: 'Pacific/Baker_Island', timezone: 'Pacific/Baker_Island' },
            { label: 'Pacific/Pago_Pago', timezone: 'Pacific/Pago_Pago' },
            { label: 'Pacific/Honolulu', timezone: 'Pacific/Honolulu' },
            { label: 'America/Anchorage', timezone: 'America/Anchorage' },
            { label: 'America/Los_Angeles', timezone: 'America/Los_Angeles' },
            { label: 'America/Denver', timezone: 'America/Denver' },
            { label: 'America/Chicago', timezone: 'America/Chicago' },
            { label: 'America/New_York', timezone: 'America/New_York' },
            { label: 'America/Caracas', timezone: 'America/Caracas' },
            { label: 'America/Sao_Paulo', timezone: 'America/Sao_Paulo' },
            { label: 'Atlantic/South_Georgia', timezone: 'Atlantic/South_Georgia' },
            { label: 'Atlantic/Azores', timezone: 'Atlantic/Azores' },
            { label: 'Europe/London', timezone: 'Europe/London' },
            { label: 'Europe/Paris', timezone: 'Europe/Paris' },
            { label: 'Europe/Athens', timezone: 'Europe/Athens' },
            { label: 'Europe/Moscow', timezone: 'Europe/Moscow' },
            { label: 'Asia/Dubai', timezone: 'Asia/Dubai' },
            { label: 'Asia/Karachi', timezone: 'Asia/Karachi' },
            { label: 'Asia/Dhaka', timezone: 'Asia/Dhaka' },
            { label: 'Asia/Bangkok', timezone: 'Asia/Bangkok' },
            { label: 'Asia/Shanghai', timezone: 'Asia/Shanghai' },
            { label: 'Asia/Tokyo', timezone: 'Asia/Tokyo' },
            { label: 'Australia/Sydney', timezone: 'Australia/Sydney' },
            { label: 'Pacific/Norfolk', timezone: 'Pacific/Norfolk' },
            { label: 'Pacific/Auckland', timezone: 'Pacific/Auckland' }
        ];

        timezoneData.forEach(({ label, timezone }) => {
            const cityKey = `${label},Timezone`;
            const labelEl = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = timezone;
            checkbox.dataset.city = label;
            checkbox.dataset.country = 'Timezone';
            if (selectedCities.has(cityKey)) checkbox.checked = true;
            labelEl.appendChild(checkbox);
            labelEl.append(label);
            timezoneList.appendChild(labelEl);
        });
    }
    function populateCountries() { 
        countryList.innerHTML = ''; // 清空容器避免重复
        for (const country in timezoneData) { 
            const countryItem = document.createElement('div'); 
            countryItem.className = 'wtp-country-item'; 
            countryItem.textContent = country; 
            countryItem.dataset.country = country; 
            countryList.appendChild(countryItem); 
        } 
    }
    function openCityModal(country) { 
        modalCountryName.textContent = country; 
        
        // Display country timezone information
        const countryInfo = countryTimeInfo[country];
        if (countryInfo) {
            modalCountryInfo.innerHTML = `
                <div class="wtp-timezone-info-box">
                    <div class="wtp-timezone-description">
                        ${countryInfo.description}
                    </div>
                </div>
            `;
        } else {
            modalCountryInfo.innerHTML = '';
        }
        
        modalCityList.innerHTML = ''; 
        const cities = timezoneData[country]; 
        for (const city in cities) { 
            const timezone = cities[city]; 
            const cityKey = `${city},${country}`;
            const label = document.createElement('label'); 
            const checkbox = document.createElement('input'); 
            checkbox.type = 'checkbox'; 
            checkbox.value = timezone; 
            checkbox.dataset.city = city; 
            checkbox.dataset.country = country; 
            if (selectedCities.has(cityKey)) checkbox.checked = true; 
            label.appendChild(checkbox); 
            label.append(city); 
            modalCityList.appendChild(label); 
        } 
        modal.style.display = 'block'; 
        modalCityList.onchange = handleCheckboxChange; 
    }
    function getTimeOfDay(hour) { if (hour >= 9 && hour < 17) return 'work'; if (hour >= 17 && hour < 22) return 'evening'; if (hour >= 0 && hour < 7) return 'night'; return 'day'; }
    function removeTimeline(cityKey) { 
        selectedCities.delete(cityKey); 
        const row = timeRows.querySelector(`[data-city-key="${cityKey}"]`); 
        if (row) row.remove(); 
        updateCheckbox(cityKey, false); 
        saveSelectedCities(); 
    }
    function alignTimezoneInfoWidths() {
        const timezoneInfoElements = timeRows.querySelectorAll('.wtp-timezone-info');
        if (timezoneInfoElements.length === 0) return;
        
        // Reset widths to auto to get natural width
        timezoneInfoElements.forEach(el => {
            el.style.width = 'auto';
        });
        
        // Calculate the maximum width
        let maxWidth = 0;
        timezoneInfoElements.forEach(el => {
            const width = el.offsetWidth;
            if (width > maxWidth) {
                maxWidth = width;
            }
        });
        
        // Set all timezone info elements to the same width
        timezoneInfoElements.forEach(el => {
            el.style.width = maxWidth + 'px';
        });
    }

    function renderAllTimelineGrids() { 
        const rows = timeRows.querySelectorAll('.wtp-timeline-row'); 
        rows.forEach(renderTimelineGrid); 
        updateAllTimeDisplays();
        alignTimezoneInfoWidths();
    }

    function renderTimelineGrid(row) {
        const timezone = row.dataset.timezone;
        const timelineTrack = row.querySelector('.wtp-timeline-track');
        // Safer way to clear hour blocks without removing the label
        const hourBlocks = timelineTrack.querySelectorAll('.wtp-timeline-hour');
        hourBlocks.forEach(block => block.remove());

        const baseDate = parseDate(datePicker.value);
        if (!baseDate) return;

        const startOfDisplay = new Date(baseDate);

        const hourFormatter = new Intl.DateTimeFormat('en-US', { timeZone: timezone, hour: 'numeric', hour12: false });
        const fullDateFormatter = new Intl.DateTimeFormat('en-US', { timeZone: timezone, year: 'numeric', month: 'numeric', day: 'numeric' });
        const weekdayFormatter = new Intl.DateTimeFormat('en-US', { timeZone: timezone, weekday: 'short' });
        const dayLabelFormatter = new Intl.DateTimeFormat('en-US', { timeZone: timezone, weekday: 'short', month: 'short', day: 'numeric' });
        const ymdPartsFormatter = new Intl.DateTimeFormat('en-US', { timeZone: timezone, year: 'numeric', month: '2-digit', day: '2-digit' });

        const now = new Date();
        const currentHourInTimezone = parseInt(hourFormatter.format(now), 10);
        const currentDateInTimezone = fullDateFormatter.format(now);
        function getYMD(dateObj) {
            const parts = ymdPartsFormatter.formatToParts(dateObj);
            const map = {};
            parts.forEach(p => { if (p.type !== 'literal') map[p.type] = p.value; });
            return `${map.year}-${map.month}-${map.day}`; // YYYY-MM-DD in target timezone
        }
        const currentYMD = getYMD(now);

        let lastDate = '';

        for (let i = 0; i < TIMELINE_HOURS; i++) {
            const timeForThisBlock = new Date(startOfDisplay);
            timeForThisBlock.setHours(startOfDisplay.getHours() + i + timelineStartOffsetHours);

            const localHour = parseInt(hourFormatter.format(timeForThisBlock), 10);
            const dateOfThisBlock = fullDateFormatter.format(timeForThisBlock);
            const weekdayShort = weekdayFormatter.format(timeForThisBlock); // e.g., Sun, Mon, ...
            const ymdOfThisBlock = getYMD(timeForThisBlock);

            const hourDiv = document.createElement('div');
            hourDiv.className = 'wtp-timeline-hour ' + getTimeOfDay(localHour);
            if (weekdayShort === 'Sat' || weekdayShort === 'Sun') {
                hourDiv.classList.add('weekend');
            }
            hourDiv.dataset.hour = localHour;

            if (i === 0 || dateOfThisBlock !== lastDate) {
                hourDiv.classList.add('wtp-day-start');
                hourDiv.dataset.dayLabel = dayLabelFormatter.format(timeForThisBlock);
                lastDate = dateOfThisBlock;
            }

            if (dateOfThisBlock === currentDateInTimezone && localHour === currentHourInTimezone) {
                hourDiv.classList.add('wtp-current-hour');
            }

            // Dim past hours (in the row's timezone)
            if (ymdOfThisBlock < currentYMD || (ymdOfThisBlock === currentYMD && localHour < currentHourInTimezone)) {
                hourDiv.classList.add('past-hour');
            }

            timelineTrack.appendChild(hourDiv);
        }
    }

    init();
});