import Link from "next/link";

function ImageWithText({title, subTitle, description, buttonText, buttonLink, imageUrl, imagePosition}){

    return(

        <>
            <section className="image_text_sec">
                <div className="container">
                    <div className={`image_text_content ${imagePosition ? imagePosition : ''}`}>
                        <div className="image_col">
                            { imageUrl && <div className="img_box"><img src={imageUrl} alt="image" width="100%" /></div> } 
                        </div>
                        <div className="text_col">
                            <div className="text_content">
                                { title && <h2 className="text_title">{title}</h2> }
                                { subTitle && <h3 className="text_sub_title">{subTitle}</h3> }
                                { description && <p className="text_desc">{description}</p> }
                                { buttonLink && <div className="global_btn"><Link href={buttonLink}>{buttonText}</Link></div> }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}

export default ImageWithText;