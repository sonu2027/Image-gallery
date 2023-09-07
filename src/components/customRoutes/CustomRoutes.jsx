import { Routes, Route } from "react-router-dom"
import Image from "../image/Image"
import ImageDetails from "../imageDetails/ImageDetails"
import "../../App.css"
function CustomRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Image/>}/>
            <Route path="/:id" element={<ImageDetails/>}/>
        </Routes>
    )
}
export default CustomRoutes