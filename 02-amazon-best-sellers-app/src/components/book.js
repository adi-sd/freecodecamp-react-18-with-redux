import React from "react";

const Book = (props) => {
    const { cover, title, authorName, displayValue, getBook, id, children } = props;
    const handleBookClick = () => {
        console.log(`Clicked On = ${authorName}`);
    };
    const getSingleBook = () => {
        getBook(id);
    };
    return (
        <article className="book">
            <span className="rank">{`#${id}`}</span>
            <img src={cover} alt={title + " Image"} onClick={displayValue} />
            <h2 onClick={getSingleBook}>{title}</h2>
            <h4 onClick={handleBookClick}>{authorName.toLocaleUpperCase()}</h4>
            <button onClick={() => getBook(id)}>Click Me!</button>
            {children}
        </article>
    );
};

export default Book;
