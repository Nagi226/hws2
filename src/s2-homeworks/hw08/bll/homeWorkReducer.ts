import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }


export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': {

            if (action.payload === 'up') {
             return    state.sort(function (a: any, b: any) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                })
            }
            if (action.payload === 'down') {
              return   state.sort(function (a: any, b: any) {
                    if (a.name < b.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    return 0;
                })
            }
            break
        }
        case 'check': {
            return state.filter(el => el.age >= 18).sort((a:any,b:any)=> {return a.name > b.name ? 1 : -1})
        }
        default:
            return state
    }
}




