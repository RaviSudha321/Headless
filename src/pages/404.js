import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import Link from "next/link";

function Not_Found(){

    return(

        <>
            <Header />
            <section className="sec_padding">
                <div className="container">
                    <div className="not_found_content">
                        <h1 className="not_found_title">404</h1>
                        <h2 className="sec_title">Oops! Page Not Found.</h2>
                        <p className="description">The page you are looking for doesn't exist. If you found something break, please feel free to contact us.</p>
                        <div className="global_btn">
                            <Link href="/">Back to Home</Link>
                            <Link href="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    )

}

export default Not_Found;