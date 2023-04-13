import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import InnerBanner from "@/Components/InnerBanner/InnerBanner";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";


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

function PostArchive(){

    const [posts, setPosts] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    let catId = router.query.postCategory;
// console.log(catId)
    if((catId != 'undefined') || (catId != undefined)){ 
        useEffect( () => {
            fetch(`https://610weblab.in/headless/wp-json/wp/v2/posts/?categories=${catId}&_embed`)
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
        }, [catId])
    }

    return(

        <>
        {/* {console.log(posts)} */}
            <Header />
            <InnerBanner title={`Category - ${catId}`} />
            <section className="archive_posts_sec">
                <div className="container">
                    {loading ? 'Loading...' : 
                        <div className='posts_list'>
                        {
                            Array.isArray(posts) ? posts.map((data, index) => {
                                return(
                                    <>
                                        <div className='post_item' key={index}>                                    
                                            <div className='post_img'>
                                                <img src={data._embedded['wp:featuredmedia'][0].source_url} alt={data._embedded['wp:featuredmedia'][0].title.rendered} />
                                            </div>
                                            <div className='post_content'>
                                                <h3 className='post_title'>
                                                    <Link href={`/blogs/${data.id}`}>{data.title.rendered}</Link>
                                                </h3>
                                                <div className='post_meta'>
                                                    <span className='author'><Link href={data._embedded.author[0].link}>{data._embedded.author[0].name}</Link></span>
                                                    <span className='date'>{new Date(data.date).toLocaleDateString('en-GB')}</span>
                                                </div>
                                                <div className='post_excert' dangerouslySetInnerHTML={{__html: data.excerpt.rendered}}></div>
                                                <div className='post_btn'>
                                                    <Link href={`/blogs/${data.id}`}>Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }) : <p style={{textAlign:'center'}}>No data found!</p>
                        }
                        </div>
                    }
                </div>
            </section>
            <Footer />
        </>

    )

}

export default PostArchive;