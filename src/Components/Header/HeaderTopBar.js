import {FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';


function HeaderTopBar(){
    return(
        <>
            <div className='header_top_bar'>
                <div className="container">
                    <div className="header_topbar_content">
                        <div className='header_contact_links'>
                            <span>
                                <a href=""><FaEnvelope />example@gmail.com</a>
                            </span>
                            <span>
                                <a href=""><FaPhoneAlt />+91 123-456-7890</a>
                            </span>
                        </div>
                        <div className="header_social_icons">
                            <a href=""><FaFacebookF /></a>
                            <a href=""><FaInstagram /></a>
                            <a href=""><FaTwitter /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderTopBar;