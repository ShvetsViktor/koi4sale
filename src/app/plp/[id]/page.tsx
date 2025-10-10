// app/plp/[id]/page.tsx
import ProductOverview from "../../components/productOverview/ProductOverview";

// Разрешаем ТОЛЬКО заранее сгенерированные id
export const dynamicParams = false;

// Список страниц, которые будут сгенерированы при билде (output: "export")
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

export default function Page({ params }: { params: { id: string } }) {
    return <ProductOverview productId={params.id} />;
}