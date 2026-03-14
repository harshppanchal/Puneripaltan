import { Link } from "react-router-dom";
import classes from "./PaltanPage.module.css";

import Footer from "../FooterFolder/Footer";
import { useEffect } from "react";

const PaltanPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className={`${classes.paltanContainer}`}>
                <div></div>
            </div>
            <div className={`${classes.paltanSecondContainer} grid grid-cols-1 lg:grid-cols-2`}>
                <Link to={`/puneritv`}>
                    <div>
                        <p>Puneri Tv</p>
                    </div>
                </Link>
                <Link to="/gallery">
                    <div>
                        <p>Gallery</p>
                    </div>
                </Link>
                <Link to="">
                    <div>
                    <p>Wallpapers</p>
                </div>
                </Link>
            </div>
            <Footer />
        </>
    )
}
export default PaltanPage;