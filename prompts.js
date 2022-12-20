module.exports = [
    {
        type: 'rawlist',
        choices: ['Lace[0]', 'Fingering[1]', 'Sport[2]', 'DK[3]', 'Worsted[4]', 'Bulky[5]', 'Super Bulky[6]'],
        message: "What weight of yarn would you like to use?",
        name: 'yarnWeight',
    },
    {
        type: 'rawlist',
        choices: ["Adult Hat", 'Scarf'],
        message: "What would you like to make?",
        name: "makeItem"
    },
    {
        type: 'rawlist',
        choices: ["Knit", "Crochet"],
        message: "Are you knitting or crocheting?",
        name: 'craft'
    }
];