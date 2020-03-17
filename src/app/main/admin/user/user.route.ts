import { Injectable } from '@angular/core';
import {Route } from '@angular/router';
import { UserComponent } from './user/user.component';



export const userRoute: Route = {
  path: 'user',
  component: UserComponent,
  data: {
    pageTitle: 'user.title',
    defaultSort: 'userEventDate,desc'
  }
};
