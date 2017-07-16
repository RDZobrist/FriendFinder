// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [{
        name: "Ahmed",
        image: "",
        profileScoreArr: [1, 2, 4, 4, 5, 3, 4, 3, 2, 4]
    },
    {
        name: "Jessica",
        image: "",
        profileScoreArr: [1, 1, 1, 3, 3, 5, 4, 5, 2, 4]
    },
    {
        name: "Frank",
        image: "",
        profileScoreArr: [2, 2, 3, 3, 3, 4, 1, 3, 5, 4],

    },
    {
        name: "Markus",
        image: "",
        profileScoreArr: [2, 4, 5, 3, 4, 3, 4, 4, 2, 2, ]
    },
    {
        name: "Mila",
        image: "",
        profileScoreArr: [4, 4, 5, 3, 2, 3, 2, 4, 2, 2, ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;