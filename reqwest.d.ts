declare module Reqwest
{
    interface ReqwestOptions
    {
        url: string;
        method?: string;
        headers?: Object;
        data?: string | Object;
        type?: string;
        contentType?: string;
        crossOrigin?: boolean;
        success?: (response: any) => void;
        error?: (error: any) => void;
        complete?: (response: any) => void;
        jsonpCallback?: string;
    }

    interface ReqwestPromise<T>
    {
        request: XMLHttpRequest;

        then(callback: (response: T) => void): ReqwestPromise<T>;

        fail(callback: (error: XMLHttpRequest, message: string) => void): ReqwestPromise<T>;

        always(callback: (data: any) => void): void;
    }
}


interface ReqwestStatic
{
    (url: string): Reqwest.ReqwestPromise<any>;

    (url: string, done: (response: any) => void): Reqwest.ReqwestPromise<any>;

    (options: Reqwest.ReqwestOptions): Reqwest.ReqwestPromise<any>;

    <T>(url: string): Reqwest.ReqwestPromise<T>;

    <T>(url: string, done: (response: T) => void): Reqwest.ReqwestPromise<T>;

    <T>(options: Reqwest.ReqwestOptions): Reqwest.ReqwestPromise<T>;
}

declare var Reqwest: ReqwestStatic;

export = Reqwest;