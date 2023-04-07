import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Copyright from '../Copyright/Index';
import Link from 'next/link';



function Footer() {

    return (
        <>
            <footer id="footer">
                <div className='container'>
                    <div className='footer_top'>
                        <div className="footer_logo">
                           <span>
                                <Link href="/">Logo</Link>
                            </span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                        <div className="footer_menu">
                            <h3 className='footer_title'>Quick Links</h3>
                            <ul className="menu_list">
                                <li className="menu_item">
                                    <Link href="/" className="item_link">Home</Link>
                                </li>
                                <li className="menu_item">
                                    <Link href="/about" className="item_link">About Us</Link>
                                </li>
                                <li className="menu_item">
                                    <Link href="/products" className="item_link">Products</Link>
                                </li>
                                <li className="menu_item">
                                    <Link href="/blogs" className="item_link">Blogs</Link>
                                </li>
                                <li className="menu_item">
                                    <Link href="/contact" className="item_link">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer_contact">
                            <h3 className='footer_title'>Contact Us</h3>
                            <span>
                                <Link href="javascript:void(0)"><FaEnvelope />example@gmail.com</Link>
                            </span>
                            <span>
                                <Link href="javascript:void(0)"><FaPhoneAlt />+91 123-456-7890</Link>
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