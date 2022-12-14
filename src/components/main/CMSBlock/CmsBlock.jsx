import { data } from './cms-block-content';
import './cms-styles.css';
import './mag-style.css'
import classes from './cms-block.module.css';
import SliderBlock from './SliderBlock';

function CmsBlock() {
    return <div className='container'>
        <SliderBlock />
        <div className={classes.cmsBlock} dangerouslySetInnerHTML={{ __html: data }} />
    </div>
}
export default CmsBlock;