import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArtExtra = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/art")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-5 mb-5">
        Art & Craft Categories
      </h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((item) => {
          return (
            <div
              key={item._id}
              className="card shadow-md w-96 border text-primary-content"
            >
              <div className="card-body">
                <img className="h-[200px]" src={item.photo} alt="" />
                <p className="text-neutral-700 font-semibold ml-5">
                  {item.subcategoryName}
                </p>
                <div className="card-actions justify-center">
                  <Link to={`/artcradtex/${item._id}`}>
                    <button className="btn bg-slate-400">Touch Me</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArtExtra;
