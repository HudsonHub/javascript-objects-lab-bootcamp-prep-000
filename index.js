var recipes = {};
function updateObjectWithKeyAndValue(obj,key,value) {
    return Object.assign({}, obj, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value
  return object
}
 
function deleteFromObjectByKey(object,key) {
   var newObject = object.key({}, obj)
  newObject
  delete newObject.key
  newObject
  return object
}