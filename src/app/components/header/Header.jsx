'use client'

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import logoLight from "./logo-light.svg";
import logoDark from "./logo-dark.svg";
import BurgerButton from "../burgerButton/BurgerButton";




function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const isDark = theme === "dark";

    return (
        <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
            <input
                type="checkbox"
                checked={isDark}
                onChange={() => setTheme(isDark ? "light" : "dark")}
                className="sr-only"
            />
            <span className="label flex items-center text-sm font-medium text-black dark:text-white">
                Light
            </span>
            <span
                className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${isDark ? "bg-[#212b36]" : "bg-[#CCCCCE]"
                    }`}
            >
                <span
                    className={`dot h-6 w-6 rounded-full bg-white duration-200 ${isDark ? "translate-x-[28px]" : ""
                        }`}
                ></span>
            </span>
            <span className="label flex items-center text-sm font-medium text-black dark:text-white">
                Dark
            </span>
        </label>
    );
}

const ECommerceNavbar4 = () => {
    // State and refs for cart/wishlist dropdowns, lifted here for use in Navbar (mobile) and MiddleNavbar (desktop)
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isWishlist, setIsWishlist] = useState(false);
    const cartTrigger = useRef(null);
    const wishlistTrigger = useRef(null);
    const cartBox = useRef(null);
    const wishlistRef = useRef(null);
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
        <>
            {/* <!-- ====== Navbar Section Start --> */}
            <header className={`flex w-full items-center bg-white dark:bg-dark ${sticky && "sticky top-0 z-50"
                }`}>
                {/* ... top nav omitted ... */}
                <MiddleNavbar
                    isCartOpen={isCartOpen}
                    setIsCartOpen={setIsCartOpen}
                    isWishlist={isWishlist}
                    setIsWishlist={setIsWishlist}
                    cartTrigger={cartTrigger}
                    wishlistTrigger={wishlistTrigger}
                    cartBox={cartBox}
                    wishlistRef={wishlistRef}
                />
            </header>
            {/* <!-- ====== Navbar Section End -->    */}
        </>
    );
};

export default ECommerceNavbar4;

const MiddleNavbar = ({
    isCartOpen,
    setIsCartOpen,
    isWishlist,
    setIsWishlist,
    cartTrigger,
    wishlistTrigger,
    cartBox,
    wishlistRef,
}) => {
    // useClickOutside logic for dropdowns
    const useClickOutside = (refs, isOpen, setIsOpen) => {
        useEffect(() => {
            const clickHandler = ({ target }) => {
                if (
                    !refs.some((ref) => ref.current) ||
                    !isOpen ||
                    refs.some((ref) => ref.current.contains(target))
                )
                    return;
                setIsOpen(false);
            };
            document.addEventListener("click", clickHandler);
            return () => document.removeEventListener("click", clickHandler);
        }, [refs, isOpen, setIsOpen]);
    };
    useClickOutside([cartBox, cartTrigger], isCartOpen, setIsCartOpen);
    useClickOutside([wishlistRef, wishlistTrigger], isWishlist, setIsWishlist);

    return (

        <div className="w-full border-b border-stroke dark:border-dark-3 lg:py-4">
            <div className="container mx-auto">
                <div className="relative py-2 -mx-4 flex flex-col sm:flex-row items-center sm:justify-between gap-4">

                    {/* Logo and Navbar (burger) inline */}
                    <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start">
                        <Link href="/" className="block w-40 pl-6">
                            <img src={logoLight.src} alt="logo" className="w-full dark:hidden" />
                            <img src={logoDark.src} alt="dark logo" className="w-40 hidden dark:block" />
                        </Link>
                        <Navbar
                            isCartOpen={isCartOpen}
                            setIsCartOpen={setIsCartOpen}
                            isWishlist={isWishlist}
                            setIsWishlist={setIsWishlist}
                            cartTrigger={cartTrigger}
                            wishlistTrigger={wishlistTrigger}
                            cartBox={cartBox}
                            wishlistRef={wishlistRef}
                        >
                            <ListItem NavLink="/plp" menuName="Shop" />
                            <ListItem NavLink="/about" menuName="About" />
                            <ListItem NavLink="/delivery" menuName="Delivery" />
                            <ListItem NavLink="/returns" menuName="Returns" />
                            <ListItem NavLink="/faq" menuName="FAQ" />
                            <ListItem NavLink="/about" menuName="Our Team" />
                            <ListItem NavLink="/terms" menuName="Terms of Service" />
                            <ListItem NavLink="/privacy" menuName="Privacy Policy" />
                        </Navbar>
                    </div>
                    {/* Форма поиска — всегда видна */}
                    <div className="w-full flex justify-center sm:justify-start px-6">
                        <form className="relative flex w-full items-center rounded-md border border-stroke bg-gray-2 dark:border-dark-3 dark:bg-dark-2">
                            <input
                                type="text"
                                placeholder="I'm shopping for..."
                                className="w-full bg-transparent py-1 pl-6 pr-[58px] text-base text-body-color outline-none dark:text-dark-6"
                            />
                            <button className="absolute right-0 top-0 flex h-full w-[52px] items-center justify-center rounded-br-md rounded-tr-md border border-primary bg-primary text-white">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-current"
                                >
                                    <path
                                        d="M19.707 18.293l-5.388-5.388A7.935 7.935 0 0016 8a8 8 0 10-8 8 7.935 7.935 0 004.905-1.681l5.388 5.388a1 1 0 001.414-1.414zM8 14a6 6 0 116-6 6.006 6.006 0 01-6 6z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>

                    {/* Иконки — скрыты на маленьких, видны от sm */}
                    <div className="hidden sm:flex w-full sm:w-auto items-center justify-end space-x-4">
                        {/* wishlist */}
                        <div className="relative">
                            <button
                                ref={wishlistTrigger}
                                onClick={() => setIsWishlist(!isWishlist)}
                                className="relative flex h-[42px] w-[42px] items-center justify-center rounded-full border border-stroke bg-gray-2 text-dark dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                            >
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-current"
                                >
                                    <path d="M11 20.2812C10.5531 20.2812 10.1062 20.1094 9.7625 19.8C8.97187 19.1125 8.24999 18.4937 7.59687 17.9438C5.63749 16.2594 3.91874 14.85 2.71562 13.4062C1.30624 11.6875 0.618744 10.0719 0.618744 8.25C0.618744 6.49687 1.23749 4.84688 2.33749 3.64375C3.47187 2.40625 5.05312 1.71875 6.73749 1.71875C8.00937 1.71875 9.21249 2.13125 10.2437 2.92188C10.5187 3.12812 10.7594 3.33438 11 3.60938C11.2406 3.36875 11.4812 3.12812 11.7562 2.92188C12.7875 2.13125 13.9562 1.71875 15.2625 1.71875C16.9812 1.71875 18.5281 2.40625 19.6625 3.64375C20.7969 4.84688 21.3812 6.49687 21.3812 8.25C21.3812 10.0719 20.7281 11.6875 19.2844 13.4062C18.0812 14.85 16.3625 16.2937 14.4031 17.9438C13.75 18.4937 12.9937 19.1469 12.2031 19.8C11.8937 20.1094 11.4469 20.2812 11 20.2812ZM6.73749 3.26562C5.46562 3.26562 4.29687 3.78125 3.43749 4.675C2.61249 5.60313 2.16562 6.875 2.16562 8.25C2.16562 9.65938 2.71562 11 3.88437 12.4094C5.01874 13.75 6.66874 15.1594 8.55937 16.775C9.21249 17.325 9.96874 17.9781 10.7594 18.6656C10.8969 18.7687 11.1031 18.7687 11.2406 18.6656C12.0312 17.9781 12.7875 17.3594 13.4406 16.775C15.3656 15.125 17.0156 13.75 18.1156 12.4094C19.2844 11 19.8344 9.65938 19.8344 8.25C19.8344 6.875 19.3531 5.60312 18.5281 4.70937C17.6687 3.78125 16.5 3.26562 15.2625 3.26562C14.3344 3.26562 13.475 3.575 12.7187 4.125C12.4094 4.36562 12.1344 4.64062 11.8594 4.95C11.6531 5.19062 11.3437 5.3625 11 5.3625C10.6562 5.3625 10.3812 5.225 10.1406 4.95C9.86562 4.64062 9.59062 4.36562 9.28125 4.125C8.55937 3.575 7.7 3.26562 6.73749 3.26562Z" />
                                </svg>
                                <span className="absolute -right-1 -top-1 h-[18px] w-[18px] rounded-full bg-primary text-[10px] font-semibold leading-[18px] text-white">
                                    3
                                </span>
                            </button>
                            {isWishlist && (
                                <div
                                    ref={wishlistRef}
                                    className="absolute right-0 z-50 mt-2 w-80 rounded-md border border-stroke bg-white shadow-lg dark:border-dark-3 dark:bg-dark-2"
                                >
                                    <div className="overflow-hidden rounded-lg border border-stroke bg-white px-6 py-8 shadow-1 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark">
                                        <div className="border-b border-stroke pb-3 dark:border-dark-3">
                                            <div className="-mx-1 flex items-center justify-between pb-4">
                                                <CartItem
                                                    link="/#"
                                                    image="https://cdn.tailgrids.com/assets/images/ecommerce/checkout/checkout-02/image-02.jpg"
                                                    title="Circular Sienna"
                                                    desc="Awesome white shirt"
                                                    price="36.00"
                                                />
                                            </div>
                                            <div className="-mx-1 flex items-center justify-between py-4">
                                                <CartItem
                                                    link="/#"
                                                    image="https://cdn.tailgrids.com/assets/images/ecommerce/checkout/checkout-02/image-03.jpg"
                                                    title="Black T-shirt"
                                                    desc="It's a nice black t-shirt"
                                                    price="66.00"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <button className="flex w-full items-center justify-center rounded-md bg-primary px-10 py-[10px] text-center text-base font-medium text-white hover:bg-blue-dark">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* cart */}
                        <div className="relative z-20">
                            <div className="max-w-[200px] justify-end">
                                <button
                                    ref={cartTrigger}
                                    onClick={() => setIsCartOpen(!isCartOpen)}
                                    className="relative flex h-[42px] w-[42px] items-center justify-center rounded-full border-[.5px] border-stroke bg-gray-2 text-dark dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                                >
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="fill-current"
                                    >
                                        <path d="M19.3875 6.7375H18.5625L16.3281 1.1C16.1562 0.687499 15.7094 0.515624 15.3312 0.653124C14.9187 0.824999 14.7469 1.27187 14.8844 1.65L16.8781 6.7375H5.12187L7.11562 1.68437C7.28749 1.27187 7.08124 0.824999 6.66874 0.687499C6.29062 0.515624 5.84374 0.687499 5.67187 1.1L3.43749 6.7375H2.61249C1.99374 6.7375 1.47812 7.25312 1.47812 7.87187V10.6562C1.47812 11.2406 1.89062 11.6875 2.47499 11.7562L3.33437 19.25C3.47187 20.4875 4.50312 21.4156 5.74062 21.4156H16.2594C17.4969 21.4156 18.5281 20.4875 18.6656 19.25L19.525 11.7562C20.075 11.6875 20.5219 11.2062 20.5219 10.6562V7.8375C20.5219 7.21875 20.0062 6.7375 19.3875 6.7375ZM3.02499 8.28437H18.975V10.2437H3.02499V8.28437ZM16.2594 19.8687H5.74062C5.29374 19.8687 4.91562 19.525 4.84687 19.0781L4.02187 11.7906H17.9781L17.1531 19.0781C17.0844 19.525 16.7062 19.8687 16.2594 19.8687Z" />
                                        <path d="M7.49375 13.3375C7.08125 13.3375 6.70312 13.6812 6.70312 14.1281V16.7062C6.70312 17.1187 7.04687 17.4969 7.49375 17.4969C7.94062 17.4969 8.28438 17.1531 8.28438 16.7062V14.0937C8.28438 13.6812 7.94062 13.3375 7.49375 13.3375Z" />
                                        <path d="M14.5062 13.3375C14.0937 13.3375 13.7156 13.6812 13.7156 14.1281V16.7062C13.7156 17.1187 14.0594 17.4969 14.5062 17.4969C14.9531 17.4969 15.2969 17.1531 15.2969 16.7062V14.0937C15.2625 13.6812 14.9187 13.3375 14.5062 13.3375Z" />
                                    </svg>

                                    <span className="absolute -right-1 -top-1 h-[18px] w-[18px] rounded-full bg-primary text-[10px] font-semibold leading-[18px] text-white">
                                        1
                                    </span>
                                </button>
                            </div>
                            <div
                                ref={cartBox}
                                onFocus={() => setIsCartOpen(true)}
                                onBlur={() => setIsCartOpen(false)}
                                className={`absolute right-0 top-full mt-5 w-[330px] ${!isCartOpen && "hidden"
                                    }`}
                            >
                                <div className="overflow-hidden rounded-lg bg-white p-8 shadow-1 dark:bg-dark-2 dark:shadow-box-dark">
                                    <div className="mb-5 border-b border-stroke pb-3 dark:border-dark-3">
                                        <div className="-mx-1 flex items-center justify-between pb-4">
                                            <CartItem
                                                link="/#"
                                                image="https://cdn.tailgrids.com/assets/images/ecommerce/checkout/checkout-02/image-02.jpg"
                                                title="Circular Sienna"
                                                desc="Awesome white shirt"
                                                price="36.00"
                                            />
                                        </div>
                                        <div className="-mx-1 flex items-center justify-between py-4">
                                            <CartItem
                                                link="/#"
                                                image="https://cdn.tailgrids.com/assets/images/ecommerce/checkout/checkout-02/image-03.jpg"
                                                title="Black T-shirt"
                                                desc="It's a nice black t-shirt"
                                                price="66.00"
                                            />
                                        </div>
                                    </div>
                                    <div className="-mx-1 border-b border-stroke pb-5 dark:border-dark-3">
                                        <div className="mb-3 flex items-center justify-between">
                                            <div className="px-1">
                                                <p className="text-base text-dark dark:text-white">
                                                    Subtotal
                                                </p>
                                            </div>
                                            <div className="px-1">
                                                <p className="text-base font-medium text-dark dark:text-white">
                                                    $108
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-3 flex items-center justify-between">
                                            <div className="px-1">
                                                <p className="text-base text-dark dark:text-white">
                                                    Shipping Cost (+)
                                                </p>
                                            </div>
                                            <div className="px-1">
                                                <p className="text-base font-medium text-dark dark:text-white">
                                                    $10.85
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="px-1">
                                                <p className="text-base text-dark dark:text-white">
                                                    Discount (-)
                                                </p>
                                            </div>
                                            <div className="px-1">
                                                <p className="text-base font-medium text-dark dark:text-white">
                                                    $9.00
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="-mx-1 flex items-center justify-between pb-6 pt-5">
                                        <div className="px-1">
                                            <p className="text-base text-dark dark:text-white">
                                                Total Payable
                                            </p>
                                        </div>
                                        <div className="px-1">
                                            <p className="text-base font-medium text-dark dark:text-white">
                                                $88.15
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            href="/#"
                                            className="flex w-full items-center justify-center rounded-md bg-primary px-10 py-[13px] text-center text-base font-medium text-white hover:bg-blue-dark"
                                        >
                                            Place Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                className="relative flex h-[42px] w-[42px] items-center justify-center rounded-full border border-stroke bg-gray-2 text-dark dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                            >
                                <span className="block w-[20px] h-[2px] bg-current mb-[4px]"></span>
                                <span className="block w-[20px] h-[2px] bg-current mb-[4px]"></span>
                                <span className="block w-[20px] h-[2px] bg-current"></span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};


const Navbar = ({
    children,
    isCartOpen,
    setIsCartOpen,
    isWishlist,
    setIsWishlist,
    cartTrigger,
    wishlistTrigger,
    cartBox,
    wishlistRef,
}) => {
    const [open, setOpen] = useState(false);
    const menuTrigger = useRef(null);
    const menuRef = useRef(null);

    const useClickOutside = (refs, isOpen, setIsOpen) => {
        useEffect(() => {
            const clickHandler = ({ target }) => {
                if (
                    !refs.some((ref) => ref.current) ||
                    !isOpen ||
                    refs.some((ref) => ref.current.contains(target))
                )
                    return;
                setIsOpen(false);
            };
            document.addEventListener("click", clickHandler);
            return () => document.removeEventListener("click", clickHandler);
        }, [refs, isOpen, setIsOpen]);
    };

    useClickOutside([menuRef, menuTrigger], open, setOpen);

    return (
        <div className="sm:hidden flex">
            <div className="container mx-auto">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="flex w-full items-center justify-between px-4">
                        <div className="w-full">
                            <button
                                ref={menuTrigger}
                                onClick={() => setOpen(!open)}
                                className={` ${open && "navbarTogglerActive"
                                    } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-dark-6"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-dark-6"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-dark-6"></span>
                            </button>
                            <nav
                                ref={menuRef}
                                className={`fixed left-0 top-[72px] z-50 w-full overflow-y-auto bg-white px-6 py-5 shadow dark:bg-dark-2
                                            lg:static lg:flex lg:h-auto lg:w-full lg:justify-end lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none
                                            ${!open && "hidden"}`}
                            >
                                <ul className="block items-center lg:flex">
                                    {React.Children.map(children, (child, i) =>
                                        React.cloneElement(child, { key: i, setOpen })
                                    )}
                                </ul>
                                <div className="mt-6 sm:hidden">
                                    <ThemeSwitcher />
                                </div>
                                {/* Mobile-only icons */}
                                <div className="mt-6 flex flex-row justify-between px-4 sm:hidden">
                                    {/* wishlist */}
                                    <div className="relative">
                                        <button
                                            ref={wishlistTrigger}
                                            onClick={() => setIsWishlist(!isWishlist)}
                                            className="relative flex h-[42px] w-[42px] items-center justify-center rounded-full border border-stroke bg-gray-2 text-dark dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                                        >
                                            {/* SVG heart */}
                                            <svg
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="fill-current"
                                            >
                                                <path d="M11 20.2812C10.5531 20.2812 10.1062 20.1094 9.7625 19.8C8.97187 19.1125 8.24999 18.4937 7.59687 17.9438C5.63749 16.2594 3.91874 14.85 2.71562 13.4062C1.30624 11.6875 0.618744 10.0719 0.618744 8.25C0.618744 6.49687 1.23749 4.84688 2.33749 3.64375C3.47187 2.40625 5.05312 1.71875 6.73749 1.71875C8.00937 1.71875 9.21249 2.13125 10.2437 2.92188C10.5187 3.12812 10.7594 3.33438 11 3.60938C11.2406 3.36875 11.4812 3.12812 11.7562 2.92188C12.7875 2.13125 13.9562 1.71875 15.2625 1.71875C16.9812 1.71875 18.5281 2.40625 19.6625 3.64375C20.7969 4.84688 21.3812 6.49687 21.3812 8.25C21.3812 10.0719 20.7281 11.6875 19.2844 13.4062C18.0812 14.85 16.3625 16.2937 14.4031 17.9438C13.75 18.4937 12.9937 19.1469 12.2031 19.8C11.8937 20.1094 11.4469 20.2812 11 20.2812ZM6.73749 3.26562C5.46562 3.26562 4.29687 3.78125 3.43749 4.675C2.61249 5.60313 2.16562 6.875 2.16562 8.25C2.16562 9.65938 2.71562 11 3.88437 12.4094C5.01874 13.75 6.66874 15.1594 8.55937 16.775C9.21249 17.325 9.96874 17.9781 10.7594 18.6656C10.8969 18.7687 11.1031 18.7687 11.2406 18.6656C12.0312 17.9781 12.7875 17.3594 13.4406 16.775C15.3656 15.125 17.0156 13.75 18.1156 12.4094C19.2844 11 19.8344 9.65938 19.8344 8.25C19.8344 6.875 19.3531 5.60312 18.5281 4.70937C17.6687 3.78125 16.5 3.26562 15.2625 3.26562C14.3344 3.26562 13.475 3.575 12.7187 4.125C12.4094 4.36562 12.1344 4.64062 11.8594 4.95C11.6531 5.19062 11.3437 5.3625 11 5.3625C10.6562 5.3625 10.3812 5.225 10.1406 4.95C9.86562 4.64062 9.59062 4.36562 9.28125 4.125C8.55937 3.575 7.7 3.26562 6.73749 3.26562Z" />
                                            </svg>
                                            <span className="absolute -right-1 -top-1 h-[18px] w-[18px] rounded-full bg-primary text-[10px] font-semibold leading-[18px] text-white">
                                                3
                                            </span>
                                        </button>
                                        {isWishlist && (
                                            <div ref={wishlistRef} className="absolute right-0 z-50 mt-2 w-80 rounded-md border border-stroke bg-white shadow-lg dark:border-dark-3 dark:bg-dark-2">
                                                <div className="overflow-hidden rounded-lg border border-stroke bg-white px-6 py-8 shadow-1 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark">
                                                    <div className="border-b border-stroke pb-3 dark:border-dark-3">
                                                        <div className="-mx-1 flex items-center justify-between pb-4">
                                                            <CartItem
                                                                link="/#"
                                                                image="https://cdn.tailgrids.com/assets/images/ecommerce/checkout/checkout-02/image-02.jpg"
                                                                title="Circular Sienna"
                                                                desc="Awesome white shirt"
                                                                price="36.00"
                                                            />
                                                        </div>
                                                        <div className="-mx-1 flex items-center justify-between py-4">
                                                            <CartItem
                                                                link="/#"
                                                                image="https://cdn.tailgrids.com/assets/images/ecommerce/checkout/checkout-02/image-03.jpg"
                                                                title="Black T-shirt"
                                                                desc="It's a nice black t-shirt"
                                                                price="66.00"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button className="flex w-full items-center justify-center rounded-md bg-primary px-10 py-[10px] text-center text-base font-medium text-white hover:bg-blue-dark">
                                                            Add to Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {/* cart */}
                                    <div className="relative z-20">
                                        <button
                                            ref={cartTrigger}
                                            onClick={() => setIsCartOpen(!isCartOpen)}
                                            className="relative flex h-[42px] w-[42px] items-center justify-center rounded-full border-[.5px] border-stroke bg-gray-2 text-dark dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                                        >
                                            {/* SVG cart */}
                                            <svg
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="fill-current"
                                            >
                                                <path d="M19.3875 6.7375H18.5625L16.3281 1.1C16.1562 0.687499 15.7094 0.515624 15.3312 0.653124C14.9187 0.824999 14.7469 1.27187 14.8844 1.65L16.8781 6.7375H5.12187L7.11562 1.68437C7.28749 1.27187 7.08124 0.824999 6.66874 0.687499C6.29062 0.515624 5.84374 0.687499 5.67187 1.1L3.43749 6.7375H2.61249C1.99374 6.7375 1.47812 7.25312 1.47812 7.87187V10.6562C1.47812 11.2406 1.89062 11.6875 2.47499 11.7562L3.33437 19.25C3.47187 20.4875 4.50312 21.4156 5.74062 21.4156H16.2594C17.4969 21.4156 18.5281 20.4875 18.6656 19.25L19.525 11.7562C20.075 11.6875 20.5219 11.2062 20.5219 10.6562V7.8375C20.5219 7.21875 20.0062 6.7375 19.3875 6.7375ZM3.02499 8.28437H18.975V10.2437H3.02499V8.28437ZM16.2594 19.8687H5.74062C5.29374 19.8687 4.91562 19.525 4.84687 19.0781L4.02187 11.7906H17.9781L17.1531 19.0781C17.0844 19.525 16.7062 19.8687 16.2594 19.8687Z" />
                                                <path d="M7.49375 13.3375C7.08125 13.3375 6.70312 13.6812 6.70312 14.1281V16.7062C6.70312 17.1187 7.04687 17.4969 7.49375 17.4969C7.94062 17.4969 8.28438 17.1531 8.28438 16.7062V14.0937C8.28438 13.6812 7.94062 13.3375 7.49375 13.3375Z" />
                                                <path d="M14.5062 13.3375C14.0937 13.3375 13.7156 13.6812 13.7156 14.1281V16.7062C13.7156 17.1187 14.0594 17.4969 14.5062 17.4969C14.9531 17.4969 15.2969 17.1531 15.2969 16.7062V14.0937C15.2625 13.6812 14.9187 13.3375 14.5062 13.3375Z" />
                                            </svg>
                                            <span className="absolute -right-1 -top-1 h-[18px] w-[18px] rounded-full bg-primary text-[10px] font-semibold leading-[18px] text-white">
                                                1
                                            </span>
                                        </button>
                                        {isCartOpen && (
                                            <div ref={cartBox} className="absolute right-0 top-full mt-5 w-[330px]">
                                                <div className="overflow-hidden rounded-lg bg-white p-8 shadow-1 dark:bg-dark-2 dark:shadow-box-dark">
                                                    <div className="mb-5 border-b border-stroke pb-3 dark:border-dark-3">
                                                        <div className="-mx-1 flex items-center justify-between pb-4">
                                                            <CartItem
                                                                link="/#"
                                                                image="https://cdn.tailgrids.com/assets/images/ecommerce/checkout/checkout-02/image-02.jpg"
                                                                title="Circular Sienna"
                                                                desc="Awesome white shirt"
                                                                price="36.00"
                                                            />
                                                        </div>
                                                        <div className="-mx-1 flex items-center justify-between py-4">
                                                            <CartItem
                                                                link="/#"
                                                                image="https://cdn.tailgrids.com/assets/images/ecommerce/checkout/checkout-02/image-03.jpg"
                                                                title="Black T-shirt"
                                                                desc="It's a nice black t-shirt"
                                                                price="66.00"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="-mx-1 border-b border-stroke pb-5 dark:border-dark-3">
                                                        <div className="mb-3 flex items-center justify-between">
                                                            <div className="px-1">
                                                                <p className="text-base text-dark dark:text-white">
                                                                    Subtotal
                                                                </p>
                                                            </div>
                                                            <div className="px-1">
                                                                <p className="text-base font-medium text-dark dark:text-white">
                                                                    $108
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="mb-3 flex items-center justify-between">
                                                            <div className="px-1">
                                                                <p className="text-base text-dark dark:text-white">
                                                                    Shipping Cost (+)
                                                                </p>
                                                            </div>
                                                            <div className="px-1">
                                                                <p className="text-base font-medium text-dark dark:text-white">
                                                                    $10.85
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <div className="px-1">
                                                                <p className="text-base text-dark dark:text-white">
                                                                    Discount (-)
                                                                </p>
                                                            </div>
                                                            <div className="px-1">
                                                                <p className="text-base font-medium text-dark dark:text-white">
                                                                    $9.00
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="-mx-1 flex items-center justify-between pb-6 pt-5">
                                                        <div className="px-1">
                                                            <p className="text-base text-dark dark:text-white">
                                                                Total Payable
                                                            </p>
                                                        </div>
                                                        <div className="px-1">
                                                            <p className="text-base font-medium text-dark dark:text-white">
                                                                $88.15
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button
                                                            href="/#"
                                                            className="flex w-full items-center justify-center rounded-md bg-primary px-10 py-[13px] text-center text-base font-medium text-white hover:bg-blue-dark"
                                                        >
                                                            Place Order
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {/* burger menu */}
                                </div>
                            </nav>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
};

const ListItem = ({ NavLink, menuName, setOpen }) => {
    return (
        <li>
            <Link
                href={NavLink}
                onClick={() => setOpen(false)}
                className="flex justify-between py-2 text-base font-medium text-body-color hover:text-primary dark:text-dark-6 lg:mx-4 lg:inline-flex lg:py-6"
            >
                {menuName}
            </Link>
        </li>
    );
};

const CartItem = ({ image, link, title, desc, price }) => {
    return (
        <>
            <div className="flex items-center px-1">
                <div className="mr-3 h-10 w-full max-w-[40px] overflow-hidden rounded">
                    <img src={image} alt="product image" className="w-full" />
                </div>
                <div>
                    <Link
                        href={link}
                        className="text-sm font-medium text-dark hover:text-primary dark:text-white"
                    >
                        {title}
                    </Link>
                    <p className="truncate text-xs font-medium text-body-color dark:text-dark-6">
                        {desc}
                    </p>
                </div>
            </div>
            <div className="px-1">
                <p className="text-base font-semibold text-dark dark:text-white">
                    ${price}
                </p>
            </div>
        </>
    );
};
