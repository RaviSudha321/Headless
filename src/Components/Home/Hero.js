import Link from "next/link";


function Hero(){
    return(
        <>
            <section className="hero_sec" style={{backgroundImage: `url('/images/hero.jpeg')`}}>
                <div className="container">
                    <div className="hero_content">
                        <h1 className="hero_title">Headless Wordpress</h1>
                        <h3 className="hero_sub_title">With Next JS</h3>
                        <p className="hero_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="global_btn">
                            <Link href="/">Learn More</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;