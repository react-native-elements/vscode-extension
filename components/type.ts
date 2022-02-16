import { FullTheme } from "react-native-elements";

export type Component = React.FC<
  {
    [K in keyof FullTheme]: React.ComponentType<
      FullTheme[K] & {
        __options?: Array<keyof FullTheme[K]>;
        $?: boolean;
      }
    >;
  }
>;
