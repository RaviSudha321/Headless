import NewsletterForm from "../Forms/NewsletterForm";

function Newsletter({title, description}){

    return(

        <>
            <section className="cta_sec">
                <div className="container">
                    <div className="cta_content">
                        { title && <h2 className="sec_title">{title}</h2> }
                        { description && <p className="description">{description}</p> }
                        <div className="cta_form">
                            <NewsletterForm />
                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}

export default Newsletter;