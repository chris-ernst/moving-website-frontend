const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
export async function fetchAPI(path: string) {
    const requestUrl = `${API_URL}/api${path}`;
    const response = await fetch(requestUrl, {
    });

    const data = await response.json();
    return data;
}
