export function nameOfMonth(month: string, lan: string): string {
    let name: string = ''

    if (lan === 'es') {
        switch(month) {
            case '01': name = 'Enero'
            break;
            case '02': name = 'Febrero'
            break;
            case '03': name = 'Marzo'
            break;
            case '04': name = 'Abril'
            break;
            case '05': name = 'Mayo'
            break;
            case '06': name = 'Junio'
            break;
            case '07': name = 'Julio'
            break;
            case '08': name = 'Agosto'
            break;
            case '09': name = 'Septiembre'
            break;
            case '10': name = 'Octubre'
            break;
            case '11': name = 'Noviembre'
            break;
            case '12': name = 'Diciembre'
            break;
            default: name = 'Mes invalido'
        }
    } else if (lan === 'en') {
        switch(month) {
            case '01': name = 'January'
            break;
            case '02': name = 'February'
            break;
            case '03': name = 'March'
            break;
            case '04': name = 'April'
            break;
            case '05': name = 'May'
            break;
            case '06': name = 'June'
            break;
            case '07': name = 'July'
            break;
            case '08': name = 'August'
            break;
            case '09': name = 'September'
            break;
            case '10': name = 'October'
            break;
            case '11': name = 'November'
            break;
            case '12': name = 'December'
            break;
            default: name = 'Invalid month'
        }
    } else {
        name = 'xd';
    }

    return name;
}

export function getMonthArray(month: string, year: string): Array<number> {
    let monthSelected = [0];
    let monthN: number = +month;
    let yearN: number = +year;

    let days28 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
    let days29 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
    let days30 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    let days31 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

    if(monthN === 2) {
        if(yearN%4==0) {
            monthSelected = days29;
        } else {
            monthSelected = days28;
        }
    } else if (monthN === 1 || monthN === 3 || monthN === 5 || monthN === 7 || monthN === 8 || monthN === 10 || monthN === 12) {
        monthSelected = days31;
    } else {
        monthSelected = days30;
    }

    return monthSelected;
}

export function initData(days: number): Array<number> { 
    let data: Array<number> = [0];
    let min = 1;
    let max = 100;

    for (let i=0; i<days; i++) {
        data[i] = getRandomIntInclusive(min,max);
    }

    return data;
}

function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}