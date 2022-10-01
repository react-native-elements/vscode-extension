import * as RNE from "@rneui/base";
import { RneFunctionComponent } from "@rneui/base/dist/helpers";

interface NewProps<T> {
  $?: boolean;
  __options?: Array<keyof T>;
}

type Component<T = typeof RNE> = {
  [K in keyof T]?: T[K] extends RneFunctionComponent<infer H> & infer Q
    ? RneFunctionComponent<H & NewProps<H>> & Component<Q>
    : T[K];
};

export const makeSnippet: (
  snip: (components: Component) => JSX.Element,
  title?: string,
  description?: string,
  docKey?: string,
  previewURL?: string
) => void = () => {};

export const $0: any = undefined;
export const $: any = undefined;
