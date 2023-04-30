let BirthdayBoy;
let savedText = [];
let myDate = new Date();
// let myDate = new Date(2023, 4, 5); // Det här är för att testa olika datum

const text = document.querySelector(".sitetext")

// jag skrev inte rawFile delen
let allText;
var rawFile = new XMLHttpRequest();
rawFile.open("GET", "birthdaylist.txt", false);
rawFile.onreadystatechange = function () {
    allText = rawFile.responseText.split("\n");
}
rawFile.send(null);

for (let i = 0; i < allText.length; i++) {
    let BirthdayInfo = allText[i].split(" ");
    if (BirthdayInfo[0] == myDate.getMonth() && BirthdayInfo[1] == myDate.getDate()) {
        BirthdayBoy = BirthdayInfo[2].replaceAll("_", "\n ");
        break;
    }
    else {
        BirthdayBoy = "Nobody";
    }
}

text.innerHTML = BirthdayBoy