import React, {useState} from 'react';
import {Button, Container, TextField, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import addBook from "../../requests/createBookAsync";

const Create = () => {
    const [data, setData] = useState({
        title: "",
        authorName: "",
    });

    function handle(e){
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
    }
    return (
        <Container>
            <Typography variant='h6' color='primary' gutterBottom>
                Create a new book
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
                <Button onClick={() => addBook(data.title,data.authorName)} type="submit" variant='contained' style={{marginTop: 20, marginLeft: 20}}>Save</Button>
            </Link>
        </Container>
    );
};

export default Create;