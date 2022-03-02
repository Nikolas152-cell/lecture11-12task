import React from 'react';
import {Button} from '@material-ui/core';
import {Link, Route, Routes} from "react-router-dom";

const style ={
    backgroundColor: "#ADD8E6",
    margin:"0 auto",
    display:"block",
    top: "20px",
}



const CreateButton = () => {
    return (
        <div>
            <Link to="/create">
            <Button className="Button" variant="contained" style={style}
            >Create</Button>
            </Link>
        </div>
    );
};

export default CreateButton;