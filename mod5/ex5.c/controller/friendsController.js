const filter =(req, res) => {
    console.log(req.query)
    let filterGender = req.query.gender;
    let filterLetter = req.query.letter;
    let matchingFriends = [...friends];

    if (filterGender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender == filterGender)
    }
    if(filterLetter) {
        matchingFriends = matchingFriends.filter(friend => friend.name[0].toUpperCase == filterLetter)
    }
    
    if (matchingFriends.length > 0) {
        // return valid data when the gender matches 
        res.status(200).json(matchingFriends)
    } else {
        // and an error response when there are no matches
        res.status(404).json({error: `No friends matching gender ${filterGender} or letter ${filterLetter}`})
    }  
}

const info =(req, res) => {
    console.log(req.headers)
    const userAgent = req.headers["user-agent"];
    const contentType = req.headers["content-type"];
    const acceptHead = req.headers['accept'];

    res.json({userAgent, contentType, acceptHead});  
}