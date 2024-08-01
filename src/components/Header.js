import logo from "/images/logo.jpg";


const Header = () => {
    return (
        <div className="header">
            <div className="res-logo">
                <img id="logo" src={logo} alt="reslogo"/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>ContactUs</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;

