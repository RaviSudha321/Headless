import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import InnerBanner from "@/Components/InnerBanner/InnerBanner";
import Link from "next/link";


export const getStaticPaths = async () => {
    const res = await fetch("https://610weblab.in/headless/wp-json/wp/v2/posts");
    const data = await res.json();
  
    const paths = data.map((curElem) => {
      return {
        params: {
          postId: curElem.id.toString(),
        },
      };
    });
  
    return {
      paths,
      fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.postId;
    const res = await fetch(`https://610weblab.in/headless/wp-json/wp/v2/posts/${id}?_embed`);
    const data = await res.json();
  
    return {
      props: {
        data,
      },
    }
}


function SinglePost({data}){

    return(

        <>
            <Header />
            <InnerBanner title={data.title.rendered} />
            {console.log(data)}
            <section className="single_post">
                <div className="container">
                    <div className="single_post_inner">
                        <div className="single_post_content">
                            <div className="post_thumbnail">
                                <img src={data._embedded['wp:featuredmedia'][0].source_url} alt={data._embedded['wp:featuredmedia'][0].title.rendered} />
                            </div>
                            <div className="post_meta">
                                <span className="date">{data.date}</span>
                                <span className="author">{data._embedded.author[0].name}</span>
                            </div>
                            <div className="post_cats">
                                <span><Link href={data._embedded['wp:term'][0][0].link}>{data._embedded['wp:term'][0][0].name}</Link></span>
                            </div>
                            <div className="post_desc" dangerouslySetInnerHTML={{__html: data.content.rendered}}></div>
                        </div>
                        <div className="sidebar">

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    )

}

export default SinglePost;