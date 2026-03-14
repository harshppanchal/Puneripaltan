import classes from "./PlayersHero.module.css";
import { motion } from "framer-motion";

const PlayersHero = () => {
    return (
        <>
            <div className={`${classes.playersHeroContainer} grid grid-cols-1 lg:grid-cols-2 items-center gap-2`}>
                <motion.div className={`${classes.firstHero} flex justify-start items-center lg:justify-center`}
                    initial={{ translateY: "30px", opacity: 0 }}
                    whileInView={{ translateY: "0px", opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.p className={`${classes.playerText}`}
                        initial={{ translateY: "-50px", opacity: 0 }}
                        whileInView={{ translateY: "0px", opacity: 1 }}
                        transition={{ duration: 1 }}
                    >Players</motion.p>
                </motion.div>
                <motion.div className={`${classes.secondHero} self-start lg:self-end`}
                    initial={{ translateY: "30px", opacity: 0 }}
                    whileInView={{ translateY: "0px", opacity: 1 }}
                    transition={{ duration: 1 }}
                ></motion.div>
            </div>
        </>
    )
}

export default PlayersHero;