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

const math = function(makeItem, gauge) {
        
    let patternInfo = {};

    switch(makeItem) {
        case 'Scarf':
            let castOn = 8*gauge;
            let rows = 60*gauge;
            patternInfo = {...patternInfo, "castOn": castOn, "rows": rows};
            break;
        default:
            console.log("Error, please choose a valid item to make");
    };

    return patternInfo;
};


// scarf measurements = 8x60
// console.log(stsPerFourInch["Lace[0]"]/4)

inquirer.prompt(questions).then((answer) => {
    let { yarnWeight, makeItem, craft } = answer; // destructure answer object
    let gauge = stsPerInch[yarnWeight]; // find the gauge associated with chosen yarnWeight
    let patternInfo = math(makeItem, gauge);
    console.log(`You are ${craft}ing a ${makeItem} in ${yarnWeight} weight yarn. Cast on ${patternInfo.castOn} stitches and work for ${patternInfo.rows} rows.`);
});
