import React, {useState} from 'react';
import {Button, Container, TextField, Typography} from "@material-ui/core";
import {Link, useParams} from "react-router-dom";
import addBook from "../../requests/createBookAsync";
import updateBook from "../../requests/updateBook";

const Edit = () => {
    const [data, setData] = useState({
        title: "",
        authorName: "",
    });
    const {id} = useParams();

    function handle(e){
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }
    return (
        <Container>
            <Typography variant='h6' color='primary' gutterBottom>
                Edit a book - {id}
            </Typography>
            <form>
                <div>
                    <TextField onChange={(e) => handle(e)}
                               id="title" value={data.title}
                               label="Book's title" color='secondary'/>
                </div>
                <div>
                    <TextField onChange={(e) => handle(e)}
                               id="authorName" value={data.authorName} label="Author's name" color='secondary'/>
                </div>
            </form>
            <Link to='/'>
                <Button variant='contained' style={{marginTop: 20}}>Cancel</Button>
                <Button onClick={() => updateBook(id,data.title,data.authorName)} type="submit" variant='contained' style={{marginTop: 20, marginLeft: 20}}>Edit</Button>
            </Link>
        </Container>
    );
};

export default Edit;