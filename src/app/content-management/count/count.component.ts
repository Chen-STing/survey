import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Chart from 'chart.js/auto';
import { ExampleService } from '../../@services/example.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-count',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './count.component.html',
  styleUrl: './count.component.scss'
})
export class CountComponent {

  constructor(
    private exampleService: ExampleService,
  ) {};

  // 問卷數組
  arrayQuiz: any[] = [];
  selectedValue: string = "-請選擇問卷-";

  isdarkMode!: boolean;
  total: number = 35;
  optionList: Array<any> = [
    {
      title: "藍花",
      amount: 6
    },
    {
      title: "玫瑰花",
      amount: 5
    },
    {
      title: "菊花",
      amount: 10
    },
  ];

  ngOnInit(): void {
  console.log(this.exampleService.quizList);

  this.arrayQuiz = this.exampleService.quizList;
  // 獲取 canvas 元素
  let age = document.getElementById('ageChart') as HTMLCanvasElement;
  let gender = document.getElementById('genderChart') as HTMLCanvasElement;

  // 設定age數據
  let ageData = {
    // x 軸文字
    labels: ['0 ~ 20歲', '21 ~ 40歲', '41 ~ 60 歲', '61 歲以上'],
    datasets: [
      {
        // 上方分類文字
        label: '年齡數',
        // 數據
        data: [8, 15, 3, 1],
        // 線與邊框顏色
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(101, 219, 55)',
        ],
        //設定hover時的偏移量，滑鼠移上去表會偏移，方便觀看選種的項目
        hoverOffset: 4,
      },
    ],
  };

  // 設定gender數據
  let genderData = {
  // x 軸文字
    labels: ['男', '女'],
    datasets: [
      // 第一組資料
      {
        // 上方分類文字
        label: '性別數',
        // 數據
        data: [30, 20],
        // 顏色
        backgroundColor: [
        'rgb(12, 58, 101)',
        'rgb(200, 165, 12)'],
        // 邊框顏色
        borderColor: [
        'rgb(64, 153, 255)',
        'rgb(255, 207, 86)'],
        // 邊框寬度
        borderWidth: 1,
      },
    ],
  };

  // 圖表選項
  var options = {
    scales: {
      y: {
        // y 軸從 0 開始
        beginAtZero: true,
      },
    },
  };

  // 創建圖表
  // age
  new Chart(age, {
    type: 'doughnut',
    data: ageData,
  });
  // gender
  new Chart(gender, {
    type: 'bar',
    data: genderData,
    options: options,
  });
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  ngDoCheck(): void {
    this.isdarkMode = this.exampleService.isdarkMode;
  }

  createChart() {
    // 獲取 canvas 元素
    let ctx = document.getElementById('optionChart') as HTMLCanvasElement;

    // 設定數據
    let data = {
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

    // 創建圖表
    new Chart(ctx, {
      //pie是圓餅圖,doughnut是環狀圖
      type: 'pie',
      data: data,
    });
  }
}


