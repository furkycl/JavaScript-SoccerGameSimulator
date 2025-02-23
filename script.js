function changeHometeamname() {
    let teamHomevar = document.getElementById("teamHome").innerHTML;
    let teamHomenewvar = prompt("için yeni bir değer giriniz.","Örn:Galatasaray");
    if (teamHomenewvar === "") {
        teamHomenewvar = prompt("Boş olmayan bir isim giriniz.");
    }
    document.getElementById("teamHome").innerHTML = teamHomenewvar;
}

function changeAwayteamname() {
    let teamAwayvar = document.getElementById("teamAway").innerHTML;
    let NewAwaynewvar = prompt("için yeni bir değer giriniz.","Örn:Galatasaray");
    if (NewAwaynewvar === "") {
        NewAwaynewvar = prompt("Boş olmayan bir isim giriniz.");
    }
    document.getElementById("teamAway").innerHTML = NewAwaynewvar;
}

function increasegoalHometeam() {
    let goalcounter = document.getElementById("scoreforTeamhome").innerHTML;
    goalcounter = +goalcounter;
    goalcounter = goalcounter + 1;
    document.getElementById("scoreforTeamhome").innerHTML = goalcounter; 
}

function decreasegoalHometeam() {
    let goalcounter = document.getElementById("scoreforTeamhome").innerHTML;
    goalcounter = +goalcounter;
    goalcounter = goalcounter - 1;
    if(goalcounter>-1) {
        document.getElementById("scoreforTeamhome").innerHTML = goalcounter;
    }
}

function enterforgoalNumberhometeam() {
    let goalcounter = document.getElementById("scoreforTeamhome").innerHTML;
    goalcounter = prompt("Gol sayısı giriniz");
    goalcounter=Number(goalcounter);
    if(isNaN(goalcounter)){
        alert("Sayı değeri giriniz. Örn:1,2,3,4,5!");
        goalcounter=0;
    }
    document.getElementById("scoreforTeamhome").innerHTML = goalcounter;
}

function increasegoalAwayteam() {
    let goalcounter = document.getElementById("scoreforTeamaway").innerHTML;
    goalcounter = +goalcounter;
    goalcounter = goalcounter + 1;
    document.getElementById("scoreforTeamaway").innerHTML = goalcounter;
}

function decreasegoalAwayteam() {
    let goalcounter = document.getElementById("scoreforTeamaway").innerHTML;
    goalcounter = +goalcounter ;
    goalcounter = goalcounter - 1;
    if(goalcounter>-1) {
        document.getElementById("scoreforTeamaway").innerHTML = goalcounter;
    }
}

function enterforgoalNumberawayteam() {
    let goalcounter = document.getElementById("scoreforTeamaway").innerHTML;
    goalcounter = prompt("Gol sayısı giriniz");
    if(isNaN(goalcounter)){
        alert("Sayı değeri giriniz. Örn:1,2,3,4,5!");
        goalcounter=0;
    }
    document.getElementById("scoreforTeamaway").innerHTML = goalcounter;
}

function isNumber(value) {
    return !isNaN(Number(value));
  }