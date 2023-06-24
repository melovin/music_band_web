export default async function getNews()
    {
        let res = await fetch('http://localhost:8081/wordpress/wp-json/acf/v3/news');
        let data = await res.json();
        return data;
    }