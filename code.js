let BirthdayBoy;
let savedText = [];
let myDate = new Date();
// let myDate = new Date(2024, 1, 29);

const text = document.querySelector(".sitetext")

// jag skrev inte det här
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