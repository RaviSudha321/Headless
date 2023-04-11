import { useState, useEffect } from 'react';
import Header from '@/Components/Header/Header';  
import Footer from '@/Components/Footer/Footer';
import InnerBanner from '@/Components/InnerBanner/InnerBanner';
import Link from 'next/link';


export async function getStaticProps(){
    const response = await fetch('https://610weblab.in/headless/wp-json/wp/v2/posts?_embed');
    const data = await response.json();

    return {
        props: {
            posts: data,
        },
    }
}

function Blogs({posts}){
    //console.log(posts);

    return(
        <>
        <Header />
        <InnerBanner title="Blogs" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." />
        <section className='posts_sec'>
            <div className='container'>
                <div className='posts_list'>
                    {
                        posts.map((data, index) => {
                            return(
                                <>
                                    <div className='post_item'>
                                        <div className='post_img'>
                                            <img src={data._embedded['wp:featuredmedia'][0].source_url} alt={data._embedded['wp:featuredmedia'][0].title.rendered} />
                                        </div>
                                        <div className='post_content'>
                                            <h3 className='post_title'>
                                                <Link href={`/blogs/${data.id}`}>{data.title.rendered}</Link>
                                            </h3>
                                            <div className='post_meta'>
                                                <span className='author'><Link href={data._embedded.author[0].link}>{data._embedded.author[0].name}</Link></span>
                                                <span className='date'>{data.date}</span>
                                            </div>
                                            {/* <div className='post_cats'>
                                                {data.categories}
                                            </div> */}
                                            <div className='post_excert' dangerouslySetInnerHTML={{__html: data.excerpt.rendered}}></div>
                                            <div className='post_btn'>
                                                <Link href={`/blogs/${data.id}`}>Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default Blogs;