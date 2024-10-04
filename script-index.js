const events = [
    {
        title: "IKIGAI",
        description: " IKIGAI comprises 3 sounds that weave the vibe of wholesome joy. ",
        image: "images/quiz.jpg",  
        link: "IKIGAI/ikigai.html" 
    },
    {
        title: "REVIVE AND THRIVE",
        description: " The upcycle of things that brings out creativity. ",
        image: "images/craft.jpg",  
        link: "REVIVE AND THRIVE/revive_and_thrive.html" 
    },
    {
        title: "GLAM LASH ",
        description: " Unleash the glow that is inhate in feminine. ",
        image: "images/makeup.jpg",  
        link: "GLAM LASH/glam_lash.html" 
    },
    {
        title: "GENTLEMEN'S BASH",
        description: " The merge of sigma squad to load the fun. ",
        image: "images/boys.jpeg", 
        link: "GENTLEMEN'S BASH/gentlemen_bash.html" 
    }
];

const pastEvents = [
    {
        title: "Guest Lecture 1",
        description: "Guest lecture on ' KICK START TO WEB DEVELOPMENT '",
        train: " AUG 24, 2024 ",
        image: "images/guestlec1.jpg",  
        link: "Past Events/GL 1/guest_lec1.html"
    },
    {
        title: "Workshop",
        description: "Two Days Workshop on ' FULL STACK WEB DEVELOPMENT' ",
        train: " AUG 30, 2024 - AUG 31, 2024 ",
        image: "images/workshop.jpg", 
        link: "Past Events/Workshop/workshop.html"
    },
    
    {
        title: "Guest Lecture 2",
        description: "Guest lecture on ' ENTERPRISE SOFTWARE DEVELOPMENT ' ",
        train: " SEP 3, 2024 ",
        image: "images/guestlec2.jpg",  
        link: "Past Events/GL 2/guest_lec2.html"
    },
    {
        title: "Guest Lecture 3",
        description: "Guest lecture on ' UNVEILING THE POWER OF BIG DATA ANALYTICS' ",
        train: " OCT 5, 2024",
        image: "images/guestlec3.jpg",  
        link: "Past Events/GL 3/guest_lec3.html"
    },
    
];

const eventsContainer = document.getElementById('events-container');
const pastEventsContainer = document.getElementById('past-events-container');

// Function to create upcoming event cards
function createUpcomingEventCard(event) {
    const eventCard = document.createElement('div');
    eventCard.className = 'event-card';
    eventCard.innerHTML = `
        <img src="${event.image}" alt="${event.title}">
        <div>
            <h3>${event.title}</h3>
            <p>${event.description}</p>
        </div>
            <a href="${event.link}" target="_blank" class="more-info-btn">REGISTER HERE</a>
    `;
    eventsContainer.appendChild(eventCard);
}

// Function to create past event cards with flip effect
function createPastEventCard(event) {
    const card = document.createElement('div');
    card.className = 'flip-card';
    card.innerHTML = `
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="${event.image}" alt="${event.title}" style="width:100%; height:auto;">
                <h3>${event.title}</h3>
            </div>
            <div class="flip-card-back">
                <p>${event.description}</p>
                <h1>${event.train}</h1>
                <a href="${event.link}" target="_blank" class="more-info-btn">More Info</a>
            </div>
        </div>
    `;
    pastEventsContainer.appendChild(card);
}


// Add upcoming events with delay
events.forEach((event, index) => {
    setTimeout(() => {
        createUpcomingEventCard(event);
    }, index * 1000); // Delay of 1 second for each event
});

// Add past events
pastEvents.forEach(event => {
    createPastEventCard(event);
});
