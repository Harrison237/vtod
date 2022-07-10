import { HttpHeaders } from "@angular/common/http";
import { nullToString } from "@core/functions/sellerLogin/errors.function";

export function setHeaders(token: string): HttpHeaders {
    let header = new HttpHeaders();

    header = header.append('Authorization', `Bearer ${token}`);

    return header;
}