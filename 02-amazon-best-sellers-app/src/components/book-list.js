import React from "react";

import { BOOKS } from "../data/book-data";
import { EventExamples } from "./event-example";
import Book from "./book";

const BookList = () => {
    const someValue = "shakeAndBake";
    const displayValue = () => {
        console.log(someValue);
    };
    const getBook = (id) => {
        const book = BOOKS.find((book) => book.id === id);
        console.log(book);
    };
    return (
        <div>
            <h1>Amazon Best Sellers</h1>
            <EventExamples />
            <section className="book-list">
                {BOOKS.map((book) => {
                    return <Book {...book} key={book.id} displayValue={displayValue} getBook={getBook} />;
                })}
            </section>
        </div>
    );
};

export default BookList;
