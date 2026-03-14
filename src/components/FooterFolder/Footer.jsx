import classes from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className={`p-8 bg-black grid grid-cols-1 items-center gap-8 lg:grid-cols-3 ${classes.footerContainer}`}>
                <div>
                    <p className={classes.copyright}>Copyright © 2025 Puneri Paltan</p>
                </div>
                <div className={` flex flex-row gap-4 justify-center ${classes.socialContainer}`}>
                    <a href="https://www.facebook.com/puneripaltan/"><FaFacebookF /></a>
                    <a href="https://x.com/PuneriPaltan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><FaTwitter /></a>
                    <a href="https://www.instagram.com/puneripaltanofficial/?utm_source=ig_profile_share&igshid=m2wsuxrbs1f8"><FaInstagram /></a>
                    <a href="https://www.youtube.com/c/PuneriPaltan"><FaYoutube /></a>
                </div>
                <div>
                    <a href="https://www.digitallatte.in/" className={`flex flex-row justify-center ${classes.SubFooter}`}>
                        <div className={classes.pDiv}>
                            <p>Managed</p>
                            <p>By</p>
                        </div>
                        <div className={classes.imageDiv}></div>
                    </a>
                </div>
            </div >
        </>
    )
}
export default Footer;