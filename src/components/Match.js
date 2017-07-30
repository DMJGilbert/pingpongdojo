import React, {Component} from 'react';
import Player from './Player.js';
class Match extends Component {
	constructor(props) {
		super(props);
		this.state = {
			score: [0, 0],
			currentlyPlaying: true
		}
	}
	scoreChanged(index, value) {
		let state = this.state;
		if (value >= 10) {
			state.currentlyPlaying = false;
			this.props.setWinner(this.props.match.players[index]);
		}
		state.score[index] = value;
		this.setState(state);
	}

	isReady() {
		return this.props.match.players[0] && this.props.match.players[1];
	}

	render() {
		return (
			<div style={{
				margin: "10px",
				opacity: this.state.currentlyPlaying ? 1 : 0.5
			}}>
				{this.props.match.players.map((player, index) => (
					<Player player={player}
						score={this.state.score[index]}
						currentlyPlaying={this.state.currentlyPlaying && this.isReady()}
						winnerStage={this.props.winnerStage}
						scoreChanged={(event) => this.scoreChanged(index, event.target.value)}/>
				))}
			</div>
		);
	}
}

export default Match;
