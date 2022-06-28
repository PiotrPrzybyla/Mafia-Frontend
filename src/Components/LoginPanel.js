import React, { useEffect, useState } from "react";
import "./style/LoginPanel.css";

function LoginPanel() {
	const [playersInGame, setPlayersInGame] = useState([]);
	useEffect(() => {
		setPlayersInGame(["player1", "player2", "player3", "player4"]);
	}, []);
	return (
		<>
			<div className="central">
				<section className="players">
					<h2>Players in game:</h2>
					<ul className="players__list">
						{playersInGame.map((pl, id) => {
							return (
								<li className="players__player" key={id}>
									{pl}
								</li>
							);
						})}
					</ul>
				</section>
				<form action="" className="loginForm">
					<label>
						Name:
						<input name="name" />
					</label>
					<button className="primary-button" type="submit">
						Join Game
					</button>
				</form>
			</div>
		</>
	);
}

export default LoginPanel;
