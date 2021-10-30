import {animInicio, animProyectos, animContacto} from './animaciones.js'


const tabs = document.querySelectorAll("[data-tab-target]");
const tab_content = document.querySelectorAll(".tab-content");


const proyectos = () => {
  console.log("proyectos");
};
const contacto = () => {
  console.log("contacto");
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tab_content.forEach((tabContent) => {
      tabContent.classList.remove("tab-content-active");
    });
    target.classList.add("tab-content-active");

    // tab.dataset.tabTarget.replace('#', '') === "inicio" ? inicio() : console.log("nada")

    if (tab.dataset.tabTarget.replace("#", "") === "inicio") {
      animInicio();
    } else if (tab.dataset.tabTarget.replace("#", "") === "proyectos") {
      animProyectos();
    } else {
      animContacto();
    }
  });
});
