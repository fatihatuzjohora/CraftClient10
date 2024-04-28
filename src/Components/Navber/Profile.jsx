import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import { useFormAction } from "react-router-dom";
import { Helmet } from "react-helmet";

const Profile = () => {
  //  const { user, updateUserProfile, setUser } = useContext(AuthContext);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useFormAction();

  // const onSubmit = async (data) => {
  //   const name = data.name;
  //   const image = data.photo;
  //   console.log(name, image);
  //   try {
  //     await updateUserProfile(name, image);
  //     setUser({
  //       ...user,
  //       displayName: name,
  //       photoURL: image,
  //     });
  //   } catch (error) {
  //     console.error("Failed to update profile:", error.message);
  //   }
  // };
 // console.log(user);

  return (
    <div>
      <div>
        <Helmet>
        <title>Profile</title>
      </Helmet>
        <section className="p-6 mt-5 mb-5">
          <div className="">
            <p className="text-4xl font-bold text-center">
              Personal Inormation 
            </p>
          </div>

          <div className="grid col-span-1 md:grid-cols-2 gap-5 items-center p-6">
            <div className="">
              <div className=" ">
                <img
                  className="rounded-full  w-full h-full shadow-lg border  hover:shadow-red-300 "
                  src=''
                  alt="photp"
                />
              </div>
              <div className=" items-center mt-5"></div>
            </div>
            <div className="font-semibold text-xl">
              <form
              //  onSubmit={handleSubmit(onSubmit)}
                className="container flex flex-col  mx-auto space-y-12"
              >
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
                  <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="form-control col-span-full">
                      <label className="label ">
                        <span className="label-text text-xl font-semibold">
                          Name
                        </span>
                      </label>
                      <input
                      //  {...register("name")}
                        // defaultValue={user.displayName}
                        className=" w-full border  rounded-md focus:ring focus:ring-opacity-75 "
                      />
                    </div>
                    <div className="form-control col-span-full">
                      <label className="label ">
                        <span className="label-text text-xl font-semibold">
                          Email
                        </span>
                      </label>
                      <input
                      //  {...register("name")}
                        // defaultValue={user.displayName}
                        className=" w-full border  rounded-md focus:ring focus:ring-opacity-75  "
                      />
                    </div>
                    <div className="col-span-full">
                      <label htmlFor="email" className="">
                        Photo URL
                      </label>
                      <input
                       // {...register("photo")}
                        className="w-full border  rounded-md focus:ring focus:ring-opacity-75 "
                      />
                    </div>
                    <div className="w-full h-full col-span-full mt-3 mb-3">
                      <button
                        type="submit"
                        className="text-xl w-full h-full font-semibold  btn bg-gray-400"
                      >
                        Update Information
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
