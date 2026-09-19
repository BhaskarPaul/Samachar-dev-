import React from "react";
import NearMeRoundedIcon from "@material-ui/icons/NearMeRounded";
import { makeStyles } from "@material-ui/core";
import PlayCircleOutlineRoundedIcon from "@material-ui/icons/PlayCircleOutlineRounded";
import { withRouter } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        overflowX: "hidden",
        overflowY: "hidden",
        backgroundColor: "#00000",
    },
    font: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "100px",
    },
    smallFont: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        opacity: 0.8,
    },
    go: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "100px",
        cursor: "pointer",
    },
}));

const Welcome = ({ history }) => {
    const classes = useStyle();

    const handleClick = () => {
        history.push("/news");
    };

    return (
        <div className={classes.root}>
            <h1 className={classes.font}>
                Samachar
                <NearMeRoundedIcon style={{ fontSize: "100px" }} />
            </h1>
            <small className={classes.smallFont}>
                A website for daily newspaper readers
            </small>
            <div className={classes.go} onClick={() => handleClick()}>
                <PlayCircleOutlineRoundedIcon style={{ fontSize: "70px" }} />
                {/* <SvgIcon component={PlayCircleOutlineRoundedIcon} /> */}
            </div>
        </div>
    );
};

export default React.memo(withRouter(Welcome));
