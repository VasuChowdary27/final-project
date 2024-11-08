import axios from "axios";
import React, { useEffect, useState } from "react";
import TableData from "../../components/TableData";

const SERVER_URL = "http://127.0.0.1:5500";

const HistoryPage = () => {
	const [history, setHistory] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getHistory = async () => {
			setLoading(true);
			const result = await axios.post(
				`${SERVER_URL}/api/v1/history`,
				{},
				{
					headers: {
						"Content-Type": "application/json",
					},
					withCredentials: true,
				}
			);

			setHistory(result.data.data);
			console.log(result.data.data);
			setLoading(false);
		};
		getHistory();
	}, []);

	return (
		<>
			{loading ? (
				<>Loading...</>
			) : (
				<div id="historyContainer">
					{history === "" ? (
						<div className="noData">No History Found...</div>
					) : (
						<table className="historyData">
							<thead>
								<tr>
									<th>Date</th>
									<th>Car Company</th>
									<th>Car Model</th>
									<th>Year of Purchase</th>
									<th>Fuel Type</th>
									<th>Kilometers Driven</th>
									<th>Car Value</th>
								</tr>
							</thead>
							<tbody>
								{history.split("||").map((e) => {
									if (e !== "") {
										return (
											<TableData
												key={e}
												data={e.split("|")}
											/>
										);
									}
								})}
							</tbody>
						</table>
					)}
				</div>
			)}
		</>
	);
};

export default HistoryPage;
