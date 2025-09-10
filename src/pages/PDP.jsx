import { useParams } from 'react-router-dom';
import ProductOverview from '../components/productOverview/ProductOverview.jsx';

export default function PDP() {
    const { id } = useParams();
    return <ProductOverview productId={id} />;
}