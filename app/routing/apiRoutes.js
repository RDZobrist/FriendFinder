// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var friendsArr = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/survey", (req, res) => {
        res.json(friendsArr);
    });

    app.get("/api/friends", (req, res) => {
        res.json(friendsArr);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", (req, res) => {



        const newuserScoreArr = req.body.scoreArr;

        // get the length of user array, store that value in a constant variable
        const arrLength = friendsArr.length;

        var bestMatch = 0;
        var scoreCompareArr = [];

        for (let i = 0; i < arrLength; i++) {
            var scoresDiff = 0;
            for (let j = 0; j < newuserScoreArr.length; j++) {
                scoresDiff += parseInt(friendsArr[i].scoreArr[j]) - parseInt(newuserScoreArr[j]);

            }
            scoreCompareArr.push(scoresDiff);

        }

        //after all friends are compared, find best match
        for (let i = 0; i < scoreCompareArr.length; i++) {
            if (scoreCompareArr[i] <= scoreCompareArr[bestMatch]) {
                bestMatch = i;

            }
        }
        console.log("this is your best match: " + bestMatch);



        //return bestMatch data
        let bff = friendsArr[bestMatch];

        console.log(bff.image + " name " + bff.name);
        res.json(bff);



        //pushes new submission into the friendsList array
        friendsArr.push(req.body);


    });





};