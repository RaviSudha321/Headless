import Link from "next/link";
import Head from "next/head";
import { Inter, Open_Sans } from 'next/font/google';

const inter = Inter({
  subsets: ['latin']
})

const open_sans = Open_Sans({
    subsets: ['latin']
})

function Hero(){
    return(
        <>
            <Head>
                <style>
                    {
                        `
                        .hero_desc {
                            font-family: ${open_sans.style.fontFamily}
                        }
                        `
                    }
                </style>
            </Head>
            {console.log(open_sans)}
            <section className={`hero_sec ${inter.className}`} style={{backgroundImage: `url('/images/hero.jpeg')`}}>
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