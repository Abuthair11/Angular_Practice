import { Component  } from '@angular/core';

@Component({
 selector: 'app-hello-world',
 //TextInterpolation 
 template:'<h1>Hello {{title}}</h1>',
 styles:[`h1{
    color:red;
 }`]
})


export class HelloWorldComponent   {

  //TextInterpolation Example 
  title = 'Angular 2';
}