import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ExampleService } from '../@services/example.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  regEmailValue: string = "";
  
  isBoolean: boolean = false;

  @ViewChild("loginUser", { static: true })
  private loginUser!: ElementRef;
  @ViewChild("loginPassword", { static: true })
  private loginPassword!: ElementRef;

  


  constructor(private ExampleService: ExampleService) {}

  // 樣式表
  newStyle: HTMLStyleElement = document.createElement('style');

  // 顯示錯誤
  showError (element: HTMLElement, massage: string) {
    let errorObj = element.nextElementSibling as HTMLElement;
    errorObj.innerHTML = massage;
    errorObj.style.display = "block";
  }

  // submit驗證
  submitValid () {
    let loginError = document.querySelector(".forget-link .error") as HTMLElement;
    this.ExampleService.user = this.loginUser.nativeElement.value;
    this.ExampleService.password = this.loginPassword.nativeElement.value;
    
    
    loginError.innerHTML = "帳號或密碼輸入有誤！";
    // this.newStyle.innerHTML = ".forget-link>p {color: red;}"
    
    if(this.loginUser.nativeElement.value.trim() == "") {
        // this.showError(this.loginUser.nativeElement.nextElementSibling as HTMLElement, "請填寫帳號");
        this.newStyle.innerHTML = ".forget-link>p {color: red;} .login {#loginUser {border: 3px solid red;background-image: url(/check_wrong.png);background-size: 22px;background-repeat: no-repeat;background-position: calc(100% - 17px);+.bx{display: none;}~p{color: red;}}}"
        document.head.appendChild(this.newStyle);
      }
    }
  
  // 註冊input事件 
  registerInput(e: number) {
    let registerInputList = document.querySelectorAll(".register input") as NodeListOf<HTMLInputElement>;
    let registerPList = document.querySelectorAll(".register .input-box p") as NodeListOf<HTMLElement>;
    
    // 驗證
    switch(e) {
      case 0:
        break;

      case 1:
        if(registerInputList[1].validity.patternMismatch) {      
          registerPList[1].style.display = "block";
          registerPList[1].innerText = "不符合信箱格式";
        };
        break;

      case 2:
        if(registerInputList[2].validity.patternMismatch) {
          registerPList[2].style.display = "block";
          registerPList[2].innerText = "請輸入至少6碼以上(含英文字母、數字)";
        };
        break;

    }
    
    
    // 當驗證正確時，消除警告文字
    if (this.regEmailValue == "" || !registerInputList[1].validity.patternMismatch) {
      registerPList[1].style.display = "none";
    }
    if (!registerInputList[2].validity.patternMismatch) {
      registerPList[2].style.display = "none";
    }
    
  }
  
  toggleBtn () {
    let registerPList = document.querySelectorAll(".error") as NodeListOf<HTMLElement>;
    // 清空input值 跟 樣式
    let inputList = document.querySelectorAll("input");
    for(let item of inputList) {  
      item.value = "";
    }
    for (let i = 0; i < registerPList.length; i++) {
      if(i == 0) {
        this.submitValid();
        registerPList[i].innerText = "\n";
        document.head.removeChild(this.newStyle)
        
        continue;
      }
      registerPList[i].style.display = "none";
    }
    
   
    this.isBoolean = !this.isBoolean;
  }



}
