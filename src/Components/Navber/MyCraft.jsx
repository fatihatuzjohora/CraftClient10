import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Firebase/AuthProvider";
import { Helmet } from "react-helmet";

const MyCraft = () => {
  const { user } = useContext(AuthContext);

  const [data, setdata] = useState([]);

  const email = data?.filter((e) => e.email === user.email);

  //console.log(email);

  useEffect(() => {
    fetch("https://craft-henna-iota.vercel.app/craft")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setdata(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handeldelete = (id) => {
    // console.log("delete", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/craft/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            const remaining = data.filter((d) => d._id !== id);
            setdata(remaining);
            //  console.log(remaining,data);
            if (res.deletedCount > 0) {
              // window.location.reload()
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
    <div>
      <Helmet>
        <title>My Craft</title>
      </Helmet>
      <h1 className="text-4xl text-center font-bold">My Art & Craft</h1>
      <select className="select select-primary mt-5 mb-5 w-full max-w-xs">
        <option disabled hidden selected>
          Select Your Coustomization
        </option>
        <option>Yes</option>
        <option>No</option>
      </select>

      <div className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {email?.map((item) => {
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
                    <h2 className="mt-3 text-3xl font-bold">
                      {" "}
                      {item.craftName}
                    </h2>
                    <h2 className="mt-3 text-3xl font-bold">
                      {" "}
                      {item.subcategoryName}
                    </h2>
                    <p className="mt-3 text-xl text-slate-600 font-semibold">
                      shortDescription
                    </p>
                    <h1 className="text-2xl mt-3 font-semibold">
                      {item.price}
                    </h1>

                    <div className="flex gap-5 mt-3">
                      <Link to={`/ditels/${item._id}`}>
                        <button className="btn bg-blue-400">View</button>
                      </Link>

                      <Link to={`/updatecraft/${item._id}`}>
                        <button className="btn bg-green-400">Updata</button>
                      </Link>

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

      <div className="  block w-40 mx-auto mt-5 mb-5">
        <Link to={"/addcraft"}>
          <button className="btn text-2xl font-semibold">Add Craft</button>
        </Link>
      </div>
    </div>
  );
};

export default MyCraft;
