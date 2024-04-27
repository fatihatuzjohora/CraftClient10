import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyCraft = () => {

    const handledelete = (_id) => {
        console.log('delete',_id);
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
                    text: "Your craft item has been deleted.",
                    icon: "success",
                  });
                }
              });
          }
        });
      };
    return (
        <div>
            <h1>My Craft</h1>

            <div className=" card bg-base-100 shadow-xl p-6 border ">
        <div className="">
          <div className="">
            <figure>
              <img
                data-aos="zoom-in-down"
                data-aos-duration="1700"
                className="rounded-xl w-full"
                src='photo'
                alt="image"
              />
            </figure>
          </div>
          <div className="">
            <h2 className="mt-3 text-3xl font-bold"> craftName</h2>
            <h2 className="mt-3 text-3xl font-bold"> subcategoryName</h2>
            <p className="mt-3 text-xl text-slate-600 font-semibold">
shortDescription
            </p>
            <h1 className="text-2xl mt-3 font-semibold">price:</h1>

            <Link
            // to={`/ditels/${id}`}
            >
              <button className="btn animate__animated animate__bounce bg-slate-600 mt-5 text-2xl text-white">
                View Property
              </button>
            </Link>
          </div>
        </div>
        {/* --------------------------------- */}

      <div className="flex gap-5">
        <button className="btn bg-blue-400">view</button>
        <button className="btn bg-green-400">edit</button>
        <button onClick={() => handledelete(_id)} className="btn bg-red-400">
          X
        </button>
      </div>
      {/* --------------------------------------- */}
      </div>

      
        </div>
    );
};

export default MyCraft;