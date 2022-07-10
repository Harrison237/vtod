import { nullToString } from "@core/functions/sellerLogin/errors.function";

export function getToken(): string {
    let token: string  = nullToString(sessionStorage.getItem('token'));

    return token;
}