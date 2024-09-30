const events = [
    {
        title: "Event 1",
        description: "Join us for our first event of the semester! Click for more details.",
        image: "images/craft.jpg",  // Replace with your image path
        link: "craft/craft.html" // Link to the specific event page
    },
    {
        title: "Event 2",
        description: "Don't miss out on our second event! Click for more details.",
        image: "images/event2.jpg",  // Replace with your image path
        link: "Quiz/sound_party.html" // Replace with your actual link
    },
    {
        title: "Event 3",
        description: "Learn more about our third exciting event! Click for more details.",
        image: "images/event3.jpg",  // Replace with your image path
        link: "MakeUp/make_up.html" // Replace with your actual link
    },
    {
        title: "Event 4",
        description: "Learn more about our third exciting event! Click for more details.",
        image: "images/event3.jpg",  // Replace with your image path
        link: "Fun/fun_event.html" // Replace with your actual link
    },
    {
        title: "Event 5",
        description: "Learn more about our third exciting event! Click for more details.",
        image: "images/event3.jpg",  // Replace with your image path
        link: "#" // Replace with your actual link
    },
    {
        title: "Event 6",
        description: "Learn more about our third exciting event! Click for more details.",
        image: "images/event3.jpg",  // Replace with your image path
        link: "#" // Replace with your actual link
    },
    {
        title: "Event 7",
        description: "Learn more about our third exciting event! Click for more details.",
        image: "images/event3.jpg",  // Replace with your image path
        link: "#" // Replace with your actual link
    }
];

const pastEvents = [
    {
        title: "Past Event 1",
        description: "A summary of what happened during our first past event.",
        image: "images/past_event1.jpg",  // Replace with your image path
        link: "#"
    },
    {
        title: "Past Event 2",
        description: "Highlights from our second past event.",
        image: "images/past_event2.jpg",  // Replace with your image path
        link: "#"
    },
    {
        title: "Past Event 3",
        description: "Highlights from our second past event.",
        image: "images/past_event2.jpg",  // Replace with your image path
        link: "#"
    }
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
            <a href="${event.link}" target="_blank" class="more-info-btn">More Info</a>
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
