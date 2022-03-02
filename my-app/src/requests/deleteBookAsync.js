
import {removeCustomerAction} from "../store/customerReducer";

export const deleteBook = (id) => {
    return function (dispatch){
        fetch("http://localhost:8081/practicsLecture5_6MVC_war_exploded/books/" + id, {
            method: 'DELETE'
        }).
        then(response => response.json()).
        then(dispatch(removeCustomerAction(id))).
        catch(error => console.log(error));
    }
}