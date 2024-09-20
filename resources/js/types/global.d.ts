import { Page, PageProps as InertiaPageProps } from "@inertiajs/core";
import { AxiosInstance } from "axios";
import { route as ziggyRoute } from "ziggy-js";
import { PageProps as AppPageProps } from "./";

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    var route: typeof ziggyRoute;
}

declare module "@inertiajs/react" {
    export declare function usePage<T>(): Page<T>;
}
declare module "@inertiajs/core" {
    interface PageProps extends InertiaPageProps, AppPageProps {}
}
