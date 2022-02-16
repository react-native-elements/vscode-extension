import { Component } from "./type";

export const description = `Button Group`;

export const docKey = "button_group";

export const body: Component = ({ ButtonGroup }) => (
  <ButtonGroup __options={["onPress", "selectedIndex", "button"]} $ />
);
