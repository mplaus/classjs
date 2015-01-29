//sample js file

x = 10; //this is a variable
userName = "Matt"; //string


 teams = new Array();
 teams = ["Panthers", "Seahawks", "Patriots"];
 
 wins = [8,12,11];
 losses= [6,2,3];
 
 console.log(teams);
 console.log("Wins: " + wins);
 console.log("Losses; " + losses);
 
console.log(teams[0]);

console.log(teams.length)

document.write("The " + teams[0] + " had " + wins[0] + " wins.");
document.write(" There are " + teams.length + " teams" + " in this array.")
 
 //for(var i=0 says what to start at; i<2  the amount of times it should run; i+1 or i++ increments of one)
 
 for (var i=0; i<teams.length; i++) {
    console.log(teams[i]);
    document.write(" The " + teams[i] + " had " + wins[i] + " wins.");
    if (x==10){
    console.log("true");
 }
 else{
    console.log("false");
 }
 
 if (wins[i]>=10) {
    document.write(" The " + teams[i] + " are a good team.");
 }
 else{
    document.write(" The " + teams[i] + " are a bad team.");
 }
 }
 
 
 