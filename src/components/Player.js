import React, { Component } from 'react';

const styles = {
	container: {
		color: "#fff",
		backgroundColor: "#00c1ad",
		minWidth: "200px",
		padding: "10px",
		display: "flex"
	},
	name: {
		flex: "1",
		textAlign: "left"
	},
	input: {
		padding: "2px",
		width: "30px",
		height: "25px"
	}
}

class Player extends Component {
	render() {
		return (
			<div style={styles.container}>
				<span style={styles.name}>{this.props.player}</span>
				{!this.props.winnerStage ? <input style={styles.input}
					disabled={!this.props.currentlyPlaying}
					value={this.props.score}
					type="number"
					min="0"
					onChange={this.props.scoreChanged}/> : ""}
			</div>
		);
	}
}

export default Player;
