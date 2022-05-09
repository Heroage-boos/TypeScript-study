//也可以直接使用字面量进行类型声明  但是声明后值不可变
var a;
// a=10
// a = 11;
//可以使用 |  来连接多个类型
var b;
b = "male";
b = "female";
var c;
c = true;
c = "hello";
//使用ts时，不建议使用any 类型
var d;
d = 10;
d = "hello";
d = true;
