const leaderboardData = [
    { username: 'UserA', score: 100 },
    { username: 'UserB', score: 85 },
    { username: 'UserC', score: 75 },
  ];
  
  const Leaderboard = {
    getLeaderboard: () => {
      return leaderboardData
        .map((entry, index) => `${index + 1}. ${entry.username} - ${entry.score} points`)
        .join('\n');
    },
  };
  
  export default Leaderboard;
  