import NewsletterForm from "../Forms/NewsletterForm";

function Cta(){

    return(

        <>
            <section className="cta_sec">
                <div className="container">
                    <div className="cta_content">
                        <h2 className="sec_title">Subscribe Our Newsletter</h2>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet.</p>
                        <div className="cta_form">
                            <NewsletterForm />
                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}

export default Cta;