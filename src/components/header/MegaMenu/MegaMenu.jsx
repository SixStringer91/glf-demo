import { useCallback, useMemo, useState } from 'react';
import classes from './MegaMenu.module.css';
import { megaMenuData, CATEGORIES } from './mega-menu-data';
import { MAINLINK } from '../../../constants'
import { Tabs } from '../../../ui-kit';
import { Link } from 'react-router-dom';

function MegaMenu({ isOffset, toggle }) {

    const tabs = [
        { id: 1, label: 'Menu' },
        { id: 2, label: 'Account' }
    ];

    const classNames = {
        root: classes.TabsRoot,
        tab: classes.Tab,
        selectedTabs: classes.TabSelected,
        label: classes.TabsLabel,
        selectedLabel: classes.TabLabelSelected,
    };

    const [selectedId, setSelectedId] = useState(tabs[0].id);

    const handleToggle = useCallback(
        (e) => {
            if (!isOffset && window.innerWidth <= 768) toggle()
            e.stopPropagation();
        }, [isOffset, toggle]
    );

    const handleSetSelectedId = useCallback((id) => setSelectedId(id), [setSelectedId]);

    const contentLinkPanelClass = isOffset ? classes.contentLinksPanelOffset : classes.contentLinksPanel;

    const data = useMemo(() => Array.from(megaMenuData.entries())
        .map((el, i) => <MainFloor toggle={handleToggle} offset={isOffset} key={i} data={el} />), []);

    const contentLinksClass = selectedId === 2
        ? classes.contentLinksWrapper
        : classes.contentLinksDisabled;

    const menuWrapperClass = selectedId === 1
        ? classes.menuNavWrapper
        : classes.menuWrapperDisabled;

    return <>
        <div className={contentLinkPanelClass}>
            <Tabs
                classNames={classNames}
                selectedId={selectedId}
                tabs={tabs}
                onClick={handleSetSelectedId}
            />
            <div className={contentLinksClass}>
                <ul className={classes.contentLinks}>
                    <li>
                        <Link onClick={handleToggle} className={classes.linksCont} to={`${MAINLINK}/gdgiftcard/`}>
                            Gift Cards
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleToggle} className={classes.linksCont} to={`${MAINLINK}/customer/account/login/`}>
                            Log In
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={menuWrapperClass}>
                <div className={classes.menuNavTop}>
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
        </div>
    </>


}

const MainFloor = ({ data: [key, value], toggle }) => {

    const [isOpen, setIsOpen] = useState(false);
    const secondFloor = Object.entries(value).map(([first, second], i) => {
        return <FirstFlor toggle={toggle} key={`main-floor-${i}`} main={key} first={first} second={second} />
    })


    const handleIsOpen = () => {
        if (window.innerWidth <= 768) setIsOpen(prev => !prev)
    }

    const openerClassName = isOpen ? classes.openerActive : classes.opener;


    const megaMenuSubmenuClassname = isOpen ? classes.megaMenuSubmenuActive : classes.megaMenuSubmenu;

    return <li className={classes.headerLink}>
        <Link onClick={toggle} to={[MAINLINK, key].join('/').replaceAll(' ', '-')}>
            <span>
                {key}
            </span>
        </Link>
        <span onClick={handleIsOpen} className={openerClassName}>
            <div className={classes.roleAfterMenu} />
        </span>
        <div className={megaMenuSubmenuClassname}>
            {secondFloor}
            <div className={classes.linkToAll}>
                <Link onClick={toggle} to={[MAINLINK, key].join('/').replaceAll(' ', '-')}>
                    <span> Shop all {key}</span>
                </Link>
            </div>
        </div>
    </li>
}

function FirstFlor({ main, first, second, toggle }) {

    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        if (window.innerWidth <= 768) setIsOpen(prev => !prev)
    }


    const secondFloor = second.map((el, i) => (
        <SecondFlor
            toggle={toggle}
            key={i}
            main={main}
            first={first}
            keyName={CATEGORIES[el]}
        />
    ))

    const secondLevelClassname = isOpen ? classes.secondLevelActive : classes.secondLevel;
    const openerClassname = isOpen ? classes.openerActive : classes.opener;

    return <div className={classes.firstLevelBlock}>
        <Link onClick={toggle} to={[MAINLINK, main, first].join('/').replaceAll(' ', '-')}>
            <span>
                {first}
            </span>
        </Link>
        <span onClick={handleIsOpen} className={openerClassname}>&nbsp;</span>
        <div className={secondLevelClassname}>
            {secondFloor}
        </div>

    </div>
}


function SecondFlor({ main, first, keyName, toggle }) {
    const link = [MAINLINK, main, first, keyName].join('/').replaceAll(' ', '-');
    return <div className={classes.lastFloor}>
        <Link onClick={toggle} to={link}>
            <span>
                {keyName}
            </span>
        </Link>
    </div>
}




export default MegaMenu;