import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Players from "./components/Players/Players"
import SinglePagePlayer from "./components/singlePagePlayer/SinglePagePlayer"
import PaltanPage from "./components/PaltanPage/PaltanPage"
import PuneriTv from "./components/PuneriTv/PuneriTv"
import Gallery from "./components/Gallery/Gallery"
import SingleGallery from "./components/SingleGallery/SingleGallery"
function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/players" element={<Players />} />
        <Route exact path="/players/:playerID" element={<SinglePagePlayer />} />
        <Route path="/paltan" element={<PaltanPage />} />
        <Route path="/puneritv" element={<PuneriTv />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:galleryID" element={<SingleGallery />} />
      </Routes>
    </>
  )
}

export default App
