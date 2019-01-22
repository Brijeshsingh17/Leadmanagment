import { followUp } from './../models/userLogin.model';
import { empId } from './../models/empId.Model'

export interface AppState {
  readonly followUp: followUp[];
  readonly empId:empId[];
}


// import { Tutorial } from './models/tutorial.model';

// export interface AppState {
//   readonly tutorial: Tutorial[];
// }