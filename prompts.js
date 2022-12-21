module.exports = [
    {
        // determines how we get gauge for pattern info
        name: 'confirmGauge',
        type: 'rawlist',
        message: "Would you like to input your gauge or select a yarn weight?",
        choices: ['Use my own gauge', 'Select a yarn weight'],
        // default: 1,
    },
    {
        // if user does not have their own gauge, this question will run
        type: 'rawlist',
        choices: ['Lace[0]', 'Fingering[1]', 'Sport[2]', 'DK[3]', 'Worsted[4]', 'Bulky[5]', 'Super Bulky[6]'],
        message: "What weight of yarn would you like to use?",
        name: 'yarnWeight',
        when: ({ confirmGauge }) => {
            if (confirmGauge === 'Select a yarn weight') {
                return true;
            } else {
                return false;
            }
        } 
    },
    {
        // if user DOES have their own gauge, this question will run
        type: 'number',
        message: "How many stitches per inch?",
        name: 'userStsPerInch',
        when: ({ confirmGauge }) => {
            if (confirmGauge === 'Use my own gauge') {
                return true;
            } else {
                return false;
            }
        } 
    },
    {
        // if user DOES have their own gauge, this question will run
        type: 'number',
        message: "How many rows per inch?",
        name: 'userRowsPerInch',
        when: ({ confirmGauge }) => {
            if (confirmGauge === 'Use my own gauge') {
                return true;
            } else {
                return false;
            }
        } 
    },
    {
        type: 'rawlist',
        choices: ["Adult Hat", 'Scarf', 'Use my own measurements'],
        message: "What would you like to make?",
        name: "makeItem"
    },
    {
        type: 'number',
        message: 'Enter the desired width (inches):',
        name: 'userWidth',
        when: ({ makeItem }) => {
            if (makeItem === 'Use my own measurements') {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'number',
        message: 'Enter the desired length (inches):',
        name: 'userLength',
        when: ({ makeItem }) => {
            if (makeItem === 'Use my own measurements') {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'rawlist',
        choices: ["Knit", "Crochet"],
        message: "Are you knitting or crocheting?",
        name: 'craft'
    },
];