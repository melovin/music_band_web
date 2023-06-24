export default async function getMembers()
    {
        let res = await fetch('http://localhost:8081/wordpress/wp-json/acf/v3/members');
        let data = await res.json();
        return data;
    }