const inquirer = require("inquirer");
const questions = require('./prompts');

const stsPerFourInch = {
    'Lace[0]': 36, 
    'Fingering[1]': 30, 
    'Sport[2]': 24, 
    'DK[3]': 22, 
    'Worsted[4]': 18, 
    'Bulky[5]': 14, 
    'Super Bulky[6]': 8
};

const stsPerInch = {
    'Lace[0]': 9, 
    'Fingering[1]': 7.5, 
    'Sport[2]': 6, 
    'DK[3]': 5.5, 
    'Worsted[4]': 4, 
    'Bulky[5]': 3, 
    'Super Bulky[6]': 2
};

//--------------------- MATH FUNCTION TAKES IN INQUIRER RESPONSE AND PASSES INFO TO SWITCH CASE, DETERMINING BASIC PATTERN INFO -------------- //
const math = function(makeItem, gauge, ...params) {
    let patternInfo = {};

    switch(makeItem) {
        case 'Scarf':
            patternInfo = {...patternInfo, "castOn": 8*gauge, "rows": 60*gauge};
            break;
        case 'Adult Hat': 
            patternInfo = {...patternInfo, "castOn": 20*gauge, "rows": 8*gauge};
            break;
        case 'Use my own measurements':
            let width = params[0];
            let length = params[1];
            patternInfo = {...patternInfo, "castOn": width*gauge, "rows": length*gauge};
            break;
        default:
            console.log("Error, please choose a valid item to make");
    };

    return patternInfo;
};

//-------------------- DECREASE FUNCTION DETERMINES DECREASES IN HAT PATTERN -------------------------//
const decreases = function(sts) {
    let numOfDecrease = 6;
    let freqOfDecrease = sts/numOfDecrease;
    // k10(1-10), k2tog(11/12), k10(13-22), k2tog(23/24), k10(34), k2tog(34/35), k10(45), k2tog(45/46), k10(56), k2tog(57/58), k2(60) 
    let rowDec = numOfDecrease-1;
    let remainder = (sts-rowDec)-(freqOfDecrease*rowDec);
    const decString = `(Knit ${freqOfDecrease} stitches, k2tog) ${numOfDecrease} times. K ${remainder} sts. Repeat until you have ${numOfDecrease-1} sts left. Pass yarn through remaining live stitches and fasten off.`;

    let info = {
        'remainder': remainder,
        'numOfDecrease': numOfDecrease,
        'freqOfDecrease': freqOfDecrease,
        'rowDec': rowDec
    }
    console.log(info);
}

console.log(decreases(60));

// scarf measurements = 8x60
// console.log(stsPerFourInch["Lace[0]"]/4)

// inquirer.prompt(questions).then((answer) => {
//     console.log(answer);
//     let { yarnWeight, makeItem, craft } = answer; // destructure answer object

//     // determine which way we are figuring out gauge:
//     let gauge;
//     if (yarnWeight) {gauge = stsPerInch[yarnWeight];} // find the gauge associated with chosen yarnWeight
//     else {
//         gauge = answer.userStsPerInch
//     }
//     // if (answer.userStsPerInch && answer.userRowsPerInch) {gauge = answer.userStsPerInch};

//     let patternInfo;
//     if (answer.userWidth && answer.userLength) {
//         patternInfo = math(makeItem, gauge, answer.userWidth, answer.userLength)
//     } else {
//         patternInfo = math(makeItem, gauge);
//         if (makeItem === 'Adult Hat') {
//             // do some math to figure out decreases and add it to the pattern info
//             patternInfo = {...patternInfo, "decreases": decreases(patternInfo.castOn)};
//         }
//     }

//     console.log(patternInfo);

//     // conditional output based on how we are getting gauge
//     if (yarnWeight) {
//         console.log(`You are ${craft}ing a ${makeItem} in ${yarnWeight} weight yarn. Cast on ${patternInfo.castOn} stitches and work for ${patternInfo.rows} rows.`);     
//     } else {
//         console.log(`You are ${craft}ing a ${makeItem} at gauge ${answer.userStsPerInch} stitches per inch. Cast on ${patternInfo.castOn} stitches and work for ${patternInfo.rows} rows.`);     
//     }
// });
