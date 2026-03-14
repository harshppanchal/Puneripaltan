import { motion } from "framer-motion";
import classes from "./Partner.module.css";
const Partner = () => {
    return (
        <>
            <div className={`${classes.partnerContainer}`}>
                <div className={`${classes.subscribeDiv} grid grid-cols-1 items-center justify-center md:grid-cols-2 gap-8`}>
                    <motion.p
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2, type: "spring", bounce: 0.5 }}
                    >subscribe to our newsletter</motion.p>
                    <div className="flex flex-row gap-3">
                        <div>
                            <input type="text" placeholder="Enter your email-id" />
                        </div>
                        <button>Go</button>
                    </div>
                </div>
                <motion.p className={classes.partnerTitle}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, type: "spring", bounce: 0.5 }}
                >Partners</motion.p>
                <div className={`${classes.sponsorContainer}`}>
                    <div>
                        <div>
                            <a href="https://forcemotors.com/" target="_blank">
                                <img src="https://www.puneripaltan.com/dist/img/force_motors.png" alt="" />
                                <p>Principal Partner</p>
                            </a>
                        </div>
                    </div>

                    <div>
                        <div>
                            <a href="https://www.stihl.com/default.aspx" target="_blank">
                                <img src="https://www.puneripaltan.com/dist/img/stihl-logo.png" alt="" />
                                <p>Associate-<br></br>Partner</p>
                            </a>
                        </div>
                        <div>
                            <a href="https://navitassolar.com/" target="_blank">
                                <img src="https://www.puneripaltan.com/dist/img/navitas_sponsor.webp" alt="Navitas Solar" class="img-responsive"/>
                                <p>Associate-<br></br>Partner</p>
                            </a>
                        </div>
                    </div>

                    <div>
                        <div>
                            <a href="https://www.parasbuildtech.com/" target="_blank">
                                <img src="https://www.puneripaltan.com/dist/img/paras.webp" alt="" />
                                <p>Co-Partner</p>
                            </a>
                        </div>
                    </div>

                    <div>
                        <div>
                            <a href="https://betteralt.in/" target="_blank">
                                <img src="https://www.puneripaltan.com/dist/img/better.webp" alt="" />
                                <p>Wellness Partner</p>
                            </a>
                        </div>
                    </div>

                    <div>
                        <div>
                            <a href="https://www.shivnaresh.in/" target="_blank">
                                <img src="https://www.puneripaltan.com/dist/img/shivnaresh-logo.webp" alt="" />
                                <p>Kit Partner</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partner;