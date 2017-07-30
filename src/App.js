import React, {Component} from 'react';
import './App.css';

import Stage from './components/Stage.js';

const players = ["🐙 Darren", "🤖 Manuel", "💩 Dmitry", "🦄 Lorraine", "👻 Todd", "🕷 Peter", "🦇 Bruce", "🐧 Oswald"];

const style = {
	app: {
		display: "flex"
	}
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function createStages(players) {
	let stages = [{
		matches: []
	}];
	shuffleArray(players).forEach((player, index) => {
		let matchIndex = Math.floor(index / 2);
		let playerIndex = index % 2;
		if (!stages[0].matches[matchIndex]) {
			stages[0].matches[matchIndex] = {
				winnerStage: false,
				players: []
			}
		}
		stages[0].matches[matchIndex].players[playerIndex] = player;
	});
	return stages;
}

class App extends Component {
	constructor(props) {
		super(props);
		const stages = createStages(players);
		this.state = {
			players: players,
			stages: stages
		}
	}

	setMatchWinner(stageIndex, matchIndex, player) {
		let state = this.state;
		let newStageIndex = stageIndex + 1;
		if (!state.stages[newStageIndex]) {
			state.stages[newStageIndex] = {
				winnerStage: (state.players.length / 2) - 2 === stageIndex,
				matches: []
			};
		}
		let newMatchIndex = Math.floor(matchIndex / 2);
		if (!state.stages[newStageIndex].matches[newMatchIndex]) {
			state.stages[newStageIndex].matches[newMatchIndex] = {
				players: []
			};
		}
		let playerIndex = matchIndex % 2;
		state.stages[newStageIndex].matches[newMatchIndex].players[playerIndex] = player;
		this.setState(state);
	}

	render() {
		return (
			<div className="App" style={style.app}>
				{this.state.stages.map((stage, index) => (
					<Stage {...stage}
						setMatchWinner={(matchIndex, player) => (
							this.setMatchWinner(index, matchIndex, player)
						)}/>
				))}
			</div>
		);
	}
}

export default App;
