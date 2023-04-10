import Header from '../Components/Header/Header';  
import Footer from '@/Components/Footer/Footer';
import InnerBanner from '@/Components/InnerBanner/InnerBanner';
import ImageWithText from '@/Components/ImageWithText/ImageWithText';


function About(){
    return(
        <>
        <Header />
        <InnerBanner title="About us" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u." />
        <ImageWithText 
            imageUrl="/images/hero.jpeg"
            title="Who We Are"
            subTitle="Is Not Just Service"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            buttonText="Learn More"
            buttonLink="/"
        />
        <Footer />
        </>
    )
}

export default About;