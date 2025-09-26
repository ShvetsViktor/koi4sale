// HeroNavbarLogic.jsx
import { useState, useRef, useEffect, useCallback } from "react";

export function useHeroNavbar({
    shouldHideOnScroll = false,
    isMenuOpen: controlledOpen,
    defaultMenuOpen = false,
    onMenuOpenChange,
    disableScrollHandler = false,
} = {}) {
    const [internalOpen, setInternalOpen] = useState(defaultMenuOpen);
    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : internalOpen;

    const navbarRef = useRef(null);
    const toggleRef = useRef(null);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);
    const [hidden, setHidden] = useState(false);

    const setOpen = useCallback(
        (value) => {
            if (!isControlled) {
                setInternalOpen(value);
            }
            onMenuOpenChange?.(value);
        },
        [isControlled, onMenuOpenChange]
    );

    // Toggle menu
    const toggleMenu = useCallback(() => {
        setOpen(!open);
    }, [open, setOpen]);

    // Handle click outside to close
    useEffect(() => {
        const handler = (e) => {
            if (!open) return;
            const target = e.target;
            if (
                navbarRef.current?.contains(target) ||
                toggleRef.current?.contains(target)
            ) {
                return;
            }
            setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, [open, setOpen]);

    // Handle Esc key to close
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => {
            if (e.key === "Escape") {
                setOpen(false);
            }
        };
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("keydown", onKey);
        };
    }, [open, setOpen]);

    // Hide on scroll logic
    useEffect(() => {
        if (!shouldHideOnScroll || disableScrollHandler) return;

        const onScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    const currentY = window.scrollY;
                    if (currentY > lastScrollY.current && currentY > 50) {
                        // scroll down
                        setHidden(true);
                    } else {
                        // scroll up
                        setHidden(false);
                    }
                    lastScrollY.current = currentY;
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [shouldHideOnScroll, disableScrollHandler]);

    return {
        open,
        toggleMenu,
        setOpen,
        navbarRef,
        toggleRef,
        hidden,
    };
}