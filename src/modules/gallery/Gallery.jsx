import React from "react";
import photos from "../../image/photos";
import Grid from "@material-ui/core/Grid";

export default function Gallery() {
  const photosMap = photos.map((pho) => pho.img);

  return (
    <Grid container justify="center" className="novinky">
      <Grid
        item
        style={{ color: "white", fontSize: "35px", fontWeight: "bold" }}
      >
        Photos
      </Grid>
      <Grid container item className="gallery">
        <Grid item xs={4}>
          <img src={photosMap[1]} alt="pho2" width="100%"></img>
        </Grid>
        <Grid item xs={4}>
          <img src={photosMap[3]} alt="pho4" width="100%"></img>
        </Grid>
        <Grid item xs={4}>
          <img src={photosMap[5]} alt="pho6" width="100%"></img>
        </Grid>
      </Grid>
      <Grid container item className="gallery">
        <Grid item xs={6}>
          <img src={photosMap[4]} alt="pho5" width="100%"></img>
        </Grid>
        <Grid item xs={6}>
          <img src={photosMap[6]} alt="pho7" width="100%"></img>
        </Grid>
      </Grid>
      <Grid container item className="gallery">
        <Grid item xs={2}>
          <img src={photosMap[0]} alt="pho1" width="100%"></img>
        </Grid>
        <Grid item xs={4}>
          <img src={photosMap[11]} alt="pho12" width="100%"></img>
        </Grid>
        <Grid item xs={4}>
          <img src={photosMap[10]} alt="pho11" width="100%"></img>
        </Grid>
        <Grid item xs={2}>
          <img src={photosMap[2]} alt="pho3" width="100%"></img>
        </Grid>
      </Grid>
      <Grid container item className="gallery">
        <Grid item xs={2}>
          <img src={photosMap[7]} alt="pho8" width="100%"></img>
        </Grid>
        <Grid item xs={2}>
          <img src={photosMap[9]} alt="pho10" width="100%"></img>
        </Grid>
        <Grid item xs={4}>
          <img src={photosMap[8]} alt="pho9" width="100%"></img>
        </Grid>
        <Grid item xs={2}>
          <img src={photosMap[12]} alt="gal1" width="100%"></img>
        </Grid>
        <Grid item xs={2}>
          <img src={photosMap[13]} alt="gal2" width="100%"></img>
        </Grid>
      </Grid>
    </Grid>
  );
}
