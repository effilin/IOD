import friends from "../models/friends.js";

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

const idDynamic = (req, res) => {
    let friendId = req.params.id; // 'id' here will be a value matching anything after the / in the request path
    
    // Modify this function to find and return the friend matching the given ID, or a 404 if not found
    const idsCurrent = friends.map((person) => (person.id));
    
  if(idsCurrent.includes(parseInt(friendId))) { 
    res.status(200).json({result: friends.filter((person) => person.id == friendId)})
  } else {
  res.status(404).json({result: `user ${friendId} not found`})
}}

const newFriend = (req, res) => {
    let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
    console.log(newFriend) // 'body' will now be an object containing data sent via the request body

    // we can add some validation here to make sure the new friend object matches the right pattern
    if (!newFriend.name || !newFriend.gender) {
        res.status(500).json({error: 'Friend object must contain a name and gender'});
        return;
    }
    else if (!newFriend.id) {
        newFriend.id = friends.length + 1; // generate an ID if one is not present
    }

    // if the new friend is valid, add them to the list and return the successfully added object
    friends.push(newFriend)
    res.status(200).json(newFriend)
}

const updateMe = (req, res) => {
    let friendId = req.params.id;
    let updatedFriend = req.body;


    if(friends.includes(parseInt(friendId))) { 
        //const result = friends.filter((person) => person.id == friendId)
        friends.push(updatedFriend);

    res.json({result: 'Updated friend with ID ' + friendId, data: updatedFriend})
    }
}

export default { filter, info, idDynamic, newFriend, updateMe}