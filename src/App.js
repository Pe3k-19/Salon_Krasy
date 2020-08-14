import React from "react"; //importovanie Reaktu z state-mi z kniznice react.
import "./App.css";
import Footer from "./modules/footer/Footer";
import NavTabs from "./modules/Header/navBar";
import Header from "./modules/Header/Header";
import Grid from "@material-ui/core/Grid";
import Button from "./components/button2.jsx";

function App() {
  return (
    // <Grid container direction="column" className="App">
    //   <Grid item xs={12}>
    //     <Header />
    //   </Grid>
    //   <Grid container justify="center" className="heading">
    //     <Grid item>
    //       <link
    //         rel="stylesheet"
    //         href="https://fonts.googleapis.com/css?family=Tangerine"
    //       />
    //       Salón krásy
    //     </Grid>
    //   </Grid>
    //   <Grid container justify="center">
    //     <Grid item xs={9}>
    //       <NavTabs />
    //     </Grid>
    //   </Grid>
    //   <Footer />
    // </Grid>
    <div>
      <Button />
    </div>
  );
}

export default App;
