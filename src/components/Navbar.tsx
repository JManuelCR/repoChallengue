import devtoIcon from "../assets/img/devto-icon.png";
import searchLoupe from "../assets/icons/loupe-Icon.svg";
import notifications from "../assets/icons/belt-icon.svg";
import burguer from "../assets/icons/burger-Menu-Icon.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CanvaAsideLeft from "./CanvaAsideLeft";
import Close from "../assets/icons/x-Close-Icon.svg";
import { ToastContainer, toast } from "react-toastify";

const token = localStorage.getItem("token");

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [canvaIsOpen, setCanvaIsOpen] = useState(false);
  const [userToShow, setUser] = useState([])
  const userEmail = localStorage.getItem("email");

  function logOut() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  const toggleMenu = () => {
    setCanvaIsOpen(!canvaIsOpen);
    setTimeout(() => {
      const element = document.getElementById('scrollable')
      if(element){
        console.log("estoy aca");
        element.style.overflow = 'hidden'
      }
    }, 500);
  };

  useEffect(() => {
    const handleClickOutside = (event: {
      target: { closest: (arg0: string) => any };
    }) => {
      if (isOpen && !event.target.closest(".dropdown")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    fetch(`http://localhost:8080/name/${userEmail}`)
    .then(res => res.json())
    .then(res => {
      setUser(res.data);
    })
    .catch(( ) => {
      toast.error("No hay datos de usuario")
    })
  })
  console.log(userToShow);
  return (
    <>
      <nav className="w-full h-[56px] bg-[#fff] flex items-center">
        <div className="md:mx-[10px] px-4 lg:mx-auto max-w-[1200px] w-full flex items-center justify-between">
          <div className=" flex items-center ">
            <span className="leading-6 block leading-6">
              <button
                className="mx-2 p-2 relative inline-block md:hidden"
                type="submit"
                onClick={toggleMenu}
              >
                <img
                  className="w-[24px] h-[24px]"
                  src={burguer}
                  alt="Burguer menu icon"
                />
              </button>
              {canvaIsOpen && (
                <div  className="max-h-screen w-full">
                  <div id="scrollable" className="fixed inset-0 w-full max-h-screen top-0 left-0 bg-[#000] opacity-70 z-10"></div>
                  <div className="absolute top-0 left-0 w-[75%] bg-[#fff] opacity-100 z-20 overflow-y-scroll p-4 min-h-screen">
                    <div className="flex justify-between items-center ps-2 mb-4">
                      <h2 className="text-[#303030] font-bold text-lg">
                        DEV Community
                      </h2>
                      <a href="">
                        <img className="w-5 h-5" src={Close} alt="" />
                      </a>
                    </div>
                    <CanvaAsideLeft />
                  </div>
                </div>
              )}
            </span>
            <div className="flex">
              <a className="normal-case text-xl block">
                <span>
                  <Link to={"/"}>
                    <img
                      className="h-[40px] w-[50px] max-w-[100%]"
                      src={devtoIcon}
                      alt="Devto-icon"
                    />
                  </Link>
                </span>
              </a>
              <div className="mx-4 hidden md:block">
                <form action="submit">
                  <div className="flex flex-row flex-wrap">
                    <div className="flex flex-col flex-nowrap relative shrink grow text-gray-700">
                      <input
                        className="bg-[#000] rounded py-[6.5px] px-[8px] w-[380px] lg:w-[420px] resize-y bg-[white]"
                        type="text"
                        placeholder="Search..."
                      />
                      <button className="left-[91%] right-[0.5%] top-[3%] absolute">
                        <div className="relative w-[38px] h-[38px] rounded-md flex justify-center items-center">
                        <span className="absolute inset-0 bg-black opacity-0 hover:opacity-10 rounded"></span>
                        <img
                          className="w-[24px] h-[24px]"
                          src={searchLoupe}
                          alt="search icon"
                        />
                        </div>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <ToastContainer />
          <div className="flex items-center ms-[18px] lg:ms-259px lasContainerNav me-4 md:me-0">
            <a className="md:hidden me-2 relative" href="">
            <span className="absolute inset-0 bg-black opacity-0 hover:opacity-10 rounded"></span>
              <img
                className="w-[28px] h-[28px]"
                src={searchLoupe}
                alt="search icon"
              />
            </a>
            {token ? (
              <div className="flex items-center justify-center gap-3">
                <Link to={"/create"}>
                  <a
                    className="text-[#3B49E9] relative hidden md:block flex py-[7px] px-[15px] text-8 font-normal border-[#3B49E9] border-[1px] rounded-md hover:bg-[#3B49E9] hover:text-[#fff]"
                    href=""
                  >
                    Create post
                  </a>
                </Link>
                <a href="">
                  <img src={notifications} alt="" />
                </a>
                <div className="flex justify-center">
                  <button className="" onClick={toggleDropdown}>
                    <span className="">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={userToShow.profilePicture}
                        alt="User profile image"
                      />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="dropdown absolute bg-[#fff] w-[97%] p-2 h-auto right-[8px] md:w-[250px] top-[40px] mt-2 rounded-md z-10">
                      <ul className="">
                        <li className="mb-2 pb-2 border-b-[#d6d6d6] border-b-[1px]">
                          <a className="py-2 px-4 block" href="">
                            <div className="w-full">
                              <span className="text-[#404040] font-bold text-base">
                                {userToShow.name}
                              </span>
                              <span className=""></span>
                            </div>
                          </a>
                        </li>
                        <li className="">
                          <a
                            className="py-2 px-4 text-base block text-[#404040] font-[400]"
                            href=""
                          >
                            Dashboard
                          </a>
                        </li>
                        <li className="">
                          <a
                            className="py-2 px-4 text-base block text-[#404040] font-[400]"
                            href=""
                          >
                            Create Post
                          </a>
                        </li>
                        <li className="">
                          <a
                            className="py-2 px-4 text-base block text-[#404040] font-[400]"
                            href=""
                          >
                            Reading list
                          </a>
                        </li>
                        <li className="pb-2">
                          <a
                            className="py-2 px-4 text-base block text-[#404040] font-[400]"
                            href=""
                          >
                            Settigns{" "}
                          </a>
                        </li>
                        <li className="pt-2 border-t-[#d6d6d6] border-t-[1px]">
                          <a
                            className="py-2 px-4 text-base block text-[#404040] font-[400]"
                            href="#"
                            onClick={logOut}
                          >
                            Sing Up
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div></div>
            )}
            {!token ? (
              <div className="flex ms-2">
                <Link to={"/login"}>
                  {}
                  <span className="block leading-6 px-4 py-2 me-2 relative text-[#404040] text-8 font-normal hidden md:block hover:decoration-1">
                    <a className="hover:decoration-1 hover:text-blue-800 hover:underline" href="">Log in <span className="absolute inset-0 bg-[#3B49DF] opacity-0 hover:opacity-10 rounded-md"></span></a>
                  </span>
                </Link>
                <Link to={"/signup"}>
                  <a
                    className="text-[#3B49E9] relative flex py-[7px] px-[15px] text-8 font-normal border-[#3B49E9] border-[1px] hover:bg-[#3B49E9] hover:text-[#fff] rounded-md"
                    href=""
                  >
                    Create account
                  </a>
                </Link>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
