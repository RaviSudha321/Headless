

function InnerBanner({title, description}){

    return(
        <>
            <section className="inner_banner">
                <div className="container">
                    <div className="inner_banner_content">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InnerBanner;