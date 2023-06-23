export default async function apiRequest(query){

    const url = process.env.NEXT_PUBLIC_WORDPRESS_BASE_URL;
    const headers = { "Content-Type": "application/json" };

    const res = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(query),
    });

    const resJson = await res.json();
    return resJson;

}