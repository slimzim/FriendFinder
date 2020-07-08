var friendsArray = require("../data/friends.js")

var api = {
    showFriends: function(req, res){
        return res.json(friendsArray)
    },
    newFriend: function(req, res){
        var newFriend = req.body
        var bestMatch = compareFriends(newFriend)
        res.json(bestMatch)
    }
}

// COMPARISON LOGIC =====================================================================

function compareFriends(userData) {

    var totalDifference = 0
    var bestMatchValue = 0
    var bestMatchIndex = 0

    // for loop running through the friendsArray
    for (var i=0; i<friendsArray.length; i++){
        // for loop running through the scores array of each friend
        for (var j=0; j<friendsArray[i].scores.length; j++){
            // at each index, the absolute value of the difference is cacluated and added to
            // the totalDifference variable
            var indexDiff = Math.abs(friendsArray[i].scores[j] - userData.scores[j])
            totalDifference += indexDiff
            
             // after the outer for loop finishes comparing the scores array...
             if (j+1 === friendsArray[i].scores.length) {
                 // we set the first friend to the best match by default 
                if (i === 0) {
                    bestMatchValue = totalDifference
                    // we keep track of the best match's index in the friendsArray
                    bestMatchIndex = i                   
                } 
                // if any subsequent friends are more similar...
                else if (totalDifference < bestMatchValue) {
                    // they becomes the best match, and their index is stored
                    bestMatchValue = totalDifference
                    bestMatchIndex = i    
                } 
                // totalDifference is reset for the next friend
                totalDifference = 0
                }
                
            }
            
        }
        // when the original for loop finishes, the function returns all of the friend's data by 
        // referring to that friend's index in the friendsArray
        return friendsArray[bestMatchIndex]
    }

// ======================================================================================

module.exports = api