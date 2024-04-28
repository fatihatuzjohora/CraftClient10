import Bannar from "../ExtraRoute/Bannar";
import Class from "../ExtraRoute/Class";
import Revews from "../ExtraRoute/Revews";
import AllCraft from "./AllCraft";


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <AllCraft></AllCraft>
            <Class></Class>
            <Revews></Revews>
        </div>
    );
};

export default Home;