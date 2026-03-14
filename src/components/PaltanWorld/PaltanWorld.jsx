import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import classes from "./PaltanWorld.module.css";

const PaltanWorld = () => {
    return (
        <>
            <div>
                <div className={classes.whiteBackground}>
                    <div className={`flex flex-col md:flex-row justify-center ${classes.ticketContainer}`}>
                        <div>
                            <div>
                              
                                </div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                        <a href="https://in.bookmyshow.com/sports/pro-kabaddi-league-season-11-2024/ET00414457" target="_blank">
                            <button>Buy Tickets <FaCaretRight /></button>
                        </a>
                    </div>
                </div>
                <div className={`${classes.paltanContainer}`}>
                    <div className={`${classes.div}`}>
                        <img  className={`${classes.desk}`} src="https://www.puneripaltan.com/dist/img/paltan-world-homepage_s12.png" alt=""/>
                        <img className={`${classes.mob}`} src="https://www.puneripaltan.com/dist/img/paltan-world-banner-mobile_s12.png" alt=""/>
                        <div className={`${classes.ct}`}>
                            <div className={`${classes.ctdiv}`}>
                            <motion.p
                                initial={{ translateY: "-20px", opacity: 0 }}
                                whileInView={{ translateY: "0px", opacity: 1 }}
                                transition={{ duration: 1 }}
                                className={`${classes.p1}`}
                            >
                                Paltan
                            </motion.p>
                            <motion.p
                                initial={{ translateY: "20px", opacity: 0 }}
                                whileInView={{ translateY: "0px", opacity: 1 }}
                                transition={{ duration: 1 }}
                                className={`${classes.p2}`}
                            >
                                World
                            </motion.p>
                            <Link to={`/paltan`}>
                                <button className={`${classes.enterButton} ${classes.animatedbtn} ${classes.btn}`}>Enter</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${classes.secondBackground} flex items-center justify-center`}>
                    <div>
                        <div>
                            <motion.p
                                initial={{ translateY: "-20px", opacity: 0 }}
                                whileInView={{ translateY: "0px", opacity: 1 }}
                                transition={{ duration: 1 }}
                            >PUNERI PALTAN</motion.p>
                            <motion.p
                                initial={{ translateY: "20px", opacity: 0 }}
                                whileInView={{ translateY: "0px", opacity: 1 }}
                                transition={{ duration: 1 }}
                            >in the NEWS</motion.p>
                        </div>
                        <Link to={`paltan`}>
                            <button className={`${classes.enterButton} ${classes.animatedbtn} ${classes.btn}`}>Enter</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PaltanWorld;