import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  getStoredReadList,
  getStoredWishList,
} from "../../utility/AddToDB/AddToDB";
import ReadBookCard from "../ReadBookCard/ReadBookCard";
import WishBookCard from "../WishBookCard/WishBookCard";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);

  const allBooks = useLoaderData();
  // console.log(allBooks);

  useEffect(() => {
    // Read List
    const storedReadList = getStoredReadList();

    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    // console.log(storedReadList);

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    // console.log(readBookList);
    setReadList(readBookList);

    // Wish List

    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    const readWishList = allBooks.filter((book) =>
      storedWishListInt.includes(book.bookId)
    );
    setWishList(readWishList);
  }, []);

  return (
    <div className="mt-12">
      <Tabs className={"text-xl font-black"}>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-4xl font-bold mt-8 ml-12 mb-12">
            Total Read Books : {readList.length}
          </h2>

          {readList.map((book) => (
            <ReadBookCard key={book.bookId} book={book}></ReadBookCard>
          ))}
        </TabPanel>
        <TabPanel>
          <h2 className="text-4xl font-bold mt-8 ml-12 mb-12">
            Total Wish Books : {wishList.length}
          </h2>

          {wishList.map((book) => (
            <WishBookCard key={book.bookId} book={book}></WishBookCard>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
