import {ADD_CUSTOMER, GET_CUSTOMERS, DELETE_CUSTOMER} from "../app/actions/constants";
const defaultState  = {
    customers: [],
}

export const customerReducer = (state = defaultState,action) => {
    switch (action.type){
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case GET_CUSTOMERS:
            return {...state, customers: [...action.payload]}
        case DELETE_CUSTOMER:
            return {...state, customers: state.customers.filter(customer => customer.id !==action.payload)}
        default:
            return state;

    }
}
export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const removeCustomerAction = (payload) => ({type: DELETE_CUSTOMER, payload});
export const getCustomersAction = (payload) => ({type: GET_CUSTOMERS, payload});