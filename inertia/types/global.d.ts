import { PageProps as InertiaPageProps } from "@inertiajs/core";
import { AxiosInstance } from "axios";
import { Config } from "ziggy-js";
import { PageProps as AppPageProps } from "./";
import { RouteParams } from "./param";
import { CustomRouter } from "./route";

declare global {
  interface Window {
    axios: AxiosInstance;
  }

  var route: (<T extends keyof RouteParams>() => CustomRouter<T>) &
    (<T extends keyof RouteParams>(
      name: T,
      params?: RouteParams[T],
      absolute?: boolean,
      config?: Config,
    ) => string);
  var Ziggy: ZiggyConfig;
}

declare module "@inertiajs/core" {
  interface PageProps extends InertiaPageProps, AppPageProps {}
}
