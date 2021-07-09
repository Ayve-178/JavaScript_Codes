//Asynchronous JavaScript

//জাভাস্ক্রিপ্ট by nature একসাথে একাধিক কাজ করতে পারে না, কেবল একটা অপারেশনই রান করতে পারে। এজন্য জাভাস্ক্রিপ্টকে বলা হয় single threaded programming language.
//single threaded programming language - এটাকে একটা রেস্টুরেন্ট এর সিনারিও এর সাথে তুলনা করা যায়। ধরা যাক একটি রেস্টুরেন্টে দুইটা টেবিল আছে, দুইটা টেবিলে দুইজন কাস্টোমার আছে, কিন্তু ওয়েটার একজন। এক্ষেত্র ওয়েটার প্রথমে টেবিল-১ এ গিয়ে অর্ডার নিবে, এবং কিচেনে গিয়ে খাবার রেডি না হওয়া পর্যন্ত ব্লকড থাকবে। ফাইনালি খাবার রেডি হয়ে গেলে টেবিল-১ এ সার্ভ করে ফ্রি হবে এবং তারপর টেবিল-২ এ যাবে। জাভাস্ক্রিপ্টের ভাষায় এই টেবিলগুলো ইউজার এবং ওয়েটারটি থ্রেড। এজন্য এটাকে single threaded বলা হয়।
//জাভাস্ক্রিপ্টের এই ধরনের behaviour কে বলা হয় Synchronous Blocking Behaviour.

/*const processOrder = (customer) => {
    console.log(`Processing order for customer 1`);

    var currentTime = new Date().getTime();
    while(currentTime + 3000 >= new Date().getTime());   //will wait for 3 seconds

    console.log(`Order processed for customer 1`);
};

console.log(`Take order for customer 1`);
processOrder();
console.log(`Completed order for customer 1`);
*/

//এজন্যই Asynchrounous জাভাস্ক্রিপ্টের প্রয়োজন.
/*
const processOrder = (customer) => {
    console.log(`Processing order for customer 1`);

    setTimeout(() => {
        console.log(`Cooking completed!`);
    }, 3000);

    console.log(`Order processed for customer 1`);
};

console.log(`Take order for customer 1`);
processOrder();
console.log(`Completed order for customer 1`);
*/

//এক্ষেত্রে জাভাস্ক্রিপ্ট জানে যে setTimeout() একটি বিল্ট ইন Asynchrounous ফাংশন। এজন্য সে এর ভিতরের স্টেট্মেন্টগুলোকে প্রথমে web api তে পাঠাবে এবং নির্দিষ্ট সময় পর সেটাকে callback queue পাঠাবে। এর মধ্যে কোডের বাকি অংশগুলোও রান হতে থাকবে।
//কিন্তু এখানে কোডের এক্সিকিউশনের উপর আমাদের কোনো কন্ট্রোল থাকছে না, যেটা একটা বড় ধরনের সমস্যা। 

/*
const takeOrder = (customer, callback) => {
    console.log(`Take order for ${customer}`);
    callback(customer);
};

const processOrder = (customer, callback) => {
    console.log(`Processing Order for ${customer}`);

    setTimeout(() => {
        console.log(`Cooking completed!`);
        console.log(`Order processed for ${customer}`);
        callback(customer);
    }, 3000);
};

const completeOrder = (customer) => {
    console.log(`Completed order for ${customer}`);
};

takeOrder('Customer 1', (customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer);
    });
});

takeOrder('Customer 2', (customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer);
    });
}); 
*/

//কিন্তু callback() ফাংশন ব্যবহারের অসুবিধা হচ্ছে, Multiple task এর ক্ষেত্রে অনেকগুলো ফাংশন একসাথে কল করায় কোড readable থাকে না। একটার পর একটা callback() ব্যবহার করায় যে Nested callback create হয় সেটাকে বলা হয় callback hell, এটা থেকে সমাধানের জন্য ব্যবহার করা হয় promise (One of the most important topic of JS).

//Promise
//Promise হল কিছু একটা করার promise, যদি কন্ডিশন ট্রু হয়, আর ট্রু না হলে প্রমিস ফেইল্ড।
//JS এ যদি কোনো promise রাখা হয় তাহলে বলা হয় promise has been resolved, অন্যথায়, promise has been rejected.

