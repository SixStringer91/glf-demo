import { useCallback, useEffect, useState } from "react";
import { YOTPA_LINK } from "../../constants";

const reviewsTag = (value) => `${YOTPA_LINK
}/batch/app_key/Lp89nKaP5duNVx4PltsI527ipHewSrVsSi0SZJ9o/domain_key/${value}/widget/bottomline`

export const useProductItem = ({ sku, url_key, entity_id }) => {
    const [rating, setRating] = useState(null);

    const fetchRating = useCallback(() => {
        const data = new FormData();

        const body = {
            methods: JSON.stringify([
                {
                    method: "bottomline",
                    params: {
                        pid: entity_id,
                        link: `https://www.golfdiscount.com/${url_key}`,
                        skip_average_score: true,
                        widget_product_id: entity_id
                    }
                }]
            )
        };

        for (const key in body) {
            data.append(key, body[key]);
        }

        fetch(reviewsTag(sku), { method: 'POST', body: data })
            .then((data) => data.json())
            .then((data) => setRating(data[0]))
    }, [entity_id, sku, url_key])

    useEffect(fetchRating, [fetchRating]);

    return rating;
}