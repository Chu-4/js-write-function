Function.prototype.isCall = function(context){
    context = context || window // 赋值作用域参数，如果没有则默认为 window
    context.fn = this // 绑定调用函数（调用call方法会调用一遍自身，所以这里要存下来自身）
    let args = [...arguments].slice(1) // 获取第一个参数以外的其他参数
    let res = context.fn(...args) // 执行调用函数
    delete context.fn // 销毁调用函数防止污染
    return res
}


test1: 
var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName:"Bill",
  lastName: "Gates"
}
var person2 = {
  firstName:"Steve",
  lastName: "Jobs"
}
person.fullName.isCall(person1) // "Bill Gates"
person.fullName.isCall(person2) // "Steve Jobs"


test2: 
function Product(name, price) {
	this.name = name
	this.price = price
}
function Food(name, price) {
	Product.isCall(this, name, price)
	this.category = 'food'
}

let tempFood = new Food('cheese', 5)
console.log(tempFood) // Food {name: "cheese", price: 5, category: "food"}
