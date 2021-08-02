import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  makeStyles,
  Avatar,
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    width: 600,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  profileHeader: {
    textAlign: "center",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  assetTitle: {
    marginBottom: 20,
  },
  assets: {
    textAlign: "left",
  },
}));

export default function DeveloperCard({
  developer,
  assets,
  closeModal,
  handleDeleteDeveloper,
}) {
  const classes = useStyles();
  const { name, address, city, country, phone } = developer.row;
  return (
    <Card className={classes.card}>
      <Avatar
        alt="Profile Image"
        src={
          "https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg"
        }
        className={classes.avatar}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="h6">{`${phone} - ${address}, ${city}, ${country}`}</Typography>
        <Divider style={{ width: "100%", marginTop: 20, marginBottom: 20 }} />
        <Typography
          variant="h5"
          color={assets.length > 0 ? "primary" : "secondary"}
          className={classes.assetTitle}
        >
          {assets.length > 0 ? "Assets" : "No Assets Asigned"}
        </Typography>
        {assets.map((asset) => (
          <Typography
            className={classes.assets}
            color="textPrimary"
            variant="h6"
          >{`${asset.assetId} - ${asset.brand} - ${asset.model}`}</Typography>
        ))}
      </CardContent>

      <CardActions>
        <Button
          onClick={() => handleDeleteDeveloper()}
          style={{ fontSize: 13 }}
          size="large"
          color="secondary"
        >
          DELETE DEVELOPER
        </Button>
        <Button
          onClick={() => closeModal()}
          style={{ fontSize: 13 }}
          size="large"
          color="primary"
        >
          CLOSE MODAL
        </Button>
      </CardActions>
    </Card>
  );
}
