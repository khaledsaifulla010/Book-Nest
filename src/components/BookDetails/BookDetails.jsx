import { useLoaderData, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { addToReadList, addToWishList } from "../../utility/AddToDB/AddToDB";
import { toast } from "react-toastify";
const BookDetails = () => {
  const { bookId } = useParams();

  const id = parseInt(bookId);

  // console.log(id,typeof id);

  const bookDetails = useLoaderData();
  console.log(bookDetails);

  const book = bookDetails.find((book) => book.bookId === id);
  console.log(book);

  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  const handleToReadList = (bookId) => {
    addToReadList(bookId);
    toast.success(`Added ${bookName} in ReadList`);
  };

  const handleToWishList = (bookId) => {
    addToWishList(bookId);
    toast.success(`Added ${bookName} in WishList`);
  };

  return (
    <div>
      <div className=" w-[1300px] ml-[50px] h-[800px] mb-12 mt-12  flex gap-12">
        <div>
          <img
            className="w-[400px] h-[720px] mt-8 ml-8 rounded-xl"
            src={image}
            alt=""
          />
        </div>
        <div className="mt-8">
          <h1 className="text-4xl font-black">{bookName}</h1>
          <h2 className="text-lg font-bold text-slate-500 mt-4">{author}</h2>
          <div className="divider w-[800px]"></div>
          <h2 className="text-base font-bold text-slate-500 mt-4">
            {category}
          </h2>
          <div className="divider w-[800px]"></div>
          <h2 className="text-lg font-bold text-slate-500 mt-4 w-[800px] text-justify">
            <span className="text-black">Review : </span> {review}
          </h2>
          <div className="flex items-center gap-4 mt-4 text-green-500 font-bold text-base">
            <span className="text-black"> Tags :</span>
            <h2>#{tags[0]}</h2>
            <h2>#{tags[1]}</h2>
          </div>
          <div className="divider w-[800px]"></div>
          <h2 className="text-base font-bold  mt-4">
            <span className="text-slate-500"> Number of Pages :</span>{" "}
            {totalPages}
          </h2>
          <h2 className="text-base font-bold  mt-2">
            <span className="text-slate-500"> Publisher : </span> {publisher}
          </h2>
          <h2 className="text-base font-bold  mt-2">
            <span className="text-slate-500"> Year of Publishing :</span>
            {yearOfPublishing}
          </h2>
          <h2 className="text-base font-bold  mt-2 flex gap-1 items-center">
            <span className="text-slate-500"> Ratings :</span>
            {rating} <FaStar></FaStar>
          </h2>
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={() => handleToReadList(bookId)}
              className="border-2 border-green-400 font-black text-lg p-2 rounded-xl  w-24"
            >
              Read
            </button>
            <button
              onClick={() => handleToWishList(bookId)}
              className="border-2 text-green-400 font-black text-lg p-2 rounded-xl  w-36"
            >
              Wish List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
