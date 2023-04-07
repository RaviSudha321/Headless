import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Copyright from '../Copyright/Index';




function Footer() {

    return (
        <>
            <footer id="footer">
                <div className='container'>
                    <div className='footer_top'>
                        <div className="footer_logo">
                            <span>Logo</span>
                        </div>
                        <div className="footer_menu">
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
                        <div className="footer_contact">
                            <span>
                                <a href=""><FaEnvelope />example@gmail.com</a>
                            </span>
                            <span>
                                <a href=""><FaPhoneAlt />+91 123-456-7890</a>
                            </span>
                        </div>
                    </div>
                    <Copyright />
                </div>
            </footer>
        </>
    )

}

export default Footer;