import { getRaiderData, getDefenderData, getAllRounderData } from "../../store/action/playerActionMethod";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Tilt  from 'react-parallax-tilt'
import classes from "./Raider.module.css";
import { Link } from "react-router-dom";

const Raider = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRaiderData());
        dispatch(getDefenderData());
        dispatch(getAllRounderData());
    }, [])

    const raiderData = useSelector((state) => {
        return state.playerData.raiderData;
    })

    const defenderData = useSelector((state) => {
        return state.playerData.defenderData;
    })

    const allRounderData = useSelector((state) => {
        return state.playerData.allRounderData;
    })
    console.log(raiderData);
    console.log(defenderData);
    console.log(allRounderData);

    return (
        <>
            <div className={classes.raiderContainer}>
                {/* Title */}
                <div className={`${classes.titleContainer} flex flex-row gap-2 justify-`}>
                    <div>Raiders</div>
                    <div></div>
                    <div></div>
                </div>
                {/* Raider Images */}
                <div className={`${classes.raiderImagesContainer} grid grid-cols-1 px-2 md:grid-cols-2 md:px-4 lg:grid-cols-3 lg:px-8 gap-x-2 gap-y-12`}>
                    {
                        raiderData.map((ele) => {
                            const arr = ele.name.split(" ");
                            // console.log(arr);
                            return (
                                <Link to={`/players/${ele.id}`}>
                                    <Tilt className={classes.tiltDiv} style={{    boxShadow: "unset",}}>
                                        <div key={ele.id} className="flex flex-col items-center">
                                            <div className={`${classes.raiderImageParent} flex items-center justify-center`}>
                                                <img src={`${ele.profile_image}`} />
                                            </div>
                                            <div className={classes.nameContainer}>
                                                <p className={`${classes.firstName}`}>{arr[0]}</p>
                                                <p className={`${classes.secondName}`}>{arr[1]}</p>
                                                <p className={`${classes.position}`}>{ele.cat_name}</p>
                                            </div>
                                        </div>
                                    </Tilt>
                                </Link>
                            )
                        })
                    }
                </div>

                {/* Defender Images */}
                <div className={`${classes.titleContainer} ${classes.defenderTitle} flex flex-row gap-2 justify-`}
                >
                    <div>Defenders</div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${classes.raiderImagesContainer} ${classes.defenderImagesContainer} grid grid-cols-1 px-2 md:grid-cols-2 md:px-4 lg:grid-cols-3 lg:px-8 gap-x-2 gap-y-12`}>
                    {
                        defenderData.map((ele) => {
                            const arr = ele.name.split(" ");
                            // console.log(arr);

                            return (
                                <Link key={ele.id} to={`/players/${ele.id}`}>
                                    <Tilt className={classes.tiltDiv} style={{    boxShadow: "unset",}}>
                                        <div key={ele.id} className="flex flex-col items-center">
                                            <div className={`${classes.raiderImageParent} flex items-center justify-center`}>
                                                <img src={`${ele.profile_image}`} />
                                            </div>
                                            <div className={classes.nameContainer}>
                                                <p className={`${classes.firstName}`}>{arr[0]}</p>
                                                <p className={`${classes.secondName}`}>{arr[1]}</p>
                                                <p className={`${classes.position}`}>{ele.cat_name}</p>
                                            </div>
                                        </div>
                                    </Tilt>
                                </Link>
                            )
                        })
                    }
                </div>

                {/* All Rounder Images */}
                <div className={`${classes.titleContainer} flex flex-row gap-2 justify-`}>
                    <div>All Rounders</div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${classes.raiderImagesContainer} grid grid-cols-1 px-2 md:grid-cols-2 md:px-4 lg:grid-cols-3 lg:px-8 gap-x-2 gap-y-12`}>
                    {
                        allRounderData.map((ele) => {
                            const arr = ele.name.split(" ");
                            // console.log(arr);

                            return (
                                <Link key={ele.id} to={`/players/${ele.id}`}>
                                    <Tilt className={classes.tiltDiv} style={{    boxShadow: "unset",}}>
                                        <div key={ele.id} className="flex flex-col items-center">
                                            <div className={`${classes.raiderImageParent} flex items-center justify-center`}>
                                                <img src={`${ele.profile_image}`} />
                                            </div>
                                            <div className={classes.nameContainer}>
                                                <p className={`${classes.firstName}`}>{arr[0]}</p>
                                                <p className={`${classes.secondName}`}>{arr[1]}</p>
                                                <p className={`${classes.position}`}>{ele.cat_name}</p>
                                            </div>
                                        </div>
                                    </Tilt>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Raider;