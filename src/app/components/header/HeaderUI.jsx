"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "@/app/components/header/MobileMenu";
import Icons from "@/app/components/header/Icons";
import Search from "@/app/components/header/Search";

export default function HeaderUI({
    isCartOpen,
    setIsCartOpen,
    cartTrigger,
    cartBox,
    open,
    setOpen,
    sticky,
    menuTrigger,
    menuRef,
    handleNavbarToggle,
}) {
    return (
        <header
            className={`flex w-full items-center bg-white dark:bg-dark ${sticky && "sticky top-0 z-50"
                }`}
        >
            <div className="w-full p-4">
                <div className="container mx-auto">
                    <div className="w-full relative py-2 flex">
                        <div className="w-full flex flex-wrap items-center justify-between">
                            {/* === Логотип === */}
                            <Link
                                href="/"
                                className="block order-1 grow basis-0 shrink min-w-[120px] max-w-[300px] leading-none overflow-hidden"
                            >
                                <Image
                                    src="/img/header/logo-light.svg"
                                    alt="logo"
                                    width={230}
                                    height={34}
                                    className="block dark:hidden w-full max-w-full h-auto select-none"
                                    priority
                                />
                                <Image
                                    src="/img/header/logo-dark.svg"
                                    alt="dark logo"
                                    width={230}
                                    height={34}
                                    className="hidden dark:block w-full max-w-full h-auto select-none"
                                    priority
                                />
                            </Link>

                            <div className="flex flex-nowrap flex-shrink-0 gap-2 order-2 md:order-3">
                                {/* === Icons === */}
                                <Icons />

                                {/* === Mobile menu === */}
                                <MobileMenu
                                    open={open}
                                    handleNavbarToggle={handleNavbarToggle}
                                    menuRef={menuRef}
                                    menuTrigger={menuTrigger}
                                    burgerSize={48}
                                />
                            </div>

                            {/* === Search === */}
                            <Search className="order-3 md:order-2" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}