import { AfterViewChecked, Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-count',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './count.component.html',
  styleUrl: './count.component.scss'
})
export class CountComponent implements AfterViewChecked{



  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.

    let myChart = document.getElementById('chart_bar') as HTMLCanvasElement;

    function show() {

      new Chart(myChart,{
        type: 'bar',
        data: {
          // x 軸文字
          labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
          datasets: [
            // 第一組資料
            {
              // 上方分類文字
              label: '月銷售',
              // 數據
              data: [30, 20, 40, 32, 45, 24],
              // 顏色
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              // 邊框顏色
              borderColor: 'rgba(75, 192, 192, 1)',
              // 邊框寬度
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              // y 軸從 0 開始
              beginAtZero: true,
            },
          },
        }
      });

    }
    let existing_chart = Chart.getChart('chart_bar');
    console.log(existing_chart);
    if (existing_chart) {

      existing_chart?.destroy();
    }
    show();





// 圓餅圖
let chart_pie: any;

// 獲取 canvas 元素
let ctx_pie = document.getElementById('chart_pie') as HTMLCanvasElement;

// 設定數據
let data_pie = {
  // x 軸文字
  labels: ['餐費', '交通費', '租金'],
  datasets: [
    {
      // 上方分類文字
      label: '支出比',
      // 數據
      data: [12000, 3000, 9000],
      // 線與邊框顏色
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
      //設定hover時的偏移量，滑鼠移上去表會偏移，方便觀看選種的項目
      hoverOffset: 4,
    },
  ],
};

// if(chart_pie) {
//   chart_pie.destroy();
// }

// 創建圖表
  chart_pie = new Chart(ctx_pie, {
  //pie是圓餅圖,doughnut是環狀圖
  type: 'pie',
  data: data_pie,
});


console.log(chart_pie instanceof Chart);


  }

}


