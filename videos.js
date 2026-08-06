const folder = new URLSearchParams(window.location.search).get("folder");

const title = document.getElementById("title");
const container = document.getElementById("videoContainer");

if (!folder || !title || !container) {
    console.error("Required elements not found.");
} else {

    title.textContent =
        folder.charAt(0).toUpperCase() + folder.slice(1) + " Memories ❤️";

    const videos = {

        amma: [
            "videos/amma/amma2.mp4",
            "videos/amma/amma1.mp4"
        ],

        appa: [
            "videos/appa/appa2.mp4",
            "videos/appa/appa1.mp4"
        ],

        anna1: [
            "videos/anna1/anna12.mp4",
            "videos/anna1/anna11.mp4"
        ],

        anna2: [
            "videos/anna2/anna22.mp4",
            "videos/anna2/anna21.mp4"
        ],

        akka: [
            "videos/akka/akka5.mp4",
            "videos/akka/akka4.mp4",
            "videos/akka/akka3.mp4",
            "videos/akka/akka2.mp4",
            "videos/akka/akka1.mp4"
        ],

        anni: [
            "videos/anni/anni2.mp4",
            "videos/anni/anni1.mp4"
        ],

        ammu: [
            "videos/ammu/ammu14.mp4",
            "videos/ammu/ammu13.mp4",
            "videos/ammu/ammu12.mp4",
            "videos/ammu/ammu11.mp4",
            "videos/ammu/ammu10.mp4",
            "videos/ammu/ammu9.mp4",
            "videos/ammu/ammu8.mp4",
            "videos/ammu/ammu7.mp4",
            "videos/ammu/ammu6.mp4",
            "videos/ammu/ammu5.mp4",
            "videos/ammu/ammu4.mp4",
            "videos/ammu/ammu3.mp4",
            "videos/ammu/ammu2.mp4",
            "videos/ammu/ammu1.mp4"
        ],

        appa: [
            "videos/appa/appa2.mp4",
            "videos/appa/appa1.mp4"
        ],

        auto: [
            "videos/auto/auto1.mp4"
        ],

        murugan: [
            "videos/murugan/muruga3.mp4",
            "videos/murugan/muruga2.mp4",
            "videos/murugan/muruga1.mp4"
        ],

        ayyapan: [
            "videos/ayyapan/ayyapan1.mp4",
            "videos/ayyapan/ayyapan2.mp4"
        ],

        yokana: [
            "videos/yokana/yokana6.mp4",
            "videos/yokana/yokana5.mp4",
            "videos/yokana/yokana4.mp4",
            "videos/yokana/yokana3.mp4",
            "videos/yokana/yokana2.mp4",
            "videos/yokana/yokana1.mp4"
        ],

        friends: [
            "videos/friends/friends1.mp4",
            "videos/friends/friends2.mp4",
            "videos/friends/friends3.mp4",
            "videos/friends/friends4.mp4",
            "videos/friends/friends5.mp4"
        ],

        family: [
            "videos/family/family1.mp4"
        ]
    };

    if (videos[folder]) {

        videos[folder].forEach(function (video) {

            const videoElement = document.createElement("video");
            videoElement.controls = true;
            videoElement.width = 350;
            videoElement.preload = "metadata";

            const source = document.createElement("source");
            source.src = video;
            source.type = "video/mp4";

            videoElement.appendChild(source);
            container.appendChild(videoElement);

        });

    } else {

        container.innerHTML = "<h2>No Videos Found 😢</h2>";

    }
}