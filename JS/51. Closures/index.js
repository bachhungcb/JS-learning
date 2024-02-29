//closure = a function defined inside of another function
//          the inner function has accsess to the variables
//          and scope of the outer function.
//          Allow for private variables and state maintenance
//          Used frequently in JS framework: React, Vue, Angular
function createGame(){
    let score = 0;

    function increaseScore(point){
        score += point;
        console.log(`+${point} pts`);
    }
    function decreaseScore(point){
        score -= point;
        console.log(`-${point} pts`);
    }

    function getScore(){
        return score;
    }
    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();
game.increaseScore(6);
game.increaseScore(4);
game.increaseScore(4);
game.decreaseScore(4);

console.log(`The final score is ${game.getScore()} pts`);

