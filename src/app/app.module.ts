import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './HelloWorld';
import { ParentComponent } from './ParentToChildCommunication/parent/parent.component';
import { ChildComponent } from './ParentToChildCommunication/child/child.component';
import { Parent1Component } from './childToparentCommunication/parent1/parent1.component';
import { Child1Component } from './childToparentCommunication/child1/child1.component';
import { Parent2Component } from './childToParentUsingViewChild/parent2/parent2.component';
import { Child2Component } from './childToParentUsingViewChild/child2/child2.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component,
    Parent2Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
