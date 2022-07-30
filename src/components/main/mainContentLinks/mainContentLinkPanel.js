import React, { useMemo } from 'react';
import { mainContentLinkData } from './mainContentLinkData';
import MainContentLinkItem from './mainContentLinkItem';
import './mainContentLink.style.css';

const MainLinksPanel = (props) => {

    const linksPanel = useMemo(() => mainContentLinkData
        .map(({ id, def, inner, class: style }) => {
            const content = inner.map(el => <MainContentLinkItem key={el.id} {...el} />)
            return (
                <div key={id} >
                    <div className="mainblockTitle">
                        <p id={id} >
                            {def}
                        </p>
                    </div>
                    <div className="mainblockContent">
                        <div className="blockContmain">
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
            <div className='mainLinksGrid'>
                {linksPanel}
            </div>
        </div>
    )
};
export default MainLinksPanel;