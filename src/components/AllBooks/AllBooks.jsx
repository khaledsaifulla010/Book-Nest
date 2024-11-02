import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((res) => setAllBooks(res));
  }, []);

  return (
    <div>
      {/* <h1>AllBooks : {allBooks.length} </h1> */}

      <div className="grid grid-cols-3 gap-y-12  mb-6">
        {allBooks.map((book) => (
          <BookCard book={book} key={book.bookId}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
