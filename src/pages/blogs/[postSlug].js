import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import InnerBanner from "@/Components/InnerBanner/InnerBanner";
import Link from "next/link";
import BlogSidebar from "@/Components/BlogSidebar/BlogSidebar";
import Date from "@/Components/Date";
import { getSinglePost, getPostSlugs, getPostCategories, getPostTags } from "../../../lib/posts";
import { optionData } from "../../../lib/page";


export async function getStaticProps({params}){

    const singlePostData = await getSinglePost(params.postSlug);
    const categories = await getPostCategories();
    const tags = await getPostTags();
    const optionContent = await optionData();

    return {
        props: {
            postData: singlePostData,
            categories,
            tags,
            optionContent
        }
    }
}

export async function getStaticPaths(){

    const dataSlugs = await getPostSlugs();
    
    return {
        paths: dataSlugs.nodes.map((data) => (
            {
                params: {
                    postSlug: data.slug,
                }
            }
        )),
        fallback: false
    }

}


export default function SinglePost({postData, categories, tags, optionContent}){

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
            <InnerBanner title={postData.title} />
            <section className="single_post">
                <div className="container">
                    <div className="single_post_inner">
                        <div className="single_post_content">
                            <div className="post_thumbnail">
                                <img src={postData.featuredImage.node.sourceUrl} />
                            </div>
                            <div className="post_meta">
                                <span className="author">{postData.author.node.name}</span>
                                <span className="date"><Date postDate={postData.date} /></span>
                            </div>
                            <div className="post_cats">
                                { postData.categories.nodes.length == 1 ? 'Category' : 'Categories' }
                                {
                                    postData.categories.nodes.map((cat, index) => {
                                        return (
                                            <span key={index}><Link href={`category/${cat.slug}`}>{cat.name}</Link></span>
                                        )
                                    })
                                }
                            </div>
                            <div className="post_cats">
                                { postData.categories.nodes.length == 1 ? 'Tag' : 'Tags' }
                                {
                                    postData.tags.nodes.map((tag, index) => {
                                        return (
                                            <span key={index}><Link href={`category/${tag.slug}`}>{tag.name}</Link></span>
                                        )
                                    })
                                }
                            </div>
                            <div className="post_desc" dangerouslySetInnerHTML={{__html: postData.content}}></div>
                        </div>
                        <div className="sidebar">
                           <BlogSidebar categories={categories} tags={tags} currentPostCat={postData.categories.nodes[0].slug} />
                        </div>
                    </div>
                </div>
            </section>
            <Footer
                logo={optionContent.footerLogo.sourceUrl}
                logoAlt={optionContent.footerLogo.altText}
                description={optionContent.footerDescription}
                email={optionContent.emailAddress}
                phone={optionContent.phoneNumber}
                copyright={optionContent.copyrightText}
            />
        </>
    );

}