import React, { Component } from 'react';
import Book from './Book'
// import BookItem from './Book.js';

class BookContainer extends Component {
  constructor() {
    super();
    this.state = {
      allBooks: [{ id: 6, title: "The Mermaids Singing", author: "Miss Lilyan McCullough", publisher: "SAGE Publications", genre: "Reference book"}, { id: 7, title: "The Mermaids Singing: The Sequel", author: "Miss Lilyan McCullough", publisher: "SAGE Publications", genre: "Reference book"}]
    };
  }
  render() {
    return (
      <div className='bookContainer'>
        <h1>Boox List</h1>
        <ul>{
            this.state.allBooks.map((book) => {
              return  <Book book={book} />
            })
          }</ul>
      </div>
    )
  }
}


export default BookContainer;