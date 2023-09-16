/*
 Tournament Winner
 There's an algorithms tournament taking place in which teams of programmers
 compete against each other to solve algorithmic problems as fast as possible.
 Teams compete in a round robin, where each team faces off against all other teams.
 Only two teams compete against each other at a time, and for each competition,
 one team is designated the home team, while the other team is the away team. In
 each competition there's always one winner and one loser; there are no ties. A
 team receives 3 points if it wins and 0 points if it loses. The winner of the
 tournament is the team that receives the most amount of points.

 Given an array of pairs representing the teams that have competed against each
 other and an array containing the results of each competition, write a function
 that returns the winner of the tournament. The input arrays are named competitions
 and results respectively. The competitions array has elements in the form of
 [homeTeam, awayTeam], where each team is a string of at most 30 characters
 representing the name of the team. The results array contains information about
 the winner of each corresponding competition in the competitions array.
 Specifically, results [i] denotes the winner of competitions [i], where a 1 in
 the results array means that the home team in the corresponding competition won
 and a 0 means that the away team won.

 It's guaranteed that exactly one team will win the tournament and that each team
 will compete against all other teams exactly once. It's also guaranteed that the
 tournament will always have at least two teams.

 Sample Input

 competitions = [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]];
 results = [0, 0, 1];

 Sample Output
 "Python"
 // C# beats HTML, Python Beats C#, and Python Beats HTML.
 // HTML - 0 points
 // C# - 3 points
 // Python - 6 points

 */

const competitions = [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]];
const results = [0, 0, 1];

// function tournamentWinner(competitions, results) {
//     const scoreBoard = {};
//     for (let index = 0; index < results.length; index++) {
//         const home = competitions[index][0];
//         const away = competitions[index][1];
//         if (results[index] === 0) {
//             scoreBoard[home] = scoreBoard[home] === undefined ? 0 : scoreBoard[home] + 0;
//             scoreBoard[away] = scoreBoard[away] === undefined ? 3 : scoreBoard[away] + 3;
//         } else {
//             scoreBoard[home] = scoreBoard[home] === undefined ? 3 : scoreBoard[home] + 3;
//             scoreBoard[away] = scoreBoard[away] === undefined ? 0 : scoreBoard[away] + 0;
//         }
//     }
//     return scoreBoard;
// }

function tournamentWinner(competitions, results) {
    const scoreBoard = {};
    let topScore = 0;
    let topTeam = '';

    for (let i = 0; i < competitions.length; i++) {
        const [home, away] = competitions[i];

        // establish who won & lost
        const [winningTeam, losingTeam] = results[i] === 0 ? [away, home] : [home, away];
        scoreBoard[winningTeam] = scoreBoard[winningTeam] ? scoreBoard[winningTeam] + 3 : 3;
        scoreBoard[losingTeam] = scoreBoard[losingTeam] ? scoreBoard[losingTeam] + 0 : 0;

        if (scoreBoard[winningTeam] > topScore) {
            topScore = scoreBoard[winningTeam];
            topTeam = winningTeam;
        }
    }
    return topTeam;
}

// function tournamentWinner(competitions, results) {
//     // Write your code here.
//     /**
//      * @type {{}}
//      */
//     const tournament = {};
//     // while assigning, set value to either 0 or 3 for each key
//     for (let i = 0; i < results.length; i++) {
//         const homeTeam = competitions[i][0];
//         const awayTeam = competitions[i][1];
//         const homeScore = results[i] === 0 ? 0 : 3;
//         const awayScore = results[i] === 1 ? 0 : 3;
//         tournament[homeTeam] = tournament[homeTeam] ? tournament[homeTeam] += homeScore : homeScore;
//         tournament[awayTeam] = tournament[awayTeam] ? tournament[awayTeam] += awayScore : awayScore;
//     }
//
//     /**
//      * @type {number[]}
//      */
//     const scores = Object.values(tournament);
//     const max = Math.max(...scores);
//     return Object.keys(tournament).find(key => tournament[key] === max);
// }

const tournament = tournamentWinner(competitions, results);
console.log(tournament);
