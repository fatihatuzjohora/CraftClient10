 
import { useEffect, useState } from "react";
import SingleCraft from "../ExtraRoute/SingleCraft";

import { useLoaderData } from "react-router-dom";


const AllCraft = () => {
    const [data, setdata]=useState([]);
  useEffect(() => {
    fetch('https://craft-henna-iota.vercel.app/craft', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', 
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json()
    })
    .then(data => {
      console.log(data);
      setdata(data)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
});
  },[]);

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1700"
      className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-5"
    >
      {data?.map((item) => (
        <SingleCraft key={item._id} item={item}></SingleCraft>
      ))}
    </div>
  );
};

export default AllCraft;
