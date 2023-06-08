async function getPhotos()
    {
        let res = await fetch('http://localhost:8081/wordpress/wp-json/acf/v3/gallery');
        let data = await res.json();
        return data;
    }
export default function getPrepPhotos()
{
    let data = this.getPhotos()
    var result = [];
    data.forEach(element => {
        var img = new Image();
        img.src = element.imageorvideo;
        result.push({
            largeURL: img.src,
            thumbnailURL: img.src,
            width: img.width,
            height: img.height
        });
    });
}