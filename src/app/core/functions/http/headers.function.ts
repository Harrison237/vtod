import { nullToString } from "../sellerLogin/errors.function";

export function setHeadersFetch(token: string): HeadersInit{

    return {
        'Authorization': 'Bearer '+token
    }
}

export function setHeadersAxios(token: string): {} {

    return {
        'Authorization': 'Bearer '+token
    }
}