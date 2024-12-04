import { useState } from "react";
import RewardsTable from "./rewardsTable";

function UpdateRewardsTable() {
	const [showRewards, setShowRewards] = useState(false);

	const handleShowRewards = () => {
		setShowRewards(true);
	};

	return (
		<div className="rewards-container">
			<h1>Tableau des récompenses:</h1>
			<button type="button" onClick={handleShowRewards}>
				Afficher les récompenses!
			</button>
			{showRewards && <RewardsTable />}
		</div>
	);
}

export default UpdateRewardsTable;
