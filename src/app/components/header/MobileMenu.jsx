"use client";
import Link from "next/link";
import { forwardRef } from "react";

const MobileMenu = forwardRef(function MobileMenu(
    { open, handleNavbarToggle, menuRef, menuTrigger, className = "", burgerSize = 24 },
    ref
) {
    return (
        <div className={`relative h-full flex items-center ${className}`}>
            {/* Бургер */}
            <button
                onClick={handleNavbarToggle}
                aria-label={open ? "Close menu" : "Open menu"}
                ref={menuTrigger}
                className="hover:cursor-pointer relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-8 md:w-12 md:h-9"
            >
                {[0, 1, 2].map((i) => (
                    <span
                        key={i}
                        className="absolute left-[10%] w-[80%] h-[2px] bg-current rounded transition-all duration-300 ease-in-out"
                        style={{
                            top:
                                i === 0
                                    ? open
                                        ? "50%"
                                        : "6px"
                                    : i === 1
                                        ? "50%"
                                        : open
                                            ? "50%"
                                            : "auto",
                            bottom: i === 2 && !open ? "6px" : "auto",
                            transform:
                                i === 0
                                    ? open
                                        ? "translateY(-50%) rotate(45deg)"
                                        : "none"
                                    : i === 1
                                        ? open
                                            ? "translateY(-50%) scaleX(0)"
                                            : "translateY(-50%)"
                                        : open
                                            ? "translateY(-50%) rotate(-45deg)"
                                            : "none",
                        }}
                    ></span>
                ))}
            </button>

            {/* Меню */}
            {open && (
                <nav
                    ref={menuRef}
                    className={`
                        fixed top-[72px] z-50 
                        bg-white dark:bg-dark-2 border-t border-stroke dark:border-dark-3
                        w-full left-0
                        md:w-[330px] md:left-auto md:right-0
                    `}
                >
                    <ul className="flex flex-col items-start py-4 px-4 space-y-3">
                        <li><Link href="/plp" className="hover:text-primary border-b border-stroke dark:border-white">Shop</Link></li>
                        <li><Link href="/delivery" className="hover:text-primary border-b border-stroke dark:border-white">Delivery</Link></li>
                        <li><Link href="/about" className="hover:text-primary border-b border-stroke dark:border-white">Our Team</Link></li>
                        <li><Link href="/faq" className="hover:text-primary border-b border-stroke dark:border-white">FAQ</Link></li>
                        <li><Link href="/returns" className="hover:text-primary border-b border-stroke dark:border-white">Returns</Link></li>
                        <li><Link href="/privacy" className="hover:text-primary border-b border-stroke dark:border-white">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-primary border-b border-stroke dark:border-white">Terms of Service</Link></li>
                        <li><Link href="/contact" className="hover:text-primary border-b border-stroke dark:border-white">Contact Us</Link></li>
                    </ul>
                </nav>
            )}
        </div>
    );
});

export default MobileMenu;