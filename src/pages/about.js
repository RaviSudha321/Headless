import Header from '../Components/Header/Header';  
import Footer from '@/Components/Footer/Footer';
import InnerBanner from '@/Components/InnerBanner/InnerBanner';
import ImageWithText from '@/Components/ImageWithText/ImageWithText';
import { aboutData, optionData } from '../../lib/page';



export async function getStaticProps(){
    const aboutContent = await aboutData();
    const optionContent = await optionData();

    return {
        props: {
            aboutContent,
            optionContent
        }
    }
}


function About({aboutContent, optionContent}){
    return(
        <>
            <Header
                logo={optionContent.headerLogo.sourceUrl}
                logoAlt={optionContent.headerLogo.altText}
                email={optionContent.emailAddress}
                phone={optionContent.phoneNumber}
                facebookLink={optionContent.facebookLink}
                instagramLink={optionContent.instagramLink}
                twitterLink={optionContent.twitterLink}
            />
            <InnerBanner title={aboutContent.bannerTitle} description={aboutContent.bannerDescription} />
            <ImageWithText 
                imageUrl={aboutContent.aboutImage.sourceUrl}
                title={aboutContent.aboutTitle}
                subTitle={aboutContent.aboutSubTitle}
                description={aboutContent.aboutDescription}
                buttonText={aboutContent.aboutButtonText}
                buttonLink="/"
            />
            <Footer
                logo={optionContent.footerLogo.sourceUrl}
                logoAlt={optionContent.footerLogo.altText}
                description={optionContent.footerDescription}
                email={optionContent.emailAddress}
                phone={optionContent.phoneNumber}
                copyright={optionContent.copyrightText}
            />
        </>
    )
}

export default About;