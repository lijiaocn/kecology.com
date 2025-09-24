document.addEventListener("DOMContentLoaded", () => {
  let isTimePaused = false;
  let overrideTime = null;

  // --- DOM Elements ---
  const globalToggle = document.getElementById('global-time-toggle');
  const timePicker = document.getElementById('time-override-picker');
  const confirmBtn = document.getElementById('confirm-time-btn');
  const resetBtn = document.getElementById('reset-time-btn');
  const allTimeElements = document.querySelectorAll('.time[data-timezone]');
  const toggleSwitchLabel = globalToggle ? globalToggle.closest('.toggle-switch') : null;

  // --- Event Listeners ---

  // Listener for the global auto-refresh toggle switch
  if (globalToggle) {
    globalToggle.addEventListener('change', (event) => {
      isTimePaused = !event.target.checked;
    });
  }

  // Listener for the confirm button
  if (confirmBtn && timePicker) {
    confirmBtn.addEventListener('click', () => {
      const selectedValue = timePicker.value;
      if (selectedValue) {
        overrideTime = new Date(selectedValue);
        if (globalToggle && toggleSwitchLabel) {
          globalToggle.checked = false;
          isTimePaused = true;
          toggleSwitchLabel.classList.add('disabled');
        }
        updateAllTimes();
      }
    });
  }

  // Listener for the reset button
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      overrideTime = null;
      if(timePicker) timePicker.value = '';
      if (globalToggle && toggleSwitchLabel) {
        toggleSwitchLabel.classList.remove('disabled');
        globalToggle.checked = true;
        isTimePaused = false;
      }
      updateAllTimes();
    });
  }

  // --- Time update functionality ---
  function updateAllTimes() {
    let baseTime;

    if (overrideTime) {
      baseTime = overrideTime;
    } else {
      if (isTimePaused) return;
      baseTime = new Date();
    }

    allTimeElements.forEach(el => {
      const timezone = el.dataset.timezone;
      try {
        const time = baseTime.toLocaleTimeString("en-US", {
          timeZone: timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });
        const date = baseTime.toLocaleDateString("en-US", {
          timeZone: timezone,
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        });
        const timeZoneAbbreviation = baseTime.toLocaleTimeString("en-US", {
            timeZone: timezone,
            timeZoneName: 'short'
        }).split(' ').pop();

        el.innerHTML = `${time}<br><small>${date}, ${timeZoneAbbreviation}</small>`;
      } catch (e) {
        el.innerHTML = "Huso horario no válido";
        console.error(`Invalid timezone: ${timezone}`);
      }
    });
  }

  // Initial run and interval setup
  updateAllTimes();
  setInterval(updateAllTimes, 1000);

  // --- Tab functionality ---
  const tabContainer = document.querySelector(".tab-nav");
  if (tabContainer) {
    const tabs = tabContainer.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const isActive = tab.classList.contains("active");

        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        if (!isActive) {
          tab.classList.add("active");
          const activeContent = document.querySelector(`.tab-content[data-country="${tab.dataset.country}"]`);
          if (activeContent) {
            activeContent.classList.add("active");
          }
        }
      });
    });

    const defaultTab = document.querySelector('.tab-link[data-country="usa"]');
    if (defaultTab) {
      defaultTab.click();
    } else if (tabs.length > 0) {
      tabs[0].click();
    }
  }
});