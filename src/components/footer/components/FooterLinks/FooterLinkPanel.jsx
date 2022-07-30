import React, { useMemo } from 'react';
import { linksPanelData } from './linksPanelData';
import FooterLinkElement from './FooterLinkElement';
import classes from './footerlinks.module.css';

const FooterLinksPanel = () => {

    const linksPanel = useMemo(() => linksPanelData
        .map(({ id, def, inner}) => <FooterLinkElement key={id} def={def} inner={inner} />),[])

    return (
        <div className={classes.LinksGrd}> 
            <div className={classes.footerLinksGrid}>
                {linksPanel}
            </div>
        </div>
    )
};
export default FooterLinksPanel;