//也可以直接使用字面量进行类型声明  但是声明后值不可变
let a: 10;
// a=10
// a = 11;

//可以使用 |  来连接多个类型
let b: "male" | "female";
b = "male";
b = "female";

let c: boolean | string;
c = true;
c = "hello";

//使用ts时，any表示的时任意类型，不建议使用any 类型
// let d: any;

//如果不指定类型,隐式的any
let d;
d = 10;
d = "hello";
d = true;

//unknown 表示未知类型的值
let e: unknown;
e = 10;
e = "hello";

let s: string;
//d的类型时any,它可以赋值给任意变量
// s=d;

//把unknown未知类型变量赋值给string（其他类型）就会报错
//unknown类型不能直接赋值给其他变量
e = "hello";
// s=e

if (typeof e === "string") {
    s = e;
}
//其他写法   类型断言,可以用来告诉解析器变量的实际类型
s = e as string;
//语法l <类型> 变量
s = <string>e;

//函数没有默认设置返回值类型，函数会自动判断
// function fn(num) {
//   if (num > 0) {
//     return true;
//   } else {
//     return 123;
//   }
// }

//void 用来表示空，以函数为例，就表示没有null返回值的函数,不允许返回其他类型参数回去
function fn(): void {
    // return true  
    return null
}

//never 表示永远不会返回结果
function fn2(): never {
    throw new Error('报错了!')
}