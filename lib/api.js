const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_BASE_URL;


async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' }

    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
    })

    const json = await res.json();

    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
    return json.data
}


export async function getPosts(){
    const data = await fetchAPI(
        `query AllPosts {
            posts {
              nodes {
                date
                excerpt(format: RENDERED)
                slug
                title(format: RENDERED)
                link
              }
              pageInfo {
                endCursor
                startCursor
              }
            }
          }
      `,
        {
          variables: {},
        }
      );
    return data?.posts?.edges;
}