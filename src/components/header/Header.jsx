import TopHeader from './headerComponents/TopHeader'
import TopHeaderLinks from './headerComponents/TopHeaderLinks'
import HeaderContent from './headerComponents/HeaderContent'

const Header = () => {
    return (
        <>
            <TopHeader />
            <div className='container'>
            <TopHeaderLinks />
            <HeaderContent />
            </div>
        </>
    )
}
export default Header;