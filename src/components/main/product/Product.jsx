import { useProduct } from './hooks';

function Product() {
    const { sku } = useProduct();

    return <>{sku}</>
}

export default Product;