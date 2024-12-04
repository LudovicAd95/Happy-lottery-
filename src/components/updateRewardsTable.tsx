import { useState } from "react";
import RewardsTable from "./rewardsTable";

function UpdateRewardsTable() {
	const [showRewards, setShowRewards] = useState(false);

	const handleShowRewards = () => {
		setShowRewards(true);
	};

	return (
		<div className="rewards-container">
			<h1>TABLEAU DES RECOMPENSES</h1>
			<button type="button" className="buttonR" onClick={handleShowRewards}>
				Afficher les récompenses!
			</button>
			{showRewards && <RewardsTable />}
		</div>
	);
}

export default UpdateRewardsTable;
