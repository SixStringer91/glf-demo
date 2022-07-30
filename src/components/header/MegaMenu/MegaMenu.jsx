import { useMemo } from 'react';
import classes from './MegaMenu.module.css';
import { megaMenuData, CATEGORIES } from './mega-menu-data';
import { MAINLINK } from '../../../constants'

function MegaMenu() {
    const data = useMemo(() => Array.from(megaMenuData.entries())
        .map((el, i) => <MainFloor key={i} data={el} />), [])

    return <div className={classes.megaMenu}>
        <nav>
            <ul className={classes.navigationMenu}>
                {data}
            </ul>
        </nav>
    </div>
}

const MainFloor = ({ data: [key, value] }) => {
    const secondFloor = Object.entries(value).map(([first, second], i) => {
        return <FirstFlor key={`main-floor-${i}`} main={key} first={first} second={second} />
    })

    return <li className={classes.headerLink}>
        <a href={[MAINLINK, key].join('/').replaceAll(' ', '-')}>
            <span>
                {key}
            </span>
        </a>
        <span className={classes.opener}>
            <div className={classes.roleAfterMenu} />
        </span>
        <div className={classes.megaMenuSubmenu}>
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
    const secondFloor = second.map((el, i) => (
        <SecondFlor
            key={i}
            main={main}
            first={first}
            keyName={CATEGORIES[el]}
        />
    ))

    return <div className={classes.firstLevelBlock}>
        <a href={[MAINLINK, main, first].join('/').replaceAll(' ', '-')}>
            <span>
                {first}
            </span>
        </a>

            <div className={classes.secondLevel}>
                {secondFloor}
            </div>

    </div>
}


function SecondFlor({ main, first, keyName }) {
    const link = [MAINLINK, main, first, keyName].join('/').replaceAll(' ', '-');
    return <div>
        <a href={link}>
            <span>
                {keyName}
            </span>
        </a>
    </div>
}




export default MegaMenu;