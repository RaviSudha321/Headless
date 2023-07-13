import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import InnerBanner from "@/Components/InnerBanner/InnerBanner";
import { useState } from "react";
// import { useRouter } from "next/router";
import Link from "next/link";
import { categoryPosts, getCategorySlugs, getCategoryDetail } from "../../../../lib/posts";
import { optionData } from "../../../../lib/page";


export async function getStaticPaths(){
    const catSlugs = await getCategorySlugs();

    return {
        paths: catSlugs.map((catSlug) => (
            {
                params: {
                    postCategory: catSlug.slug,
                }
            }
        )),
        fallback: false
    }
}

export async function getStaticProps({params}){
    const catPosts = await categoryPosts(params.postCategory);
    const catDetail = await getCategoryDetail(params.postCategory);
    const optionContent = await optionData();
    
    return {
        props: {
            catPosts: catPosts,
            catDetail: catDetail,
            optionContent
        }
    }
}

function PostArchive({catPosts, catDetail, optionContent}){

    const [posts, setPosts] = useState(catPosts);
    const [loadButtonText, setLoadButtonText] = useState('Load More');
    const [endCursor, setEndCursor] = useState(posts.pageInfo.endCursor);
    const [nextPage, setNextPage] = useState(posts.pageInfo.hasNextPage);
    
    const handleLoadMore = async (e) => {
        e.preventDefault();

        setLoadButtonText('Loading...');

        const morePosts = await categoryPosts(catDetail.slug, endCursor);

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
        setNextPage(morePosts.pageInfo.hasNextPage);

        if(nextPage == false){
            setLoadButtonText('No More Posts');
        } else {
            setLoadButtonText('Load More');
        }

    }

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
            <InnerBanner title={`Category - ${catDetail.name}`} />
            <section className="archive_posts_sec">
                <div className="container">
                    <div className='posts_list'>
                        {
                            posts.nodes.map((data, index) => {
                                return(
                                    <div className='post_item' key={index}>                                    
                                        <div className='post_img'>
                                            <img src={data.featuredImage.node.sourceUrl} alt='image' />
                                        </div>
                                        <div className='post_content'>
                                            <h3 className='post_title'>
                                                <Link href={`/blogs/${data.slug}`}>{data.title}</Link>
                                            </h3>
                                            <div className='post_meta'>
                                                <span className='author'><Link href={`/blogs/author/${data.author.node.slug}`}>{data.author.node.name}</Link></span>
                                                <span className='date'>{new Date(data.date).toLocaleDateString('en-GB')}</span>
                                            </div>
                                            <div className='post_excert' dangerouslySetInnerHTML={{__html: data.excerpt}}></div>
                                            <div className='post_btn'>
                                                <Link href={`/blogs/${data.slug}`}>Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        nextPage
                        ? <div className='global_btn load_more_btn'><a href="#" onClick={handleLoadMore}>{loadButtonText}</a></div>
                        : <p className="no_posts_text">No More Posts Avaiable.</p>
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

            {
            // export const getStaticPaths = async () => {
            //     const res = await fetch("https://610weblab.in/headless/wp-json/wp/v2/posts");
            //     const data = await res.json();

            //     const paths = data.map((post) => ({
            //         params: { 
            //             postCategory:  post.id.toString() 
            //         },
            //     }))

            //     return { paths, fallback: false }

            // }   

            // export const getStaticProps = async (context) => {
            //     const id = context.params.postCategory;
            //     const posts = await fetch(`https://610weblab.in/headless/wp-json/wp/v2/posts?categories=${id}`);
            //     const response = await posts.json();

            //     return{
            //         props: {
            //             data: response,
            //         }
            //     }
            // }



            // const [posts, setPosts] = useState();
            // const [error, setError] = useState();
            // const [loading, setLoading] = useState(true);
            // const router = useRouter();
            // let catId = router.query.postCategory;

            // if((catId != 'undefined') || (catId != undefined)){ 
            //     useEffect( () => {
            //         fetch(`https://610weblab.in/headless/wp-json/wp/v2/posts/?categories=${catId}&_embed`)
            //         .then(res => res.json())
            //         .then(data => setPosts(data))
            //         .catch(err => setError(err))
            //         .finally(() => setLoading(false))
            //     }, [catId])
            // }

            }
        </>

    )

}

export default PostArchive;