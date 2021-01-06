import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, ButtonGroup } from "react-bootstrap";
import "./App.css";
import ChoiceCard from "./components/ChoiceCard";
import PublicNavbar from "./components/PublicNavbar";
let streak = 0;
function App() {
	const shapes = ["rock", "paper", "scissors"];
	const [playerName, setPlayerName] = useState("You");
	const [playerChoice, setPlayerChoice] = useState("");
	const [playerResult, setPlayerResult] = useState("tie");
	const [playerScore, setPlayerScore] = useState(0);
	const [computerChoice, setComputerChoice] = useState("");
	const [computerResult, setComputerResult] = useState("tie");
	const [computerScore, setComputerScore] = useState(0);
	const randomMove = (move) => {
		const newComputerChoice = shapes[Math.floor(Math.random() * 3)];
		// const newPlayerChoice = shapes[Math.floor(Math.random() * 3)];
		setPlayerChoice(move);
		setComputerChoice(newComputerChoice);
		calculateWinner(newComputerChoice, move);
	};

	const calculateWinner = (computerChoice, playerChoice) => {
		if (computerChoice === playerChoice) {
			setComputerResult("tie");
			setPlayerResult("tie");
			streak = 0;
		} else if (computerChoice === "rock") {
			if (playerChoice === "paper") {
				if (streak >= 0) {
					streak++;
				} else {
					streak = 1;
				}
				if (streak === 3) {
					setPlayerResult("flawless victory");
				} else {
					setPlayerResult("win");
				}
				setComputerResult("loss");
				setPlayerScore(playerScore + 1);
			} else {
				if (streak <= 0) {
					streak--;
				} else {
					streak = -1;
				}
				if (streak === -3) {
					setComputerResult("flawless victory");
				} else {
					setComputerResult("win");
				}
				setComputerScore(computerScore + 1);
				setPlayerResult("loss");
				streak--;
			}
		} else if (computerChoice === "paper") {
			if (playerChoice === "scissors") {
				if (streak >= 0) {
					streak++;
				} else {
					streak = 1;
				}
				if (streak === 3) {
					setPlayerResult("flawless victory");
				} else {
					setPlayerResult("win");
				}
				setComputerResult("loss");
				setPlayerScore(playerScore + 1);
			} else {
				if (streak <= 0) {
					streak--;
				} else {
					streak = -1;
				}
				if (streak === -3) {
					setComputerResult("flawless victory");
				} else {
					setComputerResult("win");
				}

				setComputerScore(computerScore + 1);
				setPlayerResult("loss");
			}
		} else {
			if (playerChoice === "rock") {
				if (streak >= 0) {
					streak++;
				} else {
					streak = 1;
				}
				if (streak === 3) {
					setPlayerResult("flawless victory");
				} else {
					setPlayerResult("win");
				}
				setComputerResult("loss");
				setPlayerScore(playerScore + 1);
			} else {
				if (streak <= 0) {
					streak--;
				} else {
					streak = -1;
				}
				if (streak === -3) {
					setComputerResult("flawless victory");
				} else {
					setComputerResult("win");
				}
				setComputerScore(computerScore + 1);
				setPlayerResult("loss");
			}
		}
	};

	const restart = () => {
		setPlayerChoice("");
		setPlayerResult("tie");
		setPlayerScore(0);
		setComputerChoice("");
		setComputerResult("tie");
		setComputerScore(0);
		streak = 0;
	};

	const handleChange = (e) => {
		if (e.target.value) {
			setPlayerName(e.target.value);
		} else {
			setPlayerName("You");
		}
	};
	return (
		<div className="App text-center">
			<PublicNavbar />
			<Container>
				Name:
				<input className="m-2" onChange={(e) => handleChange(e)}></input>
				<div className="d-flex justify-content-center flex-wrap">
					<ChoiceCard title={playerName} result={playerResult} shape={playerChoice} score={playerScore} />
					<ChoiceCard title="Computer" result={computerResult} shape={computerChoice} score={computerScore} />
				</div>
				<ButtonGroup>
					<Button variant="outline-dark" className="mx-1" onClick={() => randomMove("rock")}>
						Play 👊
					</Button>
					<Button variant="outline-dark" className="mx-1" onClick={() => randomMove("paper")}>
						Play 🤚
					</Button>
					<Button variant="outline-dark" className="mx-1" onClick={() => randomMove("scissors")}>
						Play ✌
					</Button>
					<Button variant="dark" onClick={restart}>
						RESTART
					</Button>
				</ButtonGroup>
			</Container>
		</div>
	);
}

export default App;
