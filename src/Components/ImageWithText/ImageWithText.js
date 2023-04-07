function ImageWithText({title, subTitle, description, buttonText, buttonLink, imageUrl, imagePosition}){

    return(

        <>
            <section className="image_text_sec">
                <div className="container">
                    <div className={`image_text_content ${imagePosition ? imagePosition : ''}`}>
                        <div className="image_col">
                            {
                                imageUrl ? <div className="img_box"><img src={imageUrl} alt="image" width="100%" /></div> : null
                            } 
                        </div>
                        <div className="text_col">
                            <div className="text_content">
                                <h2 className="text_title">{title}</h2>
                                <h3 className="text_sub_title">{subTitle}</h3>
                                <p className="text_desc">{description}</p>
                                {
                                    buttonText && <div className="global_btn"><a href={buttonLink}>{buttonText}</a></div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}

export default ImageWithText;