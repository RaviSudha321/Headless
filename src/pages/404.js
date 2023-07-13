import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import Link from "next/link";
import { optionData } from '../../lib/page';


export async function getStaticProps(){
    const optionContent = await optionData();

    return {
        props: {
            optionContent
        }
    } 
}

function Not_Found({optionContent}){

    return(

        <>
            <Header
                logo={optionContent.headerLogo.sourceUrl}
                logoAlt={optionContent.headerLogo.altText}
                email={optionContent.emailAddress}
                phone={optionContent.phoneNumber}
                facebookLink={optionContent.facebookLink}
                instagramLink={optionContent.instagramLink}
                twitterLink={optionContent.twitterLink}
            />
            <section className="sec_padding">
                <div className="container">
                    <div className="not_found_content">
                        { optionContent.notFoundTitle && <h1 className="not_found_title">{optionContent.notFoundTitle}</h1> }
                        { optionContent.notFoundSubTitle && <h2 className="sec_title">{optionContent.notFoundSubTitle}</h2> }
                        { optionContent.notFoundDescription && <p className="description">{optionContent.notFoundDescription}</p> }
                        <div className="global_btn">
                            <Link href="/">Back to Home</Link>
                            <Link href="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer
                logo={optionContent.footerLogo.sourceUrl}
                logoAlt={optionContent.footerLogo.altText}
                description={optionContent.footerDescription}
                email={optionContent.emailAddress}
                phone={optionContent.phoneNumber}
                copyright={optionContent.copyrightText}
            />
        </>

    )

}

export default Not_Found;