'use client';
// import { Icon } from '@iconify/react';
import { Link } from "react-scroll";

import { FaFacebook, FaInstagram, FaEnvelope, FaEarthAsia   } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" left-0 bottom-0 w-full bg-[#11192c] px-5 text-[#fff]">
        <div className="">
            <div className="flex justify-center md:justify-start py-5">
                <Link to="/">
                    <h1 className=" flex items-center text-3xl font-extrabold gap-2 select-none px-5">
                    <FaEarthAsia
                        className="text-primary"
                        height={40}
                        />
                    CUDMOV
                    </h1>
                </Link>
            </div>
            <div className="flex items-center justify-between flex-col md:flex-row gap-8 p-5 border-y-2 border-white/5 ">
                <ul className="flex items-center flex-wrap gap-x-8 gap-y-2 text-xs font-semibold lg:gap-14">
                <li className="hover:text-primary duration-150 cursor-pointer">
                    FAQ
                </li>
                <li className="hover:text-primary duration-150 cursor-pointer">
                    TRUNG TÂM TRỢ GIÚP
                </li>
                <li className="hover:text-primary duration-150 cursor-pointer">
                    ĐIỀU KHOẢN
                </li>
                <li className="hover:text-primary duration-150 cursor-pointer">
                    CHÍNH SÁCH
                </li>
                </ul>
                <ul className="flex items-center gap-x-2.5 text-xs font-semibold">
                <Link
                    to="https://github.com/pth-1641"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-black aspect-square p-2.5 hover:text-primary duration-150"
                >
                    <FaFacebook  height={16} />
                </Link>
                <Link
                    to="https://fb.com/pth.1641"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-black aspect-square p-2.5 hover:text-primary duration-150"
                >
                    <FaInstagram  height={16} />
                </Link>
                <Link
                    to="https://www.instagram.com/pth_1641"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-black aspect-square p-2.5 hover:text-primary duration-150"
                >
                    <FaEnvelope height={16} />
                </Link>
                </ul>
            </div>
        </div>
        <div className="p-5">
            <p className="text-center max-w-7xl mx-auto text-sm font-medium">
                Copyright © {new Date().getFullYear()}. All Rights Reserved By{' '}
                <span className="text-primary">CudMov</span>
            </p>
        </div>
  </footer>
  );
};

export default Footer;
