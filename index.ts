


// 32.	Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

const current_users:Array<string>=["user1","user2","user3","usere4","admin"]

let new_users:string[]=[...current_users];


console.log(new_users);

current_users.push("user5")



for(let i=0; i<new_users.length; i++)
{
    
if(new_users[i]==="user1" && new_users[i]==="USER1"||
new_users[i]==="user2"&& new_users[i]==="USER2"||
new_users[i]==="user3" && new_users[i]==="USER3"||
new_users[i]==="user4" && new_users[i]==="USER4"||
new_users[i]==="user5"&& new_users[i]==="USER5"
){

    console.log("username already exist enter new username")
    
}
else {
    console.log("username available")
}
}







for(let i=0; i<new_users.length; i++)
{
    
if(new_users[i].includes(new_users[i].toLowerCase())||new_users[i].includes(new_users[i].toUpperCase())){

    console.log("username already exist enter new username")
   
}
else {
    continue;
    console.log("username available")
}
}