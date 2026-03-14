import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getRaiderData } from "../../store/action/playerActionMethod";
import { getDefenderData } from "../../store/action/playerActionMethod";
import { getAllRounderData } from "../../store/action/playerActionMethod";
import classes from "./Player.module.css";

const Player = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRaiderData());
        dispatch(getDefenderData());
        dispatch(getAllRounderData());
    }, [])

    const raiderPlayer = useSelector((state) => {
        return (state.playerData.raiderData);
    })
    const defenderPlayer = useSelector((state) => {
        return (state.playerData.defenderData);
    })
    const allRounderPlayer = useSelector((state) => {
        return (state.playerData.allRounderData);
    })

    const allPlayerData = [...raiderPlayer, ...defenderPlayer, ...allRounderPlayer]
    console.log(raiderPlayer);
    console.log(allPlayerData);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // Adjust breakpoint as needed
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    };
    return (
        <>
            <div className={classes.playerContainer}>

                {/* Description */}
                <div className={classes.playerDescription}>
                    <div className={classes.scrollParent}>
                        <div className={classes.lineDiv}></div>
                        <p>scroll</p>
                    </div>
                    <div className={classes.description}>
                        <p>Puneri Paltan is currently one of the top performing teams in the Pro Kabaddi League. With a mix of unstoppable energy, honed-out skills and steely nerves, here's a force that consistently looks forward to perform better, challenge its opponents and make a difference.</p>
                    </div>
                </div>

                {/* Player Images */}
                <div className={`${classes.playersImages} flex flex-col items-center lg:flex-row gap-2`}>

                    {/* Text */}
                    <div className={classes.players}>
                        <motion.p
                            initial={{ translateY: "-40px", opacity: 0 }}
                            whileInView={{ translateY: "0px", opacity: 1 }}
                            transition={{ duration: 1 }}
                        >Players</motion.p>
                    </div>
                    <div className={`${classes.sliderContainer} lg:col-span-2`}>
                        <Slider {...settings}>
                            {
                                allPlayerData.map((ele) => {
                                    const nameArray = ele.name.split(" ");
                                    console.log(nameArray);
                                    return (
                                        <Link to={`/players/${ele.id}`}>
                                        <div className={`${classes.cardDiv}`}>
                                            <div className={`${classes.imgContainer} flex justify-center items-center`}><img src={ele.profile_image} alt="" /></div>
                                            <div className={`${classes.nameContainer} flex flex-col items-center`}>
                                                <p className="flex flex-col text-center"><span>{nameArray[0]}</span><span>{nameArray[1]}</span></p>
                                                <p>{ele.cat_name}</p>
                                            </div>
                                        </div>
                                        </Link>
                                    )
                                })
                            }
                        </Slider>
                    </div>

                </div>

                <Link to={"/players"}>
                    <button className={`${classes.enterButton} ${classes.animatedbtn} ${classes.btn}`}>Enter</button>
                </Link>
            </div>
        </>
    )
}
export default Player;