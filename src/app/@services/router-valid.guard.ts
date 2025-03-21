import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ExampleService } from '../@services/example.service';




export const routerValidGuard: CanActivateFn = (route, state) => {
  
  
  let valid = inject(ExampleService);
  console.log(valid);
  
  if(valid.user === "aaa" && valid.password === "123") {

    return true;
  }
  
  return false;
}