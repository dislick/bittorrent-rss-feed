/**
 * XML Generator
 *
 * This function generates an XML tag string. It is meant to be nested within
 * eachother and tries to resemble the React JSX API. Examples:
 * 
 * tag('item', {
 *   test: '123',
 *   children: tag('title', { children: 'Hello' })
 * });
 * 
 * <item test="123"><title>Hello</title></item>
 */
module.exports = (tag, props) => {
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
