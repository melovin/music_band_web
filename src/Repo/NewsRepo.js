export default async function getNews()
    {
        let res = await fetch('news.json');
        let data = await res.json();
        return data;
    }