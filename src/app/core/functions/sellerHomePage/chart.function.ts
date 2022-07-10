import { formatDate } from "@angular/common";
import { ElementRef } from "@angular/core";
import { Chart, ChartItem, registerables } from "chart.js";
import { getMonthArray, initData, nameOfMonth } from "./dates.function";

export function placeChart(chartField: ElementRef): void {
    let date: Date = new Date();

    let year: string = formatDate(date, 'yyyy', 'en');
    let month: string = formatDate(date, 'MM', 'en');
    let day: string = formatDate(date, 'dd', 'en');

    let monthName: string = nameOfMonth(month, 'es');
    let currentMonthDays: Array<number> = getMonthArray(month, year);

    let auxData: Array<number> = initData(+day);

    Chart.register(...registerables);

    const chartSpace: ChartItem = chartField.nativeElement.getContext('2d');

    const myChart: Chart<'bar', any, number> = new Chart(chartSpace, {
      type: 'bar',
      data: {
        labels: currentMonthDays,
        datasets: [{
          label: 'Ventas en el mes de '+monthName,
          data: auxData,
          backgroundColor: [
            'rgba(247, 99, 12, 0.2)'
          ],
          borderColor: [
            'rgba(247, 99, 12, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
}