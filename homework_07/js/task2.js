var chackInUserAnswer,
	lose = 0,
	posibllePrize,
	prize = 10,
	totalPrize = 0,
	playGame = true,
	askUser,
	toNumber = 5,
	userNumber,
	randNumber,
	answerUser;

randNumber = Math.floor(Math.random() * (toNumber - 0 + 1) + 0);

answerUser = confirm("Do you want to play a game?");

while (playGame) {
	if (answerUser) {
		posibllePrize = prize;

		userNumber = prompt(
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

		if (chackInUserAnswer) {
			console.log("Iincorrect data, enter only numbers!");
			++lose;
			prize = Math.floor((prize /= 2));
			if (prize <= 2 || prize == 1) {
				prize = 2;
			}

			if (lose == 3) {
				totalPrize = 0;
				console.log("Thank you for a game. Your prize is: " + totalPrize + "$");
				askUser = confirm("Do you want to play again?");
				if (askUser) {
					(toNumber = 5), (prize = 10), (lose = 0), (totalPrize = 0);
				} else {
					playGame = false;
				}
			}
		} else if (
			userNumber % 1 != 0 ||
			typeof userNumber == "object" ||
			userNumber.trim() === ""
		) {
			// If user do not enter natural numbers guess
			console.log("Enter only natural numbers!");
			++lose;
			prize = Math.floor((prize /= 2));
			if (prize <= 2 || prize == 1) {
				prize = 2;
			}

			if (lose == 3) {
				totalPrize = 0;
				console.log("Thank you for a game. Your prize is: " + totalPrize + "$");
				askUser = confirm("Do you want to play again?");
				if (askUser) {
					(toNumber = 5), (prize = 10), (lose = 0), (totalPrize = 0);
				} else {
					playGame = false;
				}
			}
		} else if (userNumber != randNumber) {
			// If user do not guess a number
			++lose;
			prize = Math.floor((prize /= 2));

			if (prize <= 2 || prize == 1) {
				prize = 2;
			}

			if (lose == 3) {
				totalPrize = 0;
				console.log("Thank you for a game. Your prize is: " + totalPrize + "$");
				askUser = confirm("Do you want to play again?");
				if (askUser) {
					(toNumber = 5), (prize = 10), (lose = 0), (totalPrize = 0);
				} else {
					playGame = false;
				}
			}
		} else {
			// If user guessed the number
			randNumber = Math.floor(Math.random() * (toNumber - 0 + 1) + 0);

			lose = 0;
			userWin = confirm("Do you want to continue a game?");

			if (userWin) {
				totalPrize = totalPrize + prize;
				toNumber *= 2;

				if (prize == 2) {
					prize = Math.round(prize * 3.5);
				} else {
					prize = Math.round(prize * 3);
				}
			} else {
				totalPrize = prize;
				if (totalPrize == undefined) {
					totalPrize = Number(!!totalPrize);
				}
				console.log("Thank you for a game. Your prize is: " + totalPrize + "$");
				askUser = confirm("Do you want to play again?");
				if (askUser) {
					(toNumber = 5), (prize = 10), (lose = 0), (totalPrize = 0);
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
