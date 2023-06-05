export default async function getPages()
    {
        let res = await fetch('pages.json');
        let data = await res.json();
        return data;
    }