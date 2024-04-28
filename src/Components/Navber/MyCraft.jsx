import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyCraft = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://craft-henna-iota.vercel.app/craft")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setdata(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handeldelete = (_id) => {
    console.log("delete", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://craft-henna-iota.vercel.app/craft/${_id}`,{
            method:'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your craft has been deleted.",
                icon: "success",
              });
             
            }
          });
      }
    });
  };

  return (
    <div className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
      {data.map((item) => {
        return (
          <div key={item._id}>
            <div className=" card bg-base-100 shadow-xl p-6 border ">
              <div className="">
                <div className="">
                  <figure>
                    <img
                      data-aos="zoom-in-down"
                      data-aos-duration="1700"
                      className="rounded-xl w-full"
                      src={item.photo}
                      alt="image"
                    />
                  </figure>
                </div>
                <div className="">
                  <h2 className="mt-3 text-3xl font-bold"> {item.craftName}</h2>
                  <h2 className="mt-3 text-3xl font-bold">
                    {" "}
                    {item.subcategoryName}
                  </h2>
                  <p className="mt-3 text-xl text-slate-600 font-semibold">
                    shortDescription
                  </p>
                  <h1 className="text-2xl mt-3 font-semibold">{item.price}</h1>

                  <div className="flex gap-5 mt-3">
                    <Link to={`/ditels/${item._id}`}>
                      <button className="btn bg-blue-400">View</button>
                    </Link>
                    <button className="btn bg-green-400">Updata</button>
                    <button
                      onClick={() => handeldelete(item._id)}
                      className="btn bg-red-400"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyCraft;
