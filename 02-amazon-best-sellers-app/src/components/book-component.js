import BOOKS from "../data/book-data";

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

const EventExamples = () => {
    const handleFormInput = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        console.log("Handle from input");
    };
    const handleButtonClick = () => {
        alert("Handle Button Click");
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("HandleForm Submit");
    };
    return (
        <section>
            <center>
                <form onSubmit={handleFormSubmit}>
                    <h1>Typical Form</h1>
                    <input type="text" name="example" onChange={handleFormInput} style={{ margin: "1rem 0" }} />
                    <button type="submit">Submit</button>
                    <div>
                        <button onClick={handleButtonClick}>Click Me!</button>
                    </div>
                </form>
            </center>
        </section>
    );
};

const Book = (props) => {
    const { cover, title, authorName, displayValue, getBook, id, children } = props;
    const handleBookClick = () => {
        console.log(`Clicked On = ${title}`);
    };
    const getSingleBook = () => {
        getBook(id);
    };
    return (
        <article className="book">
            <img src={cover} alt={title + " Image"} onClick={displayValue} />
            <h2 onClick={getSingleBook}>{title}</h2>
            <h4>{authorName.toLocaleUpperCase()}</h4>
            <button onClick={() => getBook(id)}>Click Me!</button>
            {children}
        </article>
    );
};

export default BookList;
