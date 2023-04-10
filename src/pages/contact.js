import Header from '@/Components/Header/Header';  
import Footer from '@/Components/Footer/Footer';
import InnerBanner from '@/Components/InnerBanner/InnerBanner';
import ContactForm from '@/Components/Forms/ContactForm';

function Contact(){
    return(
        <>
        <Header />
        <InnerBanner title="Contact us" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u." />
        <section className='contact_form_sec'>
            <div className='container'>
                <h2 className='sec_title'>Get In Touch</h2>
                <div className='contact_content'>
                    <div className='contact_items'>
                        <div className='contact_item'>
                            <h3 className='contact_item_title'>Address</h3>
                            <p>German Chawl Opp Hotel Rosewood Tulsiwadi, Mumbai,Mohali,400034,India</p>
                        </div>
                        <div className='contact_item'>
                            <h3 className='contact_item_title'>Email</h3>
                            <p><a href="#">example@gmail.com</a></p>
                        </div>
                        <div className='contact_item'>
                            <h3 className='contact_item_title'>Phone</h3>
                            <p><a href="#">+91-123-456-7890</a></p>
                        </div>
                    </div>
                    <div className='form_sec'>
                        <ContactForm />
                    </div>
                </div>                
            </div>
        </section>
        <Footer />
        </>
    )
}

export default Contact;