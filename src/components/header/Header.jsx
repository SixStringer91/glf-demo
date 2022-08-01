import TopHeader from './headerComponents/TopHeader'
import TopHeaderLinks from './headerComponents/TopHeaderLinks'
import HeaderContent from './headerComponents/HeaderContent';
import classes from './header.module.css';

const Header = ({isOffset, toggle}) => {
    return (
        <header className={classes.header}>
            <TopHeader />
            <div className='container'>
            <TopHeaderLinks />
            <HeaderContent isOffset={isOffset} toggle={toggle} />
            </div>
        </header>
    )
}
export default Header;