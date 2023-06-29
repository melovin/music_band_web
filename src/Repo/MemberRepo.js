export default async function getMembers()
    {
        let res = await fetch('https://admin.theshoopshoopq.cz/wp-json/acf/v3/members');
        let data = await res.json();
        return data;
    }