import Link from "next/link";
import Head from "next/head";


function Hero({bannerTitle, bannerSubTitle, bannerDescription, bannerImage, bannerButtonText, bannerButtonLink}){
    return(
        <>
            { bannerTitle ? <section className="hero_sec" style={{backgroundImage: `url('${bannerImage}')`}}>
                <div className="container">
                    <div className="hero_content">
                        <h1 className="hero_title">{bannerTitle}</h1>
                        { bannerSubTitle ? <h3 className="hero_sub_title">{bannerSubTitle}</h3> : null }
                        { bannerDescription ? <p className="hero_desc">{bannerDescription}</p> : null }
                        { bannerButtonText ? <div className="global_btn">
                            <Link href={`${bannerButtonLink ? bannerButtonLink : '/'}`}>{bannerButtonText}</Link>
                        </div> : null
                        }
                    </div>
                </div>
            </section> : null
            }
        </>
    )
}

export default Hero;