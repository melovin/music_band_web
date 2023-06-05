export default async function getPhotos()
    {
        let res = await fetch('http://localhost:8081/wordpress/wp-json/acf/v3/gallery');
        let data = await res.json();
        return data;
    }