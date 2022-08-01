import { useMemo, useState } from 'react';
import classes from './MegaMenu.module.css';
import { megaMenuData, CATEGORIES } from './mega-menu-data';
import { MAINLINK } from '../../../constants'

function MegaMenu({ isOffset, toggle }) {
    const data = useMemo(() => Array.from(megaMenuData.entries())
        .map((el, i) => <MainFloor key={i} data={el} />), []);

    const contentLinkPanelClass = isOffset ? classes.contentLinksPanelOffset : classes.contentLinksPanel;

    return <>
        <div className={contentLinkPanelClass}>
            <ul className={classes.contentLinks}>
                <li>
                    <a className={classes.linksCont} href="https://www.golfdiscount.com/gdgiftcard/"> Gift Cards</a>
                </li>
                <li>
                    <a className={classes.linksCont} href="https://www.golfdiscount.com/customer/account/login/"> Log In</a>
                </li>
            </ul>
            <div  className={classes.menuNavTop}>
                <div>Categories</div>
                <div onClick={toggle} className={classes.menuNavCloseFirst}>X</div>
     
            </div>
            <div className={classes.megaMenu}>
                <nav>
                    <ul className={classes.navigationMenu}>
                        {data}
                    </ul>
                </nav>
            </div>
        </div>

    </>


}

const MainFloor = ({ data: [key, value] }) => {

    const [isOpen, setIsOpen] = useState(false);
    const secondFloor = Object.entries(value).map(([first, second], i) => {
        return <FirstFlor key={`main-floor-${i}`} main={key} first={first} second={second} />
    })


    const handleIsOpen = () => {
        if (window.innerWidth <= 768) setIsOpen(prev => !prev)
    }

    const openerClassName =  isOpen ? classes.openerActive : classes.opener;


    const megaMenuSubmenuClassname = isOpen ? classes.megaMenuSubmenuActive : classes.megaMenuSubmenu;

    return <li className={classes.headerLink}>
        <a href={[MAINLINK, key].join('/').replaceAll(' ', '-')}>
            <span>
                {key}
            </span>
        </a>
        <span onClick={handleIsOpen} className={openerClassName}>
            <div className={classes.roleAfterMenu} />
        </span>
        <div className={megaMenuSubmenuClassname}>
            {secondFloor}
            <div className={classes.linkToAll}>
                <a href={[MAINLINK, key].join('/').replaceAll(' ', '-')}>
                    <span> Shop all {key}</span>
                </a>
            </div>
        </div>
    </li>
}

function FirstFlor({ main, first, second }) {

    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        if (window.innerWidth <= 768) setIsOpen(prev => !prev)
    }


    const secondFloor = second.map((el, i) => (
        <SecondFlor
            key={i}
            main={main}
            first={first}
            keyName={CATEGORIES[el]}
        />
    ))

    const secondLevelClassname = isOpen ? classes.secondLevelActive : classes.secondLevel;
    const openerClassname = isOpen ? classes.openerActive : classes.opener;

    return <div className={classes.firstLevelBlock}>
        <a href={[MAINLINK, main, first].join('/').replaceAll(' ', '-')}>
            <span>
                {first}
            </span>
        </a>
        <span onClick={handleIsOpen} className={openerClassname}>&nbsp;</span>
        <div className={secondLevelClassname}>
            {secondFloor}
        </div>

    </div>
}


function SecondFlor({ main, first, keyName }) {
    const link = [MAINLINK, main, first, keyName].join('/').replaceAll(' ', '-');
    return <div className={classes.lastFloor}>
        <a href={link}>
            <span>
                {keyName}
            </span>
        </a>
    </div>
}




export default MegaMenu;