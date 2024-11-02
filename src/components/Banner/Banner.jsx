const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 h-[600px] w-[1280px] ml-[50px] mt-12  mb-12 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co.com/989qMRW/42844155.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-black ml-36 mr-36">
              Books to freshen up your bookshelf
            </h1>

            <button className="p-2 bg-lime-400 rounded-xl ml-[300px] mt-8 text-base font-black">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
