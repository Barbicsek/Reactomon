import  PropTypes from 'prop-types'
import Navbar from './Navbar'

const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
            <Navbar />
        </header>
    )
}

Header.defaultProps = {
    title: "Reactomon",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;
