import { resolveWinner, playRound, resultTypes } from './resolver';
import { balance } from './power-balance';
import { weapons } from './weapons';

const resultsArray = Object.keys(resultTypes).map(key => resultTypes[key]);
const weaponsArray = Object.keys(weapons).map(key => weapons[key]);

it('should resolve correct winner', () => {
    expect(resolveWinner(weapons.ROCK, weapons.SCISSORS, balance)).toBe(resultTypes.WIN);
    expect(resolveWinner(weapons.SCISSORS, weapons.PAPER, balance)).toBe(resultTypes.WIN);
    expect(resolveWinner(weapons.PAPER, weapons.ROCK, balance)).toBe(resultTypes.WIN);
});

it('should resolve correct loser', () => {
    expect(resolveWinner(weapons.SCISSORS, weapons.ROCK, balance)).toBe(resultTypes.LOSS);
    expect(resolveWinner(weapons.PAPER, weapons.SCISSORS, balance)).toBe(resultTypes.LOSS);
    expect(resolveWinner(weapons.ROCK, weapons.PAPER, balance)).toBe(resultTypes.LOSS);
});

it('should resolve correct draws', () => {
    expect(resolveWinner(weapons.SCISSORS, weapons.SCISSORS, balance)).toBe(resultTypes.DRAW);
    expect(resolveWinner(weapons.PAPER, weapons.PAPER, balance)).toBe(resultTypes.DRAW);
    expect(resolveWinner(weapons.ROCK, weapons.ROCK, balance)).toBe(resultTypes.DRAW);
});

it('should return round result', () => {
    const { result, opponentPick } = playRound(weapons.ROCK, weapons, balance);
    expect(resultsArray.includes(result)).toBe(true);
    expect(weaponsArray.includes(opponentPick)).toBe(true);
});