import BOOKS from "../data/book-data";

const BookList = () => {
    return (
        <div>
            <h1>Amazon Best Sellers</h1>
            <EventExamples />
            <section className="book-list">
                {BOOKS.map((book) => {
                    return <Book {...book} key={book.id} />;
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
    const { cover, title, authorName, children } = props;
    const handleBookClick = () => {
        console.log(`Clicked On = ${title}`);
    };
    return (
        <article className="book">
            <img src={cover} alt={title + " Image"} />
            <h2>{title}</h2>
            <h4>{authorName.toLocaleUpperCase()}</h4>
            <button onClick={handleBookClick}>Click Me!</button>
            {children}
        </article>
    );
};

export default BookList;
