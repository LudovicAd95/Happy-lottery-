import { useState } from "react";
import "../styles/info.css";

function Info() {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [gender, setGender] = useState("");
	const [age, setAge] = useState("");
	const [id, setID] = useState(0);
	const [usersList, setUsersList] = useState<
		{
			id: number;
			firstname: string;
			lastname: string;
			gender: string;
			age: string;
		}[]
	>([]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const userInfo = { id, firstname, lastname, gender, age };

		setUsersList((prevUsersList) => {
			const updatedList = [...prevUsersList, userInfo];
			localStorage.setItem("usersList", JSON.stringify(updatedList));
			console.log(
				"Liste Utilisateurs mise à jour dans LocalStorage:",
				updatedList,
			);
			return updatedList;
		});

		// Réinitialiser les champs du formulaire après soumission
		setID(id + 1);
		setFirstname("");
		setLastname("");
		setGender("");
		setAge("");
	};

	return (
		<div className="infoContainer">
			<div className="infoCard">
				<h1>VOS INFOS:</h1>
				<form className="form" onSubmit={handleSubmit}>
					<div>
						<label>
							Prénom:
							<input
								type="text"
								value={firstname}
								onChange={(e) => setFirstname(e.target.value)}
							/>
						</label>
						<label>
							Nom:
							<input
								type="text"
								value={lastname}
								onChange={(e) => setLastname(e.target.value)}
							/>
						</label>
						<label>
							Genre:
							<select
								name="gender"
								id="gender-select"
								onChange={(e) => setGender(e.target.value)}
							>
								<option value="Homme">Homme</option>
								<option value="Femme">Femme</option>
								<option value="Non Renseigné">Non-Renseigné</option>
							</select>
						</label>
						<label>
							Tranche d'âge:
							<select
								name="age"
								id="age-select"
								onChange={(e) => setAge(e.target.value)}
							>
								<option value="0 à 3 ans">0 à 3 ans</option>
								<option value="4 à 6 ans">4 à 6 ans</option>
								<option value="7 à 10 ans">7 à 10 ans</option>
								<option value="11 à 15 ans">11 à 15 ans</option>
							</select>
						</label>
					</div>
					<button type="submit" id="magicButton">
						Enregistrez vous!
					</button>
				</form>
			</div>
		</div>
	);
}

export default Info;
