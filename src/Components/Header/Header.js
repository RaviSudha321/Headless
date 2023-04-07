import HeaderMenuBar from "./HeaderMenuBar";
import HeaderTopBar from "./HeaderTopBar";

function Header() {

    return (
        <header id="header" className="header_main">
            <HeaderTopBar />
            <HeaderMenuBar />
        </header>
    )

}

export default Header;