const tag = (tag, props) => {
  let propList = [];
  for (let prop in props) {
    if (props.hasOwnProperty(prop) && prop !== 'children') {
      propList.push(`${prop}="${props[prop]}"`);
    }
  }
  if (Array.isArray(props.children)) {
    props.children = props.children.join('');
  }
  return `<${tag}${propList.length > 0 ? ' ' : ''}${propList.join(' ')}>${props.children || ''}</${tag}>`;
};

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
    return tag('rss', {
      version: '2.0',
      children: tag('channel', {
        children: [
          tag('title', { children: this.options.title }),
          tag('link', { children: this.options.link }),
          this.items.map(item => tag('item', {
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
            ]
          }))
        ]
      })
    });
  }
}

module.exports = RSSFeed;
