import BOOKS from "../data/book-data";

const BookList = () => {
    return (
        <div>
            <h1>Amazon Best Sellers</h1>
            <section className="book-list">
                <Book title={BOOKS[0].title} authorName={BOOKS[0].authorName} cover={BOOKS[0].cover} />
                <Book title={BOOKS[1].title} authorName={BOOKS[1].authorName} cover={BOOKS[1].cover} />
                <Book title={BOOKS[2].title} authorName={BOOKS[2].authorName} cover={BOOKS[2].cover} />
            </section>
        </div>
    );
};

const Book = (props) => {
    return (
        <article className="book">
            <img src={props.cover} alt={props.title + " Image"} />
            <h2>{props.title}</h2>
            <h4>{props.authorName.toLocaleUpperCase()}</h4>
        </article>
    );
};

export default BookList;
