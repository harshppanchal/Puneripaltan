import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getRaiderData } from "../../store/action/playerActionMethod";
import { getDefenderData } from "../../store/action/playerActionMethod";
import { getAllRounderData } from "../../store/action/playerActionMethod";
import { getSinglePlayerData } from "../../store/action/playerActionMethod";
import Footer from "../FooterFolder/Footer";

import classes from "./SinglePageStyle.module.css";
const SinglePagePlayer = () => {
    const { playerID } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getSinglePlayerData(playerID));
        dispatch(getRaiderData());
        dispatch(getDefenderData());
        dispatch(getAllRounderData());
    }, [])

    const singlePlayerData = useSelector((state) => {
        return state.playerData.singlePlayerData;
    })
    console.log(singlePlayerData);

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
    console.log(allPlayerData);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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
            {
                singlePlayerData.map((ele) => {
                    const playerFirstName = ele.name.split(" ");
                    return (
                        <>
                            <div className={classes.singlePageHeroContainer}>
                                <div className={`${classes.heroImageContainer} flex flex-col-reverse items-center justify-between md:flex-row md:justify-center md:items-start`}>
                                    <img src={ele.full_image} alt="" />
                                    <div>
                                        <p>{playerFirstName[0]}</p>
                                        <p>{playerFirstName[1]}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${classes.playerDataContainer} flex flex-col justify-between lg:flex-row`}>
                                <div className={`${classes.firstSection} flex justify-center`}>
                                    <img src={ele.full_image} alt="" />
                                </div>
                                <div className={`${classes.secondSection} grid grid-cols-1 gap-2`}>
                                    {/* Second first */}
                                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                                        <div>
                                            <p className={classes.title}>Jersey No</p>
                                            <p className={classes.answer}>{ele.jersey_no}</p>
                                        </div>
                                        <div>
                                            <p className={classes.title}>Position</p>
                                            <p className={classes.answer}>{ele.position}</p>
                                        </div>
                                    </div>
                                    {/* Second second */}
                                    <div>
                                        <p className={`${classes.title}`}>Vitals</p>
                                        <div className="flex flex-col gap-3">
                                            <div>
                                                <p>Name</p>
                                                <p>{ele.name}</p>
                                            </div>
                                            <div>
                                                <p>Date of Birth</p>
                                                <p>{ele.date_of_birth}</p>
                                            </div>
                                            <div>
                                                <p>Nationality</p>
                                                <p>{ele.nationality}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className={`${classes.statisticsContainer}`}>
                                <p className={classes.statisticTitle}>Statistics</p>
                                <div className={`${classes.contentDiv} flex flex-col lg:flex-row gap-2`}>
                                    {/* first */}
                                    <div className={`${classes.titleContainer} flex flex-row gap-2`}>
                                        <div>Overall</div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    {/* second */}
                                    <div className={`${classes.statsContainer} grid grid-cols-1 lg:grid-cols-4`}>
                                        <div>
                                            <motion.p
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 2, type: "spring", bounce: 0.5 }}
                                            >{ele.Matches_played}</motion.p>
                                            <p>Matches Played</p>
                                        </div>
                                        <div>
                                            <motion.p
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 2, type: "spring", bounce: 0.5 }}
                                            >{ele.total_ponints_earned}</motion.p>
                                            <p>Total Points Earned</p>
                                        </div>
                                        <div>

                                            <motion.p
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 2, type: "spring", bounce: 0.5 }}
                                            >{ele.most_points_in_a_match}</motion.p>
                                            <p>most points in a match</p>
                                        </div>
                                        <div>
                                            <motion.p
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 2, type: "spring", bounce: 0.5 }}
                                            >{ele.not_out_percentage}</motion.p>
                                            <p>not out percentage</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.statisticsContainerSecond}>
                                <div className={`${classes.contentDiv} flex flex-col lg:flex-row gap-2`}>
                                    {/* first */}
                                    <div className={`${classes.titleContainer} flex flex-row gap-2`}>
                                        <div>Raid</div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    {/* second */}
                                    <div className={`${classes.statsContainer} grid grid-cols-1 lg:grid-cols-3`}>
                                        <div>
                                            <motion.p
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 2, type: "spring", bounce: 0.5 }}
                                            >{ele.no_of_super_raids}</motion.p>
                                            <p>No of super raids</p>
                                        </div>
                                        <div>
                                            <motion.p
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 2, type: "spring", bounce: 0.5 }}
                                            >{ele.super_10s}</motion.p>
                                            <p>Super 10s</p>
                                        </div>
                                        <div>
                                            <motion.p
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 2, type: "spring", bounce: 0.5 }}
                                            >{ele.avg_raid_points}</motion.p>
                                            <p>Avg. raid points</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className={classes.statisticsContainerThird}>
                                <div className={`${classes.contentDiv} flex flex-col lg:flex-row gap-2`}>
                                    {/* first */}
                                    <div className={`${classes.titleContainer} flex flex-row gap-2`}

                                    >
                                        <div>Tackles</div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    {/* second */}
                                    <div className={`${classes.statsContainer} grid grid-cols-1 lg:grid-cols-2`}>
                                        <div>
                                            <motion.p
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 2, type: "spring", bounce: 0.5 }}
                                            >{ele.no_of_super_tackles}</motion.p>
                                            <p>No of Super tackles</p>
                                        </div>
                                        <div>
                                            <motion.p
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 2, type: "spring", bounce: 0.5 }}
                                            >{ele.total_tacle_points}</motion.p>
                                            <p>Total Tackle points</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
            <div className={classes.sliderContainer}>
                <p className={classes.sliderTitle}>Other Players</p>
                <div className={`${classes.sliderSubContainer}`}>
                    <Slider {...settings}>
                        {
                            allPlayerData.map((ele) => {
                                const userName = ele.name.split(" ");
                                console.log(userName);
                                return (
                                    <Link to={`/players/${ele.id}`} reloadDocument>
                                        <div className={classes.cardDiv}>
                                            <div><p>{ele.jersey_no}</p></div>
                                            <div>
                                                <div>
                                                    <p><span>{userName[0]}</span><span>{userName[1]}</span></p>
                                                    <p>Raider</p>
                                                </div>
                                                <div className={classes.imageContainer}>
                                                    <img className={classes.sliderPlayerImage} src={ele.full_image} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }

                    </Slider>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SinglePagePlayer;