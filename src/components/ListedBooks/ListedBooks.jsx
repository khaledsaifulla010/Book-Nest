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
import { IoIosArrowDropdown } from "react-icons/io";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);

  const [sort, setSort] = useState("");

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

  const handleSortType = (sortType) => {
    setSort(sortType);

    if (sortType === "No of Pages") {
      const sortedReadListByNoOfPages = [...readList].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setReadList(sortedReadListByNoOfPages);
    }
  };

  return (
    <div className="mt-12">
      <Tabs className={"text-xl font-black"}>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <div className="flex items-center justify-between px-12 mt-12">
            <h2 className="text-4xl font-bold">
              Total Read Books : {readList.length}
            </h2>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="border-2 p-2 rounded-xl bg-green-500 w-auto  flex items-center gap-2  font-black text-white text-lg"
              >
                {sort ? `Sort By : ${sort}` : "Sort By"}
                <IoIosArrowDropdown></IoIosArrowDropdown>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52  p-2 shadow border-2 "
              >
                <li onClick={() => handleSortType("Rating")}>
                  <a>Ratings</a>
                </li>
                <li onClick={() => handleSortType("No of Pages")}>
                  <a>No of Pages</a>
                </li>
              </ul>
            </div>
          </div>

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
