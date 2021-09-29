function myObjectCreate(proto, property){
  let Fn = function (){}
  Fn.__proto__ = proto
  let obj = new Fn()
  if (proto === null) {
    obj.__proto__ = null
  } // Object.create(null) 创建一个空对象，此对象无原型方法。
  if (property !== undefined) {
    obj.definedProperties(obj, property)
  }
  return obj
}
