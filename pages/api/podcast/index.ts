import type { NextApiRequest, NextApiResponse } from 'next'

const getPodcatsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const response = await fetch(`https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  };

  export default getPodcatsHandler;