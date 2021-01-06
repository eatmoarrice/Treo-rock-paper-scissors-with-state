import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, ButtonGroup } from 'react-bootstrap';
import './App.css';
import ChoiceCard from './components/ChoiceCard';
import PublicNavbar from './components/PublicNavbar';

function App() {
	const shapes = ['rock', 'paper', 'scissors'];
	const [playerChoice, setPlayerChoice] = useState('paper');
	const [playerResult, setPlayerResult] = useState('tie');
	const [playerScore, setPlayerScore] = useState(0);
	const [computerChoice, setComputerChoice] = useState('paper');
	const [computerResult, setComputerResult] = useState('tie');
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
			setComputerResult('tie');
			setPlayerResult('tie');
		} else if (computerChoice === 'rock') {
			if (playerChoice === 'paper') {
				setComputerResult('loss');
				setPlayerResult('win');
				setPlayerScore(playerScore + 1);
			} else {
				setComputerResult('win');
				setComputerScore(computerScore + 1);
				setPlayerResult('loss');
			}
		} else if (computerChoice === 'paper') {
			if (playerChoice === 'scissors') {
				setComputerResult('loss');
				setPlayerResult('win');
				setPlayerScore(playerScore + 1);
			} else {
				setComputerResult('win');
				setComputerScore(computerScore + 1);
				setPlayerResult('loss');
			}
		} else {
			if (playerChoice === 'rock') {
				setComputerResult('loss');
				setPlayerResult('win');
				setPlayerScore(playerScore + 1);
			} else {
				setComputerResult('win');
				setComputerScore(computerScore + 1);
				setPlayerResult('loss');
			}
		}
	};

	return (
		<div className="App text-center">
			<PublicNavbar />
			<Container>
				<div className="d-flex justify-content-center flex-wrap">
					<ChoiceCard title="You" result={playerResult} shape={playerChoice} score={playerScore} />
					<ChoiceCard title="Computer" result={computerResult} shape={computerChoice} score={computerScore} />
				</div>
				<ButtonGroup>
					<Button variant="outline-dark" className="mx-1" onClick={() => randomMove('rock')}>
						Play 👊
					</Button>
					<Button variant="outline-dark" className="mx-1" onClick={() => randomMove('paper')}>
						Play 🤚
					</Button>
					<Button variant="outline-dark" className="mx-1" onClick={() => randomMove('scissors')}>
						Play ✌
					</Button>
				</ButtonGroup>
			</Container>
		</div>
	);
}

export default App;
