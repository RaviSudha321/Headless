import { useState, useEffect } from "react";
import Link from "next/link";

function RecentPosts({currentCategory}){

    const [recentPosts, setRecentPosts] = useState();

    useEffect( () => {

        fetch(`https://610weblab.in/headless/wp-json/wp/v2/posts?_embed&categories=${currentCategory}&per_page=5`)
        .then( res => res.json())
        .then( data => setRecentPosts(data))

    }, []);


    return(

        <>
            <div className="recent_posts">
                {console.log(recentPosts)}
                {recentPosts && recentPosts.map((item, index) => {
                    return(
                        <>
                            <div className="recent_post_item" key={index}>
                                <div className="recent_post_img">
                                    <img src={item._embedded['wp:featuredmedia'][0].source_url} alt={item._embedded['wp:featuredmedia'][0].title.rendered} />
                                </div>
                                <div className="recent_post_content">
                                    <h3 className="post_title"><Link href={`${item.id}`}>{item.title.rendered.slice(0, 30)}</Link></h3>
                                    <p className="post_date">{new Date(item.date).toLocaleDateString('us-GB')}</p>
                                    <p className="post_desc" dangerouslySetInnerHTML={{__html: item.excerpt.rendered.slice(0,60)}}></p>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>

    )

}

export default RecentPosts;