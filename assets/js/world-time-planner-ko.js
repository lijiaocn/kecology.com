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
    let selectedCities = new Set();
    let customCities = [];
    let currentTimeValue = 24;
    let timelineStartOffsetHours = 0;
    let draggedElement = null;
    
    // Range selection state
    let isRangeSelecting = false;
    let isMouseDown = false;
    let rangeStartPercent = 0;
    let rangeEndPercent = 0;
    let rangeOverlay = null;
    let hasSelectedRange = false;
    let currentTimeRange = null;

    const timezoneData = {
        'USA': { 'Washington D.C.': 'America/New_York', 'New York': 'America/New_York', 'Chicago': 'America/Chicago', 'Denver': 'America/Denver', 'Los Angeles': 'America/Los_Angeles' },
        'Canada': { 'Ottawa': 'America/Toronto', 'Toronto': 'America/Toronto' },
        'Brazil': { 'Brasília': 'America/Sao_Paulo', 'São Paulo': 'America/Sao_Paulo' },
        'UK': { 'London': 'Europe/London' },
        'France': { 'Paris': 'Europe/Paris' },
        'Germany': { 'Berlin': 'Europe/Berlin' },
        'Russia': { 'Moscow': 'Europe/Moscow' },
        'Egypt': { 'Cairo': 'Africa/Cairo' },
        'South Africa': { 'Cape Town': 'Africa/Johannesburg', 'Johannesburg': 'Africa/Johannesburg' },
        'UAE': { 'Abu Dhabi': 'Asia/Dubai', 'Dubai': 'Asia/Dubai' },
        'India': { 'New Delhi': 'Asia/Kolkata', 'Kolkata': 'Asia/Kolkata' },
        'Singapore': { 'Singapore': 'Asia/Singapore' },
        'China': { 'Beijing': 'Asia/Shanghai', 'Shanghai': 'Asia/Shanghai' },
        'South Korea': { 'Seoul': 'Asia/Seoul' },
        'Japan': { 'Tokyo': 'Asia/Tokyo' },
        'Australia': { 'Canberra': 'Australia/Sydney', 'Sydney': 'Australia/Sydney' },
        'New Zealand': { 'Wellington': 'Pacific/Auckland', 'Auckland': 'Pacific/Auckland' },
    };

    const countryTimeInfo = {
        'USA': { description: '미국은 4개의 시간대를 사용합니다: <strong>동부 시간(EST/EDT)</strong>, <strong>중부 시간(CST/CDT)</strong>, <strong>산지 시간(MST/MDT)</strong>, <strong>태평양 시간(PST/PDT)</strong>. 일광 절약 시간제를 준수합니다.' },
        'Canada': { description: '캐나다는 1개의 시간대를 사용합니다: <strong>동부 시간(EST/EDT)</strong>이며 일광 절약 시간제를 준수합니다.' },
        'Brazil': { description: '브라질은 1개의 시간대를 사용합니다: <strong>브라질리아 시간(BRT)</strong>이며 일광 절약 시간제를 준수하지 않습니다.' },
        'UK': { description: '영국은 1개의 시간대를 사용합니다: <strong>그리니치 평균시(GMT)</strong> 및 <strong>영국 서머 타임(BST)</strong>, 일광 절약 시간제를 준수합니다.' },
        'France': { description: '프랑스는 1개의 시간대를 사용합니다: <strong>중앙 유럽 시간(CET)</strong> 및 <strong>중앙 유럽 서머 타임(CEST)</strong>, 일광 절약 시간제를 준수합니다.' },
        'Germany': { description: '독일은 1개의 시간대를 사용합니다: <strong>중앙 유럽 시간(CET)</strong> 및 <strong>중앙 유럽 서머 타임(CEST)</strong>, 일광 절약 시간제를 준수합니다.' },
        'Russia': { description: '러시아는 1개의 시간대를 사용합니다: <strong>모스크바 표준시(MSK)</strong>이며 일광 절약 시간제를 준수하지 않습니다.' },
        'Egypt': { description: '이집트는 1개의 시간대를 사용합니다: <strong>동유럽 시간(EET)</strong> 및 <strong>동유럽 서머 타임(EEST)</strong>, 일광 절약 시간제를 준수합니다.' },
        'South Africa': { description: '남아프리카 공화국은 1개의 시간대를 사용합니다: <strong>남아프리카 표준시(SAST)</strong>이며 일광 절약 시간제를 준수하지 않습니다.' },
        'UAE': { description: '아랍에미리트는 1개의 시간대를 사용합니다: <strong>걸프 표준시(GST)</strong>이며 일광 절약 시간제를 준수하지 않습니다.' },
        'India': { description: '인도는 1개의 시간대를 사용합니다: <strong>인도 표준시(IST)</strong>이며 일광 절약 시간제를 준수하지 않습니다.' },
        'Singapore': { description: '싱가포르는 1개의 시간대를 사용합니다: <strong>싱가포르 표준시(SGT)</strong>이며 일광 절약 시간제를 준수하지 않습니다.' },
        'China': { description: '중국은 1개의 시간대를 사용합니다: <strong>중국 표준시(CST)</strong>이며 일광 절약 시간제를 준수하지 않습니다. 전국이 베이징 시간을 사용합니다.' },
        'South Korea': { description: '대한민국은 1개의 시간대를 사용합니다: <strong>한국 표준시(KST)</strong>이며 일광 절약 시간제를 준수하지 않습니다.' },
        'Japan': { description: '일본은 1개의 시간대를 사용합니다: <strong>일본 표준시(JST)</strong>이며 일광 절약 시간제를 준수하지 않습니다.' },
        'Australia': { description: '호주는 1개의 시간대를 사용합니다: <strong>호주 동부 표준시(AEST)</strong> 및 <strong>호주 동부 일광 절약 시간(AEDT)</strong>, 일광 절약 시간제를 준수합니다.' },
        'New Zealand': { description: '뉴질랜드는 1개의 시간대를 사용합니다: <strong>뉴질랜드 표준시(NZST)</strong> 및 <strong>뉴질랜드 일광 절약 시간(NZDT)</strong>, 일광 절약 시간제를 준수합니다.' }
    };

    const popularCities = [
        { city: 'New York', country: 'USA' }, { city: 'Los Angeles', country: 'USA' }, { city: 'London', country: 'UK' }, { city: 'Paris', country: 'France' }, { city: 'Berlin', country: 'Germany' }, { city: 'Moscow', country: 'Russia' }, { city: 'Dubai', country: 'UAE' }, { city: 'Kolkata', country: 'India' }, { city: 'Singapore', country: 'Singapore' }, { city: 'Shanghai', country: 'China' }, { city: 'Seoul', country: 'South Korea' }, { city: 'Tokyo', country: 'Japan' }, { city: 'Sydney', country: 'Australia' }, { city: 'Auckland', country: 'New Zealand' }, { city: 'Cairo', country: 'Egypt' }, { city: 'Johannesburg', country: 'South Africa' }, { city: 'São Paulo', country: 'Brazil' },
    ];

    function calculateAndSetTimelineHours() {
        const container = document.getElementById('wtp-timeline-container');
        const scrollContainer = document.getElementById('wtp-scroll-container');
        if (!container || !scrollContainer) return;
        const containerWidth = scrollContainer.clientWidth;
        const containerPadding = 48;
        const timezoneInfo = document.querySelector('.wtp-timezone-info');
        const timezoneInfoWidth = timezoneInfo ? timezoneInfo.offsetWidth + 8 : 140;
        const availableWidth = containerWidth - timezoneInfoWidth - containerPadding;
        const numHours = Math.floor(availableWidth / HOUR_BLOCK_WIDTH) - 1;
        TIMELINE_HOURS = Math.max(24, numHours);
        TIMELINE_INTERVALS = TIMELINE_HOURS * 2;
    }

    function parseDate(dateString) {
        if (!dateString) return null;
        const parts = dateString.split('-');
        return new Date(parts[0], parts[1] - 1, parts[2]);
    }

    function addLocalTimezoneRow() {
        const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const localCityName = getLocalCityName(localTimezone);
        const localKey = `${localCityName},Local`;
        selectedCities.add(localKey);
        const existingCustom = customCities.find(city => city.timezone === localTimezone);
        if (!existingCustom) {
            customCities.push({ label: localCityName, timezone: localTimezone });
        }
    }
    
    function getLocalCityName(timezone) {
        const timezoneMap = {
            'America/New_York': '뉴욕', 'America/Chicago': '시카고', 'America/Denver': '덴버', 'America/Los_Angeles': '로스앤젤레스', 'Europe/London': '런던', 'Europe/Paris': '파리', 'Europe/Berlin': '베를린', 'Asia/Tokyo': '도쿄', 'Asia/Shanghai': '상하이', 'Asia/Hong_Kong': '홍콩', 'Asia/Singapore': '싱가포르', 'Australia/Sydney': '시드니', 'Australia/Melbourne': '멜버른', 'Pacific/Auckland': '오클랜드', 'America/Toronto': '토론토', 'America/Vancouver': '밴쿠버', 'Europe/Madrid': '마드리드', 'Europe/Rome': '로마', 'Asia/Seoul': '서울', 'Asia/Mumbai': '뭄바이', 'America/Sao_Paulo': '상파울루', 'America/Mexico_City': '멕시코시티', 'Africa/Cairo': '카이로', 'Africa/Johannesburg': '요하네스버그'
        };
        return timezoneMap[timezone] || timezone.split('/').pop().replace('_', ' ');
    }

    function init() {
        loadSelectedCities();
        loadCustomCities();
        addLocalTimezoneRow();
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
        addDialogListeners();
        loadSelectedTab();
        calculateAndSetTimelineHours();
        goToNow();
        renderInitialRows();
        renderAllTimelineGrids();
        renderDateButtons();
        setInterval(renderAllTimelineGrids, 60 * 1000);
    }

    function renderDateButtons() {
        dateButtonsContainer.innerHTML = '';
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selectedDate = parseDate(datePicker.value);
        const screenWidth = window.innerWidth;
        let buttonCount;
        if (screenWidth >= 1200) buttonCount = 7;
        else if (screenWidth >= 768) buttonCount = 5;
        else if (screenWidth >= 480) buttonCount = 2;
        else buttonCount = 1;

        for (let i = 0; i < buttonCount; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            const button = document.createElement('button');
            button.classList.add('wtp-date-button');
            const dayStr = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 )).toISOString().split("T")[0];
            const weekday = date.toLocaleDateString('ko-KR', { weekday: 'short' });
            const mm = date.getMonth() + 1;
            const dd = date.getDate();
            button.textContent = `${weekday} ${mm}/${dd}`;
            button.dataset.date = dayStr;
            const dayNum = date.getDay();
            if (dayNum === 0 || dayNum === 6) button.classList.add('weekend');
            if (selectedDate && date.getTime() === selectedDate.getTime()) button.classList.add('active');
            button.addEventListener('click', (e) => {
                timelineStartOffsetHours = 0;
                scrollLeftBtn.disabled = true;
                datePicker.value = e.currentTarget.dataset.date;
                renderAllTimelineGrids();
                renderDateButtons();
                if (scrollContainer) scrollContainer.scrollLeft = 0;
            });
            dateButtonsContainer.appendChild(button);
        }
    }

    function goToNow() {
        const now = new Date();
        datePicker.valueAsDate = now;
        const localISODate = new Date(now.getTime() - (now.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
        datePicker.value = localISODate;
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const diffMinutes = (now - startOfDay) / 60000;
        currentTimeValue = Math.round(diffMinutes / 30);
        timelineStartOffsetHours = new Date().getHours() - 2;
        scrollLeftBtn.disabled = false;
        renderAllTimelineGrids();
        renderDateButtons();
        if (scrollContainer) scrollContainer.scrollLeft = 0;
    }

    function renderInitialRows() {
        const savedOrder = loadCityOrder();
        let citiesToRender = Array.from(selectedCities);
        const localTimezone = citiesToRender.find(cityKey => cityKey.endsWith(',Local'));
        const otherCities = citiesToRender.filter(cityKey => !cityKey.endsWith(',Local'));
        if (savedOrder && savedOrder.length > 0) {
            const validOrder = savedOrder.filter(cityKey => otherCities.includes(cityKey));
            const newCities = otherCities.filter(cityKey => !validOrder.includes(cityKey));
            citiesToRender = [...validOrder, ...newCities];
        } else {
            citiesToRender = otherCities;
        }
        if (localTimezone && !citiesToRender.includes(localTimezone)) {
            citiesToRender.unshift(localTimezone);
        }
        citiesToRender.forEach(cityKey => {
            const [city, country] = cityKey.split(',');
            let timezone;
            if (country === 'Local') {
                const customEntry = customCities.find(c => c.label === city);
                timezone = customEntry ? customEntry.timezone : Intl.DateTimeFormat().resolvedOptions().timeZone;
            } else if (country === 'Timezone') {
                timezone = city;
            } else if (country === 'Custom') {
                const customEntry = customCities.find(c => c.label === city);
                timezone = customEntry ? customEntry.timezone : null;
            } else {
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
            if (scrollContainer) scrollContainer.scrollLeft = 0;
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
                    updateRangeSelection(percent);
                } else if (!isRangeSelecting && !hasSelectedRange) {
                    timeSelector.style.display = 'block';
                    const selectorLeft = e.clientX - containerRect.left + scrollContainer.scrollLeft;
                    handleRowsMouseMove(percent, selectorLeft);
                }
            } else {
                if (!isRangeSelecting) timeSelector.style.display = 'none';
            }
        });

        scrollContainer.addEventListener('mouseleave', () => {
            if (!isRangeSelecting) {
                timeSelector.style.display = 'none';
                document.querySelectorAll('.wtp-hover-time-label').forEach(l => l.style.display = 'none');
                document.querySelectorAll('.wtp-row-time-selector').forEach(selector => selector.remove());
            }
        });

        scrollContainer.addEventListener('mousedown', (e) => {
            const firstRow = timeRows.querySelector('.wtp-timeline-row');
            if (!firstRow) return;
            const timelineTrack = firstRow.querySelector('.wtp-timeline-track');
            const trackRect = timelineTrack.getBoundingClientRect();
            if (e.clientX >= trackRect.left && e.clientX <= trackRect.right) {
                const clickedElement = e.target;
                const isOverlayClick = clickedElement.classList.contains('wtp-range-overlay') || clickedElement.closest('.wtp-range-overlay');
                if (isOverlayClick) return;
                const offsetX = e.clientX - trackRect.left;
                const percent = (offsetX / trackRect.width) * 100;
                if (!hasSelectedRange) {
                    isMouseDown = true;
                    startRangeSelection(percent);
                } else {
                    clearRangeSelection();
                }
            }
        });

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
            if (deltaX > 10 || deltaY > 10) isScrolling = true;
        });
        scrollContainer.addEventListener('touchend', (e) => {
            const touchDuration = Date.now() - touchStartTime;
            const touch = e.changedTouches[0];
            const deltaX = Math.abs(touch.clientX - touchStartX);
            const deltaY = Math.abs(touch.clientY - touchStartY);
            if (touchDuration < 300 && deltaX < 10 && deltaY < 10 && !isScrolling) {
                const firstRow = timeRows.querySelector('.wtp-timeline-row');
                if (!firstRow) return;
                const timelineTrack = firstRow.querySelector('.wtp-timeline-track');
                const trackRect = timelineTrack.getBoundingClientRect();
                if (touch.clientX >= trackRect.left && touch.clientX <= trackRect.right) {
                    const clickedElement = e.target;
                    const isOverlayClick = clickedElement.classList.contains('wtp-range-overlay') || clickedElement.closest('.wtp-range-overlay');
                    if (isOverlayClick) return;
                    const offsetX = touch.clientX - trackRect.left;
                    const percent = (offsetX / trackRect.width) * 100;
                    handleMobileTouch(percent);
                }
            }
        });

        scrollContainer.addEventListener('mouseup', (e) => {
            if (isRangeSelecting && isMouseDown) {
                const firstRow = timeRows.querySelector('.wtp-timeline-row');
                if (!firstRow) return;
                const timelineTrack = firstRow.querySelector('.wtp-timeline-track');
                const trackRect = timelineTrack.getBoundingClientRect();
                if (e.clientX >= trackRect.left && e.clientX <= trackRect.right) {
                    const offsetX = e.clientX - trackRect.left;
                    const percent = (offsetX / trackRect.width) * 100;
                    endRangeSelection(percent);
                } else {
                    endRangeSelection(rangeEndPercent);
                }
                isMouseDown = false;
            }
        });

        document.addEventListener('mouseup', (e) => {
            if (isRangeSelecting && isMouseDown) {
                endRangeSelection(rangeEndPercent);
                isMouseDown = false;
            }
        });

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
            if (touch.clientX >= trackRect.left && touch.clientX <= trackRect.right) {
                isTouchingTimeline = true;
            }
        });
        scrollContainer.addEventListener('touchmove', (e) => {
            if (!isTouchingTimeline) return;
            const touch = e.touches[0];
            const deltaX = touch.clientX - touchStartX;
            const deltaY = touch.clientY - touchStartY;
            const absDeltaX = Math.abs(deltaX);
            const absDeltaY = Math.abs(deltaY);
            if (!hasMoved && (absDeltaX > 8 || absDeltaY > 8)) {
                hasMoved = true;
                const angle = Math.abs(Math.atan2(deltaY, deltaX) * 180 / Math.PI);
                if (angle > 60) {
                    isTouchingTimeline = false;
                    return;
                } else if (angle < 30) {
                    isTouchingTimeline = false;
                    return;
                } else {
                    e.preventDefault();
                }
            }
            if (isTouchingTimeline && hasMoved) {
                e.preventDefault();
                handleTouchMove(e);
            }
        });
        scrollContainer.addEventListener('touchend', () => {
            if (isTouchingTimeline && hasMoved) {
                setTimeout(() => {
                    timeSelector.style.display = 'none';
                    document.querySelectorAll('.wtp-hover-time-label').forEach(l => l.style.display = 'none');
                    document.querySelectorAll('.wtp-row-time-selector').forEach(selector => selector.remove());
                }, 2000);
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
                const selectorLeft = touch.clientX - containerRect.left + scrollContainer.scrollLeft;
                handleRowsMouseMove(percent, selectorLeft);
            } else {
                timeSelector.style.display = 'none';
            }
        }

        scrollRightBtn.addEventListener('click', () => {
            timelineStartOffsetHours += 1;
            renderAllTimelineGrids();
            scrollLeftBtn.disabled = false;
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
                renderDateButtons();
            }, 200);
        });
    }

    function addDialogListeners() {
        rangeDialogClose.addEventListener('click', () => { hideDialog(); });
        rangeDialog.addEventListener('click', (e) => { if (e.target === rangeDialog) hideDialog(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && rangeDialog.classList.contains('show')) hideDialog(); });
    }
    
    function showDialog() {
        rangeDialog.classList.add('show');
        document.body.classList.add('dialog-open');
    }
    
    function hideDialog() {
        rangeDialog.classList.remove('show');
        document.body.classList.remove('dialog-open');
        clearRangeSelection();
        clearMobileSelection();
    }

    function addTabListeners() {
        const tabButtons = document.querySelectorAll('.wtp-tab-btn');
        const tabPanels = document.querySelectorAll('.wtp-tab-panel');
        tabButtons.forEach(button => {
            const handleTabClick = () => {
                const targetTab = button.dataset.tab;
                localStorage.setItem('wtp-selected-tab', targetTab);
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanels.forEach(panel => panel.classList.remove('active'));
                button.classList.add('active');
                let targetPanelId = (targetTab === 'popular') ? 'popular-cities-panel' : `${targetTab}-panel`;
                const targetPanel = document.getElementById(targetPanelId);
                if (targetPanel) targetPanel.classList.add('active');
                if (targetTab === 'popular') populatePopularCities();
                else if (targetTab === 'country') populateCountries();
                else if (targetTab === 'timezone') populateTimezones();
            };
            button.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); handleTabClick(); });
            button.addEventListener('touchstart', (e) => {});
        });
    }

    function loadSelectedTab() {
        const savedTab = localStorage.getItem('wtp-selected-tab') || 'popular';
        const tabButton = document.querySelector(`[data-tab="${savedTab}"]`);
        if (tabButton) {
            const tabButtons = document.querySelectorAll('.wtp-tab-btn');
            const tabPanels = document.querySelectorAll('.wtp-tab-panel');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            tabButton.classList.add('active');
            let targetPanelId = (savedTab === 'popular') ? 'popular-cities-panel' : `${savedTab}-panel`;
            const targetPanel = document.getElementById(targetPanelId);
            if (targetPanel) targetPanel.classList.add('active');
            if (savedTab === 'popular') populatePopularCities();
            else if (savedTab === 'country') populateCountries();
            else if (savedTab === 'timezone') populateTimezones();
        }
    }

    function handleRowsMouseMove(percent, selectorLeft) {
        timeSelector.style.display = 'none';
        const timelineRows = timeRows.querySelectorAll('.wtp-timeline-row');
        timelineRows.forEach(row => {
            const existingSelector = row.querySelector('.wtp-row-time-selector');
            if (existingSelector) existingSelector.remove();
            const rowSelector = document.createElement('div');
            rowSelector.className = 'wtp-row-time-selector';
            rowSelector.style.cssText = `position: absolute; top: 0; bottom: 0; width: 2px; background-color: #4caf50; pointer-events: none; z-index: 5; left: ${percent}%; transform: translateX(-50%);`;
            const timelineTrack = row.querySelector('.wtp-timeline-track');
            if (timelineTrack) timelineTrack.appendChild(rowSelector);
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
            const timeFormatter = new Intl.DateTimeFormat('ko-KR', { timeZone: timezone, hour: 'numeric', minute: 'numeric', hour12: false });
            label.textContent = timeFormatter.format(timeAtCursor);
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
                        migrated.push(entry);
                    } else if (entry.includes('/')) {
                        const [city, country] = findCityCountryByTimezone(entry);
                        if (city && country) migrated.push(`${city},${country}`);
                    }
                });
                if (migrated.length > 0) {
                    selectedCities = new Set(migrated);
                    saveSelectedCities();
                } else {
                    selectedCities.add('New York,USA');
                }
            } else {
                selectedCities.add('New York,USA');
            }
        } else {
            selectedCities.add('New York,USA');
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
        } catch (_) {}
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
                if (Array.isArray(order)) return order;
            }
        } catch (e) {
            console.warn('도시 순서를 로드하지 못했습니다:', e);
        }
        return null;
    }

    function addTimeline(timezone, city, country) {
        const cityKey = `${city},${country}`;
        if (selectedCities.has(cityKey)) return;
        selectedCities.add(cityKey);
        const row = createTimelineRow(timezone, city, country);
        calculateAndSetTimelineHours();
        renderTimelineGrid(row);
        updateSingleRowTimeDisplay(row);
        setTimeout(() => alignTimezoneInfoWidths(), 0);
        saveSelectedCities();
        const currentOrder = Array.from(timeRows.children).map(row => row.dataset.cityKey);
        saveCityOrder(currentOrder);
    }

    function updateSingleRowTimeDisplay(row) {
        const timezone = row.dataset.timezone;
        if (!row || !timezone) return;
        const now = new Date();
        try {
            const timeFormatter = new Intl.DateTimeFormat('ko-KR', { timeZone: timezone, hour: 'numeric', minute: 'numeric', hour12: false });
            const dateFormatter = new Intl.DateTimeFormat('ko-KR', { timeZone: timezone, weekday: 'short', month: 'short', day: 'numeric' });
            const timeString = timeFormatter.format(now);
            const dateString = dateFormatter.format(now);
            const timeElement = row.querySelector('.wtp-current-time');
            timeElement.title = '현재 현지 시간';
            timeElement.innerHTML = `${timeString}<br><span style="font-size: 0.8em; color: #aaa;">${dateString}</span>`;
        } catch (error) {
            console.warn(`시간대 ${timezone}의 시간을 포맷하지 못했습니다:`, error);
            const timeElement = row.querySelector('.wtp-current-time');
            timeElement.title = '잘못된 시간대';
            timeElement.innerHTML = `잘못됨<br><span style="font-size: 0.8em; color: #aaa;">시간대</span>`;
        }
    }

    function updateAllTimeDisplays() {
        const rows = timeRows.querySelectorAll('.wtp-timeline-row');
        rows.forEach(updateSingleRowTimeDisplay);
    }

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
        let displayName = city;
        if (country === 'Timezone' && city.includes('/')) {
            displayName = city.split('/').pop();
        }
        if (country === 'Local') {
            timelineRow.classList.add('wtp-local-timezone');
            displayName += ' (현지)';
            const deleteBtn = timelineRow.querySelector('.wtp-remove-btn');
            if (deleteBtn) deleteBtn.remove();
            timelineRow.draggable = false;
        } else {
            timelineRow.querySelector('.wtp-remove-btn').onclick = () => removeTimeline(cityKey); 
        }
        cityElement.textContent = displayName;
        if (displayName.length > 15) cityElement.setAttribute('data-very-long', 'true');
        else if (displayName.length > 10) cityElement.setAttribute('data-long', 'true');
        timelineRow.querySelector('.wtp-current-time').textContent = '--:--';
        const timezoneInfo = timelineRow.querySelector('.wtp-timezone-info');
        const timelineTrack = timelineRow.querySelector('.wtp-timeline-track');
        timezoneInfo.draggable = true;
        timezoneInfo.addEventListener('dragstart', handleDragStart);
        timezoneInfo.addEventListener('dragover', handleDragOver);
        timezoneInfo.addEventListener('drop', handleDrop);
        timezoneInfo.addEventListener('dragend', handleDragEnd);
        timelineTrack.draggable = false;
        timelineRow.draggable = false;
        timeRows.appendChild(timelineRow);
        return timelineRow;
    }

    function populatePopularCities() { 
        const popularCitiesList = document.getElementById('popular-cities-list');
        if (!popularCitiesList) return;
        popularCitiesList.innerHTML = '';
        let addedCount = 0;
        popularCities.forEach(({ city, country }) => { 
            const timezone = timezoneData[country] && timezoneData[country][city] ? timezoneData[country][city] : null;
            if (!timezone) return;
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
        const timezoneDataList = [
            { label: 'Pacific/Midway', timezone: 'Pacific/Midway' }, { label: 'Pacific/Pago_Pago', timezone: 'Pacific/Pago_Pago' }, { label: 'Pacific/Honolulu', timezone: 'Pacific/Honolulu' }, { label: 'America/Anchorage', timezone: 'America/Anchorage' }, { label: 'America/Los_Angeles', timezone: 'America/Los_Angeles' }, { label: 'America/Denver', timezone: 'America/Denver' }, { label: 'America/Chicago', timezone: 'America/Chicago' }, { label: 'America/New_York', timezone: 'America/New_York' }, { label: 'America/Caracas', timezone: 'America/Caracas' }, { label: 'America/Sao_Paulo', timezone: 'America/Sao_Paulo' }, { label: 'Atlantic/South_Georgia', timezone: 'Atlantic/South_Georgia' }, { label: 'Atlantic/Azores', timezone: 'Atlantic/Azores' }, { label: 'Europe/London', timezone: 'Europe/London' }, { label: 'Europe/Paris', timezone: 'Europe/Paris' }, { label: 'Europe/Athens', timezone: 'Europe/Athens' }, { label: 'Europe/Moscow', timezone: 'Europe/Moscow' }, { label: 'Asia/Dubai', timezone: 'Asia/Dubai' }, { label: 'Asia/Karachi', timezone: 'Asia/Karachi' }, { label: 'Asia/Dhaka', timezone: 'Asia/Dhaka' }, { label: 'Asia/Bangkok', timezone: 'Asia/Bangkok' }, { label: 'Asia/Shanghai', timezone: 'Asia/Shanghai' }, { label: 'Asia/Tokyo', timezone: 'Asia/Tokyo' }, { label: 'Australia/Sydney', timezone: 'Australia/Sydney' }, { label: 'Pacific/Norfolk', timezone: 'Pacific/Norfolk' }, { label: 'Pacific/Auckland', timezone: 'Pacific/Auckland' }
        ];
        timezoneDataList.forEach(({ label, timezone }) => {
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
        countryList.innerHTML = '';
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
        const countryInfo = countryTimeInfo[country];
        if (countryInfo) {
            modalCountryInfo.innerHTML = `<div class="wtp-timezone-info-box"><div class="wtp-timezone-description">${countryInfo.description}</div></div>`;
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
        if (cityKey.endsWith(',Local')) return;
        selectedCities.delete(cityKey); 
        const row = timeRows.querySelector(`[data-city-key="${cityKey}"]`); 
        if (row) row.remove(); 
        updateCheckbox(cityKey, false); 
        saveSelectedCities();
        const currentOrder = Array.from(timeRows.children).map(row => row.dataset.cityKey);
        saveCityOrder(currentOrder);
    }

    function alignTimezoneInfoWidths() {
        const timezoneInfoElements = timeRows.querySelectorAll('.wtp-timezone-info');
        if (timezoneInfoElements.length === 0) return;
        timezoneInfoElements.forEach(el => el.style.width = 'auto');
        let maxWidth = 0;
        timezoneInfoElements.forEach(el => {
            const width = el.offsetWidth;
            if (width > maxWidth) maxWidth = width;
        });
        timezoneInfoElements.forEach(el => el.style.width = maxWidth + 'px');
    }

    function handleDragStart(e) {
        draggedElement = this.closest('.wtp-timeline-row');
        if (draggedElement && draggedElement.classList.contains('wtp-local-timezone')) {
            e.preventDefault();
            return false;
        }
        this.style.opacity = '0.5';
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', draggedElement.outerHTML);
        e.stopPropagation();
    }

    function handleDragOver(e) {
        if (e.preventDefault) e.preventDefault();
        const targetRow = this.closest('.wtp-timeline-row');
        if (targetRow && targetRow.classList.contains('wtp-local-timezone')) {
            e.dataTransfer.dropEffect = 'none';
            e.stopPropagation();
            return false;
        }
        e.dataTransfer.dropEffect = 'move';
        e.stopPropagation();
        return false;
    }

    function handleDrop(e) {
        if (e.stopPropagation) e.stopPropagation();
        const targetRow = this.closest('.wtp-timeline-row');
        if (targetRow && targetRow.classList.contains('wtp-local-timezone')) return false;
        if (draggedElement !== targetRow) {
            const currentOrder = Array.from(timeRows.children).map(row => row.dataset.cityKey);
            const draggedIndex = currentOrder.indexOf(draggedElement.dataset.cityKey);
            const targetIndex = currentOrder.indexOf(targetRow.dataset.cityKey);
            const newOrder = [...currentOrder];
            newOrder.splice(draggedIndex, 1);
            newOrder.splice(targetIndex, 0, draggedElement.dataset.cityKey);
            const fragment = document.createDocumentFragment();
            newOrder.forEach(cityKey => {
                const element = timeRows.querySelector(`[data-city-key="${cityKey}"]`);
                if (element) fragment.appendChild(element);
            });
            timeRows.appendChild(fragment);
            saveCityOrder(newOrder);
        }
        return false;
    }

    function handleDragEnd(e) {
        this.style.opacity = '';
        draggedElement = null;
        e.stopPropagation();
    }

    function renderAllTimelineGrids() { 
        document.querySelectorAll('.wtp-row-time-selector').forEach(selector => selector.remove());
        const rows = timeRows.querySelectorAll('.wtp-timeline-row'); 
        rows.forEach(renderTimelineGrid); 
        updateAllTimeDisplays();
        alignTimezoneInfoWidths();
    }

    function renderTimelineGrid(row) {
        const timezone = row.dataset.timezone;
        const timelineTrack = row.querySelector('.wtp-timeline-track');
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
        hoursContainer.innerHTML = '';
        datesContainer.innerHTML = '';
        const baseDate = parseDate(datePicker.value);
        if (!baseDate) return;
        const startOfDisplay = new Date(baseDate);
        const hourFormatter = new Intl.DateTimeFormat('ko-KR', { timeZone: timezone, hour: 'numeric', hour12: false });
        const fullDateFormatter = new Intl.DateTimeFormat('ko-KR', { timeZone: timezone, year: 'numeric', month: 'numeric', day: 'numeric' });
        const weekdayFormatter = new Intl.DateTimeFormat('ko-KR', { timeZone: timezone, weekday: 'short' });
        const ymdPartsFormatter = new Intl.DateTimeFormat('ko-KR', { timeZone: timezone, year: 'numeric', month: '2-digit', day: '2-digit' });
        const now = new Date();
        const currentHourInTimezone = parseInt(hourFormatter.format(now), 10);
        const currentDateInTimezone = fullDateFormatter.format(now);
        function getYMD(dateObj) {
            const parts = ymdPartsFormatter.formatToParts(dateObj);
            const map = {};
            parts.forEach(p => { if (p.type !== 'literal') map[p.type] = p.value; });
            return `${map.year}-${map.month}-${map.day}`;
        }
        const currentYMD = getYMD(now);
        const hourDayGroups = [];
        let lastDate = '';
        for (let i = 0; i < TIMELINE_HOURS; i++) {
            const timeForThisBlock = new Date(startOfDisplay);
            timeForThisBlock.setHours(startOfDisplay.getHours() + i + timelineStartOffsetHours);
            const dateOfThisBlock = fullDateFormatter.format(timeForThisBlock);
            if (i === 0 || dateOfThisBlock !== lastDate) {
                const hourDayGroup = document.createElement('div');
                hourDayGroup.className = 'wtp-hour-day-group';
                const topArea = document.createElement('div');
                topArea.className = 'wtp-hour-day-group-top';
                hourDayGroup.appendChild(topArea);
                const bottomArea = document.createElement('div');
                bottomArea.className = 'wtp-hour-day-group-bottom';
                bottomArea.appendChild(document.createElement('div'));
                hourDayGroup.appendChild(bottomArea);
                hoursContainer.appendChild(hourDayGroup);
                hourDayGroups.push(hourDayGroup);
                lastDate = dateOfThisBlock;
            }
        }
        lastDate = '';
        let currentHourDayGroupIndex = 0;
        for (let i = 0; i < TIMELINE_HOURS; i++) {
            const timeForThisBlock = new Date(startOfDisplay);
            timeForThisBlock.setHours(startOfDisplay.getHours() + i + timelineStartOffsetHours);
            const localHour = parseInt(hourFormatter.format(timeForThisBlock), 10);
            const dateOfThisBlock = fullDateFormatter.format(timeForThisBlock);
            const weekdayShort = weekdayFormatter.format(timeForThisBlock);
            const ymdOfThisBlock = getYMD(timeForThisBlock);
            if (i > 0 && dateOfThisBlock !== lastDate) {
                currentHourDayGroupIndex++;
            }
            const hourDiv = document.createElement('div');
            hourDiv.className = 'wtp-timeline-hour ' + getTimeOfDay(localHour);
            if (weekdayShort === '토' || weekdayShort === '일') {
                hourDiv.classList.add('weekend');
            }
            hourDiv.dataset.hour = localHour;
            if (dateOfThisBlock === currentDateInTimezone && localHour === currentHourInTimezone) {
                hourDiv.classList.add('wtp-current-hour');
                const currentTimeIndicator = document.createElement('div');
                currentTimeIndicator.className = 'wtp-current-time-indicator';
                currentTimeIndicator.textContent = '지금';
                hourDiv.appendChild(currentTimeIndicator);
            }
            if (ymdOfThisBlock < currentYMD || (ymdOfThisBlock === currentYMD && localHour < currentHourInTimezone)) {
                hourDiv.classList.add('past-hour');
            }
            const topArea = hourDayGroups[currentHourDayGroupIndex].querySelector('.wtp-hour-day-group-top');
            topArea.appendChild(hourDiv);
            lastDate = dateOfThisBlock;
        }
        hourDayGroups.forEach((hourDayGroup, index) => {
            const topArea = hourDayGroup.querySelector('.wtp-hour-day-group-top');
            const bottomArea = hourDayGroup.querySelector('.wtp-hour-day-group-bottom');
            const hourCount = topArea.querySelectorAll('.wtp-timeline-hour').length;
            bottomArea.innerHTML = '';
            if (hourCount >= 2) {
                const hourBlocks = topArea.querySelectorAll('.wtp-timeline-hour');
                if (hourBlocks.length > 0) {
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
                        const timeForDate = new Date(startOfDisplay);
                        timeForDate.setHours(startOfDisplay.getHours() + startIndex + timelineStartOffsetHours);
                        const dateDisplay = document.createElement('div');
                        dateDisplay.className = 'wtp-date-display';
                        const timezone = row.dataset.timezone;
                        const timezoneWeekdayFormatter = new Intl.DateTimeFormat('ko-KR', { timeZone: timezone, weekday: 'short' });
                        const timezoneDateFormatter = new Intl.DateTimeFormat('ko-KR', { timeZone: timezone, year: 'numeric', month: 'numeric', day: 'numeric' });
                        const weekdayShort = timezoneWeekdayFormatter.format(timeForDate);
                        const fullDate = timezoneDateFormatter.format(timeForDate);
                        const dateParts = fullDate.split('. ');
                        const year = dateParts[0];
                        const month = dateParts[1];
                        const day = dateParts[2].replace('.','');
                        const dateText = document.createElement('span');
                        dateText.className = 'wtp-date-text';
                        dateText.textContent = `${weekdayShort} ${month}/${day}`;
                        dateText.setAttribute('data-full-date', `${weekdayShort} ${year}/${month}/${day}`);
                        dateDisplay.appendChild(dateText);
                        bottomArea.appendChild(dateDisplay);
                    }
                }
            }
        });
    }

    function startRangeSelection(percent) {
        isRangeSelecting = true;
        rangeStartPercent = percent;
        rangeEndPercent = percent;
        timeSelector.style.display = 'none';
        document.querySelectorAll('.wtp-hover-time-label').forEach(l => l.style.display = 'none');
        document.querySelectorAll('.wtp-row-time-selector').forEach(selector => selector.remove());
        createRangeOverlay();
        updateRangeSelection(percent);
    }
    
    function updateRangeSelection(percent) {
        rangeEndPercent = percent;
        if (rangeOverlay && Array.isArray(rangeOverlay)) {
            const startPercent = Math.min(rangeStartPercent, rangeEndPercent);
            const widthPercent = Math.abs(rangeEndPercent - rangeStartPercent);
            rangeOverlay.forEach((overlay, index) => {
                overlay.style.left = startPercent + '%';
                overlay.style.width = widthPercent + '%';
                if (index === 0) {
                    const button = overlay.querySelector('.wtp-range-overlay-button');
                    if (button) button.style.display = 'block';
                }
            });
        }
    }
    
    function endRangeSelection(percent) {
        rangeEndPercent = percent;
        isRangeSelecting = false;
        isMouseDown = false;
        const startPercent = Math.min(rangeStartPercent, rangeEndPercent);
        const endPercent = Math.max(rangeStartPercent, rangeEndPercent);
        const widthPercent = endPercent - startPercent;
        if (widthPercent <= 0) {
            clearRangeSelection();
            hasSelectedRange = false;
            return;
        }
        hasSelectedRange = true;
        showTimeRangeDialog(startPercent, endPercent);
    }
    
    function clearRangeSelection() {
        if (rangeOverlay && Array.isArray(rangeOverlay)) {
            rangeOverlay.forEach(overlay => overlay.remove());
            rangeOverlay = null;
        }
        clearMobileSelection();
        hasSelectedRange = false;
        isRangeSelecting = false;
        isMouseDown = false;
        rangeStartPercent = 0;
        rangeEndPercent = 0;
    }
    
    function handleMobileTouch(percent) {
        clearMobileSelection();
        const startPercent = percent;
        const endPercent = Math.min(100, percent + (60 / (24 * 60)) * 100); // 1 hour duration
        showMobileTimeIndicator(percent);
        createMobileRangeOverlay(startPercent, endPercent);
        currentTimeRange = {
            startPercent: startPercent,
            endPercent: endPercent,
            startTime: calculateTimeFromPercent(startPercent),
            endTime: calculateTimeFromPercent(endPercent)
        };
    }
    
    function clearMobileSelection() {
        document.querySelectorAll('.wtp-row-time-selector').forEach(selector => selector.remove());
        document.querySelectorAll('.wtp-hover-time-label').forEach(label => label.style.display = 'none');
        document.querySelectorAll('.wtp-mobile-view-times-btn').forEach(button => button.remove());
    }
    
    function showMobileTimeIndicator(percent) {
        const timelineRows = timeRows.querySelectorAll('.wtp-timeline-row');
        timelineRows.forEach(row => {
            const existingSelector = row.querySelector('.wtp-row-time-selector');
            if (existingSelector) existingSelector.remove();
            const rowSelector = document.createElement('div');
            rowSelector.className = 'wtp-row-time-selector';
            rowSelector.style.cssText = `position: absolute; top: 0; bottom: 0; width: 2px; background-color: #4caf50; pointer-events: none; z-index: 5; left: ${percent}%; transform: translateX(-50%);`;
            const timelineTrack = row.querySelector('.wtp-timeline-track');
            if (timelineTrack) timelineTrack.appendChild(rowSelector);
        });
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
            const timeFormatter = new Intl.DateTimeFormat('ko-KR', { timeZone: timezone, hour: 'numeric', minute: 'numeric', hour12: false });
            label.textContent = timeFormatter.format(timeAtCursor);
            label.style.left = `${percent}%`;
            label.style.transform = 'translate(-50%, -100%)';
            label.style.display = 'block';
        });
    }
    
    function createMobileRangeOverlay(startPercent, endPercent) {
        const firstRow = timeRows.querySelector('.wtp-timeline-row');
        if (!firstRow) return;
        const timelineTrack = firstRow.querySelector('.wtp-timeline-track');
        const button = document.createElement('button');
        button.className = 'wtp-mobile-view-times-btn';
        button.textContent = '시간 보기';
        button.style.cssText = `position: absolute; top: -45px; left: ${startPercent}%; transform: translateX(-50%); background-color: rgba(76, 175, 80, 0.95); color: white; border: none; padding: 6px 4px; border-radius: 8px; font-size: 0.6em; font-weight: 500; cursor: pointer; z-index: 20; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4); pointer-events: auto; min-width: 70px; text-align: center;`;
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            clearMobileSelection();
            showMobileTimeIndicator(startPercent);
            showTimeRangeDialog(startPercent, endPercent);
        });
        button.addEventListener('touchstart', (e) => { e.preventDefault(); e.stopPropagation(); });
        button.addEventListener('touchend', (e) => {
            e.preventDefault();
            e.stopPropagation();
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
    
    function formatDateForDisplay(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function updateRangeInfo(timeRange) {
        if (!timeRange) return;
        currentTimeRange = timeRange;
        const durationHours = Math.floor(timeRange.duration / 3600000);
        const durationMinutes = Math.floor((timeRange.duration % 3600000) / 60000);
        document.getElementById('wtp-start-date-display').textContent = formatDateForDisplay(timeRange.start);
        document.getElementById('wtp-start-time-display').textContent = formatTimeForInput(timeRange.start);
        document.getElementById('wtp-end-date-display').textContent = formatDateForDisplay(timeRange.end);
        document.getElementById('wtp-end-time-display').textContent = formatTimeForInput(timeRange.end);
        document.getElementById('wtp-duration-display').textContent = `${durationHours}시간 ${durationMinutes}분`;
    }

    function updateTimezoneTimesDisplay(timezoneTimesData) {
        timezoneTimes.innerHTML = '';
        const list = document.createElement('ul');
        list.className = 'wtp-timezone-times-list';
        timezoneTimesData.forEach(data => {
            const item = document.createElement('li');
            const start = new Date(data.start.replace(/(\d{4}). (\d{2}). (\d{2})./, '$1-$2-$3T'));
            const end = new Date(data.end.replace(/(\d{4}). (\d{2}). (\d{2})./, '$1-$2-$3T'));
            const startFormatted = start.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
            const endFormatted = end.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
            const startDateFormatted = start.toLocaleDateString('ko-KR', { weekday: 'short', month: 'short', day: 'numeric' });
            item.innerHTML = `<strong>${data.city}:</strong> ${startFormatted} - ${endFormatted} <span class="wtp-date-small">(${startDateFormatted})</span>`;
            list.appendChild(item);
        });
        timezoneTimes.appendChild(list);
    }

    document.getElementById('wtp-google-meeting-btn').addEventListener('click', () => {
        if (!currentTimeRange) return;
        const { start, end } = currentTimeRange;
        const title = '예약된 회의';
        const details = '회의 세부 정보';
        const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start.toISOString().replace(/-|:|	erweight\d+/g, '')}/${end.toISOString().replace(/-|:|	erweight\d+/g, '')}&details=${encodeURIComponent(details)}`;
        window.open(url, '_blank');
    });

    document.getElementById('wtp-outlook-meeting-btn').addEventListener('click', () => {
        if (!currentTimeRange) return;
        const { start, end } = currentTimeRange;
        const title = '예약된 회의';
        const url = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(title)}&startdt=${start.toISOString()}&enddt=${end.toISOString()}&body=${encodeURIComponent('회의 세부 정보')}`;
        window.open(url, '_blank');
    });

    document.getElementById('wtp-yahoo-meeting-btn').addEventListener('click', () => {
        if (!currentTimeRange) return;
        const { start, end } = currentTimeRange;
        const title = '예약된 회의';
        const durationHours = String(Math.floor((end - start) / 3600000)).padStart(2, '0');
        const durationMinutes = String(Math.floor(((end - start) % 3600000) / 60000)).padStart(2, '0');
        const url = `https://calendar.yahoo.com/?v=60&view=d&type=20&title=${encodeURIComponent(title)}&st=${start.toISOString().replace(/-|:|	erweight\d+/g, '')}&dur=${durationHours}${durationMinutes}`;
        window.open(url, '_blank');
    });

    document.querySelectorAll('.wtp-time-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (!currentTimeRange) return;
            const { target, direction } = btn.dataset;
            const amount = (direction === 'increase') ? 15 : -15;
            if (target === 'start') {
                currentTimeRange.start.setMinutes(currentTimeRange.start.getMinutes() + amount);
            } else if (target === 'end') {
                currentTimeRange.end.setMinutes(currentTimeRange.end.getMinutes() + amount);
            } else if (target === 'duration') {
                currentTimeRange.end.setMinutes(currentTimeRange.end.getMinutes() + amount);
            }
            currentTimeRange.duration = currentTimeRange.end - currentTimeRange.start;
            if (currentTimeRange.duration < 0) {
                if (target === 'start') currentTimeRange.start.setMinutes(currentTimeRange.start.getMinutes() - amount);
                else currentTimeRange.end.setMinutes(currentTimeRange.end.getMinutes() - amount);
                return;
            }
            updateRangeInfo(currentTimeRange);
            const timezoneTimesData = calculateTimezoneTimes(currentTimeRange);
            updateTimezoneTimesDisplay(timezoneTimesData);
        });
    });

    init();
});
