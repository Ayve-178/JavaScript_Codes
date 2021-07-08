//'this' কীওয়ার্ডটি জাভাস্ক্রীপ্টে আছে কেন?
//এটা একটা ফাংশনকে different context এ reuse করতে সাহায্য করে।

//'this' কীওয়ার্ড ব্যবহারের ৪ টি নিয়মঃ
//implicit binding
//explicit binding
//new binding
//window binding

//-------------------------------------------------------------------------------------------

//implicit binding

var shakib = {
    name: 'Shakib',
    age: 35,
    printPlayerName: function() {
        console.log(this.name);
    }
}

//shakib.printPlayerName();           //Shakib

//implicit binding এর রুল হচ্ছে, দুইটা জিনিস দেখতে হবে।
//১।। ফাংশনটি কোথায় কল হয়েছে...
//২।। যেখানে কল হয়েছে, তার আগে কি কোনো ডট নোটেশন আছে। যদি থাকে তাহলে ডট নোটেশনের ঠিক বামপাশে যেই অবজেক্ট আছে সেটাই 'this'. Otherwise, this will be equal to window object.
//Exception: It works only for normal function. Not for arrow function.

//Example 2:

var printPlayerNameFunction = function(obj) {
    obj.printPlayerNameNew = function() {
        console.log(this.name);
    }
};

var shakib = {
    name: 'Shakib',
    age: 35
};

var tamim = {
    name: 'Tamim',
    age: 32
};

printPlayerNameFunction(shakib);
printPlayerNameFunction(tamim);

shakib.printPlayerNameNew();         //Shakib
tamim.printPlayerNameNew();          //Tamim

//Example 3:

var Person = function(name, age) {
    return{
        name: name,
        age: age,
        printName: function () {
            console.log(this.name);
        }
    }
};

var shakib = Person('Shakib', 35);
shakib.printName();         //Shakib

//Example 4:
var NewPerson = function(name, occupathion) {
    return {
        name: name,
        occupathion: occupathion,
        father: {
            name: 'Mr. XXX',
            occupathion: 'Businessman',
            printName: function() {
                console.log(this.name);
            }
        }
    }
};

var ayve = NewPerson('Ayve', 'Student');
ayve.father.printName();           //Mr. XXX

//---------------------------------------------------------------------------

//explicit binding

var printName = function() {
    console.log(this.name);
};

var mash = {
    name: 'Mashrafe',
    age: 38,
};

//আমরা চাচ্ছি mash অবজেক্টটি((অথবা প্রোগ্রামের অন্য যেকোনো অব্জেক্ট) যেন printName গ্লোবাল ফাংশনটি ব্যবহার করতে পারে।

//printName.call(mash);     //Mashrafe

//function.call(অবজেক্ট (কোন অব্জেক্ট দিয়ে ফাংশনটা কল করতে চাচ্ছি), )
//অর্থাৎ, আমরা explicitly বলে দিচ্ছি ওই ফাংশনের মধ্যে this কে হবে।

var printCharacterstics = function(v1, v2, v3) {
    console.log(`${this.name} is ${v1}, ${v2} and ${v3}`);
}

var v1 = 'Handsome';
var v2 = 'Bowler';
var v3 = 'Best Captain';

printCharacterstics.call(mash, v1, v2, v3);    //Mashrafe is Handsome, Bowler and Best Captain

//function.call() এর মধ্যে আমরা অবজেক্টের পরে প্রয়োজন হলে অন্য প্যারামিটারও পাঠাতে পারি।
//আবার এভাবে একটা একটা না পাঠিয়ে আমরা সবগুলো একসাথে array আকারেও পাঠাতে পারি।

var v = [v1, v2, v3];

printCharacterstics.apply(mash, v);     //Mashrafe is Handsome, Bowler and Best Captain

//function.bind() -> এটা .call() এর মতই কাজ করে, তবে এটা ফাংশনকে ডিরেক্ট কল করে না। ফাংশনের একটা ইন্সট্যান্স রিটার্ন করে।

var myfunc = printCharacterstics.bind(mash, v1, v2, v3);
//printCharacterstics এর ইন্সট্যান্স myfunc এর মধ্যে সেভ হয়েছে।

myfunc();               //Mashrafe is Handsome, Bowler and Best Captain

//----------------------------------------------------------------------------------------------------

//new binding

function Student(name, age) {
    //let this = Object.create(null);             //JS created a object by default And 'this' is for that object.
    this.name = name;
    this.age = age;
    console.log(`${this.name} is ${this.age} years old.`);
    //return this;                       //(by default)
}

var arshia = new Student('Arshia', 30);         //Arshia is 30 years old.

//Here Student is a constructor function.

//-----------------------------------------------------------------------------------------------------------

//window binding

var printNewName = function() {
    //console.log(this);      //Window
    console.log(window === this);    //true
    console.log(this.name);
};

var aroti = {
    name: 'Aroti',
};
//আমরা চাচ্ছি aroti দিয়ে printNewName ফাংশনটি কল করতে।
printNewName();             //undefined

//উপরের ৩ টার কোনোটাই না হলে অথবা ফাংশনটি Arrow function না হলে, JavaScript এ, এটা window কে point করে।

//এই weird ব্যবহার থেকে মুক্তি পেতে হলে আমাদেরকে সবার উপরে 'use strict' লিখতে হবে। তাহলে সেক্ষেত্রে কোড আমাদের এরর দিবে।

'use strict';

var printNewName1 = function() {
    console.log(this.name);         //error
};

//বি দ্রঃ Arrow function সকল 'this' কেই window হিসাবে ধরে।
