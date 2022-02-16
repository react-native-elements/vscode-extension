import { Component } from "../type";

export const description = "Mini Badge";

export const docKey = "badge";

export const body: Component = ({ Badge }) => (
  <Badge __options={["status"]} $ />
);
