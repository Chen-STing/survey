import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  user!: string;
  password!: string;
  isdarkMode!: boolean;

  collectionUser!: questObj;


  constructor() { }
}

interface questObj {
  title: string;
  userName: string;
  userAge: number;
  userGender: string;
  questions: questions[];
}

interface questions {
  questionTitle: string;
  response?: string;
  responseList?: string[];
  star?: number;
}
