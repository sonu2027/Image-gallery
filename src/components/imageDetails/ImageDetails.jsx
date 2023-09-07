import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./imageDetails.css"
function ImageDetails() {
    const { id } = useParams();
    const url = `https://api.slingacademy.com/v1/sample-data/photos/${id}`
    const [img, setImg] = useState({})
    async function downloadImage() {
        const response = await axios.get(url)
        console.log("m", response);
        setImg({
            image: response.data.photo.url,
            title: response.data.photo.title,
            description: response.data.photo.description,
        })
    }
    useEffect(() => {
        downloadImage()
    }, [])
    return (
        <div id="return-value">
            <div id="img">
                <img src={img.image} alt="image" />
            </div>
            <div id="content">
                <h1>{img.title}</h1>
                <span>{img.description}</span>
            </div>
        </div>
    )
}
export default ImageDetails