import { formatDate } from "@angular/common";
import { environment } from "@environments/environment";
import { getToken } from "@shared/functions/getToken.function";
import axios from "axios";
import { setHeadersAxios } from "../http/headers.function";

let uri: string = environment.baseUrl;
let date: Date = new Date();
let currentDateHour: string = formatDate(date, 'yyyy-MM-dd hh:mm:ss', 'en');
let token = getToken();

export function registerLogOut(idSeller: number) {
    let data: {log_out: string};
}

export function registerLogInId(id: number){ 
    let data: {log_in: string} = {log_in: ''};
    data.log_in = currentDateHour;
    let headers: {} = setHeadersAxios(token);

    axios.post(uri+'history/register/'+id, data, {
        headers: headers
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
}