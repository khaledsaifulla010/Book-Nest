import { FaStar } from "react-icons/fa";

const BookCard = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <div>
      <div className="card bg-base-100 w-[400px] h-[600px] border-2">
        <figure className="px-10 pt-10">
          <img src={image} className="rounded-xl w-80 h-80" />
        </figure>
        <div className="card-body ">
          <div className="flex items-center gap-8 text-green-400 font-bold text-base">
            <h2>{tags[0]}</h2>
            <h2>{tags[1]}</h2>
          </div>
          <h2 className="font-bold text-2xl">{bookName}</h2>
          <h2 className="font-semibold text-base text-slate-500">{author}</h2>
          <div class="divider"></div>
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-base text-slate-500">
              {category}
            </h2>
            <h2 className="font-semibold text-base text-slate-500 flex items-center gap-2">
              {rating} <FaStar></FaStar>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
