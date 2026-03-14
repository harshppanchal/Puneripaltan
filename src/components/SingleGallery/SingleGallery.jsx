import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { getSeasonGallery } from "../../store/action/playerActionMethod";
import classes from "./SingleGallery.module.css";
import Footer from "../FooterFolder/Footer";

const SingleGallery = () => {

    // Fetching ID of object from gallery page
    const { galleryID } = useParams();
    // console.log(galleryID);

    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getSeasonGallery());
    }, [])

    const galleryData = useSelector((state) => {
        return state.puneriData.galleryData;
    })
    console.log(galleryData);

    const singleGalleryData = galleryData.filter((ele) => {
        if (ele.id == galleryID) {
            return ele;
        }
    })
    // console.log(singleGalleryData);

    const otherGalleryData = galleryData.filter((ele) => {
        if (ele.id != galleryID) {
            return ele;
        }
    })
    // console.log(otherGalleryData);


    // For opening modal
    const [openModal, setOpenModal] = useState(false);
    // For passing object value in modal
    const [modalData, setModalData] = useState([]);
    // console.log(modalData);

    const handleModal = (ele, i) => {
        setOpenModal(!openModal);
        setModalData(ele);
        setCurr(i);
    }
    // console.log(openModal);
    // console.log(modalData);

    const [curr, setCurr] = useState(0);
    const prev = () => {
        setCurr((curr) => {
            return (curr === 0) ? modalData.length - 1 : curr - 1;
        })
    }
    const next = () => {
        setCurr((curr) => {
            return (curr === (modalData.length - 1)) ? 0 : curr + 1;
        })
    }
    return (
        <>
            <div className={`${classes.galleryTvHero}`}>
                <div><p>Gallery</p></div>
                <div>
                    <div></div>
                </div>
            </div>
            {
                singleGalleryData.map((ele) => {
                    return (
                        <div className={classes.galleryCardContainer} key={ele.id}>
                            <p className={classes.galleryTitle}>{ele.name}</p>
                            <div className={`${classes.cardContainer} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2`}>
                                {
                                    ele.match_images.map((ele2, i2) => {
                                        return (
                                            <div key={i2} onClick={() => {
                                                handleModal(ele.match_images, i2)
                                            }}>
                                                <img src={ele2} alt="" />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
            <div className={`${classes.otherGalleryContainer} grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-0`}>
                {
                    otherGalleryData.map((ele) => {
                        return (
                            <Link to={`/gallery/${ele.id}`} key={ele.id} reloadDocument>
                                <div><div></div><img src={ele.main_image} alt="" /><p>{ele.name}</p></div>
                            </Link>
                        )
                    })
                }
            </div>
            <Footer />
            {
                openModal &&

                <div className={`${classes.modalContainer} flex flex-col items-center justify-center`}>
                    <div className={classes.subModalDiv}>
                        <div className={classes.iframeContainer}>
                            <img src={modalData[curr]} />
                        </div>
                        <div className={classes.buttonContainer}>
                            <button onClick={handleModal} ><RxCross2 className={classes.closeSvg} /></button>
                        </div>
                    </div>
                    <button className={`${classes.leftButton} ${classes.chevronButton}`} onClick={prev}><FaChevronLeft /></button>
                    <button className={`${classes.rightButton} ${classes.chevronButton}`} onClick={next}><FaChevronRight /></button>
                </div>
            }
        </>
    )
}

export default SingleGallery;