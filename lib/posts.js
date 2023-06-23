import apiRequest from "./apiRequests"

export async function getAllPosts(){

    const query = {

        query: `query AllPosts {
            posts {
              nodes {
                date
                content(format: RENDERED)
                slug
                title(format: RENDERED)
                link
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                author {
                    node {
                      name
                    }
                  }
              }
              pageInfo {
                endCursor
                startCursor
                hasPreviousPage
                hasNextPage
              }
            }
          }`

    }

    const resJson = await apiRequest(query);
    const allPosts = resJson.data.posts;
    return allPosts;

}



export async function getSinglePost(slug){

    const query = {

        query: `query SinglePost {
            post(id: "${slug}", idType: SLUG) {
              author {
                node {
                  slug
                  name
                }
              }
              categories {
                nodes {
                  slug
                  name
                }
              }
              content(format: RENDERED)
              date
              featuredImage {
                node {
                  sourceUrl
                }
              }
              title(format: RENDERED)
              tags {
                nodes {
                  name
                  slug
                }
              }
            }
          }`

    }

    const resJson = await apiRequest(query);
    const postData = resJson.data.post;
    return postData;

}



export async function getPostSlugs(){

    const query = {

        query: `query postSlugs {
            posts {
              nodes {
                slug
              }
            }
          }`
    }

    const resJson = await apiRequest(query);
    const postSlugs = resJson.data.posts;
    return postSlugs;

}



export async function getPostCategories(){

    const query = {

        query: `query postCategories {
            terms {
              nodes {
                ... on Category {
                    id
                    name
                    slug
                }
              }
            }
          }`

    }

    const resJson = await apiRequest(query);
    const postCategories = resJson.data.terms.nodes;
    return postCategories;
}


export async function getPostTags() {

    const query = {

        query: `query postCategories {
            terms {
              nodes {
                ... on Tag {
                    id
                    name
                    slug
                }
              }
            }
          }`

    }

    const resJson = await apiRequest(query);
    const postTags = resJson.data.terms.nodes;
    return postTags;

}



export async function categoryPosts(name){

    const query = {

        query: `query postCategories {
            posts(where: {categoryName: "${name}"}) {
              nodes {
                author {
                  node {
                    name
                    slug
                  }
                }
                content(format: RENDERED)
                slug
                title(format: RENDERED)
                date
              }
            }
          }`

    }

    const resJson = await apiRequest(query);
    const categoryPosts = resJson.data.posts.nodes;
    return categoryPosts;

}