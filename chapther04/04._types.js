//object 表示一个js对象
var a;
a = {};
a = function () { };
//一般对象不做限制，限制对象里面的属性
//{} 用来指定对象中可以包含哪些属性
//在属性名后边加上？表示属性是可选的
var b;
b = { name: "孙悟空", age: 18 };
//如果这种写的话，C中不能添加其他变量
// let c: { name: string,a?:number };
// c = { name: "猪八戒", a: 1, b: 2 };
//[propName:string]:any  表示任意类型的属性   
var d;
d = { name: '猪八戒', age: 18, gender: '男' };
//设置函数结构的类型声明:
//语法:(形参:类型，形参:类型 ...)=>返回值
var e;
// e = function (n1, n2, n3): number {
//     return n1 + n2
// }
//这样定义 数组里面只能是string类型
var f;
// f=['a','b','c',1,2]
var g;
g = [1, 2, 3];
/**
 * 元组，元组就是固定长度的数组
 */
var h;
// h=['hello',123]
h = ['hello', '123'];
/**
 * enum 枚举
 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孙悟空',
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);
