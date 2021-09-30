export type InitState = {
    name: string,
    age: number,
    password: string,
}
export const changeNameAction = (data: string) => {
    return{
        type: 'CHANGE_NICKNAME',
        data
    }
}
const initialState:InitState = {
    name:'yunis',
    age: 27,
    password:'babo',
};

const rootReducer = (state:InitState = initialState, action:any) => {
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
export default rootReducer;