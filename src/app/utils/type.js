const typeCache = {};
const type = label => {
  if (typeCache[label]) {
    throw new Error(`Action type ${label} is not unique`);
  }
  typeCache[label] = true;
  return label;
};

export default type;
