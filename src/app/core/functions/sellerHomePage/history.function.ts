import { formatDate } from "@angular/common";
import { environment } from "@environments/environment";
import { getToken } from "@shared/functions/getToken.function";
import axios from "axios";
import { setHeadersAxios } from "../http/headers.function";

export function registerLogOut() {
    let uri: string = environment.baseUrl;
    let date: Date = new Date();
    let currentDateHour: string = formatDate(date, 'yyyy-MM-dd hh:mm:ss', 'en');
    let token = getToken();
    let headers: {} = setHeadersAxios(token);

    let data: { log_out: string } = { log_out: '' };

    data.log_out = currentDateHour;

    axios.patch(uri + 'history/update', data, {
        headers: headers
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
}

export function registerLogInId(id: number) {
    let uri: string = environment.baseUrl;
    let date: Date = new Date();
    let currentDateHour: string = formatDate(date, 'yyyy-MM-dd hh:mm:ss', 'en');
    let token = getToken();
    let headers: {} = setHeadersAxios(token);

    let data: { log_in: string } = { log_in: '' };
    data.log_in = currentDateHour;

    axios.post(uri + 'history/register/' + id, data, {
        headers: headers
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(token);
        console.log(err);
    })
}