//object 表示一个js对象
let a: object;
a = {};
a = function () { };

//一般对象不做限制，限制对象里面的属性
//{} 用来指定对象中可以包含哪些属性
//在属性名后边加上？表示属性是可选的
let b: { name: string; age?: number };
b = { name: "孙悟空", age: 18 };

//如果这种写的话，C中不能添加其他变量
// let c: { name: string,a?:number };
// c = { name: "猪八戒", a: 1, b: 2 };

//[propName:string]:any  表示任意类型的属性   
let d: { name: string, [propName: string]: any }
d = { name: '猪八戒', age: 18, gender: '男' }

//设置函数结构的类型声明:
//语法:(形参:类型，形参:类型 ...)=>返回值
let e: (a: number, b: number) => number;
// e = function (n1, n2, n3): number {
//     return n1 + n2
// }

//这样定义 数组里面只能是string类型
let f: string[];
// f=['a','b','c',1,2]

let g: Array<number>
g = [1, 2, 3]


/**
 * 元组，元组就是固定长度的数组
 */
let h: [string, string]
// h=['hello',123]
h = ['hello', '123']

/**
 * enum 枚举
 */
enum Gender {
    Male = 0,
    Female = 1
}
let i: { name: string, gender: Gender }
i = {
    name: '孙悟空',
    gender: Gender.Male
}
console.log(i.gender === Gender.Male)


// & 表示同时   j对象里面同时必须要满足name和age两个值
let j: { name: string } & { age: number }
j = { name: 's', age: 13 }


//类型的别名
type myType = number
let k: myType
let l: myType
let m: myType

k = 2



