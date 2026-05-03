const header = document.querySelector("[data-header]");
const tabsRoot = document.querySelector("[data-tabs]");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 16);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if (tabsRoot) {
  const tabs = [...tabsRoot.querySelectorAll("[data-tab]")];
  const panels = [...tabsRoot.querySelectorAll("[data-panel]")];
  const screens = [...tabsRoot.querySelectorAll("[data-screen]")];

  const activate = (name) => {
    tabs.forEach((tab) => {
      const active = tab.dataset.tab === name;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
    });

    panels.forEach((panel) => {
      const active = panel.dataset.panel === name;
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
    });

    screens.forEach((screen) => {
      screen.classList.toggle("is-active", screen.dataset.screen === name);
    });
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activate(tab.dataset.tab));
  });
}
