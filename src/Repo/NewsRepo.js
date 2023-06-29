export default async function getNews()
    {
        let res = await fetch('https://admin.theshoopshoopq.cz/wp-json/acf/v3/news');
        let data = await res.json();
        return data;
    }