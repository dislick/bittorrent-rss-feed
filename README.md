# bittorrent-rss-feed

Generates RSS feeds for BitTorrent files to automate downloads. This module tries to be as lightweight and quick as possible, which is why there are zero dependencies.

## Usage

```
npm install bittorrent-rss-feed
```

```javascript
const RSSFeed = require('bittorrent-rss-feed');

const rssFeed = new RSSFeed({
  title: 'Test Feed',
  link: 'https://testlink.com',
  ttl: 60,
  description: 'Description of the RSS feed'
});

rssFeed.addItem({
  title: 'Ubuntu Server 18.04',
  pubDate: new Date(),
  hash: '1da8f70c0a0503e61c3bd7b6e923783a',
  description: 'New download: Ubuntu Server 18.04',
  torrentFileUrl: 'https://testlink.com/ubuntu.torrent',
  torrentFileLength: 342521,
});

const xml = rssFeed.getXML();
```
