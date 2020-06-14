import React, { useEffect, useState } from "react";
import { useInput } from "../utils/input-hook";
import "./DonationTypesPage.css";
import { navigate } from "@reach/router";
import tmpStyle from "../utils/tmpStyle";

function DonationTypesPage() {
	const [userArray] = useState([
		{
			displayName: "Samwise Gamgee",
			faceMask: 5,
			gloves: 6,
			scrubs: 7,
			shoes: 8,
			ventilators: 9,
			score: 84,
		},
		{
			displayName: "Frodo Baggins",
			faceMask: 0,
			gloves: 1,
			scrubs: 2,
			shoes: 3,
			ventilators: 4,
			score: 37,
		},
	]);

	useEffect(() => {
		tmpStyle();
	});

	return (
		<div className="container justify-content-center leaderboard">
			<img
				src="/pages/leaderboard.png"
				className="background-image"
				alt="donation types"
			/>
			{userArray.map((user) => (
				<div>
					<div>
						<h4 style={{ color: "white" }}>
							{user.displayName}: {user.score} points
						</h4>
						<p style={{ color: "white" }}> Face Masks: {user.faceMask}</p>
						<p style={{ color: "white" }}>Gloves: {user.gloves}</p>
						<p style={{ color: "white" }}>Scrubs: {user.scrubs}</p>
						<p style={{ color: "white" }}>Shoes: {user.shoes}</p>
						<p style={{ color: "white" }}>Ventilators: {user.ventilators}</p>
					</div>
					<br />
				</div>
			))}
			<button
				onClick={() => {
					navigate("/donationType");
				}}
			>
				Donate
			</button>
		</div>
	);
}

export default DonationTypesPage;
