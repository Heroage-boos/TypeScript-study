var a; //声明一个变量a,同时指定他的类型为number
//a的类型设置为number,在以后使用过程中a的值只能是数字
a = 10;
a = 33;
//a='hello' 此行代码会报错，因为a的类型会报错，只能是number类型
var b; //默认编译为es3,可以配置
b = "hello";
console.log(b);
//声明变量并直接赋值
// let c: boolean = false;
var c = false; //如果变量的声明和赋值是同时进行的，ts可以自动对变量进行类型检测
c = true;
//js中的函数是不考虑参数的类型和个数的
// function sun(a:, b) {
//   return a + b;
// }
// console.log(sum(123, 456)); //579
// console.log(sum(123, "456")); //123456
function sum(a, b) {
    return a + b;
}
console.log(sum(123, 456));
