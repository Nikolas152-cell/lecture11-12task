

export default function addBook(bookTitle, bookAuthor){
    const axios = require('axios');
    const url = "http://localhost:8080/practicsLecture5_6MVC_war_exploded/books/create";
    axios.post(url, {
        title: bookTitle,
        authorName: bookAuthor
    }).
    then(res => console.log(res.data))
}