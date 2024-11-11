import View from "./view.js";
import Controller from "./controller.js";

document.addEventListener("DOMContentLoaded", () => {
  // Crear una instancia de View y Controller
  const view = new View();
  const controller = new Controller(view);
  
  // Asignar el controlador a la vista
  view.controller = controller;

  // Agregar la vista al DOM
  document.body.appendChild(view);
});
