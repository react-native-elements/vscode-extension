import { Component } from "./type";

export const description = "Button";

export const docKey = "button";

export const body: Component = ({ Button }) => (
  <Button __options={["onPress", "title"]} $ />
);
