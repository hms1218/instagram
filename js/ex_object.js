//JAVA

//public class Person{
//    String name;
//    int age;
//}

// main(){
//  Person p = new Person();
//  p.name = "홍길동";
//  p.age = 30;
//}

//JS
const person = {
    name: '홍길동',
    age: 30,
    greeting : function(){
        console.log(`안녕 나는 ${this.name}이야`)
    },
    sayBye(){
        console.log('잘가라');
    }
}

console.log(person.name);
console.log(person.age);
console.log(person.greeting());
console.log(person.sayBye());

//2. new Object() 생성자 사용하기
//js의 내장 생성자인 Object를 호출해 빈 객체를 만든 뒤 프로퍼티를 추가하는 방식

const obj = new Object();
obj.x = 10; // 프로퍼티를 추가
obj.y = 20;

//3. 생성자 함수(Constructor Function)
function User(name, age){
    this.name = name;
    this.age = age;
}

const u1 = new User('Bob', 25);