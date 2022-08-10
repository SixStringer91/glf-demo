import classes from './product-item.module.css';
import err from '../../assets/pics/err.png';
import { Link } from "react-router-dom";
import { useProductItem } from "./useProductItem";
import { limitString } from '../../libs';



function ProductItem({ classNames = {}, name, description, imageUrl, price, sku, url_key, entity_id }) {
    const rating = useProductItem({sku, url_key, entity_id});

    const propsClasses = {
        root: classes.matchItem, 
        image: classes.imageBlock,
        infoBlock: classes.infoBlock,  
        ...classNames
    }

    return (
        <Link to={`/product/${sku}`} className={propsClasses.root}>
            <div className={propsClasses.image}>
                <img onError={(e) => {
                    e.target.src = err;
                    e.target.style.background = 'none';
                }} src={imageUrl} alt={name} />
            </div>
            <div className={propsClasses.infoBlock}>
                <div className={classes.title}>{limitString(String(name), 40)}</div>
                <div className={classes.description}>{limitString(String(description), 40)}</div>
                <div className={classes.stars} dangerouslySetInnerHTML={{ __html: rating?.result }} />
                <div className={classes.price}>${price}</div>
            </div>
        </Link>
    )
}

export default ProductItem;