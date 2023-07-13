import Header from '@/Components/Header/Header';  
import Footer from '@/Components/Footer/Footer';
import InnerBanner from '@/Components/InnerBanner/InnerBanner';
import Link from 'next/link';
import Date from '@/Components/Date';
import { getAllPosts } from '../../../lib/posts';
import { useState } from 'react';
import { blogsData, optionData } from '../../../lib/page';

export async function getStaticProps(){
    const response = await getAllPosts();
    const blogsContent = await blogsData();
    const optionContent = await optionData();

    return {
        props: {
            posts: response,
            blogsContent: blogsContent,
            optionContent
        },
    }
}

function Blogs({posts, blogsContent, optionContent}){

    const [allPosts, setAllPosts] = useState(posts);
    const [loadButtonText, setLoadButtonText] = useState('Load More');
    const [buttonDisbaled, setButtonDisabled] = useState(false);
    const [endCursor, setEndCursor] = useState(allPosts.pageInfo.endCursor);

    const handleLoadMore = async (e) => {
        e.preventDefault();

        setLoadButtonText('Loading...');
      
        const morePosts = await getAllPosts(endCursor);

        let updatedPosts = {
            pageInfo: {

            },
            nodes : []
        }

        updatedPosts.pageInfo = morePosts.pageInfo;

        allPosts.nodes.map((node)=>{
            updatedPosts.nodes.push(node);
        });

        morePosts.nodes.map((node)=>{
            updatedPosts.nodes.push(node);
        });

        setEndCursor(morePosts.pageInfo.endCursor)

        setAllPosts(updatedPosts);

        if(allPosts.pageInfo.hasNextPage == false){
            setLoadButtonText('No more posts available');
            setButtonDisabled(true);
        } else {
            setLoadButtonText('Load More');
            setButtonDisabled(false);
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
            <InnerBanner 
                title={blogsContent.bannerTitle} 
                description={blogsContent.bannerDescription} 
            />
            <section className='posts_sec'>
                <div className='container'>
                    <div className='posts_list'>
                        {
                        allPosts.nodes.map((data, index) => {
                                return(
                                    <div className='post_item' key={index}>
                                        <div className='post_img'>
                                            <img src={data.featuredImage.node.sourceUrl} />
                                        </div>
                                        <div className='post_content'>
                                            <h3 className='post_title'>
                                                <Link href={`/blogs/${data.slug}`}>{data.title}</Link>
                                            </h3>
                                            <div className='post_meta'>
                                                <span className='author'>{data.author.node.name}</span>
                                                <span className='date'><Date postDate={data.date} /></span>
                                            </div>
                                            <div className='post_excert' dangerouslySetInnerHTML={{__html: data.content.slice(0, 200)}}></div>
                                            <div className='post_btn'>
                                                <Link href={`/blogs/${data.slug}`}>Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='global_btn load_more_btn'>
                        <a href="#" onClick={handleLoadMore} className={buttonDisbaled ? 'disabled' : null}>{loadButtonText}</a>
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
            {

                // export async function getStaticProps(){
                //     const response = await fetch('https://610weblab.in/headless/wp-json/wp/v2/posts?_embed&page=1');
                //     const data = await response.json();

                //     return {
                //         props: {
                //             posts: data,
                //         },
                //     }
                // }


                // posts.nodes.map((data, index) => {
                //     return(
                //         <>
                //             <div className='post_item'>
                //                 <div className='post_img'>
                //                     {/* <img src={data._embedded['wp:featuredmedia'][0].source_url} alt={data._embedded['wp:featuredmedia'][0].title.rendered} /> */}
                //                 </div>
                //                 <div className='post_content'>
                //                     <h3 className='post_title'>
                //                         <Link href={`/blogs/${data.id}`}>{data.title.rendered}</Link>
                //                     </h3>
                //                     <div className='post_meta'>
                //                         <span className='author'><Link href={data._embedded.author[0].link}>{data._embedded.author[0].name}</Link></span>
                //                         <span className='date'><Date postDate={data.date} /></span>
                //                     </div>
                //                     <div className='post_excert' dangerouslySetInnerHTML={{__html: data.excerpt.rendered}}></div>
                //                     <div className='post_btn'>
                //                         <Link href={`/blogs/${data.id}`}>Read More</Link>
                //                     </div>
                //                 </div>
                //             </div>
                //         </>
                //     )
                // })
            }
        </>
    )
}

export default Blogs;