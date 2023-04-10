import Hero from "./Hero.js";
import ImageWithText from "../ImageWithText/ImageWithText.js";
import Cta from "../CallToAction.js/CallToAction.js";

function Home(){
    return(
        <>
            <Hero />
            <ImageWithText
                title="What We Offer"
                subTitle="Is Not Just Service"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                buttonText="Learn More"
                buttonLink="/about"
                imageUrl="/images/hero.jpeg"
                imagePosition="right"
            />
            <Cta />
        </>
    )
}

export default Home;