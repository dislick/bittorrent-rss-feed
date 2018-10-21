const tag = require('./xml_generator');

const preamble = '<?xml version="1.0" encoding="UTF-8"?>';

class RSSFeed {
  constructor(options) {
    this.items = [];

    this.options = {
      title: 'default title',
      link: 'https://defaulturl.com',
      ttl: 60,
      description: 'default description',
      ...options
    };
  }

  addItem(item) {
    this.items.push(item);
  }

  getXML() {
    return preamble + tag('rss', {
      version: '2.0',
      children: tag('channel', {
        children: [
          tag('title', { children: this.options.title }),
          tag('link', { children: this.options.link }),
          tag('ttl', { children: this.options.ttl }),
          tag('description', { children: this.options.description }),
          ...this.items.map(item => tag('item', {
            children: [
              tag('title', { children: item.title }),
              tag('pubDate', { children: item.pubDate }),
              tag('guid', { children: item.hash }),
              tag('description', { children: item.description }),
              tag('enclosure', { 
                url: item.torrentFileUrl,
                length: item.torrentFileLength,
                type: 'application/x-bittorrent'
              }),
              tag('link', { children: item.torrentFileUrl }),
            ]
          }))
        ]
      })
    });
  }
}

module.exports = RSSFeed;
