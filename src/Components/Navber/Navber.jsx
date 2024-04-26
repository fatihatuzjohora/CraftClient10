import { useContext, useState } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/logo.jpg"



const Navber = () => {

    // const [theme,setTheme]=useState('light')
    // const changleTheme=()=>{
    //     if(theme==='light'){
    //     setTheme('dark')} else{
    //         setTheme('light')
    //     }
    // }

      //--------------------
  const { user, logOut } = useContext(AuthContext);

  //--------------------
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user log Out succefully");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  //------------------------
  const links = (
    <div className="text-xl flex md:flex-row flex-col font-semibold mt-5" >
      <NavLink className="mr-5" to="/">
        Home
      </NavLink>
      
      <NavLink className="mr-5" to="/contact">
        Contact Us
      </NavLink>
      <NavLink className="mr-5" to="/about">
        About Us
      </NavLink>

      {user && (
        <>
          <NavLink
            className="mr-5"
            to="/profile"
          >
            Profile
          </NavLink>
          <NavLink
            className="mr-5"
            to="/addcraft"
          >
            Add Craft Items
          </NavLink>
          
        </>
      )}
    </div>
  );
  console.log(user);


    return (
        <div>

{/* <div onClick={changleTheme}>
   {theme==='light'? <input type="checkbox" className="toggle-off" checked />: <input type="checkbox" className="toggle-on" checked />}
   </div> */}

<div className="sticky z-10">
      <div className="navbar bg-base-100">
        <div data-aos="zoom-in-left" data-aos-duration='1200' className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="items-center text-center ">
            <img width='100px' src="https://i.ibb.co/T1kykkn/attachment-135102604-removebg-preview.png" alt="logo" />
          </a>
          
        </div>
        <div data-aos="zoom-in-right" data-aos-duration='1300' className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div data-aos="zoom-in-left" data-aos-duration='1400' className="navbar-end">
          {user ? (
            <>
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="btn mr-2 btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full ">
                    <img alt="logo" src={user.photoURL} />
                  </div>
                </div>
              </div>
              <Link to='/signup'>
              <button onClick={handleLogOut} className="btn text-2xl font-semibold">
                Sign Out
              </button></Link>
            </>
          ) : (
            <>
              <div
                tabIndex={0}
                role="button"
                data-tip="hello"
                className="btn mr-2 btn-ghost btn-circle avatar  "
              >
                <div className="w-10 rounded-full ">
                  <img alt="logo" src={logo} />
                </div>
              </div>

              <Link to="/signin">
                <button className="btn text-2xl font-semibold">Sign In</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
        </div>
    );
};

export default Navber;