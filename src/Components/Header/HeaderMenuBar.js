import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';

function HeaderMenuBar() {

    return (
        <>
            <div className="header_menu_bar">
                <div className="container">
                    <div className="header_main_content">
                        <div className="header_logo">
                            <span>Logo</span>
                        </div>
                        <div className="header_menu">
                            <ul className="menu_list">
                                <li className="menu_item">
                                    <a href="" className="item_link">Home</a>
                                </li>
                                <li className="menu_item">
                                    <a href="" className="item_link">About Us</a>
                                </li>
                                <li className="menu_item">
                                    <a href="" className="item_link">Products</a>
                                </li>
                                <li className="menu_item">
                                    <a href="" className="item_link">Blogs</a>
                                </li>
                                <li className="menu_item">
                                    <a href="" className="item_link">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default HeaderMenuBar;