import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { followUp } from './../models/userLogin.model'
import { empId } from './../models/empId.Model'


export const ADD_followUp = 'followUp'
export const ADD_employeeId = 'empId'



export class AddfollowUp implements Action {
    readonly type = ADD_followUp 
  

    constructor(public payload: followUp) {}
}

export class AddempId implements Action {
    readonly type =  ADD_employeeId
  

    constructor(public payload: empId) {}
}



export type Actions = AddfollowUp | AddempId
