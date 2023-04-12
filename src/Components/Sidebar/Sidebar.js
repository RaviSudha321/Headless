import { useState, useEffect } from "react";
import Link from "next/link";
import RecentPosts from "./RecentPosts";


function Sidebar({currentPostCategory}){
    
    const [categories, setCategories] = useState();
    const [tags, setTags] = useState();

    useEffect( () => {

        fetch('https://610weblab.in/headless/wp-json/wp/v2/categories')
        .then( res => res.json())
        .then( data => setCategories(data))

        fetch('https://610weblab.in/headless/wp-json/wp/v2/tags')
        .then( res => res.json())
        .then( data => setTags(data))

    }, [])   

    return(

        <>        
            <div className="sidebar_content">
                <div className="sidebar_item">
                    <h3 className="sidebar_title">Related Posts</h3>
                    <RecentPosts currentCategory={currentPostCategory} />
                </div>
                <div className="sidebar_item">
                    <h3 className="sidebar_title">Blog Categories</h3>
                    <div className="categories_list">
                        {categories && categories.map((item, index) => {
                            return(
                                <span className="category" key={index}><Link href={`category/${item.slug}`}>{item.name}</Link></span>
                            )
                        })}
                    </div>
                </div>
                <div className="sidebar_item">
                    <h3 className="sidebar_title">Blog Tags</h3>
                    <div className="categories_list">
                        {tags && tags.map((item, index) => {
                            return(
                                <span className="category" key={index}><Link href={`tag/${item.slug}`}>{item.name}</Link></span>
                            )
                        })}
                    </div>
                </div>
            </div>        
        </>

    )

}

export default Sidebar;