import { useContext } from "react";
import ArtCraft from "../ExtraRoute/ArtCraft";
import Bannar from "../ExtraRoute/Bannar";
import Class from "../ExtraRoute/Class";
import Revews from "../ExtraRoute/Revews";
import SectionCard from "../ExtraRoute/SectionCard";
import AllCraft from "./AllCraft";
import { AuthContext } from "../Firebase/AuthProvider";

const Home = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div><div className="text-7xl flex justify-center p-10 w-[100vh]"><span className="loading loading-spinner items-center loading-lg"></span></div>
    {/* <div className="h-48 rounded-t dark:bg-gray-300"></div>
    <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
      <div className="w-full h-6 rounded dark:bg-gray-300"></div>
      <div className="w-full h-6 rounded dark:bg-gray-300"></div>
      <div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
    </div> */}
  </div>   
  }
  return (
    <div>
      <Bannar></Bannar>
      <AllCraft></AllCraft>
      {/* <SectionCard></SectionCard> */}
      <ArtCraft></ArtCraft>
      <Class></Class>
      <Revews></Revews>
    </div>
  );
};

export default Home;
