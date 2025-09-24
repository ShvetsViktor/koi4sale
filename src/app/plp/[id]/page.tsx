"use client";

import { useParams } from "next/navigation";
import ProductOverview from "../../components/productOverview/ProductOverview";

export default function PDP() {
    const params = useParams();
    const id = params?.id as string; // id придёт из [id] в папке маршрута

    return <ProductOverview productId={id} />;
}