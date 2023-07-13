import Link from "next/link";
// import RelatedPosts from "../Sidebar/RelatedPosts";


function BlogSidebar({categories, tags}){
    
    return(

        <>      
            <div className="sidebar_content">
                <div className="sidebar_item">
                    <h3 className="sidebar_title">Related Posts</h3>
                    
                </div>
                <div className="sidebar_item">
                    <h3 className="sidebar_title">Blog Categories</h3>
                    <div className="categories_list">
                        {
                            categories.map((item, index) => {
                                return(
                                        item.name ? <span className="category" key={index}><Link href={`category/${item.slug}`}>{item.name}</Link></span> : null 
                                )
                            })
                        }
                    </div>
                </div>
                <div className="sidebar_item">
                    <h3 className="sidebar_title">Blog Tags</h3>
                    <div className="categories_list">
                        {
                            tags.map((item, index) => {
                                return(
                                    item.name ? <span className="category" key={index}><Link href={`tag/${item.slug}`}>{item.name}</Link></span> : null
                                )
                            })
                        }


                        {/* {categories && categories.map((item, index) => {
                            return(
                                <span className="category" key={index}><Link href={`category/${item.id}`}>{item.name}</Link></span>
                            )
                        })} */}

                        {/* {tags && tags.map((item, index) => {
                            return(
                                <span className="category" key={index}><Link href={`tag/${item.slug}`}>{item.name}</Link></span>
                            )
                        })} */}
                    </div>
                </div>
            </div>        
        </>

    )

}

export default BlogSidebar;