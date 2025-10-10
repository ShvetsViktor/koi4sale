// app/plp/[id]/page.tsx
import ProductOverview from "../../components/productOverview/ProductOverview";

// Разрешаем ТОЛЬКО заранее сгенерированные id
export const dynamicParams = false;

// Список страниц, которые будут сгенерированы при билде (output: "export")
export async function generateStaticParams() {
    // Укажите все доступные ID из вашего каталога
    return [
        { id: "1" },
        { id: "2" },
        { id: "3" },
        { id: "4" },
        { id: "5" },
        { id: "6" },
        { id: "7" },
        { id: "8" },
    ];
}

export default function Page({ params }: { params: { id: string } }) {
    return <ProductOverview productId={params.id} />;
}