import Link from 'next/link';


function HeaderMenuBar() {

    return (
        <>
            <div className="header_menu_bar">
                <div className="container">
                    <div className="header_main_content">
                        <div className="header_logo">
                            <span><Link href="/">Logo</Link></span>
                        </div>
                        <div className="header_menu">
                            <ul className="menu_list">
                                <li className="menu_item">
                                    <Link href="/" className="item_link">Home</Link>
                                </li>
                                <li className="menu_item">
                                    <Link href="/about" className="item_link">About Us</Link>
                                </li>
                                <li className="menu_item">
                                    <Link href="/blogs" className="item_link">Blogs</Link>
                                </li>
                                <li className="menu_item">
                                    <Link href="/contact" className="item_link">Contact Us</Link>
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