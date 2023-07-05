import apiRequest from "./apiRequests"

export async function getAllPosts(endCursor =  null){

    const query = {

        query: `query AllPosts {
  posts(where: {orderby: {field: DATE, order: DESC}}, after: "${endCursor}", first: 2) {
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

        query: `query getPostTags {
          tags {
            nodes {
              slug
              name
            }
          }
        }`

    }

    const resJson = await apiRequest(query);
    const postTags = resJson.data.tags.nodes;
    return postTags;

}



export async function categoryPosts(slug, endCursor = null){

    const query = {

        query: `query postCategories {
          posts(where: {categoryName: "${slug}"}, after: "${endCursor}", first: 2) {
            nodes {
              author {
                node {
                  name
                  slug
                }
              }
              excerpt(format: RENDERED)
              slug
              title(format: RENDERED)
              date
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              startCursor
            }
          }
        }`
    }

    const resJson = await apiRequest(query);
    const categoryPosts = resJson.data.posts;
    return categoryPosts;

}


export async function getCategorySlugs(){

  const query = {
    query: `query getCategorySlugs {
      categories {
        nodes {
          slug
        }
      }
    }`
  };

  const resJson = await apiRequest(query);
  const categorySlugs = resJson.data.categories.nodes;
  return categorySlugs;

}



export async function getCategoryDetail(slug){
  
  const query = {
    query: `query getCategoryDetail {
      category(id: "${slug}", idType: SLUG) {
        count
        name
        slug
      }
    }`
  }

  const resJson = await apiRequest(query);
  const categoryDetail = resJson.data.category;
  return categoryDetail;

}



export async function getTagPosts(slug, endCursor = null){
  
  const query = {
    query: `query getTagPosts {
      posts(where: {tag: "${slug}"}, after: "${endCursor}", first: 2) {
        nodes {
          author {
            node {
              name
              slug
            }
          }
          excerpt(format: RENDERED)
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          slug
          title
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }`
  }

  const resJson = await apiRequest(query);
  const tagPosts = resJson.data.posts;
  return tagPosts;

}



export async function getTagSlugs(){

  const query = {
    query: `query getTagPosts {
      tags {
        nodes {
          slug
        }
      }
    }`
  }

  const resJson = await apiRequest(query);
  const postTagSlugs = resJson.data.tags.nodes;
  return postTagSlugs;

}


export async function getTagDetail(tag){
  
  const query = {
    query: `query getTagDetail {
      tag(id: "${tag}", idType: SLUG) {
        name
        slug
        count
      }
    }`
  }

  const resJson = await apiRequest(query);
  const tagDetail = resJson.data.tag;
  return tagDetail;

}