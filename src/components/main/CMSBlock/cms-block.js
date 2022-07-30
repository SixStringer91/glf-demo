import {data} from './cms-block-content';
import './cms-styles.css';
import './mag-style.css'
import classes from './cms-block.module.css';
 
function CmsBlock (){
    return <div className={classes.cmsBlock} dangerouslySetInnerHTML={{__html: data}} />
}
export default CmsBlock;