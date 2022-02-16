import { Component } from "../type";

export const position = ["left", "right", "bottom", "top"];

export const description = `Button with Icon`;

export const docKey = "button";

export const body: Component = ({ Button }) => (
  <Button __options={["iconPosition", "onPress", "icon", "title"]} $ />
);
