import {  Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-count',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './count.component.html',
  styleUrl: './count.component.scss'
})
export class CountComponent {



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
  
 
    



  }

}


