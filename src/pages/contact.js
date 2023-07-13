import Header from '@/Components/Header/Header';  
import Footer from '@/Components/Footer/Footer';
import InnerBanner from '@/Components/InnerBanner/InnerBanner';
import ContactForm from '@/Components/Forms/ContactForm';
import { contactData, optionData } from '../../lib/page';




export async function getStaticProps(){
    const contactContent = await contactData();
    const optionContent = await optionData();

    return {
        props: {
            contactContent,
            optionContent
        }
    } 
}

function Contact({contactContent, optionContent}){
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
            <InnerBanner title={contactContent.bannerTitle} description={contactContent.bannerDescription} />
            <section className='contact_form_sec'>
                <div className='container'>
                    <h2 className='sec_title'>Get In Touch</h2>
                    <div className='contact_content'>
                        <div className='contact_items'>
                            { optionContent.address && <div className='contact_item'>
                                <h3 className='contact_item_title'>Address</h3>
                                <p>{optionContent.address}</p>
                            </div> }
                            { optionContent.emailAddress && <div className='contact_item'>
                                <h3 className='contact_item_title'>Email</h3> 
                                <p><a href={`mailto:${optionContent.emailAddress}`}>{optionContent.emailAddress}</a></p>
                            </div> }
                            { optionContent.phoneNumber && <div className='contact_item'>
                                <h3 className='contact_item_title'>Phone</h3>
                                <p><a href={`tel:${optionContent.phoneNumber}`}>{optionContent.phoneNumber}</a></p>
                            </div> }
                        </div>
                        <div className='form_sec'>
                            <ContactForm />
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

export default Contact;