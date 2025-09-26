"use client";

import { forwardRef } from "react";

const BurgerButton = forwardRef(({ open, setOpen, className = "" }, ref) => {
    return (
        <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={!!open}
            ref={ref}
            onClick={() => setOpen(!open)}
            className={`${open ? "navbarTogglerActive" : ""} absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 ${className}`}
        >
            <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-dark-6"></span>
            <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-dark-6"></span>
            <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-dark-6"></span>
        </button>
    );
});

BurgerButton.displayName = "BurgerButton";
export default BurgerButton;