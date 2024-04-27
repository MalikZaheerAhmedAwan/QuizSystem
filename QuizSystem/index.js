#! /usr/bin/cnv node 
import inquirer from "inquirer";
class QuizQA {
    question = "";
    answer = "";
}
let quizs = [
    { question: "How many bits make a byte?", answer: "8 bits" },
    { question: "Which technology is used to record cryptocurrency transactions?", answer: "Blockchain technology" },
    { question: "One of the advantages of information technology is ", answer: "Streamline communication" },
    { question: "The first computer virus was known as ", answer: "Creeper program" },
    { question: "What technology is used to make telephone calls over the Internet possible?", answer: "VoIP" },
    { question: "What is the full form of (CPU)?", answer: "Central Processing Unit" },
    { question: "Which component is often referred to as the 'brain' of the motherboard?", answer: "Processor" },
    { question: "Which of the items is an input device?", answer: "Keyboard" },
    { question: "The largest key on the Keyboard is ", answer: "Space bar" },
    { question: "The number of bits used by IPv6 address is ", answer: "128" },
];
let answerOptions = [
    ["16 bits", "8 bits", "24 bits", "12 bits"],
    ["Mining", "Digital wallet", "Blockchain technology", "Token"],
    ["Streamline communication", "Easy to handle", "Both a and b", "None"],
    ["Rabbit", "Elk cloner", "SCA virus", "Creeper program"],
    ["VoIP", "Bluetooth", "Ethernet", "All of the above"],
    ["Central Processing Unit", "Critical Processing Unit", "Crucial Processing Unit", "Central Printing Unit"],
    ["Processor", "Bios", "Computer Chip", "Transistor"],
    ["Computer Monitor", "Keyboard", "Display Board", "Overhead Projector"],
    ["Shift", "Space bar", "Escape", "Tab"],
    ["16", "32", "64", "128"]
];
let questionAnswers = [];
let questionMarks = 10;
let answerMarks = 0;
let repeat = true;
while (repeat == true) {
    console.log("*********** Quiz System ***********");
    questionMarks = 10;
    answerMarks = 0;
    for (let n = 0; n < quizs.length; n++) {
        console.log(`\n(${n + 1}) ${quizs[n].question}`);
        console.log("\n");
        let selOpt = await inquirer.prompt([{ name: "Opt", type: "list", choices: answerOptions[n], message: "\t Please Select any Option ...." }]);
        questionAnswers.push(selOpt.Opt);
    }
    ;
    for (let m = 0; m < quizs.length; m++) {
        if (questionAnswers[m] == quizs[m].answer)
            answerMarks++;
    }
    console.log("\n");
    console.log(`You are obtained ${answerMarks} out of ${questionMarks} marks.`);
    let percentage = (answerMarks / questionMarks) * 100;
    console.log(`Your percentage is ${percentage} .`);
    let ans = await inquirer.prompt([{ name: "isContinue", type: "confirm", message: "Do You Want to Contine ...... (y/n): ",
            default: "true" }
    ]);
    repeat = ans.isContinue;
}
