function showResult(fighter) {
	console.log("Fighter", fighter.getName());
	console.log("- Combat stats:", fighter.getCombatHistory());
	console.log("- Properties:", fighter.getStats());
}

function fighter(fighterProp) {
	let stats = {
		name: `${fighterProp.name}`,
		attack: fighterProp.attack,
		hp: fighterProp.hp
	};

	let combatHistory = {
		wins: 0,
		loses: 0
	};

	let fighter = {
		getName: () => stats.name,

		block: () => {
			return Math.floor(Math.random() * (1 - 0 + 1) + 0);
		},

		getCombatHistory: () => combatHistory,

		getStats: () => stats,

		fight: enemyFighter => {
			if (!enemyFighter.block()) {
				enemyFighter.getStats().hp = enemyFighter.getStats().hp - stats.attack;

				if (enemyFighter.getStats().hp < stats.attack) {
					enemyFighter.getStats().hp = 0;
					enemyFighter.getCombatHistory().loses++;
					combatHistory.wins++;
				}
				return true;
			} else {
				return false;
			}
		}
	};
	return fighter;
}

let fighter1 = fighter({ name: "John", attack: 100, hp: 100 });
let fighter2 = fighter({ name: "Kayn", attack: 50, hp: 300 });
let fighter3 = fighter({ name: "Bill", attack: 40, hp: 100 });

fighter1.fight(fighter2); // true, fighter 1 make damage to fighter 2
fighter1.fight(fighter3); // true, fighter 1 make damage to fighter 3

// /**
//  * Fighter John
//  * - Combat stats: { wins: 1, loses: 0 }
//  * - Properties: { name: 'John', attack: 100, hp: 100 }
//  */
showResult(fighter1);

// /** Fighter Kayn
//  * - Combat stats: { wins: 0, loses: 0 }
//  * - Properties: { name: 'Kayn', attack: 50, hp: 200 }
//  */
showResult(fighter2);

// /**
//  * Fighter Bill
//  * - Combat stats: { wins: 0, loses: 1 }
//  * - Properties: { name: 'Bill', attack: 40, hp: 0 }
//  */
showResult(fighter3);
