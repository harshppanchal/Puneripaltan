import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { getSeasonPuneriTv } from "../../store/action/playerActionMethod";
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import classes from "./PuneriTv.module.css";
import Footer from "../FooterFolder/Footer";

const seasons = [
  { id: "1", cat_name: "Season 5" },
  { id: "2", cat_name: "Season 6" },
  { id: "3", cat_name: "Season 7" },
  { id: "4", cat_name: "Season 8" },
  { id: "5", cat_name: "Season 9" },
  { id: "6", cat_name: "Season 10" },
  { id: "7", cat_name: "Season 11" },
];


const PuneriTv = () => {

  const dispatch = useDispatch();
  const tvplayers = useSelector((state) => state.tv.data) || [];

  const [selectedSeason, setSelectedSeason] = useState("1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

  useEffect(() => {
    dispatch(getSeasonPuneriTv());
  }, [dispatch]);

  // Filter videos for selected season
  const filteredVideos = tvplayers.filter(
    item => String(item.cat_id) === selectedSeason
  );

  const openModal = (url) => {
    setSelectedVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideoUrl("");
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={`${classes.puneriTvHero}`}>
        <div><p>Puneri <br /> Tv</p></div>
        <div>
          <div></div>
        </div>
      </div>

     <div className="flex justify-center flex-wrap gap-2 mt-8 skew-[-15]">
        {seasons.map((season) => (
          <button
            key={season.id}
            onClick={() => setSelectedSeason(season.id)}
            className={`px-4 py-2 skew-x-[-12deg] ${
              selectedSeason === season.id ? "bg-orange-700" : "bg-orange-500"
            } text-white font-bold`}
          >
            {season.cat_name}
          </button>
        ))}
      </div>
      {/* Videos grid */}
      <div className="p-4 mt-10 text-white container mx-auto">
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredVideos.map((item, index) => {
              const thumbnail = `https://img.youtube.com/vi/${item.url}/hqdefault.jpg`;
              return (
                <div
                  key={index}
                  onClick={() => openModal(item.url)}
                  className="cursor-pointer overflow-hidden"
                >
                  <div className="relative">
                    <img src={thumbnail} alt={item.name} className="w-full" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-[#141234] bg-opacity-100 p-8 rounded-full">
                        <FaPlay className="text-white w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  <h2 className={`text-xl font-semibold mb-2 text-white tracking-[3px] ${classes.titletv}`}>
                    {item.name}
                  </h2>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-white text-lg text-center mt-4">No videos found for this season.</p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-white rounded-lg overflow-hidden max-w-3xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
            >
              <IoClose className="text-2xl" />
            </button>
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${selectedVideoUrl}?autoplay=1`}
              title="YouTube video player"
              allow="encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <div className={`${classes.otherGalleryContainer} flex flex-col  md:flex-row`}>
        <Link to={`/gallery`}><div className={classes.first}>Gallery</div></Link>
        <Link><div className={classes.second}>Wallpapers</div></Link>
        <Link><div className={classes.third}>Blogs</div></Link>
      </div>
      <Footer />
    </>
  )
}
export default PuneriTv;