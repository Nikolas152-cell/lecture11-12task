import {getCustomersAction} from "../store/customerReducer";

export const fetchBooks = () => {
    return function (dispatch){
        fetch("http://localhost:8080/practicsLecture5_6MVC_war_exploded/books").
        then(response => response.json()).
        then(json => (dispatch(getCustomersAction(json)))).
        catch(error => console.log(error));
    }
}