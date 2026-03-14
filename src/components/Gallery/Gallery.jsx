import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getSeasonGallery } from "../../store/action/playerActionMethod";
import Footer from "../FooterFolder/Footer";
import classes from "./Gallery.module.css";

const Gallery = () => {
    // Calling action method to request data 
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getSeasonGallery());
    }, [])

    // Retrieving data from slice
    const galleryData = useSelector((state) => {
        return state.puneriData.galleryData;
    })
    console.log(galleryData);


    return (
        <>
            <div className={`${classes.galleryTvHero}`}>
                <div><p>Gallery</p></div>
                <div>
                    <div></div>
                </div>
            </div>

            <div className={`${classes.videoContainer}`}>
                <div className={`flex flex-row justify-center gap-3 ${classes.seasonDiv}`}>
                    <p>Season 11</p>
                </div>
                <div className={`${classes.videoContainerDiv} grid grid-cols-1 md:grid-cols-2 gap-8`}>
                    {
                        galleryData.map((ele) => {
                            return (
                                <Link to={`/gallery/${ele.id}`} key={ele.id}>
                                    <div>
                                        <div className={`${classes.imgContainer} flex items-center justify-center`}>
                                            <img src={ele.main_image} />
                                        </div>
                                        <div className={classes.videoDetailsContainer}>
                                            <div>{ele.name}</div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div >



            <div className={`${classes.otherGalleryContainer} flex flex-col md:flex-row`}>
                <Link to={`/puneriTv`}><div className={classes.first}>Puneri tv</div></Link>
                <Link><div className={classes.second}>Wallpapers</div></Link>
                <Link><div className={classes.third}>Blogs</div></Link>
            </div>
            <Footer />

        </>
    )
}
export default Gallery;