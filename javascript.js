
function saveJournal() {

    var text;

    text = document.getElementById("journalInput").value;

    if (text == "") {

        alert("Please write something");

    }

    else {

        var newItem;

        newItem = document.createElement("li");

        newItem.innerHTML = text;

        document.getElementById("journalList").appendChild(newItem);

        document.getElementById("journalInput").value = "";
    }
}

function clearJournal() {

    document.getElementById("journalList").innerHTML = "";
}

function setMood(mood) {

    document.getElementById("moodResult").innerHTML =
    "Your mood is " + mood;
}

function startBreathing() {

    document.getElementById("breathText").innerHTML =
    "Breathe In";

    document.getElementById("circle").style.transform =
    "scale(1.5)";

    setTimeout(changeBreath, 2000);
}

function changeBreath() {

    document.getElementById("breathText").innerHTML =
    "Breathe Out";

    document.getElementById("circle").style.transform =
    "scale(1)";
}

document.getElementById("primaryCTA").onclick = function () {

    location.href = "#journal";
};

document.getElementById("secondaryCTA").onclick = function () {

    location.href = "#mood";
};