import classNames from "classnames";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useRecommendations } from "./hooks";
import classes from './recommendations.module.css'

function Recommendations() {
    const recData = useRecommendations();

    const cards = useMemo(() => {
        if (!recData) return null;
        return recData.map((el) => {
            const { imageUrl, msrp, name, price, uid, sku } = el.mappings.core;
            const finalPrice = <div className={classes.priceWrapper}>
                {!msrp || msrp === price
                    ? <span className={classes.price}>{price}$</span>
                    : <>
                        <span className={classNames(classes.price, classes.redPrice)}>{price}$</span>
                        <span className={classes.previousPrice}>{msrp}$</span>
                    </>
                }
            </div>
            return (
                <li className={classes.liItem} key={`rec-${uid}`}>
                    <Link className={classes.recItem} to={`/product/${sku}`}>
                    <img className={classes.img} src={imageUrl} alt={name} />
                    <div className={classes.title}>{name}</div>
                    {finalPrice}
                    </Link>
                </li>
            )
        })
    }, [recData]);

    return <div className={classes.recWrapper}>
        <div className={classes.recForYou}>Recommendations For You</div>
        <ul className={classes.recommendations}>{cards}</ul>
    </div>
}

export default Recommendations;