(function () {
  "use strict";

  var STORAGE_KEY = "habit-tracker-state";
  var DAYS = 30;

  var CATEGORIES = [
    { id: "studium", label: "Studium", scale: 6 },
    { id: "spanek", label: "Spánek", scale: 9 },
    { id: "cviceni", label: "Cvičení", scale: 2 },
    { id: "programovani", label: "Programování", scale: 4 },
    { id: "umeni", label: "Umění", scale: 3 },
    { id: "hudba", label: "Hudba", scale: 2 }
  ];

  var dateFormatter = new Intl.DateTimeFormat("cs-CZ", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  var elements = {
    root: document.documentElement,
    themeToggle: document.getElementById("theme-toggle"),
    schemeSelect: document.getElementById("scheme-select"),
    tabs: Array.prototype.slice.call(document.querySelectorAll(".tab")),
    heatmap: document.getElementById("heatmap"),
    heatmapSubtitle: document.getElementById("heatmap-subtitle"),
    tooltip: document.getElementById("tooltip"),
    form: document.getElementById("entry-form"),
    date: document.getElementById("entry-date"),
    hours: document.getElementById("entry-hours"),
    description: document.getElementById("entry-description"),
    formMessage: document.getElementById("form-message"),
    summaryList: document.getElementById("summary-list"),
    summaryRange: document.getElementById("summary-range"),
    summaryTotal: document.getElementById("summary-total")
  };

  var state = loadState();
  var activeCategory = "studium";

  function toKey(date) {
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var day = String(date.getDate()).padStart(2, "0");
    return date.getFullYear() + "-" + month + "-" + day;
  }

  function fromKey(key) {
    var parts = key.split("-");
    return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
  }

  function defaultState() {
    return { theme: "light", scheme: "green", startDate: toKey(new Date()), entries: {} };
  }

  function loadState() {
    var fallback = defaultState();
    var raw;
    try {
      raw = window.localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return fallback;
    }
    if (!raw) {
      return fallback;
    }
    try {
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") {
        return fallback;
      }
      return {
        theme: parsed.theme === "dark" ? "dark" : "light",
        scheme: ["green", "red", "blue", "yellow", "purple"].indexOf(parsed.scheme) >= 0 ? parsed.scheme : "green",
        startDate: typeof parsed.startDate === "string" ? parsed.startDate : fallback.startDate,
        entries: parsed.entries && typeof parsed.entries === "object" ? parsed.entries : {}
      };
    } catch (error) {
      return fallback;
    }
  }

  function saveState() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      /* Uložení není v prototypu kritické. */
    }
  }

  function getDay(key) {
    return state.entries[key] || null;
  }

  function getRecord(key, categoryId) {
    var day = getDay(key);
    return (day && day[categoryId]) || null;
  }

  function formatHours(value) {
    var rounded = Math.round(value * 100) / 100;
    return rounded.toLocaleString("cs-CZ", { maximumFractionDigits: 2 }) + " h";
  }

  function lastDays() {
    var days = [];
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    for (var i = DAYS - 1; i >= 0; i -= 1) {
      var date = new Date(today);
      date.setDate(today.getDate() - i);
      days.push(date);
    }
    return days;
  }

  function levelFor(hours, scale) {
    if (!hours || hours <= 0) {
      return 0;
    }
    var ratio = hours / scale;
    if (ratio <= 0.25) {
      return 1;
    }
    if (ratio <= 0.5) {
      return 2;
    }
    if (ratio <= 0.85) {
      return 3;
    }
    return 4;
  }

  function categoryById(id) {
    for (var i = 0; i < CATEGORIES.length; i += 1) {
      if (CATEGORIES[i].id === id) {
        return CATEGORIES[i];
      }
    }
    return CATEGORIES[0];
  }

  function renderHeatmap() {
    var category = categoryById(activeCategory);
    elements.heatmapSubtitle.textContent = category.label;
    elements.heatmap.textContent = "";

    lastDays().forEach(function (date) {
      var key = toKey(date);
      var record = getRecord(key, category.id);
      var hours = record ? record.hours : 0;
      var cell = document.createElement("div");
      cell.className = "day";
      cell.dataset.level = String(levelFor(hours, category.scale));
      cell.dataset.key = key;
      cell.tabIndex = 0;
      cell.setAttribute("role", "img");
      cell.setAttribute("aria-label", dateFormatter.format(date) + ", " + category.label + ": " + formatHours(hours));
      elements.heatmap.appendChild(cell);
    });
  }

  function renderTooltip(key) {
    var tooltip = elements.tooltip;
    tooltip.textContent = "";

    var title = document.createElement("span");
    title.className = "tooltip-date";
    title.textContent = dateFormatter.format(fromKey(key));
    tooltip.appendChild(title);

    var category = categoryById(activeCategory);
    var record = getRecord(key, category.id);
    var row = document.createElement("div");
    row.className = "tooltip-row";
    var label = document.createElement("span");
    label.textContent = category.label;
    var value = document.createElement("span");
    value.textContent = formatHours(record ? record.hours : 0);
    row.appendChild(label);
    row.appendChild(value);
    tooltip.appendChild(row);

    if (record && record.description) {
      var note = document.createElement("p");
      note.className = "tooltip-desc";
      note.textContent = category.label + ": " + record.description;
      tooltip.appendChild(note);
    } else if (!record) {
      var empty = document.createElement("p");
      empty.className = "tooltip-desc";
      empty.textContent = "Žádný záznam pro tento den.";
      tooltip.appendChild(empty);
    }
  }

  function showTooltip(cell) {
    renderTooltip(cell.dataset.key);
    elements.tooltip.hidden = false;

    var cellRect = cell.getBoundingClientRect();
    var tipRect = elements.tooltip.getBoundingClientRect();
    var left = cellRect.left + cellRect.width / 2 - tipRect.width / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - tipRect.width - 8));
    var top = cellRect.top - tipRect.height - 10;
    if (top < 8) {
      top = cellRect.bottom + 10;
    }
    elements.tooltip.style.left = left + "px";
    elements.tooltip.style.top = top + "px";
  }

  function hideTooltip() {
    elements.tooltip.hidden = true;
  }

  function daysSinceStart() {
    var start = fromKey(state.startDate);
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    var diff = Math.floor((today - start) / 86400000) + 1;
    return diff > 0 ? diff : 1;
  }

  function renderSummary() {
    var days = daysSinceStart();
    elements.summaryRange.textContent =
      "Od " + dateFormatter.format(fromKey(state.startDate)) + " (" + days + " dní)";

    elements.summaryList.textContent = "";
    var total = 0;

    CATEGORIES.forEach(function (category) {
      var sum = 0;
      Object.keys(state.entries).forEach(function (key) {
        var record = getRecord(key, category.id);
        if (record) {
          sum += record.hours;
        }
      });
      var average = sum / days;
      total += average;

      var item = document.createElement("li");
      item.className = "summary-item";
      var label = document.createElement("span");
      label.textContent = category.label;
      var value = document.createElement("strong");
      value.textContent = formatHours(average);
      item.appendChild(label);
      item.appendChild(value);
      elements.summaryList.appendChild(item);
    });

    elements.summaryTotal.textContent = formatHours(total);
  }

  function render() {
    renderHeatmap();
    renderSummary();
  }

  function applyTheme() {
    elements.root.dataset.theme = state.theme;
    elements.themeToggle.textContent = state.theme === "light" ? "Tmavý motiv" : "Světlý motiv";
  }

  function applyScheme() {
    elements.root.dataset.scheme = state.scheme;
    elements.schemeSelect.value = state.scheme;
  }

  elements.themeToggle.addEventListener("click", function () {
    state.theme = state.theme === "light" ? "dark" : "light";
    applyTheme();
    saveState();
  });

  elements.schemeSelect.addEventListener("change", function (event) {
    state.scheme = event.target.value;
    applyScheme();
    saveState();
  });

  elements.tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      activeCategory = tab.dataset.category;
      elements.tabs.forEach(function (item) {
        var isActive = item === tab;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-selected", isActive ? "true" : "false");
      });
      hideTooltip();
      renderHeatmap();
    });
  });

  elements.heatmap.addEventListener("mouseover", function (event) {
    var cell = event.target.closest(".day");
    if (cell) {
      showTooltip(cell);
    }
  });

  elements.heatmap.addEventListener("mouseout", function (event) {
    if (event.target.closest(".day")) {
      hideTooltip();
    }
  });

  elements.heatmap.addEventListener("focusin", function (event) {
    var cell = event.target.closest(".day");
    if (cell) {
      showTooltip(cell);
    }
  });

  elements.heatmap.addEventListener("focusout", hideTooltip);
  window.addEventListener("scroll", hideTooltip, true);

  elements.form.addEventListener("submit", function (event) {
    event.preventDefault();
    var key = elements.date.value;
    var hours = Number(elements.hours.value);

    if (!key || !isFinite(hours) || hours < 0 || hours > 24) {
      elements.formMessage.textContent = "Zadej platné datum a počet hodin (0–24).";
      return;
    }

    var day = state.entries[key] || {};
    day[activeCategory] = {
      hours: hours,
      description: elements.description.value.trim()
    };
    state.entries[key] = day;

    if (key < state.startDate) {
      state.startDate = key;
    }

    saveState();
    render();

    elements.formMessage.textContent =
      "Záznam uložen – " + categoryById(activeCategory).label + ", " + formatHours(hours) + ".";
    elements.hours.value = "";
    elements.description.value = "";
  });

  elements.date.value = toKey(new Date());
  elements.date.max = toKey(new Date());
  applyTheme();
  applyScheme();
  render();
})();
