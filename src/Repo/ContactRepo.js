export default async function getContact()
    {
        const res = await fetch('http://localhost:8081/wordpress/wp-json/acf/v3/contact');
        const data = await res.json();
        return data;
    }