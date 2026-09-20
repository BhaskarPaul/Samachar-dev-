import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import ReactCountryFlag from "react-country-flag";
import PublicIcon from "@material-ui/icons/Public";
import SelfCountry from "./SelfCountry";
import World from "./World";
import WifiRoundedIcon from "@material-ui/icons/WifiRounded";
import LocalMallRoundedIcon from "@material-ui/icons/LocalMallRounded";
import MovieCreationRoundedIcon from "@material-ui/icons/MovieCreationRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import LaptopChromebookRoundedIcon from "@material-ui/icons/LaptopChromebookRounded";
import SportsEsportsRoundedIcon from "@material-ui/icons/SportsEsportsRounded";
import useIPQuery from "../hooks/useIPQuery";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    backgroundColor: "white",
  },
}));

const News = () => {
  const classes = useStyle();
  const { loading, data } = useIPQuery();

  const [tab, setTab] = useState(0);

  const handleChange = (event, tab) => {
    setTab(tab);
  };

  const mainContent = () => {
    return (
      <div>
        <div className={classes.root}>
          <Paper square>
            <Tabs
              value={tab}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              centered
              className={classes.tabs}
            >
              <Tab
                icon={<ReactCountryFlag countryCode={data?.country_code} svg />}
                label={`${data?.country_name}`}
              />

              <Tab icon={<PublicIcon />} label="General" />
              <Tab icon={<LaptopChromebookRoundedIcon />} label="Technology" />
              <Tab icon={<LocalMallRoundedIcon />} label="Bussiness" />
              <Tab icon={<MovieCreationRoundedIcon />} label="Entertainment" />
              <Tab icon={<FavoriteRoundedIcon />} label="Health" />
              <Tab icon={<WifiRoundedIcon />} label="Science" />
              <Tab icon={<SportsEsportsRoundedIcon />} label="Sports" />
            </Tabs>
          </Paper>
        </div>
        <div className="displayNews">
          {tab === 0 && <SelfCountry countryCode={data?.country_code} />}
          {tab === 1 && <World type="general" />}
          {tab === 2 && <World type="technology" />}
          {tab === 3 && <World type="business" />}
          {tab === 4 && <World type="entertainment" />}
          {tab === 5 && <World type="health" />}
          {tab === 6 && <World type="science" />}
          {tab === 7 && <World type="sports" />}
        </div>
      </div>
    );
  };

  return <div>{loading ? <Loader /> : mainContent()}</div>;
};

export default React.memo(withRouter(News));
