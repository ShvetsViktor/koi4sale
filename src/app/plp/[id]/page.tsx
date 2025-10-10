// app/plp/[id]/page.tsx
import ProductOverview from "../../components/productOverview/ProductOverview";

export const dynamicParams = false;

// Возвращаем список ID (без обёртки { params: ... })
export async function generateStaticParams(): Promise<Array<{ id: string }>> {
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

export default async function Page(
    props: PageProps<'/plp/[id]'>
) {
    const { id } = await props.params; // params — Promise -> ждём его
    return <ProductOverview productId={id} />;
}