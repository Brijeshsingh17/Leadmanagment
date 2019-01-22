import { Action } from '@ngrx/store'
import { followUp } from './../models/userLogin.model'
//import * as TutorialActions from './../actions/tutorial.actions'
import *as followUpActions from './../../stores/actions/userLogin.action' 
import { empId } from './../models/empId.Model'

// Section 1
 const initialState: empId = {
 employeeId :0,
  
}



// Section 2
export function reducer(state: empId = initialState, action: followUpActions.Actions) {

    // Section 3
    switch(action.type) {
        case followUpActions.ADD_followUp:
            return action.payload;
            case  followUpActions.ADD_employeeId:
            return action.payload
        default:
            return state;
    }
}