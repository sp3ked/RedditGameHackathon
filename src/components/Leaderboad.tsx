export default {
    async postLeaderboard(context: any) {
      const { reddit } = context;
      const leaderboard = `
        🏆 **Word Chain Leaderboard** 🏆
  
        1. UserA - 25 points
        2. UserB - 20 points
        3. UserC - 15 points
      `;
  
      const subreddit = await reddit.getCurrentSubreddit();
      await reddit.submitPost({
        title: 'Word Chain Leaderboard',
        subredditName: subreddit.name,
        text: leaderboard,
      });
    },
  };
  