import Link from "next/link";
import Menu from "../Menu/Menu";
import {FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';




function Header({logo, logoAlt, email, phone, facebookLink, instagramLink, twitterLink}) {

    return (
        <>
            <header id="header" className="header_main">
                <div className='header_top_bar'>
                    <div className="container">
                        <div className="header_topbar_content">
                            <div className='header_contact_links'>
                                { email && <span><a href={`mailto:${email}`}><FaEnvelope />{email}</a></span> }
                                { phone && <span><a href={`tel:${phone}`}><FaPhoneAlt />{phone}</a></span> }
                            </div>
                            <div className="header_social_icons">
                                { facebookLink && <a href={facebookLink} target="_blank"><FaFacebookF /></a> }
                                { instagramLink && <a href={instagramLink} target="_blank"><FaInstagram /></a> }
                                { twitterLink && <a href={twitterLink} target="_blank"><FaTwitter /></a> }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header_menu_bar">
                    <div className="container">
                        <div className="header_main_content">
                            { logo && <div className="header_logo"><Link href="/"><img src={logo} alt={logoAlt} /></Link></div> }
                            <div className="header_menu">
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
                        </div>
                    </div>
                </div>
            </header>
        </>
    )

}

export default Header;