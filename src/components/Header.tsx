import React, { useState, useEffect  } from "react";
import { Link } from "react-router-dom";

import { FaEarthAsia } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
// import LogoWeb from "../../public/icons/logo_website.jpg"

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenu]);

  const menuItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Phim lẻ", href: "/phim-le" },
    { label: "Phim bộ", href: "/phim-bo" },
    { label: "Phim hoạt hình", href: "/hoat-hinh" },
    { label: "Phim đã lưu", href: "/phim-da-luu" },
  ];

  return (
    <div className="">

    <div className="sticky top-0 left-0 z-20 w-full h-20 bg-[#11192c] text-white px-5 flex justify-between items-center py-4">
      <Link to="/">
        <h1 className=" flex items-center text-3xl  font-extrabold gap-2 select-none ">
          <FaEarthAsia className="text-primary" height={40} />
          CUDMOV
        </h1>
      </Link>

      <div className="hidden lg:flex items-center justify-center gap-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className="hover:text-primary duration-150 cursor-pointer list-none"
          >
            {item.label}
          </Link>
        ))}
        <Link
          to="/the-loai"
          className="hover:text-primary duration-150 cursor-pointer list-none"
        >
          <li>Thể Loại</li>
        </Link>
        <Link
          to="/quoc-gia"
          className="hover:text-primary duration-150 cursor-pointer list-none"
        >
          <li>Quốc Gia</li>
        </Link>
      </div>

      <div className="flex gap-2 justify-center items-center">
        {/* <CiSearch className=" text-primary w-7 h-7" /> */}

        <div className="relative flex justify-center items-center">
          <input
            placeholder="Tìm kiếm"
            type="text"
            className="p-2 rounded-lg border-[1px] border-primary border-solid flex-1 outline-none mr-1 bg-transparent"
          />
          <CiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary w-7 h-7" />
        </div>

        {/* <div className="bg-primary p-2 rounded-lg text-[#fff] hover:cursor-pointer">
          Đăng nhập
        </div> */}
        <HiOutlineMenu
          size={"24px"}
          className="cursor-pointer flex lg:hidden"
          onClick={handleMenu}
        />
      </div>

      {/* <ul className="flex lg:hidden lg:gap-10 ml-auto text-16 font-semibold">
        {openMenu ? (
          <MdOutlineClose
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : (
          <HiOutlineMenu
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        )}
      </ul> */}
    </div>

    <div
        className={`fixed duration-300 overflow-y-auto overflow-x-hidden right-0 top-0 w-full min-h-screen bg-[#0f172a]/60 z-50 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute overflow-y-auto min-h-screen flex flex-col items-start gap-4 min-w-52 bg-[#0f172a] h-full right-0 top-0 text-[#fff] py-10 px-4 z-10">
          <MdOutlineClose
            size={"24px"}
            className="absolute cursor-pointer top-5 right-5"
            onClick={handleMenu}
          />
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="hover:text-primary duration-150 cursor-pointer list-none p-1 w-full border-b-white/10 border-b-solid border-b-[0.5px]"
              onClick={handleMenu}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/the-loai"
            className="hover:text-primary duration-150 cursor-pointer list-none p-1 w-full border-b-white/10 border-b-solid border-b-[0.5px]"
            onClick={handleMenu}
          >
            <li>Thể Loại</li>
          </Link>
          <Link
            to="/quoc-gia"
            className="hover:text-primary duration-150 cursor-pointer list-none p-1 w-full border-b-white/10 border-b-solid border-b-[0.5px]"
            onClick={handleMenu}
          >
            <li>Quốc Gia</li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;