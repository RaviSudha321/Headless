import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import InnerBanner from "@/Components/InnerBanner/InnerBanner";
import Link from "next/link";
import { getTagPosts, getTagSlugs, getTagDetail } from "../../../../lib/posts";
import { useState } from "react";
import { optionData } from "../../../../lib/page";


export async function getStaticPaths(){
    const tagSlugs = await getTagSlugs();

    return{
        paths: tagSlugs.map((tag) => (
            {
                params: {
                    postTag: tag.slug
                }
            }
        )),
        fallback: false,
    }
}


export async function getStaticProps({params}){
    const tagPosts = await getTagPosts(params.postTag);
    const tagDetail = await getTagDetail(params.postTag);
    const optionContent = await optionData();

    return {
        props: {
            tagPosts: tagPosts,
            tagDetail,
            optionContent
        }
    }
}

function PostTags({tagPosts, tagDetail, optionContent}){

    const [posts, setPosts] = useState(tagPosts);
    const [loadButtonText, setLoadButtonText] = useState('Load More');
    const [buttonDisbaled, setButtonDisbaled] = useState(false);
    const [endCursor, setEndCursor] = useState(posts.pageInfo.endCursor);
    const [nextPage, setNextPage] = useState(posts.pageInfo.hasNextPage);

    const handleLoadMore = async (e) => {
        e.preventDefault();
        setLoadButtonText('Loading...');
        
        const morePosts = await getTagPosts(tagDetail.slug, endCursor);

        let updatedPosts = {
            nodes: [],
            pageInfo: {

            }
        }

        updatedPosts.pageInfo = morePosts.pageInfo;

        posts.nodes.map((node) => {
            updatedPosts.nodes.push(node);
        })

        morePosts.nodes.map((node) => {
            updatedPosts.nodes.push(node);
        })

        setEndCursor(morePosts.pageInfo.endCursor);
        setPosts(updatedPosts);
        setNextPage(morePosts.pageInfo.hasNextPage)

        if(nextPage == false){
            setLoadButtonText('No More Posts')
        } else {
            setLoadButtonText('Load More')
        }

    }
    
    
    return (
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
            <InnerBanner title={`Tag - ${tagDetail.name}`} />
            <section className="archive_posts_sec">
                <div className="container">
                    <div className='posts_list'>
                        {
                            posts.nodes.map((item, index) => {
                                return(
                                    <div className='post_item' key={index}> 
                                        <div className='post_img'>
                                            <img src={item.featuredImage.node.sourceUrl} alt='image' />
                                        </div>
                                        <div className='post_content'>
                                            <h3 className='post_title'>
                                                <Link href={`/blogs/${item.slug}`}>{item.title}</Link>
                                            </h3>
                                            <div className='post_meta'>
                                                <span className='author'><Link href={`/blogs/author/${item.author.node.slug}`}>{item.author.node.name}</Link></span>
                                                <span className='date'>{new Date(item.date).toLocaleDateString('en-GB')}</span>
                                            </div>
                                            <div className='post_excert' dangerouslySetInnerHTML={{__html: item.excerpt}}></div>
                                            <div className='post_btn'>
                                                <Link href={`/blogs/${item.slug}`}>Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        nextPage 
                        ? <div className='global_btn load_more_btn'><a href="#" onClick={handleLoadMore} className={buttonDisbaled ? 'disabled' : null}>{loadButtonText}</a></div> 
                        : <p className="no_posts_text">No More Posts Available</p>
                    }
                    
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
    )

}

export default PostTags;