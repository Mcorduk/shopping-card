// Check if the targetObjectKey exists in the collection
const isObjectInCollection = (collection, targetKey) => {
  return targetKey in collection;
};

export default isObjectInCollection;
