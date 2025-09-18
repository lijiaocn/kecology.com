document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const popularCitiesList = document.getElementById('popular-cities-list');
    const countryList = document.getElementById('country-list');
    const modal = document.getElementById('city-modal');
    const modalCountryName = document.getElementById('modal-country-name');
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
    let selectedTimezones = new Set();
    let currentTimeValue = 24; // Represents 30-min intervals from midnight
    let timelineStartOffsetHours = 0;

    const timezoneData = {
        'USA': {
            'New York': 'America/New_York',
            'Chicago': 'America/Chicago',
            'Denver': 'America/Denver',
            'Los Angeles': 'America/Los_Angeles',
        },
        'UK': { 'London': 'Europe/London' },
        'Japan': { 'Tokyo': 'Asia/Tokyo' },
        'China': { 'Shanghai': 'Asia/Shanghai' },
        'India': { 'Kolkata': 'Asia/Kolkata' },
        'Australia': { 'Sydney': 'Australia/Sydney' },
        'Germany': { 'Berlin': 'Europe/Berlin' },
    };

    const popularCities = [
        { city: 'New York', country: 'USA' },
        { city: 'London', country: 'UK' },
        { city: 'Tokyo', country: 'Japan' },
        { city: 'Shanghai', country: 'China' },
        { city: 'Sydney', country: 'Australia' },
        { city: 'Berlin', country: 'Germany' },
    ];

    function calculateAndSetTimelineHours() {
        const container = document.getElementById('wtp-timeline-container');
        const availableWidth = container.offsetWidth - 100 - (2 * 24); // container - info_box - container_padding
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
        loadSelectedTimezones();
        populatePopularCities();
        populateCountries();
        addEventListeners();
        renderInitialRows(); // Create a row first so we can measure it
        calculateAndSetTimelineHours();
        goToNow(); // Set initial time to now
        renderDateButtons();
        setInterval(renderAllTimelineGrids, 60 * 1000);
    }

    function renderDateButtons() {
        dateButtonsContainer.innerHTML = '';
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const selectedDate = parseDate(datePicker.value);

        for (let i = 0; i < 7; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);

            const button = document.createElement('button');
            button.classList.add('wtp-date-button');

            const dayStr = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                .toISOString()
                .split("T")[0];
            button.textContent = date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
            button.dataset.date = dayStr;

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
        datePicker.valueAsDate = now;
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const diffMinutes = (now - startOfDay) / 60000;
        currentTimeValue = Math.round(diffMinutes / 30);
        timelineStartOffsetHours = new Date().getHours() - 2;
        scrollLeftBtn.disabled = false;
        renderAllTimelineGrids(); // Re-render grids for the new date and update times
        renderDateButtons();
    }

    function renderInitialRows() {
        selectedTimezones.forEach(tz => {
            const [city, country] = findCityCountryByTimezone(tz);
            if (city) createTimelineRow(tz, city, country);
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

        rowsWrapper.addEventListener('mousemove', (e) => {
            const firstRow = timeRows.querySelector('.wtp-timeline-row');
            if (!firstRow) return;

            const timelineTrack = firstRow.querySelector('.wtp-timeline-track');
            const trackRect = timelineTrack.getBoundingClientRect();
            const wrapperRect = rowsWrapper.getBoundingClientRect();

            if (e.clientX >= trackRect.left && e.clientX <= trackRect.right) {
                timeSelector.style.display = 'block';
                const offsetX = e.clientX - trackRect.left;
                const percent = (offsetX / trackRect.width) * 100;
                const selectorLeft = e.clientX - wrapperRect.left;

                handleRowsMouseMove(percent, selectorLeft);
            } else {
                timeSelector.style.display = 'none';
            }
        });

        rowsWrapper.addEventListener('mouseleave', () => {
            timeSelector.style.display = 'none';
            document.querySelectorAll('.wtp-hover-time-label').forEach(l => l.style.display = 'none');
        });

        scrollRightBtn.addEventListener('click', () => {
            timelineStartOffsetHours += 2;
            renderAllTimelineGrids();
            scrollLeftBtn.disabled = false; // Enable left scroll
        });

        scrollLeftBtn.addEventListener('click', () => {
            timelineStartOffsetHours -= 2;
            renderAllTimelineGrids();
        });

        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                calculateAndSetTimelineHours();
                renderAllTimelineGrids();
            }, 200);
        });
    }

    function handleRowsMouseMove(percent, selectorLeft) {
        timeSelector.style.left = `${selectorLeft}px`;

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
            label.style.left = `${percent}%`;
            label.style.display = 'block';
        });
    }

    function loadSelectedTimezones() {
        const saved = localStorage.getItem('worldTimePlanner_selected');
        if (saved) {
            const savedTimezones = JSON.parse(saved);
            if (Array.isArray(savedTimezones) && savedTimezones.length > 0) {
                selectedTimezones = new Set(savedTimezones);
            } else {
                selectedTimezones.add('America/New_York'); // Default if saved is empty/invalid
            }
        } else {
            selectedTimezones.add('America/New_York'); // Default for first-time users
        }
    }

    function saveSelectedTimezones() {
        localStorage.setItem('worldTimePlanner_selected', JSON.stringify(Array.from(selectedTimezones)));
    }

    function addTimeline(timezone, city, country) {
        if (selectedTimezones.has(timezone)) return;
        selectedTimezones.add(timezone);
        const row = createTimelineRow(timezone, city, country);
        renderTimelineGrid(row);
        updateSingleRowTimeDisplay(row);
        saveSelectedTimezones();
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
    function handleCheckboxChange(e) { if (e.target.type !== 'checkbox') return; const { value, checked, dataset } = e.target; if (checked) addTimeline(value, dataset.city, dataset.country); else removeTimeline(value); }
    function handleCountryClick(e) { if (e.target.classList.contains('wtp-country-item')) openCityModal(e.target.dataset.country); }
    function updateCheckbox(timezone, isChecked) { const checkbox = document.querySelector(`input[type="checkbox"][value="${timezone}"]`); if (checkbox) checkbox.checked = isChecked; }

    function createTimelineRow(timezone, city, country) {
        const timelineRow = timelineRowTemplate.content.cloneNode(true).firstElementChild;
        timelineRow.dataset.timezone = timezone;
        timelineRow.querySelector('.wtp-city').textContent = city;
        timelineRow.querySelector('.wtp-current-time').textContent = '--:--';
        timelineRow.querySelector('.wtp-remove-btn').onclick = () => removeTimeline(timezone);
        timeRows.appendChild(timelineRow);
        return timelineRow;
    }

    function populatePopularCities() { popularCities.forEach(({ city, country }) => { const timezone = timezoneData[country][city]; const label = document.createElement('label'); const checkbox = document.createElement('input'); checkbox.type = 'checkbox'; checkbox.value = timezone; checkbox.dataset.city = city; checkbox.dataset.country = country; if (selectedTimezones.has(timezone)) checkbox.checked = true; label.appendChild(checkbox); label.append(`${city}, ${country}`); popularCitiesList.appendChild(label); }); }
    function populateCountries() { for (const country in timezoneData) { const countryItem = document.createElement('div'); countryItem.className = 'wtp-country-item'; countryItem.textContent = country; countryItem.dataset.country = country; countryList.appendChild(countryItem); } }
    function openCityModal(country) { modalCountryName.textContent = country; modalCityList.innerHTML = ''; const cities = timezoneData[country]; for (const city in cities) { const timezone = cities[city]; const label = document.createElement('label'); const checkbox = document.createElement('input'); checkbox.type = 'checkbox'; checkbox.value = timezone; checkbox.dataset.city = city; checkbox.dataset.country = country; if (selectedTimezones.has(timezone)) checkbox.checked = true; label.appendChild(checkbox); label.append(city); modalCityList.appendChild(label); } modal.style.display = 'block'; modalCityList.onchange = handleCheckboxChange; }
    function getTimeOfDay(hour) { if (hour >= 9 && hour < 17) return 'work'; if (hour >= 17 && hour < 22) return 'evening'; if (hour >= 0 && hour < 7) return 'night'; return 'day'; }
    function removeTimeline(timezone) { selectedTimezones.delete(timezone); const row = timeRows.querySelector(`[data-timezone="${timezone}"]`); if (row) row.remove(); updateCheckbox(timezone, false); saveSelectedTimezones(); }
    function renderAllTimelineGrids() { const rows = timeRows.querySelectorAll('.wtp-timeline-row'); rows.forEach(renderTimelineGrid); updateAllTimeDisplays(); }

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
        const dayLabelFormatter = new Intl.DateTimeFormat('en-US', { timeZone: timezone, weekday: 'short', month: 'short', day: 'numeric' });

        const now = new Date();
        const currentHourInTimezone = parseInt(hourFormatter.format(now), 10);
        const currentDateInTimezone = fullDateFormatter.format(now);

        let lastDate = '';

        for (let i = 0; i < TIMELINE_HOURS; i++) {
            const timeForThisBlock = new Date(startOfDisplay);
            timeForThisBlock.setHours(startOfDisplay.getHours() + i + timelineStartOffsetHours);

            const localHour = parseInt(hourFormatter.format(timeForThisBlock), 10);
            const dateOfThisBlock = fullDateFormatter.format(timeForThisBlock);

            const hourDiv = document.createElement('div');
            hourDiv.className = 'wtp-timeline-hour ' + getTimeOfDay(localHour);
            hourDiv.dataset.hour = localHour;

            if (i === 0 || dateOfThisBlock !== lastDate) {
                hourDiv.classList.add('wtp-day-start');
                hourDiv.dataset.dayLabel = dayLabelFormatter.format(timeForThisBlock);
                lastDate = dateOfThisBlock;
            }

            if (dateOfThisBlock === currentDateInTimezone && localHour === currentHourInTimezone) {
                hourDiv.classList.add('wtp-current-hour');
            }

            timelineTrack.appendChild(hourDiv);
        }
    }

    init();
});