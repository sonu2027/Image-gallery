import axios from "axios"
import { useEffect, useState } from "react";
import "./Image.css"
function Image() {
    const [photos, setPhotos] = useState([])
    const [offSet, setOffSet] = useState(0)

    async function downloadImage() {
        console.log("1 offSet", offSet);
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offSet}&limit=20`)
        console.log(response);
        console.log(response.data.photos);
        const image = response.data.photos
        setPhotos(image)
    }
    useEffect(() => {
        downloadImage()
    }, [offSet])
    function setTravelOffSet() {
        if (offSet > 19) {
            setOffSet(offSet - 20)
            console.log("offset", offSet);
        }
    }
    function setTravelLimit() {
        if (offSet < 120) {
            setOffSet(offSet + 20)
            console.log("2 offset", offSet);
        }
    }
    return (
        <div>
            <div className="image-wrapper">
                {photos.map((p) => <img className="image" key={p.id} src={p.url} alt="Image" />)}
            </div>
            <div id="button">
                <button disabled={offSet == 0} onClick={setTravelOffSet}>Prev</button>
                <button disabled={offSet == 120} onClick={setTravelLimit}>Next</button>
            </div>
        </div>
    )
}
export default Image