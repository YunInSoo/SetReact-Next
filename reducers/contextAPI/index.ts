export type InitStateContext = {
    name: string,
    age: number,
    password: string,
}

export const userDummy: InitStateContext = {
    name:'yunis',
    age: 27,
    password:'babo',

}

export const changeNameActionContext = (data: string) =>{
    return {type:'CHANGE_NICKNAME', data}
}

export const userReducerContext = (state:any, action: any) =>{
    switch (action.type) {
        case 'CHANGE_NICKNAME':
            return{
                ...state,
                name: action.data
            }
        default:
            return state;
    }
}
