/* eslint-disable react/prop-types */
const Header = (props) => {
    return (
        <header>
        <h1>{props.course.name}</h1>
        </header>
    );
}

export default Header;