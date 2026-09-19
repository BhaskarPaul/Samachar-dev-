import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import News from "./assets/components/News";
import Grid from "@material-ui/core/Grid";
import Image from "./images/undraw_newspaper_k72w.jpg";

function App() {
  return (
    <div className="main">
      <img src={Image} alt="" srcset="" className="back-img"/>
      <div className="App" style={{ overflowY: "hidden" }}>
        <Grid container spacing={3} style={{ marginTop: "10px" }}>
          <Grid item xs={12}>
            <Router>
              <React.Fragment>
                <CssBaseline />
                <Container maxWidth="md">
                  <Switch>
                    {/* <Route path="/" component={} exact /> */}
                    <Route path="/" component={News} />
                  </Switch>
                  {/* <Welcome /> */}
                </Container>
              </React.Fragment>
            </Router>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
