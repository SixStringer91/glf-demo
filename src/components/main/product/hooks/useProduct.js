import { useParams } from "react-router-dom";

export const useProduct = () => {
    const { sku } = useParams();

    return {
        sku
    }
}