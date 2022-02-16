import { Component } from "./type";

export const description = "Avatar with Badge";

export const docKey = "badge";

export const body: Component = ({ Avatar, Badge }) => (
  <>
    <Avatar
      source={{
        uri: "$#",
      }}
      __options={["size"]}
      $
    />
    <Badge
      __options={["status"]}
      containerStyle={{ position: "absolute", top: -4, right: -4 }}
      $
    />
  </>
);
