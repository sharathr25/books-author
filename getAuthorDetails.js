const authorjson = require('./data/authors.json');

const getAuthorDetails = (authorData) => {
  let index = -1;
  for (let i = 0; i < authorjson.authors.length; i += 1) {
    if (authorData === authorjson.authors[i].name || authorData === authorjson.authors[i].id) {
      index = i;
      break;
    }
  }
  if (index === -1) {
    return 'not found';
  }
  return authorjson.authors[index];
};

module.exports = getAuthorDetails;
