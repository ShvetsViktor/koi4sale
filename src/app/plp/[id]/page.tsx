// app/plp/[id]/page.tsx
import ProductOverview from "../../components/productOverview/ProductOverview";

export const dynamicParams = false;

export async function generateStaticParams() {
    return [
        { params: { id: "1" } },
        { params: { id: "2" } },
        { params: { id: "3" } },
        { params: { id: "4" } },
        { params: { id: "5" } },
        { params: { id: "6" } },
        { params: { id: "7" } },
        { params: { id: "8" } },
    ];
}

interface PageProps {
    params: {
        id: string;
    };
}

export default function Page({ params }: PageProps) {
    return <ProductOverview productId={params.id} />;
}