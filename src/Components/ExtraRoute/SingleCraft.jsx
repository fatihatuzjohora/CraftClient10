import { Link } from "react-router-dom";


const SingleCraft = ({ item }) => {
  const {
    _id,
    email,
    name,
    craftName,
    subcategoryName,
    shortDescription,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    photo,
  } = item;

  return (
    <div>
      <div className=" card bg-base-100 shadow-xl p-6 border ">
        <div className="">
          <div className="">
            <figure>
              <img
                data-aos="zoom-in-down"
                data-aos-duration="1700"
                className="rounded-xl w-full"
                src={photo}
                alt="image"
              />
            </figure>
          </div>
          <div className="">
            <h2 className="mt-3 text-3xl font-bold"> {craftName}</h2>
            <h2 className="mt-3 text-3xl font-bold"> {subcategoryName}</h2>
            <p className="mt-3 text-xl text-slate-600 font-semibold">
              {shortDescription}
            </p>
            <h1 className="text-2xl mt-3 font-semibold">price:{price}</h1>

            <Link
            // to={`/ditels/${id}`}
            >
              <button className="btn animate__animated animate__bounce bg-slate-600 mt-5 text-2xl text-white">
                View Property
              </button>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SingleCraft;
