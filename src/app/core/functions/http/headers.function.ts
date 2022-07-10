import { nullToString } from "../sellerLogin/errors.function";

export function setHeadersFetch(token: string): HeadersInit{

    return {
        'Authorization': 'Bearer'+token
    }
}