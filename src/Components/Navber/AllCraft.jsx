import { useLoaderData } from "react-router-dom";
import SingleCraft from "../ExtraRoute/SingleCraft";


const AllCraft = () => {

    
const items=useLoaderData()

    return (
        <div data-aos="zoom-in" data-aos-duration='1700' className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            
          {
            items.map(item=> <SingleCraft key={item._id} item={item}></SingleCraft>)
          }
        </div>
    );
};

export default AllCraft;