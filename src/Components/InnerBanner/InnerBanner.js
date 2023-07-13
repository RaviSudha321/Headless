function InnerBanner({title, description}){

    return(
        <>
            { title ? <section className="inner_banner">
                <div className="container">
                    <div className="inner_banner_content">
                        <h1>{title}</h1>
                        { description && <p>{description}</p> }
                    </div>
                </div>
            </section> : null
            }
        </>
    )
}

export default InnerBanner;