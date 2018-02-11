var chackInUserAnswer,
	lose = 0,
	posibllePrize,
	prize,
	totalPrize = 0,
	playGame = true,
	askUser,
	toNumber = 5,
	arrNumFirst = 10,
	arrNumSecond = 5,
	arrNumThird = 2;

var answerUser = confirm("Do you want to play a game?");

while (playGame) {
	if (answerUser) {
		// random number and entering number of user
		prize = [
			Math.round(arrNumFirst),
			Math.round(arrNumSecond),
			Math.floor(arrNumThird)
		];

		var randNumber = Math.floor(Math.random() * (toNumber - 0 + 1) + 0);

		posibllePrize = prize[lose];
		var userNumber = prompt(
			"Enter a number from 0 to " +
				toNumber +
				"\n" +
				"Attempts left: " +
				lose +
				"\n" +
				"Total prize: " +
				totalPrize +
				"$\n" +
				"Possible price on current attempt: " +
				posibllePrize +
				"$",
			""
		);

		chackInUserAnswer = isNaN(userNumber);

		if (typeof userNumber == "object") {
			console.log("you canceled entering answer!!!");
			askUser = confirm("Do you want to play again?");
			if (askUser) {
				(toNumber = 5),
					(arrNumFirst = 10),
					(arrNumSecond = 5),
					(arrNumThird = 2);
				(totalPrize = 0), (lose = 0);
			} else {
				playGame = false;
			}
		} else if (chackInUserAnswer) {
			console.log("Iincorrect data, enter only numbers!");
			++lose;
			totalPrize = 0;
			if (lose == 3) {
				console.log("Thank you for a game. Your prize is: " + totalPrize + "$");
				askUser = confirm("Do you want to play again?");
				if (askUser) {
					(toNumber = 5),
						(arrNumFirst = 10),
						(arrNumSecond = 5),
						(arrNumThird = 2);
					(totalPrize = 0), (lose = 0);
				} else {
					playGame = false;
				}
			} else if (toNumber > 5) {
				toNumber /= 2;
			}
		} else if (userNumber % 1 != 0) {
			// If user do not enter natural numbers guess
			console.log("Enter only natural numbers!");
			++lose;
			totalPrize = 0;
			if (lose == 3) {
				console.log("Thank you for a game. Your prize is: " + totalPrize + "$");
				askUser = confirm("Do you want to play again?");
				if (askUser) {
					(toNumber = 5),
						(arrNumFirst = 10),
						(arrNumSecond = 5),
						(arrNumThird = 2);
					(totalPrize = 0), (lose = 0);
				} else {
					playGame = false;
				}
			} else if (toNumber > 5) {
				toNumber /= 2;
			}
		} else if (userNumber != randNumber) {
			// If user do not guess a number
			++lose;
			totalPrize = 0;
			if (lose == 3) {
				console.log("Thank you for a game. Your prize is: " + totalPrize + "$");
				askUser = confirm("Do you want to play again?");
				if (askUser) {
					(toNumber = 5),
						(arrNumFirst = 10),
						(arrNumSecond = 5),
						(arrNumThird = 2);
					(totalPrize = 0), (lose = 0);
				} else {
					playGame = false;
				}
			} else if (toNumber > 5) {
				toNumber /= 2;
			}
		} else {
			// If user guessed the number

			userWin = confirm("Do you want to continue a game?");

			if (userWin) {
				totalPrize = totalPrize + prize[lose];
				toNumber *= 2;
				(arrNumFirst = arrNumFirst *= 3),
					(arrNumSecond = arrNumSecond *= 3),
					(arrNumThird = arrNumThird *= 3.5);
			} else {
				totalPrize = prize[lose];
				if (totalPrize == undefined) {
					totalPrize = Number(!!totalPrize);
				}
				console.log("Thank you for a game. Your prize is: " + totalPrize + "$");
				askUser = confirm("Do you want to play again?");
				if (askUser) {
					(toNumber = 5),
						(arrNumFirst = 10),
						(arrNumSecond = 5),
						(arrNumThird = 2);
					(totalPrize = 0), (lose = 0);
				} else {
					playGame = false;
				}
			}
		}
	} else {
		// If user do not want to play the game
		console.log("You did not become a millionaire!");
		playGame = false;
	}
}
