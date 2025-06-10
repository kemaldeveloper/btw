import { Dropdown } from "bootstrap";

export const initDropdown = () => {
  const drowpdownElementList = document.querySelectorAll(".dropdown-toggle") as NodeListOf<HTMLElement>;
  [...drowpdownElementList].map((dropdownToggleEl) => new Dropdown(dropdownToggleEl));
};
