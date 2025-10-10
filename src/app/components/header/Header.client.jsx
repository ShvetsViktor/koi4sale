"use client";

import HeaderUI from "./HeaderUI";
import { useHeaderState } from "@/app/domain/useHeaderState";

export default function HeaderClient() {
    const state = useHeaderState();
    return <HeaderUI {...state} />;
}

// HeaderUI.jsx
// index.js
// Header.client.js