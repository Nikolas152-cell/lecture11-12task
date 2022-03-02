import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchBooks} from "../requests/getBooksAsync";
import {deleteBook} from "../requests/deleteBookAsync";
import {addCustomerAction} from "../store/customerReducer";
import {Link} from "react-router-dom";

const ListEntities = () => {
    const dispatch = useDispatch();
    const customers = useSelector(state => state.customers.customers);

    useEffect(() => {
        dispatch(fetchBooks());
    }, []);


    const removeCustomer = (customer) => {
        dispatch(deleteBook(customer.id));
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer));
    }

    const [id, setId] = useState();
    const [hover, setHover] = useState(true);

    const showButton = id => {

        setId(id);
        setHover(true);
    };

    const hideButton = id => {
        setId(id);
        setHover(false);
    };


    return (
        <div>
            <div>

            </div>
            {customers.length > 0 ?
                <div>
                    {
                        customers.map((customer,index) =>
                            <div key={index} id={customer.id} onMouseOver={() => showButton(customer.id)} onMouseOut={() => hideButton(customer.id)} style={{fontSize: "40px", marginTop:20
                            ,textAlign:"center"}}
                            >Book's title: {customer.title}
                                <button style={
                                    hover && id === customer.id? {} : {display: "none"}
                                } onClick={() => removeCustomer(customer)} >Remove book</button>
                                <Link to={`/edit/${customer.id}`}>
                                    <button style={
                                        hover && id === customer.id? {} : {display: "none"}
                                    }>Edit book</button>
                                </Link>
                            </div>
                        )}
                </div>
                :
                <div style={{fontSize: "2rem", marginTop:20, textAlign:"center"}}>There are no books available</div>
            }
        </div>
    );
};

export default ListEntities;