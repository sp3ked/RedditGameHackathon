import { Devvit } from '@devvit/public-api';
import PuzzleGrid from './components/PuzzleGrid';
import MiniPuzzle from './components/MiniPuzzle';
import Leaderboard from './components/Leaderboard';

Devvit.configure({
  redditAPI: true,
});

// Add menu item for Leaderboard
Devvit.addMenuItem({
  label: 'Show Leaderboard',
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit } = context;
    await reddit.submitPost({
      title: 'Puzzle Game Leaderboard',
      text: 'Leaderboard content goes here.',
    });
  },
});

// Add custom post for the game
Devvit.addCustomPostType({
  name: 'Word Puzzle Game',
  height: 'regular',
  render: (_context) => (
    <div>
      <MiniPuzzle />
      <PuzzleGrid />
    </div>
  ),
});

export default Devvit;
