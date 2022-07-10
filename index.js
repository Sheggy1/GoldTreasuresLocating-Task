function solution (x,y) {
	let goldTreasureID = 0;
	let yNumber = 0;

	if(x > 0 && x < 100000 && y > 0 && y < 100000) {

		for (let i = 1; i <= y; i++ ){
			yNumber = yNumber + i
		}

		goldTreasureID = yNumber;

		for(let j = y; j < x + y - 1; j++ ){
			goldTreasureID = goldTreasureID + j
		}

		goldTreasureID = String(goldTreasureID);
		return goldTreasureID;

	} else {
		console.log("Error, you must set the arguments more then 1, and less them	100000")}
}