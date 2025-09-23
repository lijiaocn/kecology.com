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
    const scrollContainer = document.getElementById('wtp-scroll-container');
    const rangeDialog = document.getElementById('wtp-range-dialog');
    const rangeDialogClose = document.querySelector('.wtp-range-dialog-close');
    const rangeInfo = document.getElementById('wtp-range-info');
    const timezoneTimes = document.getElementById('wtp-timezone-times');

    let TIMELINE_HOURS = 24;
    let TIMELINE_INTERVALS = TIMELINE_HOURS * 2;
    const HOUR_BLOCK_WIDTH = 30; // px

    // State
    let selectedCities = new Set(); // Store city keys like "Beijing,China" or "Label,Custom"
    let customCities = []; // Array of { label: string, timezone: string }
    let currentTimeValue = 24; // Represents 30-min intervals from midnight
    let timelineStartOffsetHours = 0;
    let draggedElement = null;
    
    // Range selection state
    let isRangeSelecting = false;
    let isMouseDown = false; // 标记鼠标是否按下
    let rangeStartPercent = 0;
    let rangeEndPercent = 0;
    let rangeOverlay = null;
    let hasSelectedRange = false; // 标记是否已有选择的范围
    let currentTimeRange = null; // Store current time range for editing

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
        const scrollContainer = document.getElementById('wtp-scroll-container');
        
        if (!container || !scrollContainer) return;
        
        // 获取实际可用的宽度
        const containerWidth = scrollContainer.clientWidth;
        const containerPadding = 48; // 1.5em * 2 = 3em ≈ 48px
        
        // 动态计算时区信息区域的宽度
        const timezoneInfo = document.querySelector('.wtp-timezone-info');
        const timezoneInfoWidth = timezoneInfo ? timezoneInfo.offsetWidth + 8 : 140; // 8px margin
        
        const availableWidth = containerWidth - timezoneInfoWidth - containerPadding;
        const numHours = Math.floor(availableWidth / HOUR_BLOCK_WIDTH) - 1; // 减少一个避免滚动条
        TIMELINE_HOURS = Math.max(24, numHours);
        TIMELINE_INTERVALS = TIMELINE_HOURS * 2;
    }

    // Safely parse a YYYY-MM-DD string into a local date at midnight
    function parseDate(dateString) {
        if (!dateString) return null;
        const parts = dateString.split('-');
        return new Date(parts[0], parts[1] - 1, parts[2]);
    }

    function addLocalTimezoneRow() {
        // Get user's local timezone
        const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const localCityName = getLocalCityName(localTimezone);
        
        // Add local timezone to selected cities as first item
        const localKey = `${localCityName},Local`;
        selectedCities.add(localKey);
        
        // Add to custom cities if not already there
        const existingCustom = customCities.find(city => city.timezone === localTimezone);
        if (!existingCustom) {
            customCities.push({
                label: localCityName,
                timezone: localTimezone
            });
        }
    }
    
    function getLocalCityName(timezone) {
        // Convert timezone to readable city name
        const timezoneMap = {
            'America/New_York': 'New York',
            'America/Chicago': 'Chicago',
            'America/Denver': 'Denver',
            'America/Los_Angeles': 'Los Angeles',
            'Europe/London': 'London',
            'Europe/Paris': 'Paris',
            'Europe/Berlin': 'Berlin',
            'Asia/Tokyo': 'Tokyo',
            'Asia/Shanghai': 'Shanghai',
            'Asia/Hong_Kong': 'Hong Kong',
            'Asia/Singapore': 'Singapore',
            'Australia/Sydney': 'Sydney',
            'Australia/Melbourne': 'Melbourne',
            'Pacific/Auckland': 'Auckland',
            'America/Toronto': 'Toronto',
            'America/Vancouver': 'Vancouver',
            'Europe/Madrid': 'Madrid',
            'Europe/Rome': 'Rome',
            'Asia/Seoul': 'Seoul',
            'Asia/Mumbai': 'Mumbai',
            'America/Sao_Paulo': 'São Paulo',
            'America/Mexico_City': 'Mexico City',
            'Africa/Cairo': 'Cairo',
            'Africa/Johannesburg': 'Johannesburg'
        };
        
        return timezoneMap[timezone] || timezone.split('/').pop().replace('_', ' ');
    }

    function init() {
        loadSelectedCities();
        loadCustomCities();
        
        // Add local timezone as first row
        addLocalTimezoneRow();
        
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
        addDialogListeners(); // Add dialog event listeners
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
                
                // 滚动到最左端
                if (scrollContainer) {
                    scrollContainer.scrollLeft = 0;
                }
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
        
        // Scroll timeline to the beginning
        if (scrollContainer) {
            scrollContainer.scrollLeft = 0;
        }
    }

    function renderInitialRows() {
        // Load saved order
        const savedOrder = loadCityOrder();
        let citiesToRender = Array.from(selectedCities);
        
        // Separate local timezone from other cities
        const localTimezone = citiesToRender.find(cityKey => cityKey.endsWith(',Local'));
        const otherCities = citiesToRender.filter(cityKey => !cityKey.endsWith(',Local'));
        
        // If we have a saved order, use it to sort the cities (excluding local timezone)
        if (savedOrder && savedOrder.length > 0) {
            // Filter saved order to only include currently selected cities (excluding local timezone)
            const validOrder = savedOrder.filter(cityKey => otherCities.includes(cityKey));
            // Add any new cities that weren't in the saved order
            const newCities = otherCities.filter(cityKey => !validOrder.includes(cityKey));
            citiesToRender = [...validOrder, ...newCities];
        } else {
            citiesToRender = otherCities;
        }
        
        // Always put local timezone first (if not already there)
        if (localTimezone && !citiesToRender.includes(localTimezone)) {
            citiesToRender.unshift(localTimezone);
        }
        
        citiesToRender.forEach(cityKey => {
            const [city, country] = cityKey.split(',');
            let timezone;
            
            if (country === 'Local') {
                // For local timezone entries, find the timezone from customCities
                const customEntry = customCities.find(c => c.label === city);
                timezone = customEntry ? customEntry.timezone : Intl.DateTimeFormat().resolvedOptions().timeZone;
            } else if (country === 'Timezone') {
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
            
            // 滚动到最左端
            if (scrollContainer) {
                scrollContainer.scrollLeft = 0;
            }
        });
        nowBtn.addEventListener('click', goToNow);

        scrollContainer.addEventListener('mousemove', (e) => {
            const firstRow = timeRows.querySelector('.wtp-timeline-row');
            if (!firstRow) return;

            const timelineTrack = firstRow.querySelector('.wtp-timeline-track');
            const trackRect = timelineTrack.getBoundingClientRect();
            const containerRect = scrollContainer.getBoundingClientRect();

            if (e.clientX >= trackRect.left && e.clientX <= trackRect.right) {
                const offsetX = e.clientX - trackRect.left;
                const percent = (offsetX / trackRect.width) * 100;
                
                if (isRangeSelecting && isMouseDown) {
                    // 更新范围选择
                    updateRangeSelection(percent);
                } else if (!isRangeSelecting && !hasSelectedRange) {
                    // 正常的时间选择器显示
                    timeSelector.style.display = 'block';
                    const selectorLeft = e.clientX - containerRect.left + scrollContainer.scrollLeft;
                    handleRowsMouseMove(percent, selectorLeft);
                }
            } else {
                if (!isRangeSelecting) {
                    timeSelector.style.display = 'none';
                }
            }
        });

        scrollContainer.addEventListener('mouseleave', () => {
            if (!isRangeSelecting) {
                timeSelector.style.display = 'none';
                document.querySelectorAll('.wtp-hover-time-label').forEach(l => l.style.display = 'none');
                // 清理动态创建的时间选择器
                document.querySelectorAll('.wtp-row-time-selector').forEach(selector => selector.remove());
            }
        });

        // 添加鼠标按下事件处理范围选择
        scrollContainer.addEventListener('mousedown', (e) => {
            const firstRow = timeRows.querySelector('.wtp-timeline-row');
            if (!firstRow) return;

            const timelineTrack = firstRow.querySelector('.wtp-timeline-track');
            const trackRect = timelineTrack.getBoundingClientRect();

            if (e.clientX >= trackRect.left && e.clientX <= trackRect.right) {
                // 检查是否点击在蒙罩上
                const clickedElement = e.target;
                const isOverlayClick = clickedElement.classList.contains('wtp-range-overlay') || 
                                     clickedElement.closest('.wtp-range-overlay');
                
                if (isOverlayClick) {
                    // 点击在蒙罩上，不执行任何操作
                    return;
                }
                
                const offsetX = e.clientX - trackRect.left;
                const percent = (offsetX / trackRect.width) * 100;
                
                if (!hasSelectedRange) {
                    // 开始范围选择
                    isMouseDown = true;
                    startRangeSelection(percent);
                } else {
                    // 清除已选择的范围
                    clearRangeSelection();
                }
            }
        });

        // 添加触摸事件处理移动端 - 区分点击和滑动
        let touchStartTime = 0;
        let isScrolling = false;
        
        scrollContainer.addEventListener('touchstart', (e) => {
            touchStartTime = Date.now();
            const touch = e.touches[0];
            touchStartX = touch.clientX;
            touchStartY = touch.clientY;
            isScrolling = false;
        });
        
        scrollContainer.addEventListener('touchmove', (e) => {
            const touch = e.touches[0];
            const deltaX = Math.abs(touch.clientX - touchStartX);
            const deltaY = Math.abs(touch.clientY - touchStartY);
            
            // 如果移动距离超过10px，认为是滑动操作
            if (deltaX > 10 || deltaY > 10) {
                isScrolling = true;
            }
        });
        
        scrollContainer.addEventListener('touchend', (e) => {
            // 只有在短时间点击（不是滑动）时才显示时间选择器
            const touchDuration = Date.now() - touchStartTime;
            const touch = e.changedTouches[0];
            const deltaX = Math.abs(touch.clientX - touchStartX);
            const deltaY = Math.abs(touch.clientY - touchStartY);
            
            // 如果是短时间点击且移动距离小于10px，则显示时间选择器
            if (touchDuration < 300 && deltaX < 10 && deltaY < 10 && !isScrolling) {
                const firstRow = timeRows.querySelector('.wtp-timeline-row');
                if (!firstRow) return;

                const timelineTrack = firstRow.querySelector('.wtp-timeline-track');
                const trackRect = timelineTrack.getBoundingClientRect();

                if (touch.clientX >= trackRect.left && touch.clientX <= trackRect.right) {
                    // 检查是否触摸在蒙罩上
                    const clickedElement = e.target;
                    const isOverlayClick = clickedElement.classList.contains('wtp-range-overlay') || 
                                         clickedElement.closest('.wtp-range-overlay');
                    
                    if (isOverlayClick) {
                        return;
                    }
                    
                    const offsetX = touch.clientX - trackRect.left;
                    const percent = (offsetX / trackRect.width) * 100;
                    
                    handleMobileTouch(percent);
                }
            }
        });

        // 添加鼠标松开事件处理
        scrollContainer.addEventListener('mouseup', (e) => {
            if (isRangeSelecting && isMouseDown) {
                const firstRow = timeRows.querySelector('.wtp-timeline-row');
                if (!firstRow) return;

                const timelineTrack = firstRow.querySelector('.wtp-timeline-track');
                const trackRect = timelineTrack.getBoundingClientRect();

                if (e.clientX >= trackRect.left && e.clientX <= trackRect.right) {
                    const offsetX = e.clientX - trackRect.left;
                    const percent = (offsetX / trackRect.width) * 100;
                    
                    // 结束范围选择
                    endRangeSelection(percent);
                } else {
                    // 在时间轴外部松开鼠标，也结束选择
                    endRangeSelection(rangeEndPercent);
                }
                
                isMouseDown = false;
            }
        });

        // 添加全局鼠标松开事件，防止在时间轴外部松开鼠标时状态异常
        document.addEventListener('mouseup', (e) => {
            if (isRangeSelecting && isMouseDown) {
                // 结束范围选择
                endRangeSelection(rangeEndPercent);
                isMouseDown = false;
            }
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
                    // 清理动态创建的时间选择器
                    document.querySelectorAll('.wtp-row-time-selector').forEach(selector => selector.remove());
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

    function addDialogListeners() {
        // Close dialog when clicking close button
        rangeDialogClose.addEventListener('click', () => {
            hideDialog();
        });
        
        // Close dialog when clicking outside
        rangeDialog.addEventListener('click', (e) => {
            if (e.target === rangeDialog) {
                hideDialog();
            }
        });
        
        // Close dialog with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && rangeDialog.classList.contains('show')) {
                hideDialog();
            }
        });
    }
    
    function showDialog() {
        rangeDialog.classList.add('show');
        document.body.classList.add('dialog-open');
    }
    
    function hideDialog() {
        rangeDialog.classList.remove('show');
        document.body.classList.remove('dialog-open');
        // 清除PC端蒙罩和移动端垂直线
        clearRangeSelection();
        clearMobileSelection();
    }

    function addTabListeners() {
        const tabButtons = document.querySelectorAll('.wtp-tab-btn');
        const tabPanels = document.querySelectorAll('.wtp-tab-panel');
        
        
        tabButtons.forEach(button => {
            const handleTabClick = () => {
                const targetTab = button.dataset.tab;
                
                console.log('Tab clicked:', targetTab);
                console.log('Button element:', button);
                console.log('Button classes:', button.className);
                
                // Save selected tab to localStorage
                localStorage.setItem('wtp-selected-tab', targetTab);
                
                // Remove active class from all buttons and panels
                tabButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                tabPanels.forEach(panel => panel.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
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
        const savedTab = localStorage.getItem('wtp-selected-tab') || 'popular'; // Default to popular
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
        
    }

    function handleRowsMouseMove(percent, selectorLeft) {
        // 隐藏原来的时间选择器
        timeSelector.style.display = 'none';
        
        // 为每个时间轴行创建独立的时间选择器
        const timelineRows = timeRows.querySelectorAll('.wtp-timeline-row');
        timelineRows.forEach(row => {
            // 移除之前的时间选择器
            const existingSelector = row.querySelector('.wtp-row-time-selector');
            if (existingSelector) {
                existingSelector.remove();
            }
            
            // 创建新的时间选择器
            const rowSelector = document.createElement('div');
            rowSelector.className = 'wtp-row-time-selector';
            rowSelector.style.position = 'absolute';
            rowSelector.style.top = '0';
            rowSelector.style.bottom = '0';
            rowSelector.style.width = '2px';
            rowSelector.style.backgroundColor = '#4caf50'; // 与浮动时间相同的绿色
            rowSelector.style.pointerEvents = 'none';
            rowSelector.style.zIndex = '5';
            rowSelector.style.left = `${percent}%`;
            rowSelector.style.transform = 'translateX(-50%)';
            
            const timelineTrack = row.querySelector('.wtp-timeline-track');
            if (timelineTrack) {
                timelineTrack.appendChild(rowSelector);
            }
        });

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

    function saveCityOrder(order) {
        localStorage.setItem('worldTimePlanner_cityOrder', JSON.stringify(order));
    }

    function loadCityOrder() {
        try {
            const saved = localStorage.getItem('worldTimePlanner_cityOrder');
            if (saved) {
                const order = JSON.parse(saved);
                if (Array.isArray(order)) {
                    return order;
                }
            }
        } catch (e) {
            console.warn('Failed to load city order:', e);
        }
        return null;
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
        
        // Save the new order (new city will be at the end)
        const currentOrder = Array.from(timeRows.children).map(row => row.dataset.cityKey);
        saveCityOrder(currentOrder);
    }

    function updateSingleRowTimeDisplay(row) {
        const timezone = row.dataset.timezone;
        if (!row || !timezone) return;

        const now = new Date();

        try {
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
        } catch (error) {
            console.warn(`Failed to format time for timezone ${timezone}:`, error);
            const timeElement = row.querySelector('.wtp-current-time');
            timeElement.title = 'Invalid timezone'; // Hint
            timeElement.innerHTML = `Invalid<br><span style="font-size: 0.8em; color: #aaa;">Timezone</span>`;
        }
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
        
        // Add special styling for local timezone
        if (country === 'Local') {
            timelineRow.classList.add('wtp-local-timezone');
            displayName += ' (Local)';
            
            // Remove delete button for local timezone
            const deleteBtn = timelineRow.querySelector('.wtp-remove-btn');
            if (deleteBtn) {
                deleteBtn.remove();
            }
            
            // Make local timezone non-draggable
            timelineRow.draggable = false;
        } else {
            // Set delete button click event only for non-local timezones
            timelineRow.querySelector('.wtp-remove-btn').onclick = () => removeTimeline(cityKey);
        }
        
        cityElement.textContent = displayName;
        
        // Adjust font size based on display name length
        if (displayName.length > 15) {
            cityElement.setAttribute('data-very-long', 'true');
        } else if (displayName.length > 10) {
            cityElement.setAttribute('data-long', 'true');
        }
        
        timelineRow.querySelector('.wtp-current-time').textContent = '--:--';
        
        // Add drag functionality only to timezone info area
        const timezoneInfo = timelineRow.querySelector('.wtp-timezone-info');
        const timelineTrack = timelineRow.querySelector('.wtp-timeline-track');
        
        // Enable dragging only on timezone info
        timezoneInfo.draggable = true;
        timezoneInfo.addEventListener('dragstart', handleDragStart);
        timezoneInfo.addEventListener('dragover', handleDragOver);
        timezoneInfo.addEventListener('drop', handleDrop);
        timezoneInfo.addEventListener('dragend', handleDragEnd);
        
        // Explicitly disable dragging on timeline track and timeline row
        timelineTrack.draggable = false;
        timelineRow.draggable = false;
        
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
            { label: 'Pacific/Midway', timezone: 'Pacific/Midway' },
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
    function getTimeOfDay(hour) { if (hour >= 9 && hour < 19) return 'work'; if (hour >= 19 && hour < 21) return 'late-work'; if (hour >= 21 && hour < 23) return 'evening'; if (hour === 23) return 'late-night'; if (hour >= 0 && hour < 7) return 'night'; return 'day'; }
    function removeTimeline(cityKey) { 
        // Prevent removing local timezone
        if (cityKey.endsWith(',Local')) {
            return;
        }
        
        selectedCities.delete(cityKey); 
        const row = timeRows.querySelector(`[data-city-key="${cityKey}"]`); 
        if (row) row.remove(); 
        updateCheckbox(cityKey, false); 
        saveSelectedCities();
        
        // Update the saved order after removal
        const currentOrder = Array.from(timeRows.children).map(row => row.dataset.cityKey);
        saveCityOrder(currentOrder);
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

    // Drag and drop functions
    function handleDragStart(e) {
        // Find the parent timeline row
        draggedElement = this.closest('.wtp-timeline-row');
        
        // Prevent dragging if it's a local timezone
        if (draggedElement && draggedElement.classList.contains('wtp-local-timezone')) {
            e.preventDefault();
            return false;
        }
        
        this.style.opacity = '0.5';
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', draggedElement.outerHTML);
        e.stopPropagation(); // Prevent event bubbling
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        
        // Find the parent timeline row
        const targetRow = this.closest('.wtp-timeline-row');
        
        // Prevent dropping on local timezone
        if (targetRow && targetRow.classList.contains('wtp-local-timezone')) {
            e.dataTransfer.dropEffect = 'none';
            e.stopPropagation();
            return false;
        }
        
        e.dataTransfer.dropEffect = 'move';
        e.stopPropagation(); // Prevent event bubbling
        return false;
    }

    function handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }

        // Find the parent timeline row
        const targetRow = this.closest('.wtp-timeline-row');
        
        // Prevent dropping on local timezone
        if (targetRow && targetRow.classList.contains('wtp-local-timezone')) {
            return false;
        }
        
        if (draggedElement !== targetRow) {
            // Get the current order
            const currentOrder = Array.from(timeRows.children).map(row => row.dataset.cityKey);
            
            // Find positions
            const draggedIndex = currentOrder.indexOf(draggedElement.dataset.cityKey);
            const targetIndex = currentOrder.indexOf(targetRow.dataset.cityKey);
            
            // Reorder the array
            const newOrder = [...currentOrder];
            newOrder.splice(draggedIndex, 1);
            newOrder.splice(targetIndex, 0, draggedElement.dataset.cityKey);
            
            // Reorder DOM elements
            const fragment = document.createDocumentFragment();
            newOrder.forEach(cityKey => {
                const element = timeRows.querySelector(`[data-city-key="${cityKey}"]`);
                if (element) {
                    fragment.appendChild(element);
                }
            });
            timeRows.appendChild(fragment);
            
            // Save the new order
            saveCityOrder(newOrder);
        }

        return false;
    }

    function handleDragEnd(e) {
        // Reset opacity of the timezone info element
        this.style.opacity = '';
        draggedElement = null;
        e.stopPropagation(); // Prevent event bubbling
    }

    function renderAllTimelineGrids() { 
        // 清理动态创建的时间选择器
        document.querySelectorAll('.wtp-row-time-selector').forEach(selector => selector.remove());
        
        const rows = timeRows.querySelectorAll('.wtp-timeline-row'); 
        rows.forEach(renderTimelineGrid); 
        updateAllTimeDisplays();
        alignTimezoneInfoWidths();
    }

    function renderTimelineGrid(row) {
        const timezone = row.dataset.timezone;
        const timelineTrack = row.querySelector('.wtp-timeline-track');
        
        // 创建或获取小时容器和日期容器
        let hoursContainer = timelineTrack.querySelector('.wtp-timeline-hours-container');
        let datesContainer = timelineTrack.querySelector('.wtp-timeline-dates-container');
        
        if (!hoursContainer) {
            hoursContainer = document.createElement('div');
            hoursContainer.className = 'wtp-timeline-hours-container';
            timelineTrack.appendChild(hoursContainer);
        }
        
        if (!datesContainer) {
            datesContainer = document.createElement('div');
            datesContainer.className = 'wtp-timeline-dates-container';
            timelineTrack.appendChild(datesContainer);
        }
        
        // 清空现有内容
        hoursContainer.innerHTML = '';
        datesContainer.innerHTML = '';

        const baseDate = parseDate(datePicker.value);
        if (!baseDate) return;

        const startOfDisplay = new Date(baseDate);

        const hourFormatter = new Intl.DateTimeFormat('en-US', { timeZone: timezone, hour: 'numeric', hour12: false });
        const fullDateFormatter = new Intl.DateTimeFormat('en-US', { timeZone: timezone, year: 'numeric', month: 'numeric', day: 'numeric' });
        const weekdayFormatter = new Intl.DateTimeFormat('en-US', { timeZone: timezone, weekday: 'short' });
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

        // 首先创建所有小时日期组
        const hourDayGroups = [];
        let lastDate = '';
        
        for (let i = 0; i < TIMELINE_HOURS; i++) {
            const timeForThisBlock = new Date(startOfDisplay);
            timeForThisBlock.setHours(startOfDisplay.getHours() + i + timelineStartOffsetHours);
            const dateOfThisBlock = fullDateFormatter.format(timeForThisBlock);
            
            if (i === 0 || dateOfThisBlock !== lastDate) {
                const hourDayGroup = document.createElement('div');
                hourDayGroup.className = 'wtp-hour-day-group';
                
                // 创建上方区域 - 包含现有的小时块
                const topArea = document.createElement('div');
                topArea.className = 'wtp-hour-day-group-top';
                hourDayGroup.appendChild(topArea);
                
                // 创建下方区域 - 显示日期
                const bottomArea = document.createElement('div');
                bottomArea.className = 'wtp-hour-day-group-bottom';
                
                // 暂时不添加日期显示，稍后根据小时数量决定
                bottomArea.appendChild(document.createElement('div')); // 占位符
                
                hourDayGroup.appendChild(bottomArea);
                hoursContainer.appendChild(hourDayGroup);
                hourDayGroups.push(hourDayGroup);
                lastDate = dateOfThisBlock;
            }
        }

        // 然后创建小时块
        lastDate = '';
        let currentHourDayGroupIndex = 0;

        for (let i = 0; i < TIMELINE_HOURS; i++) {
            const timeForThisBlock = new Date(startOfDisplay);
            timeForThisBlock.setHours(startOfDisplay.getHours() + i + timelineStartOffsetHours);

            const localHour = parseInt(hourFormatter.format(timeForThisBlock), 10);
            const dateOfThisBlock = fullDateFormatter.format(timeForThisBlock);
            const weekdayShort = weekdayFormatter.format(timeForThisBlock); // e.g., Sun, Mon, ...
            const ymdOfThisBlock = getYMD(timeForThisBlock);

            // 检查是否需要切换到下一个小时日期组
            if (i > 0 && dateOfThisBlock !== lastDate) {
                currentHourDayGroupIndex++;
            }

            // 创建小时块
            const hourDiv = document.createElement('div');
            hourDiv.className = 'wtp-timeline-hour ' + getTimeOfDay(localHour);
            if (weekdayShort === 'Sat' || weekdayShort === 'Sun') {
                hourDiv.classList.add('weekend');
            }
            hourDiv.dataset.hour = localHour;

            if (dateOfThisBlock === currentDateInTimezone && localHour === currentHourInTimezone) {
                hourDiv.classList.add('wtp-current-hour');
                
                // 在当前时间小时块下方添加标识
                const currentTimeIndicator = document.createElement('div');
                currentTimeIndicator.className = 'wtp-current-time-indicator';
                currentTimeIndicator.textContent = 'NOW';
                hourDiv.appendChild(currentTimeIndicator);
            }

            // Dim past hours (in the row's timezone)
            if (ymdOfThisBlock < currentYMD || (ymdOfThisBlock === currentYMD && localHour < currentHourInTimezone)) {
                hourDiv.classList.add('past-hour');
            }

            // 将小时块添加到对应的小时日期组的上方区域
            const topArea = hourDayGroups[currentHourDayGroupIndex].querySelector('.wtp-hour-day-group-top');
            topArea.appendChild(hourDiv);
            lastDate = dateOfThisBlock;
        }
        
        // 检查每个小时日期组中的小时数量，只有大于等于2个时才显示日期
        hourDayGroups.forEach((hourDayGroup, index) => {
            const topArea = hourDayGroup.querySelector('.wtp-hour-day-group-top');
            const bottomArea = hourDayGroup.querySelector('.wtp-hour-day-group-bottom');
            const hourCount = topArea.querySelectorAll('.wtp-timeline-hour').length;
            
            // 清空底部区域
            bottomArea.innerHTML = '';
            
            // 只有当小时数量大于等于2时才显示日期
            if (hourCount >= 2) {
                // 找到这个小时日期组对应的第一个小时块的时间
                // 需要找到这个组在时间轴中的起始位置
                const hourBlocks = topArea.querySelectorAll('.wtp-timeline-hour');
                if (hourBlocks.length > 0) {
                    // 找到这个组在原始时间轴中的起始索引
                    const firstHourBlock = hourBlocks[0];
                    const allHourBlocks = timeRows.querySelectorAll('.wtp-timeline-hour');
                    let startIndex = -1;
                    for (let i = 0; i < allHourBlocks.length; i++) {
                        if (allHourBlocks[i] === firstHourBlock) {
                            startIndex = i;
                            break;
                        }
                    }
                    
                    if (startIndex >= 0) {
                        // 使用与创建小时块相同的计算方式
                        const timeForDate = new Date(startOfDisplay);
                        timeForDate.setHours(startOfDisplay.getHours() + startIndex + timelineStartOffsetHours);
                        
                        // 创建日期显示元素
                        const dateDisplay = document.createElement('div');
                        dateDisplay.className = 'wtp-date-display';
                        
                        // 使用目标时区格式化日期
                        const timezone = row.dataset.timezone;
                        const timezoneWeekdayFormatter = new Intl.DateTimeFormat('en-US', { 
                            timeZone: timezone, 
                            weekday: 'short' 
                        });
                        const timezoneDateFormatter = new Intl.DateTimeFormat('en-US', { 
                            timeZone: timezone, 
                            year: 'numeric', 
                            month: 'numeric', 
                            day: 'numeric' 
                        });
                        
                        const weekdayShort = timezoneWeekdayFormatter.format(timeForDate);
                        const fullDate = timezoneDateFormatter.format(timeForDate);
                        const dateParts = fullDate.split('/');
                        const month = dateParts[0];
                        const day = dateParts[1];
                        const year = dateParts[2];
                        
                        // 创建完整的日期文本（一行显示）
                        const dateText = document.createElement('span');
                        dateText.className = 'wtp-date-text';
                        dateText.textContent = `${weekdayShort} ${month}/${day}`;
                        dateText.setAttribute('data-full-date', `${weekdayShort} ${month}/${day}/${year}`);
                        
                        dateDisplay.appendChild(dateText);
                        bottomArea.appendChild(dateDisplay);
                    }
                }
            }
        });
    }

    // Range selection functions
    function startRangeSelection(percent) {
        isRangeSelecting = true;
        rangeStartPercent = percent;
        rangeEndPercent = percent;
        
        // 隐藏正常的时间选择器
        timeSelector.style.display = 'none';
        document.querySelectorAll('.wtp-hover-time-label').forEach(l => l.style.display = 'none');
        document.querySelectorAll('.wtp-row-time-selector').forEach(selector => selector.remove());
        
        // 创建范围选择蒙罩
        createRangeOverlay();
        updateRangeSelection(percent);
        
        console.log('Range selection started at', percent + '%');
    }
    
    function updateRangeSelection(percent) {
        rangeEndPercent = percent;
        
        if (rangeOverlay && Array.isArray(rangeOverlay)) {
            const startPercent = Math.min(rangeStartPercent, rangeEndPercent);
            const widthPercent = Math.abs(rangeEndPercent - rangeStartPercent);
            
            rangeOverlay.forEach((overlay, index) => {
                overlay.style.left = startPercent + '%';
                overlay.style.width = widthPercent + '%';
                
                // 按钮现在在蒙罩上方，始终显示
                if (index === 0) {
                    const button = overlay.querySelector('.wtp-range-overlay-button');
                    if (button) {
                        button.style.display = 'block';
                    }
                }
            });
        }
    }
    
    function endRangeSelection(percent) {
        rangeEndPercent = percent;
        isRangeSelecting = false;
        isMouseDown = false;
        
        // 计算最终选择的范围
        const startPercent = Math.min(rangeStartPercent, rangeEndPercent);
        const endPercent = Math.max(rangeStartPercent, rangeEndPercent);
        const widthPercent = endPercent - startPercent;
        
        console.log('Range selection ended:', {
            start: startPercent + '%',
            end: endPercent + '%',
            width: widthPercent + '%'
        });
        
        // 如果时间长度为0，不形成蒙罩，清理状态
        if (widthPercent <= 0) {
            console.log('Range width is 0, clearing selection');
            clearRangeSelection();
            hasSelectedRange = false;
            return;
        }
        
        hasSelectedRange = true; // 标记已有选择的范围
        
        // 显示时间范围对话框
        showTimeRangeDialog(startPercent, endPercent);
        
        // 保留范围选择蒙罩，不清理
        // 蒙罩会保留在最终选择的位置
    }
    
    function clearRangeSelection() {
        // 清理范围选择蒙罩
        if (rangeOverlay && Array.isArray(rangeOverlay)) {
            rangeOverlay.forEach(overlay => overlay.remove());
            rangeOverlay = null;
        }
        
        // 清理移动端选择
        clearMobileSelection();
        
        // 重置状态
        hasSelectedRange = false;
        isRangeSelecting = false;
        isMouseDown = false;
        rangeStartPercent = 0;
        rangeEndPercent = 0;
        
        console.log('Range selection cleared');
    }
    
    function handleMobileTouch(percent) {
        // 清除现有的移动端选择
        clearMobileSelection();
        
        // 创建60分钟的默认时间范围
        const startPercent = percent;
        const endPercent = Math.min(100, percent + (60 / (24 * 60)) * 100); // 60分钟 = 4.17% of 24 hours
        
        // 显示垂直线和浮动时间
        showMobileTimeIndicator(percent);
        
        // 创建时间范围覆盖层
        createMobileRangeOverlay(startPercent, endPercent);
        
        // 设置当前时间范围
        currentTimeRange = {
            startPercent: startPercent,
            endPercent: endPercent,
            startTime: calculateTimeFromPercent(startPercent),
            endTime: calculateTimeFromPercent(endPercent)
        };
    }
    
    function clearMobileSelection() {
        // 清除所有时间选择器 - 使用与PC端相同的逻辑
        document.querySelectorAll('.wtp-row-time-selector').forEach(selector => {
            selector.remove();
        });
        
        // 隐藏时间标签 - 使用与PC端相同的逻辑
        document.querySelectorAll('.wtp-hover-time-label').forEach(label => {
            label.style.display = 'none';
        });
        
        // 清除移动端View Times按钮
        document.querySelectorAll('.wtp-mobile-view-times-btn').forEach(button => {
            button.remove();
        });
    }
    
    function showMobileTimeIndicator(percent) {
        // 为每个时间轴行创建独立的时间选择器 - 完全使用PC端逻辑
        const timelineRows = timeRows.querySelectorAll('.wtp-timeline-row');
        timelineRows.forEach(row => {
            // 移除之前的时间选择器
            const existingSelector = row.querySelector('.wtp-row-time-selector');
            if (existingSelector) {
                existingSelector.remove();
            }
            
            // 创建新的时间选择器 - 使用与PC端完全相同的逻辑
            const rowSelector = document.createElement('div');
            rowSelector.className = 'wtp-row-time-selector';
            rowSelector.style.position = 'absolute';
            rowSelector.style.top = '0';
            rowSelector.style.bottom = '0';
            rowSelector.style.width = '2px';
            rowSelector.style.backgroundColor = '#4caf50';
            rowSelector.style.pointerEvents = 'none';
            rowSelector.style.zIndex = '5';
            rowSelector.style.left = `${percent}%`;
            rowSelector.style.transform = 'translateX(-50%)';
            
            const timelineTrack = row.querySelector('.wtp-timeline-track');
            if (timelineTrack) {
                timelineTrack.appendChild(rowSelector);
            }
        });

        // 更新时间标签 - 使用与PC端完全相同的逻辑
        const totalMinutes = (percent / 100) * TIMELINE_HOURS * 60;
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
    
    function createMobileRangeOverlay(startPercent, endPercent) {
        const firstRow = timeRows.querySelector('.wtp-timeline-row');
        if (!firstRow) return;
        
        const timelineTrack = firstRow.querySelector('.wtp-timeline-track');
        
        // 直接创建View Times按钮，不需要overlay
        const button = document.createElement('button');
        button.className = 'wtp-mobile-view-times-btn';
        button.textContent = 'View Times';
        button.style.cssText = `
            position: absolute;
            top: -45px;
            left: ${startPercent}%;
            transform: translateX(-50%);
            background-color: rgba(76, 175, 80, 0.95);
            color: white;
            border: none;
            padding: 6px 4px;
            border-radius: 8px;
            font-size: 0.6em;
            font-weight: 500;
            cursor: pointer;
            z-index: 20;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
            pointer-events: auto;
            min-width: 70px;
            text-align: center;
        `;
        
        // 添加点击事件
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            // 更新垂直线位置到开始位置
            clearMobileSelection();
            showMobileTimeIndicator(startPercent);
            showTimeRangeDialog(startPercent, endPercent);
        });
        
        // 添加触摸事件处理
        button.addEventListener('touchstart', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
        
        button.addEventListener('touchend', (e) => {
            e.preventDefault();
            e.stopPropagation();
            // 更新垂直线位置到开始位置
            clearMobileSelection();
            showMobileTimeIndicator(startPercent);
            showTimeRangeDialog(startPercent, endPercent);
        });
        
        timelineTrack.appendChild(button);
    }
    
    function calculateTimeFromPercent(percent) {
        const totalMinutes = 24 * 60;
        const minutes = (percent / 100) * totalMinutes;
        const hours = Math.floor(minutes / 60);
        const mins = Math.floor(minutes % 60);
        
        const time = new Date();
        time.setHours(hours, mins, 0, 0);
        return time;
    }
    
    function formatTimeForDisplay(time) {
        return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    
    function showTimeRangeDialog(startPercent, endPercent) {
        // 计算时间范围
        const timeRange = calculateTimeRange(startPercent, endPercent);
        
        // 更新对话框信息
        updateRangeInfo(timeRange);
        
        // 计算各时区的时间
        const timezoneTimesData = calculateTimezoneTimes(timeRange);
        
        // 更新时区时间显示
        updateTimezoneTimesDisplay(timezoneTimesData);
        
        // 显示对话框
        showDialog();
    }
    
    function calculateTimeRange(startPercent, endPercent) {
        const baseDate = parseDate(datePicker.value);
        if (!baseDate) return null;
        
        const startTime = new Date(baseDate);
        startTime.setHours(startTime.getHours() + timelineStartOffsetHours);
        const startMinutes = (startPercent / 100) * TIMELINE_HOURS * 60;
        startTime.setMinutes(startTime.getMinutes() + startMinutes);
        
        const endTime = new Date(baseDate);
        endTime.setHours(endTime.getHours() + timelineStartOffsetHours);
        const endMinutes = (endPercent / 100) * TIMELINE_HOURS * 60;
        endTime.setMinutes(endTime.getMinutes() + endMinutes);
        
        return {
            start: startTime,
            end: endTime,
            duration: endTime - startTime
        };
    }
    
    function calculateTimezoneTimes(timeRange) {
        const timelineRows = timeRows.querySelectorAll('.wtp-timeline-row');
        const times = [];
        
        timelineRows.forEach(row => {
            const timezone = row.dataset.timezone;
            const cityElement = row.querySelector('.wtp-city');
            const cityName = cityElement ? cityElement.textContent : 'Unknown';
            
            if (timezone) {
                const startTimeInTimezone = formatTimeInTimezone(timeRange.start, timezone);
                const endTimeInTimezone = formatTimeInTimezone(timeRange.end, timezone);
                
                times.push({
                    city: cityName,
                    timezone: timezone,
                    start: startTimeInTimezone,
                    end: endTimeInTimezone
                });
            }
        });
        
        return times;
    }
    
    function formatTimeInTimezone(date, timezone) {
        try {
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: timezone,
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });
            
            return formatter.format(date);
        } catch (error) {
            console.warn(`Failed to format time for timezone ${timezone}:`, error);
            return 'Invalid timezone';
        }
    }
    
    // Format time for input fields (only hours and minutes)
    function formatTimeForInput(date) {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }
    
    // Format date for display
    function formatDateForDisplay(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function updateRangeInfo(timeRange) {
        if (!timeRange) return;
        
        // Store current time range for editing
        currentTimeRange = timeRange;
        
        const durationHours = Math.floor(timeRange.duration / (1000 * 60 * 60));
        const durationMinutes = Math.floor((timeRange.duration % (1000 * 60 * 60)) / (1000 * 60));
        
        // 只更新动态内容
        document.getElementById('wtp-start-date-display').textContent = formatDateForDisplay(timeRange.start);
        document.getElementById('wtp-start-time-display').textContent = formatTimeForInput(timeRange.start);
        document.getElementById('wtp-duration-display').textContent = `${durationHours}h ${durationMinutes}m`;
        document.getElementById('wtp-end-date-display').textContent = formatDateForDisplay(timeRange.end);
        document.getElementById('wtp-end-time-display').textContent = formatTimeForInput(timeRange.end);
        
        // Add event listeners for auto-calculation
        addRangeEditListeners();
        
        // Add meeting link listeners
        addMeetingLinkListeners();
    }
    
    function addRangeEditListeners() {
        // Remove existing event listeners first
        const existingButtons = document.querySelectorAll('.wtp-time-btn');
        existingButtons.forEach(button => {
            button.replaceWith(button.cloneNode(true));
        });
        
        // Add new event listeners
        const buttons = document.querySelectorAll('.wtp-time-btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const target = button.dataset.target;
                const direction = button.dataset.direction;
                const isIncrease = direction === 'increase';
                
                console.log('Button clicked:', target, direction, isIncrease);
                
                if (target === 'start') {
                    adjustStartTime(isIncrease);
                } else if (target === 'duration') {
                    adjustDuration(isIncrease);
                } else if (target === 'end') {
                    adjustEndTime(isIncrease);
                }
            });
        });
    }
    
    function addMeetingLinkListeners() {
        const googleMeetingBtn = document.getElementById('wtp-google-meeting-btn');
        if (googleMeetingBtn) {
            googleMeetingBtn.addEventListener('click', () => {
                generateGoogleMeetLink();
            });
        }
        
        const outlookMeetingBtn = document.getElementById('wtp-outlook-meeting-btn');
        if (outlookMeetingBtn) {
            outlookMeetingBtn.addEventListener('click', () => {
                generateOutlookLink();
            });
        }
        
        
        const yahooMeetingBtn = document.getElementById('wtp-yahoo-meeting-btn');
        if (yahooMeetingBtn) {
            yahooMeetingBtn.addEventListener('click', () => {
                generateYahooCalendarLink();
            });
        }
    }
    
    function generateGoogleMeetLink() {
        if (!currentTimeRange) {
            alert('No time range selected');
            return;
        }
        
        const startTime = currentTimeRange.start;
        const endTime = currentTimeRange.end;
        
        // Format dates for Google Calendar (ISO 8601 format)
        const formatGoogleDate = (date) => {
            return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        };
        
        const startDate = formatGoogleDate(startTime);
        const endDate = formatGoogleDate(endTime);
        
        // Format dates for display
        const formatDisplayDate = (date) => {
            return date.toLocaleDateString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        };
        
        const formatDisplayTime = (date) => {
            return date.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            });
        };
        
        // Get timezone information
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const timezoneOffset = startTime.getTimezoneOffset();
        
        // Create event title and description
        const eventTitle = 'Meeting';
        const eventDescription = `Meeting scheduled via World Time Planner\n\nStart: ${formatDisplayDate(startTime)} at ${formatDisplayTime(startTime)} (${timezone})\nEnd: ${formatDisplayDate(endTime)} at ${formatDisplayTime(endTime)} (${timezone})`;
        
        // Create Google Calendar link with timezone
        const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startDate}/${endDate}&ctz=${encodeURIComponent(timezone)}&details=${encodeURIComponent(eventDescription)}`;
        
        // Open calendar link directly
        window.open(calendarUrl, '_blank');
    }
    
    function showMeetingLinkNotification(message, link) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'wtp-meeting-notification';
        notification.innerHTML = `
            <div class="wtp-notification-content">
                <p>${message}</p>
                <a href="${link}" target="_blank" class="wtp-meeting-link">Open Calendar</a>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4caf50;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            max-width: 300px;
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 5000);
    }
    
    function generateOutlookLink() {
        if (!currentTimeRange) {
            alert('No time range selected');
            return;
        }
        
        const startTime = currentTimeRange.start;
        const endTime = currentTimeRange.end;
        
        // Format dates for Outlook (ISO 8601 format with timezone)
        const formatOutlookDate = (date) => {
            return date.toISOString();
        };
        
        const startDate = formatOutlookDate(startTime);
        const endDate = formatOutlookDate(endTime);
        
        // Get timezone information
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        // Create event title and description
        const eventTitle = 'Meeting';
        const eventDescription = `Meeting scheduled via World Time Planner\n\nTimezone: ${timezone}`;
        
        // Create Outlook Calendar link with timezone
        const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(eventTitle)}&startdt=${encodeURIComponent(startDate)}&enddt=${encodeURIComponent(endDate)}&body=${encodeURIComponent(eventDescription)}`;
        
        // Open calendar link directly
        window.open(outlookUrl, '_blank');
    }
    
    
    function generateYahooCalendarLink() {
        if (!currentTimeRange) {
            alert('No time range selected');
            return;
        }
        
        const startTime = currentTimeRange.start;
        const endTime = currentTimeRange.end;
        
        // Format dates for Yahoo Calendar (ISO 8601 format)
        const formatYahooDate = (date) => {
            return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        };
        
        const startDate = formatYahooDate(startTime);
        const endDate = formatYahooDate(endTime);
        
        // Get timezone information
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        // Create event title and description
        const eventTitle = 'Meeting';
        const eventDescription = `Meeting scheduled via World Time Planner\n\nTimezone: ${timezone}`;
        
        // Create Yahoo Calendar link
        const yahooUrl = `https://calendar.yahoo.com/?v=60&view=d&type=20&title=${encodeURIComponent(eventTitle)}&st=${startDate}&et=${endDate}&desc=${encodeURIComponent(eventDescription)}`;
        
        // Open calendar link directly
        window.open(yahooUrl, '_blank');
    }
    
    function adjustStartTime(isIncrease) {
        if (!currentTimeRange) return;
        
        const minutes = isIncrease ? 1 : -1;
        const newStartTime = new Date(currentTimeRange.start.getTime() + minutes * 60 * 1000);
        
        // Update displays
        document.getElementById('wtp-start-date-display').textContent = formatDateForDisplay(newStartTime);
        document.getElementById('wtp-start-time-display').textContent = formatTimeForInput(newStartTime);
        
        // Calculate new end time based on duration
        const duration = currentTimeRange.duration;
        const newEndTime = new Date(newStartTime.getTime() + duration);
        
        // Update end displays
        document.getElementById('wtp-end-date-display').textContent = formatDateForDisplay(newEndTime);
        document.getElementById('wtp-end-time-display').textContent = formatTimeForInput(newEndTime);
        
        // Update current time range
        updateCurrentTimeRange(newStartTime, newEndTime);
    }
    
    function adjustDuration(isIncrease) {
        if (!currentTimeRange) return;
        
        const minutes = isIncrease ? 1 : -1;
        const newDuration = currentTimeRange.duration + minutes * 60 * 1000;
        
        if (newDuration <= 0) return; // Prevent negative duration
        
        const newEndTime = new Date(currentTimeRange.start.getTime() + newDuration);
        
        // Calculate duration components
        const durationHours = Math.floor(newDuration / (1000 * 60 * 60));
        const durationMinutes = Math.floor((newDuration % (1000 * 60 * 60)) / (1000 * 60));
        
        // Update displays
        document.getElementById('wtp-duration-display').textContent = `${durationHours}h ${durationMinutes}m`;
        document.getElementById('wtp-end-date-display').textContent = formatDateForDisplay(newEndTime);
        document.getElementById('wtp-end-time-display').textContent = formatTimeForInput(newEndTime);
        
        // Update current time range
        updateCurrentTimeRange(currentTimeRange.start, newEndTime);
    }
    
    function adjustEndTime(isIncrease) {
        if (!currentTimeRange) return;
        
        const minutes = isIncrease ? 1 : -1;
        const newEndTime = new Date(currentTimeRange.end.getTime() + minutes * 60 * 1000);
        
        if (newEndTime <= currentTimeRange.start) return; // Prevent end time before start time
        
        const newDuration = newEndTime.getTime() - currentTimeRange.start.getTime();
        
        // Calculate duration components
        const durationHours = Math.floor(newDuration / (1000 * 60 * 60));
        const durationMinutes = Math.floor((newDuration % (1000 * 60 * 60)) / (1000 * 60));
        
        // Update displays
        document.getElementById('wtp-end-date-display').textContent = formatDateForDisplay(newEndTime);
        document.getElementById('wtp-end-time-display').textContent = formatTimeForInput(newEndTime);
        document.getElementById('wtp-duration-display').textContent = `${durationHours}h ${durationMinutes}m`;
        
        // Update current time range
        updateCurrentTimeRange(currentTimeRange.start, newEndTime);
    }
    
    function createTimeFromInput(timeString, referenceDate) {
        if (!timeString || !referenceDate) return null;
        
        // Parse time string (e.g., "14:30")
        const [hours, minutes] = timeString.split(':').map(Number);
        if (isNaN(hours) || isNaN(minutes)) return null;
        
        // Create new date with same date as reference but different time
        const newDate = new Date(referenceDate);
        newDate.setHours(hours, minutes, 0, 0);
        
        return newDate;
    }
    
    function parseDuration(durationStr) {
        // Parse duration string like "2h 30m" or "2h30m" or "150m"
        const match = durationStr.match(/(?:(\d+)h)?\s*(?:(\d+)m)?/);
        if (!match) return 0;
        
        const hours = parseInt(match[1] || '0');
        const minutes = parseInt(match[2] || '0');
        
        return (hours * 60 + minutes) * 60 * 1000; // Convert to milliseconds
    }
    
    function formatDuration(durationMs) {
        const totalMinutes = Math.floor(durationMs / (1000 * 60));
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        
        if (hours > 0) {
            return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
        } else {
            return `${minutes}m`;
        }
    }
    
    
    function updateCurrentTimeRange(startTime, endTime) {
        if (!currentTimeRange) return;
        
        // Update the current time range
        currentTimeRange.start = startTime;
        currentTimeRange.end = endTime;
        currentTimeRange.duration = endTime.getTime() - startTime.getTime();
        
        // Recalculate timezone times
        const timezoneTimesData = calculateTimezoneTimes(currentTimeRange);
        updateTimezoneTimesDisplay(timezoneTimesData);
    }
    
    function updateTimezoneTimesDisplay(timezoneTimesData) {
        timezoneTimes.innerHTML = '';
        
        timezoneTimesData.forEach(timeInfo => {
            const item = document.createElement('div');
            item.className = 'wtp-timezone-time-item';
            
            item.innerHTML = `
                <div class="wtp-timezone-name">${timeInfo.city}</div>
                <div class="wtp-timezone-time">${timeInfo.start} - ${timeInfo.end}</div>
            `;
            
            timezoneTimes.appendChild(item);
        });
    }
    
    function createRangeOverlay() {
        // 为每个时间轴行创建范围选择蒙罩
        const timelineRows = timeRows.querySelectorAll('.wtp-timeline-row');
        rangeOverlay = []; // 存储所有蒙罩的引用
        
        timelineRows.forEach(row => {
            const timelineTrack = row.querySelector('.wtp-timeline-track');
            if (timelineTrack) {
                const overlay = document.createElement('div');
                overlay.className = 'wtp-range-overlay';
                overlay.style.left = rangeStartPercent + '%';
                overlay.style.width = '0%';
                
                // 添加点击事件处理，阻止事件冒泡
                overlay.addEventListener('click', (e) => {
                    e.stopPropagation();
                    // 点击蒙罩不执行任何操作，保持蒙罩存在
                });
                
                timelineTrack.appendChild(overlay);
                
                // 创建按钮（只在第一个蒙罩上添加）
                if (rangeOverlay.length === 0) {
                    const button = document.createElement('button');
                    button.className = 'wtp-range-overlay-button';
                    button.textContent = 'View Times';
                    button.addEventListener('click', (e) => {
                        e.stopPropagation();
                        showTimeRangeDialog(rangeStartPercent, rangeEndPercent);
                    });
                    overlay.appendChild(button);
                }
                
                rangeOverlay.push(overlay);
            }
        });
    }

    init();
});