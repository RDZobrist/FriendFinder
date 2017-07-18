// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [{
        name: "Ahmed",
        image: "",
        scoreArr: [1, 2, 4, 4, 5, 3, 4, 3, 2, 4]
    },
    {
        name: "Jessica",
        image: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwi0hr2e8Y7VAhVR5GMKHUrvCqkQjRwIBw&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AAnother_very_pretty_girl.jpg&psig=AFQjCNHWp0hoZEOuk15reaeQPNjYSIMi9w&ust=1500331669723763",
        scoreArr: [1, 1, 1, 3, 3, 5, 4, 5, 2, 4]
    },
    {
        name: "Frank",
        image: "",
        scoreArr: [2, 2, 3, 3, 3, 4, 1, 3, 5, 4],

    },
    {
        name: "Markus",
        image: "",
        scoreArr: [2, 4, 5, 3, 4, 3, 4, 4, 2, 2, ]
    },
    {
        name: "Mila",
        image: "",
        scoreArr: [4, 4, 5, 3, 2, 3, 2, 4, 2, 2, ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;