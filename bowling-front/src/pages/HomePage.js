import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import classes from "../styles/homePage.module.css";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/players";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();
  const [bool, setBool] = useState(false);

  const handleAdd = () => {
    if (!!/\S/.test(name)) {
      dispatch(add({ name, score: [], total: [] }));
      setIsAdded(true);
      loading();
      setBool(true)
    }
    document.getElementById("fullWidth").value = "";
  };

  const loading = async () => {
    await delay(1290);
    setIsAdded(false);
  };
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <h1 className={classes.title}>Bowling calculator</h1>
        <h1>Add player !!</h1>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
            onChange={(e) => setName(e.target.value)}
            fullWidth
            label="Player name"
            id="fullWidth"
          />
        </Box>
        <button class={classes.button1} role="button1" onClick={handleAdd}>
          Add
        </button>
        <button
          class={classes.button2}
          role="button1"
          onClick={() => navigate("/scoreBoard")}
          disabled={!bool}
        >
          Start
        </button>
        {isAdded && (
          <Alert className={classes.alert} severity="success">
            {name} added succesfully
          </Alert>
        )}
      </div>
    </div>
  );
};

export default HomePage;
