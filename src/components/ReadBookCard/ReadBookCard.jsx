
import { FaStar } from "react-icons/fa";
const ReadBookCard = ({book}) => {
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
    return (
      <div>
        <div className=" w-[1300px] ml-[50px] border-2 h-[350px] mb-12 mt-12  flex gap-12">
          <div>
            <img
              className="w-[300px] h-[300px] mt-8 ml-8 rounded-xl"
              src={image}
              alt=""
            />
          </div>
          <div className="mt-8">
            <h1 className="text-4xl font-black">{bookName}</h1>
            <h2 className="text-lg font-bold text-slate-500 mt-4">{author}</h2>

            <div className="flex items-center gap-4 mt-4 text-green-500 font-bold text-base">
              <span className="text-black"> Tags :</span>
              <h2>#{tags[0]}</h2>
              <h2>#{tags[1]}</h2>
              <h2 className="text-base font-bold  ">
                <span className="text-slate-500"> Year of Publishing :</span>
                {yearOfPublishing}
              </h2>
            </div>

            <div className="flex items-center gap-4  font-bold text-base mt-4">
              <h2 className="text-base font-bold  ">
                <span className="text-slate-500"> Publisher : </span>
                {publisher}
              </h2>
              <h2 className="text-base font-bold  ">
                <span className="text-slate-500"> Number of Pages :</span>
                {totalPages}
              </h2>
            </div>
            <div className="divider w-[800px]"></div>

            <div className="flex items-center gap-4  font-bold text-base mt-4">
              <h2 className="text-base font-bold text-green-500 ">
                Category: {category}
              </h2>
              <h2 className="text-base font-bold text-orange-500  flex gap-1 items-center">
                <span className="text-orange-500"> Ratings :</span>
                {rating} <FaStar></FaStar>
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ReadBookCard;