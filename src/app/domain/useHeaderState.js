"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

// Pure client hook that holds all header state/refs/handlers.
// No UI imports, no MobileMenu references. Just logic.
export function useHeaderState() {
    // State
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isWishlist, setIsWishlist] = useState(false);
    const [open, setOpen] = useState(false); // mobile menu
    const [sticky, setSticky] = useState(false);

    // Refs
    const cartTrigger = useRef(null);
    const wishlistTrigger = useRef(null);
    const cartBox = useRef(null);
    const wishlistRef = useRef(null);
    const menuTrigger = useRef(null);
    const menuRef = useRef(null);

    const pathname = usePathname();

    // Handlers
    const handleNavbarToggle = useCallback(() => setOpen((prev) => !prev), []);

    // Sticky navbar on scroll
    useEffect(() => {
        const onScroll = () => setSticky(window.scrollY >= 80);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Generic click-outside helper
    const useClickOutside = (refs, isOpen, setIsOpen) => {
        useEffect(() => {
            if (!isOpen) return;

            const handler = (e) => {
                const target = e.target;
                const clickedInside = refs.some((ref) => {
                    const el = ref.current;
                    return el && el.contains(target);
                });
                if (!clickedInside) setIsOpen(false);
            };

            document.addEventListener("mousedown", handler);
            document.addEventListener("touchstart", handler);
            return () => {
                document.removeEventListener("mousedown", handler);
                document.removeEventListener("touchstart", handler);
            };
        }, [isOpen, setIsOpen, refs]);
    };

    // Apply click-outside for each popover/menu
    useClickOutside([cartBox, cartTrigger], isCartOpen, setIsCartOpen);
    useClickOutside([wishlistRef, wishlistTrigger], isWishlist, setIsWishlist);
    useClickOutside([menuRef, menuTrigger], open, setOpen);

    // Close all on Escape
    useEffect(() => {
        if (!open && !isCartOpen && !isWishlist) return;
        const onKey = (e) => {
            if (e.key === "Escape") {
                setOpen(false);
                setIsCartOpen(false);
                setIsWishlist(false);
            }
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open, isCartOpen, isWishlist]);

    // Close mobile menu after navigation (e.g., clicking any Link)
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // Expose everything UI needs
    return {
        isCartOpen,
        setIsCartOpen,
        isWishlist,
        setIsWishlist,
        cartTrigger,
        wishlistTrigger,
        cartBox,
        wishlistRef,
        open,
        setOpen,
        sticky,
        handleNavbarToggle,
        menuRef,
        menuTrigger,
    };
}

export default useHeaderState;