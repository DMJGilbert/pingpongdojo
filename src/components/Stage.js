import React, {Component} from 'react';
import Match from './Match.js';

const styles = {
	container: {
		margin: "10px",
		borderRight: "dotted 5px #00c1ad",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around"
	}
}

class Stage extends Component {
	render() {
		console.log(this.props)
		return (
			<div style={styles.container}>
				{this.props.matches.map((match, index) => (
					<Match match={match}
						winnerStage={this.props.winnerStage}
						setWinner={(winner) => this.props.setMatchWinner(index, winner)}/>
				))}
			</div>
		);
	}
}

export default Stage;
