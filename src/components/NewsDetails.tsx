import { useLocation } from "react-router-dom";

function NewsDetails() {
  const location = useLocation();
  const item = location.state?.item;

  return (
    <div className="m-4 pb-4 md:w-[70%] mx-auto shadow-medium h-full rounded-[4px] border border-[#E6E6E6] bg-white">
      <img
        src={item.urlToImage}
        alt={item.title}
        className="h-[400px] w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-gray-800 font-bold text-[2rem] leading-[40px]">
          {item.title}
        </h3>
        <p className="text-lg text-blue-600 mt-4 mb-8">By {item.source.name}</p>
        <p className="text-gray-700 text-base leading-[30px]">{item.content}</p>
      </div>
      <div className="ml-2">
        <a href={item.url} className="m-4 ">
          <button className="bg-gray-200 ring-2 ring-gray-400 rounded-md h-fit p-4">
            Read More
          </button>
        </a>
        <a href="/" className="m-4 ">
          <button className="bg-gray-200 ring-2 ring-gray-400 rounded-md h-fit p-4">
            Go back
          </button>
        </a>
      </div>
    </div>
  );
}

export default NewsDetails;
