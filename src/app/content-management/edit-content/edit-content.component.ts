import { Component, inject} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatStepperModule} from '@angular/material/stepper';
import { RouterLink } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTableModule,NzTableFilterFn,NzTableFilterList, NzTableSortFn } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCheckboxModule, NzCheckboxOption } from 'ng-zorro-antd/checkbox';
import { ExampleService } from '../../@services/example.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-edit-content',
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    DragDropModule,
    NzDatePickerModule,
    NzTableModule,
    NzCheckboxModule,
    NzDividerModule,
    CommonModule
  ],
  templateUrl: './edit-content.component.html',
  styleUrl: './edit-content.component.scss',
})



export class EditContentComponent{

constructor(
  private exampleService: ExampleService,
) {};

isdarkMode!: boolean;

ngDoCheck(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.isdarkMode = this.exampleService.isdarkMode;

}

  // 獲取 問卷名稱及內容
  getFormValueFirst() {
    console.log(this.firstFormGroup.value.title);
    console.log(this.firstFormGroup.value.content);
  }
  // 獲取 開始時間及結束時間
  getFormValueSecond() {
    console.log(this.secondFormGroup.value.date[0]);
    console.log(this.secondFormGroup.value.date[1]);
  }


  // 模板內容
  private _formBuilder = inject(FormBuilder);

  firstFormGroup: FormGroup = this._formBuilder.group({title: [''], content: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({date: ['']});


  date: string= "";

  isTrue: boolean = false;


  questionData: Array<any> = [
    {
      id: 1,
      title: "最想去的國家",
      endTime: "2025-02-28"
    },
    {
      id: 2,
      title: "假日喜歡做什麼",
      endTime: "2025-03-02"
    },
    {
      id: 3,
      title: "木柵動物園裡，請挑選出你最喜歡動物的前三名，並且說明一下原因",
      endTime: "2025-03-10"
    },
    {
      id: 4,
      title: "喜歡的影視劇",
      endTime: "2025-03-10"
    },
    {
      id: 5,
      title: "如果你能選擇一位名人，你想成為誰",
      endTime: "2025-03-11"
    },
  ]

  listOfColumn: ColumnItem[] = [
    {
      title: 'Id',
      compare: (a: ItemData, b: ItemData) => a.id - b.id,
      filterMultiple: false,
      listOfFilter: [],
      filterFn: null

    },
    {
      title: '標題',
      compare: (a: ItemData, b: ItemData) => a.title.localeCompare(b.title),
      filterMultiple: false,
      listOfFilter: [],
      filterFn: null
    },
    {
      title: '創建時間',
      compare: (a: ItemData, b: ItemData) => a.startTime.localeCompare(b.startTime),
      filterMultiple: false,
      listOfFilter: [],
      filterFn: null
    },
    {
      title: '結束日期',
      compare: (a: ItemData, b: ItemData) => a.endTime.localeCompare(b.endTime),
      filterMultiple: false,
      listOfFilter: [],
      filterFn: null
    },
    {
      title: '狀態',
      compare: (a: ItemData, b: ItemData) => a.status.localeCompare(b.status),
      filterMultiple: true,
      listOfFilter: [
        { text: '編輯中', value: '編輯中'},
        { text: '收集中', value: '收集中'},
        { text: '已結束', value: '已結束'}
      ],
      filterFn: (list: string[], item: ItemData) => list.some(status => item.status.indexOf(status) !== -1)
    }
  ];
  listOfData: ItemData[] = [
    {
      id: 1,
      title: 'John Brown',
      startTime: "2025-02-03 10:25:12",
      endTime: "2025-02-28",
      status: '編輯中'
    },
    {
      id: 2,
      title: 'Jim Green',
      startTime: "2025-03-01 12:33:12",
      endTime: "2025-04-11",
      status: '已結束'
    },
    {
      id: 3,
      title: 'Joe Black',
      startTime: "2025-01-05 20:25:33",
      endTime: "2025-02-28",
      status: '收集中'
    },
    {
      id: 4,
      title: 'Jim Red',
      startTime: "2025-03-13 09:25:12",
      endTime: "2025-03-31",
      status: '收集中'
    },
    {
      id: 10,
      title: 'John Brown',
      startTime: "2025-02-03 10:25:12",
      endTime: "2025-02-28",
      status: '編輯中'
    },
    {
      id: 12,
      title: 'Jim Green',
      startTime: "2025-03-01 12:33:12",
      endTime: "2025-04-11",
      status: '已結束'
    },
    {
      id: 7,
      title: 'Joe Black',
      startTime: "2025-01-05 20:25:33",
      endTime: "2025-02-28",
      status: '收集中'
    },
    {
      id: 9,
      title: 'Jim Red',
      startTime: "2025-03-13 09:25:12",
      endTime: "2025-03-31",
      status: '收集中'
    },
    {
      id: 8,
      title: 'Andy',
      startTime: "2025-02-03 10:25:12",
      endTime: "2025-02-28",
      status: '編輯中'
    },
    {
      id: 20,
      title: 'Jim Green',
      startTime: "2025-03-01 12:33:12",
      endTime: "2025-04-11",
      status: '已結束'
    },
    {
      id: 13,
      title: 'Yoci',
      startTime: "2025-01-05 20:25:33",
      endTime: "2025-02-28",
      status: '收集中'
    },
    {
      id: 24,
      title: 'Jim Red',
      startTime: "2025-03-13 09:25:12",
      endTime: "2025-03-31",
      status: '收集中'
    }
  ];



}

interface ItemData {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
  status: string;

}

interface ColumnItem {
  title: string;
  compare: NzTableSortFn<ItemData> | null;
  filterMultiple: boolean;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<ItemData> | null;
}


