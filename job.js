let currentTab = "all";

const activeTab = ["bg-navy", "border-navy", "text-white"];

const sectionAll = document.getElementById("sectionAll");
const sectionInterview = document.getElementById("sectionInterview");
const sectionReject = document.getElementById("sectionReject");

const totalAll = document.getElementById("totalAll");
const totalInterview = document.getElementById("totalInterview");
const totalRejected = document.getElementById("totalRejected");

const available = document.getElementById("available");
const empty = document.getElementById("empty");

totalAll.innerText = sectionAll.children.length;
totalInterview.innerText = sectionInterview.children.length;
totalRejected.innerText = sectionReject.children.length;

function changingTabs(tab) {
    const tabs = ["all", "interview", "rejected"];
    const sections = [sectionAll, sectionInterview, sectionReject];
    currentTab = tab;

    for (const item of tabs) {
        const tabNames = document.getElementById("type-" + item);
        if (item === tab) {
            tabNames.classList.add(...activeTab);
        } else {
            tabNames.classList.remove(...activeTab);
        }
    }

    for (const section of sections) {
        section.classList.add("hidden");
    }

    if (tab === "all") {
        sectionAll.classList.remove("hidden");
    } else if (tab === "interview") {
        sectionInterview.classList.remove("hidden");
    } else if (tab === "rejected") {
        sectionReject.classList.remove("hidden");
    }

    count();

    let activeSection;
    if (currentTab === "all") activeSection = sectionAll;
    else if (currentTab === "interview") activeSection = sectionInterview;
    else activeSection = sectionReject;

    if (activeSection.children.length === 0) {
        empty.classList.remove("hidden");
    } else {
        empty.classList.add("hidden");
    }
}

document.getElementById("cards").addEventListener("click", function(events) {
    const clickedElement = events.target;
    const card = clickedElement.closest(".card");
    const status = card.querySelector(".status");
    const cardSection = card.parentNode;

    if (clickedElement.classList.contains("inter")) {
        sectionInterview.appendChild(card);
        status.innerText = "Interviewed";
        count();
    }
    if (clickedElement.classList.contains("rej")) {
        sectionReject.appendChild(card);
        status.innerText = "Rejected";
        count();
    }
    if (clickedElement.classList.contains("del")) {
        cardSection.removeChild(card);
        count();
    }
});

function count() {
    totalAll.innerText = sectionAll.children.length;
    totalInterview.innerText = sectionInterview.children.length;
    totalRejected.innerText = sectionReject.children.length;

    if (currentTab === "all") {
        available.innerText = sectionAll.children.length;
    }
    if (currentTab === "interview") {
        available.innerText = sectionInterview.children.length;
    }
    if (currentTab === "rejected") {
        available.innerText = sectionReject.children.length;
    }
}
changingTabs(currentTab);
count();