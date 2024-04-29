import Bannar from "../ExtraRoute/Bannar";
import Class from "../ExtraRoute/Class";
import Revews from "../ExtraRoute/Revews";
import SectionCard from "../ExtraRoute/SectionCard";
import AllCraft from "./AllCraft";

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <AllCraft></AllCraft>
      {/* <SectionCard></SectionCard> */}
      <Class></Class>
      <Revews></Revews>
    </div>
  );
};

export default Home;
