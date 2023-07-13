import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Copyright from '../Copyright/Index';
import Link from 'next/link';
import Menu from "../Menu/Menu";



function Footer({logo, logoAlt, description, email, phone, copyright}) {

    return (
        <>
            <footer id="footer">
                <div className='container'>
                    <div className='footer_top'>
                        <div className="footer_logo">
                            { logo && <Link href="/"><img src={logo} alt={logoAlt} /></Link> }
                            { description && <p>{description}</p> }
                        </div>
                        <div className="footer_menu">
                            <h3 className='footer_title'>Quick Links</h3>
                            <ul className="menu_list">
                                {
                                    Menu.map((data, index) => {
                                        return(
                                            <li className="menu_item" key={index}>
                                                <Link href={data.url} className="item_link">{data.title}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="footer_contact">
                            <h3 className='footer_title'>Contact Us</h3>
                            { email && <span><Link href={`mailto:${email}`}><FaEnvelope />{email}</Link></span> }
                            { phone && <span><Link href={`tel:${phone}`}><FaPhoneAlt />{phone}</Link></span> }
                        </div>
                    </div>
                    { copyright && <Copyright text={copyright} /> }
                </div>
            </footer>
        </>
    )

}

export default Footer;