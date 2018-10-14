const husbend = require('./husband').hus;

const fs = require("fs");
const salaryStr = husbend.mySalary();
const myFriendsStr = husbend.myFriends();
const mySoberStr = husbend.mySober();
fs.appendFile("logFile.txt", salaryStr, function (err) {
    if (err) {
        throw err;
    }
    console.log("SALARY IS ADDED");
});

fs.appendFile("logFile.txt", myFriendsStr, function (err) {
    if (err) {
        throw err;
    }
    console.log("FRIENDS IS ADDED");
});

fs.appendFile("logFile.txt", mySoberStr, function (err) {
    if (err) {
        throw err;
    }
    console.log("SOBER IS ADDED");
});

console.log("SUCCESS!");