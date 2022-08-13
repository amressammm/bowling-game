import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Cell from "./Cell";
import classes from "../styles/scoreBoard.module.css";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { update, addTotal } from "../redux/players";
import { useNavigate } from "react-router-dom";

const ScoreBoard = () => {
  const { players } = useSelector((state) => state.players);
  const [score, setScore] = useState(0);
  const [initialPlayer, setInitialPlyer] = useState(0);
  const [frame, setFrame] = useState(0);
  const [Wframe, setWFrame] = useState(0);
  const [fframe, setfFrame] = useState(0);
  const [GameOver, setGameOver] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    
  }, []);

  const handleScore = (e) => {
    if (!isNaN(e.target.value)) {
      setScore(parseInt(e.target.value));
    }
  };

  const handleClick = async () => {
   

    if (!GameOver && score !== -1) {
      if (score > 10) {
        setError(true);
        return;
      }
      if (Wframe === 1 && 10 - fframe < score) {
        setError(true);
        return;
      }
      dispatch(update([initialPlayer, score]));
      
      if (Wframe === 1) {
       

        let name = players[initialPlayer].name;
        let scoretemp = players[initialPlayer].score;
        let a = { name: [...scoretemp, score] };

        dispatch(addTotal([a, initialPlayer]));
        // calculate(score)

        setWFrame(0);

        if (initialPlayer < players.length - 1) {
          setInitialPlyer(initialPlayer + 1);
        } else {
          setInitialPlyer(0);
          if (frame + 1 > 9) {
            setGameOver(true);
          } else {
            setFrame(frame + 1);
          }
        }
      } else {
        if (score === 10) {
          dispatch(update([initialPlayer, 0]));
          setWFrame(0);
          setFrame(frame + 1);

          let name = players[initialPlayer].name;
          let scoretemp = players[initialPlayer].score;
          let a = { name: [...scoretemp, score] };

          dispatch(addTotal([a, initialPlayer]));
          if (initialPlayer < players.length - 1) {
            setInitialPlyer(initialPlayer + 1);
          } else {
            setInitialPlyer(0);
            if (frame + 1 > 9) {
              setGameOver(true);
            } else {
              setFrame(frame + 1);
            }
          }
        } else {
          setfFrame(score);
          setWFrame(1);
        }
      }
    }
    if (error) setError(false);

   
    document.getElementById("fullWidth").value = "";
    setScore(-1);
  };

  return (
    <div>
      <div className={classes.conatiner}>
        <div className={classes.input}>
          <h1>{players[initialPlayer].name}'s turn</h1>
          <div className={classes.input1}>
            <TextField
              fullWidth
              label="pins knocked"
              id="fullWidth"
              onChange={handleScore}
            />
            <button class={classes.button} onClick={handleClick}>
              enter
            </button>
          </div>
          <p className={classes.error}>{error ? "Invalid input" : " "}</p>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center"> 1 </TableCell>
                <TableCell align="center">2</TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell align="center">4</TableCell>
                <TableCell align="center">5</TableCell>
                <TableCell align="center">6</TableCell>
                <TableCell align="center">7</TableCell>
                <TableCell align="center">8</TableCell>
                <TableCell align="center">9</TableCell>
                <TableCell align="center" className={classes.last}>
                  10
                </TableCell>
                <TableCell align="center">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {players.map((player) => (
                <TableRow
                  key={player}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {player.name}
                  </TableCell>
                  <TableCell align="right">
                    <Cell
                      first={player.score[0]}
                      second={player.score[1]}
                      total={player.total[0]}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Cell
                      first={player.score[2]}
                      second={player.score[3]}
                      total={player.total[1]}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Cell
                      first={player.score[4]}
                      second={player.score[5]}
                      total={player.total[2]}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Cell
                      first={player.score[6]}
                      second={player.score[7]}
                      total={player.total[3]}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Cell
                      first={player.score[8]}
                      second={player.score[9]}
                      total={player.total[4]}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Cell
                      first={player.score[10]}
                      second={player.score[11]}
                      total={player.total[5]}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Cell
                      first={player.score[12]}
                      second={player.score[13]}
                      total={player.total[6]}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Cell
                      first={player.score[14]}
                      second={player.score[15]}
                      total={player.total[7]}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Cell
                      first={player.score[16]}
                      second={player.score[17]}
                      total={player.total[8]}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Cell
                      first={player.score[18]}
                      second={player.score[19]}
                      total={player.total[9]}
                    />
                  </TableCell>
                  <TableCell align="right">
                    {player.total.length === 0
                      ? "0"
                      : player.total[player.total.length - 1]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ScoreBoard;
