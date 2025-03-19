import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  user!: string;
  password!: string;

  constructor() { }
}
