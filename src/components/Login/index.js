import React, { useState } from "react";
import acmeLogo from "../../assets/img/Acme.svg";
import { makeStyles } from "@material-ui/core/styles";
import { ReactSVG } from "react-svg";
import { Button, TextField } from "@material-ui/core";
import { login } from "../../api/index";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  resize: {
    fontSize: 16,
  },
  textField: {
    fontSize: 15,
    marginTop: 20,
    width: 300,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuItem: {
    fontSize: 15,
  },
  button: { width: 300, marginTop: 30 },
}));

const Login = ({ onLogin, history }) => {
  const classes = useStyles();
  const [loginData, setLoginData] = useState({});

  const handleLogin = async () => {
    const response = await login(loginData);
    if (response) history.push("/overview");
    onLogin(response);
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          backgroundImage: `url(https://www.elmhurst.edu/wp-content/uploads/2019/11/software-developer-vs-software-engineer-illustration.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flex: 1,
          minHeight: "100vh",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReactSVG
          src={acmeLogo}
          beforeInjection={(svg) => {
            svg.setAttribute("style", "width: 600px");
          }}
        />
        <div style={{ marginTop: 50 }}>
          <div>
            <TextField
              required
              id="outlined-basic"
              label="Username"
              variant="standard"
              name="username"
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
              className={classes.textField}
              onChange={(e) =>
                setLoginData((state) => ({
                  ...state,
                  username: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-basic"
              label="Password"
              variant="standard"
              type="password"
              name="password"
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
              className={classes.textField}
              onChange={(e) =>
                setLoginData((state) => ({
                  ...state,
                  password: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => handleLogin()}
              className={classes.button}
            >
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
