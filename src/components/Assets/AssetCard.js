import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 400,
  },
  media: {
    height: 250,
  },
});

export default function AssetCard({
  asset,
  closeModal,
  handleFreeClick,
  handleDeleteAsset,
}) {
  const classes = useStyles();
  const {
    brand,
    model,
    assetType,
    id,
    imgUrl,
    devId,
    devName,
    name,
    developerId,
  } = asset.row;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgUrl}
          title={assetType || "picture"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`${brand} - ID: ${id}`}
          </Typography>
          <Typography variant="h9" color="textSecondary" component="p">
            {model}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            color={devId || developerId ? "error" : "primary"}
            style={{ marginTop: 7 }}
          >
            {devId || developerId
              ? `ASIGNED - ${devName || name} (ID: ${devId || developerId})`
              : "UNASIGNED"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {(devId || developerId) && (
          <Button
            style={{ fontSize: 13 }}
            size="large"
            color="primary"
            onClick={() => handleFreeClick()}
          >
            FREE DEVICE
          </Button>
        )}
        {!(devId || developerId) && (
          <Button
            style={{ fontSize: 13 }}
            size="large"
            color="primary"
            onClick={() => handleDeleteAsset()}
          >
            DELETE DEVICE
          </Button>
        )}
        <Button
          style={{ fontSize: 13 }}
          size="large"
          color="primary"
          onClick={() => closeModal()}
        >
          CLOSE MODAL
        </Button>
      </CardActions>
    </Card>
  );
}
