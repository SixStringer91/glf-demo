import React, { useMemo } from 'react';
import { linksPanelData } from './linksPanelData';
import FooterLinkItem from './FooterLinkItem';
import './footerlinks.style.css';

const FooterLinksPanel = (props) => {

    const linksPanel = useMemo(() => linksPanelData
        .map(({ id, def, inner, class: style }) => {
            const content = inner.map(el => <FooterLinkItem key={el.id} {...el} />)
            return (
                <div key={id} >
                    <div className="footerblockTitle">
                        <p id={id} >
                            {def}
                        </p>
                    </div>
                    <div className="footerblockContent">
                        <div className="blockContFooter">
                            <ul>
                                {content}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }))

    return (
        <div className='LinksGrd'>
            <div className='footerLinksGrid'>
                {linksPanel}
            </div>
        </div>
    )
};
export default FooterLinksPanel;