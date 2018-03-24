var recipes = {};
function updateObjectWithKeyAndValue(obj,key,value) {
    return Object.assign({}, obj, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value
  return object
}
 
function deleteFromObjectByKey(object,key) {
   var newObject = object.assign({}, obj)
  newObject
  delete newObject.assign
  newObject
  return object
}