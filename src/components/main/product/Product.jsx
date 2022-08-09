import { Recommendations } from '../../../ui-kit';
import { useProduct } from './hooks';

function Product() {
    const { sku } = useProduct();

    return (
        <div>
            <div>{sku}</div>
            <Recommendations />
        </div>
    )
}

export default Product;