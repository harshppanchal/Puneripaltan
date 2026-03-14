import PlayersHero from "../PlayersHero/PlayersHero";
import Raider from "../Raider/Raider";
import Footer from "../FooterFolder/Footer";
import { useEffect } from "react";
const Players = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <PlayersHero />
            <Raider />
            <Footer />
        </>
    )
}

export default Players;