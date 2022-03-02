
export default function updateBook(id, bookTitle, bookAuthor){
    const axios = require('axios');
    const url = "http://localhost:8080/practicsLecture5_6MVC_war_exploded/books/" + id;
    axios.put(url, {
        title: bookTitle,
        authorName: bookAuthor,
        id: id
    }).
    then(res => console.log(res.data))
}