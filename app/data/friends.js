// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [{
        name: "Ahmed",
        image: "FriendFinder/app/assets/images/ahmed.jpg",
        scoreArr: [1, 2, 4, 4, 5, 3, 4, 3, 2, 4]
    },
    {
        name: "Jessica",
        image: "FriendFinder/app/assets/images/jessica.jpg",
        scoreArr: [1, 1, 1, 3, 3, 5, 4, 5, 2, 4]
    },
    {
        name: "Frank",
        image: "FriendFinder/app/assets/images/frank.jpg",
        scoreArr: [2, 2, 3, 3, 3, 4, 1, 3, 5, 4],

    },
    {
        name: "Bill",
        image: "FriendFinder/app/assets/images/billGates.jpg",
        scoreArr: [2, 4, 5, 3, 4, 3, 4, 4, 2, 2, ]
    },
    {
        name: "Mila",
        image: "FriendFinder/app/assets/images/mila.jpg",
        scoreArr: [4, 4, 5, 3, 2, 3, 2, 4, 2, 2, ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;