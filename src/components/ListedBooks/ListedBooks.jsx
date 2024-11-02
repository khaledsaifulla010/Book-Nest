import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/AddToDB/AddToDB";
import ReadBookCard from "../ReadBookCard/ReadBookCard";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);

  const allBooks = useLoaderData();
  // console.log(allBooks);

  useEffect(() => {
    const storedReadList = getStoredReadList();

    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    // console.log(storedReadList);

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    // console.log(readBookList);
    setReadList(readBookList);
  }, []);

  return (
    <div className="mt-12">
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Read Books : {readList.length} </h2>

          {readList.map((book) => (
            <ReadBookCard key={book.bookId} book={book}></ReadBookCard>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
