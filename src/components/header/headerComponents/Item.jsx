import { YOTPA_LINK } from "../../../constants"
import classes from './headerContent.module.css';
import err from '../../../assets/pics/err.png';
import { limitString } from "../../../libs";
import { useCallback, useEffect, useState } from "react";

const reviewsTag = (value) => `${
    YOTPA_LINK
}/batch/app_key/Lp89nKaP5duNVx4PltsI527ipHewSrVsSi0SZJ9o/domain_key/${value}/widget/bottomline`

function Item({ name, description, imageUrl, price, sku, url_key, entity_id }) {
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

    return <div className={classes.matchItem}>
        <div className={classes.imageBlock}>
            <img onError={(e) => {
                e.target.src = err
                e.target.style.background = 'none'
            }} src={imageUrl} alt={name} />
        </div>
        <div className={classes.infoBlock}>
            <div className={classes.title}>{limitString(String(name), 40)}</div>
            <div className={classes.description}>{limitString(String(description), 40)}</div>
            <div className={classes.stars} dangerouslySetInnerHTML={{ __html: rating?.result }} />
            <div className={classes.price}>${price}</div>
        </div>
    </div>
}

export default Item;