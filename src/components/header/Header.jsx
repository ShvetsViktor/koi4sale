import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import logo from "/src/assets/logo/koi-custom-logo-v2.svg";


const Header = () => {
    const [open, setOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    const handleNavbarToggle = () => {
        setOpen(!open);
    };

    const handleStickyNavbar = () => {
        if (window.scrollY >= 80) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleStickyNavbar);
        return () => {
            window.removeEventListener("scroll", handleStickyNavbar);
        };
    }, []);

    return (
        <header className={`relative z-50 flex w-full items-center bg-white dark:bg-dark ${sticky ? "sticky top-0" : ""}`}>
            <div className="container">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="w-60 max-w-full px-4">
                        <NavLink to="/" end className="block w-full py-5">
                            <img
                                src={logo}
                                alt="logo"
                                className="w-full dark:hidden"
                            />
                        </NavLink>
                        <img
                            src={logo}
                            alt="logo"
                            className="w-full hidden dark:block"
                        />
                    </div>
                    <div className="flex w-full items-center justify-between px-4">
                        <div>
                            <button
                                onClick={() => setOpen(!open)}
                                id="navbarToggler"
                                className={` ${open && "navbarTogglerActive"
                                    } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary hover:bg-primary/50 hover:cursor-pointer focus:ring-2 lg:hidden`}
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                            </button>
                            <nav
                                id="navbarCollapse"
                                className={`absolute right-4 top-full z-[60] w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2
              lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent
              ${!open && "hidden"}`}
                            >
                                <ul className="block lg:flex">
                                    <ListItem to="/shop">Shop</ListItem>
                                    <ListItem to="/about">About</ListItem>
                                    <ListItem to="/blog">Blog</ListItem>
                                </ul>
                            </nav>
                        </div>
                        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                            <NavLink
                                to="/contact"
                                className="rounded-lg bg-primary px-7 py-3 text-base font-medium hover:bg-orange-700 !text-white"
                            >
                                Contact Us
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
};

export default Header;

const ListItem = ({ children, to }) => {
    return (
        <>
            <li>
                <NavLink
                    to={to}
                    className={({ isActive, isPending }) =>
                        `flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex ` +
                        (isActive ? "active" : isPending ? "pending" : "")
                    }
                >
                    {children}
                </NavLink>
            </li>
        </>
    );
};