/*
const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting) {
        const MeetingDetails = {
            name: 'Technical Meeting',
            location: 'Google meet',
            time: '10:00 PM',
        };
        resolve(MeetingDetails);
    } else {
        reject(new Error('Meeting alredy scheduled'));
    }
});

//এভাবে promise create করতে হয়। Promise ব্যবহার করতে আমরা দুইটা জিনিস চেইন করব, .then() [যদি resolve হয়], .catch()[যদি reject হয়].

// const addToCalendar = (MeetingDetails) => {
//     return new Promise((resolve, reject) => {
//         const calendar = `${MeetingDetails.name} has been scheduled on ${MeetingDetails.location} at ${MeetingDetails.time}`;
//         resolve(calendar);
//     });
// }

const addToCalendar = (MeetingDetails) => {
    const calendar = `${MeetingDetails.name} has been scheduled on ${MeetingDetails.location} at ${MeetingDetails.time}`;
    return Promise.resolve(calendar);   
}
//same thing

meeting
    .then(addToCalendar)
    .then((res) => {
        //reseolved data
        console.log(res);      // Technical Meeting has been scheduled on Google meet at 10:00 PM
    })
    .catch((err) => {
        //rejected data
        console.log(err.message);
    })

    */

//সবগুলো .then() এর এরর হ্যান্ডলিং আমরা একটিমাত্র .catch() দিয়ে করতে পারি।
//এক্ষেত্রে একটার পর একটা প্রমিস রিসল্ভ হচ্ছে। কিন্তু অনেক সময় আমাদের এমন সিচুয়েশনের প্রয়োজন হতে পারে যে আমরা সবগুলো প্রমিসকে একসাথে রান করব এবং শেষে গিয়ে সবগুলোর রেজাল্ট একবারে পাব। 

const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 2 resolved`);
    }, 2000);
});

//promise1.then((res) => console.log(res));
//promise2.then((res) => console.log(res));

//এখানে একটা promise resolve হয়ে ২ সেকেন্ড পর দ্বিতীয় promise resolve হচ্ছে। কিন্তু আমরা চাচ্ছি দুইটা promise একসাথে শুরু হবে এবং ফাইনালি একটা রেজাল্ট রিটার্ন করবে।

// Promise.all([promise1, promise2])
//     .then((res) => {
//         console.log(res);              //[ 'Promise 1 resolved', 'Promise 2 resolved' ]  //After 2 seconds
//     });

// Promise.race([promise1, promise2])
//     .then((res) => {
//         console.log(res);              //Promise 1 resolved
//     });

//দুইটা প্রমিসের মধ্যে রেস হবে। যে আগে রিসল্ভ হবে, তার রেসাল্ট দিয়ে দিবে।
//এভাবে পরপর অনেকগুলো .then() use করাও বেশ সমস্যাজনক।। এর সমাধান হলো Async await।

//Async await

// function friendlyFunction() {
//     return `Hello`;
// }
//console.log(friendlyFunction());       //Hello

//এটা একটা synchronous ফাংশন। এটাকে asynchronous বানাতে হলে নামের আগে একটা async বসিয়ে দিলেই হবে। এক্ষেত্র এরর হ্যান্ডলিং try catch দিয়ে করতে হবে।


// async function friendlyFunction() {
//     return `Hello`;
// }

// console.log(friendlyFunction());  //Promise { 'Hello' }
//-------------------------------------------------------------

const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting) {
        const MeetingDetails = {
            name: 'Technical Meeting',
            location: 'Google meet',
            time: '10:00 PM',
        };
        resolve(MeetingDetails);
    } else {
        reject(new Error('Meeting alredy scheduled'));
    }
});


const addToCalendar = (MeetingDetails) => {
    const calendar = `${MeetingDetails.name} has been scheduled on ${MeetingDetails.location} at ${MeetingDetails.time}`;
    return Promise.resolve(calendar);   
}
    
async function myMeeting() {
    try {
        const meetingDetails = await meeting;
        const calendar = await addToCalendar(meetingDetails);
        console.log(calendar);
    } catch {
        console.log(`Something wrong happened!`);
    }
}

myMeeting();                  //Technical Meeting has been scheduled on Google meet at 10:00 PM


