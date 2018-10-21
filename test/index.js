const RSSFeed = require('../src/');

const rssFeed = new RSSFeed({
  title: 'Test Feed',
  link: 'https://testlink.com',
  ttl: 60,
  description: 'desc'
});

rssFeed.addItem({
  title: 'Ubuntu Server 18.04',
  pubDate: new Date(),
  hash: '1da8f70c0a0503e61c3bd7b6e923783a',
  description: 'New download: Ubuntu Server 18.04',
  torrentFileUrl: 'https://testlink.com/ubuntu.torrent',
  torrentFileLength: 342521,
});

rssFeed.addItem({
  title: 'Ubuntu Server 16.04',
  pubDate: new Date(),
  hash: '2da8f70c0a0503e61c3bd7b6e923783a',
  description: 'New download: Ubuntu Server 16.04',
  torrentFileUrl: 'https://testlink.com/ubuntu2.torrent',
  torrentFileLength: 342521,
});

console.log(rssFeed.getXML());