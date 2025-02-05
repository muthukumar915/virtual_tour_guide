const questions = [
    {
        question: "Which goddess is the main deity of the Madurai Meenakshi Temple?",
        options: ["Durga", "Lakshmi", "Meenakshi", "Saraswati"],
        answer: "Meenakshi"
    },
   
    {
        question: "Who constructed the Tanjore Big Temple?",
        options: ["Raja Raja Chola I", "Rajendra Chola", "Krishnadevaraya", "Narasimha Varman"],
        answer: "Raja Raja Chola I"
    },
    {
        question: "Mahabalipuram is famous for its:",
        options: ["Rock-cut temples", "Wooden carvings", "Jain caves", "Islamic structures"],
        answer: "Rock-cut temples"
    },
    {
        question: "What is the architectural style of the Madurai Meenakshi Temple?",
        options: ["Indo-Saracenic", "Dravidian", "Nagara", "Vesara"],
        answer: "Dravidian"
    },
    {
        question: "The Tanjore Big Temple is dedicated to which deity?",
        options: ["Vishnu", "Shiva", "Durga", "Brahma"],
        answer: "Shiva"
    },
    {
        question: "The Shore Temple at Mahabalipuram is located near which sea?",
        options: ["Arabian Sea", "Bay of Bengal", "Indian Ocean", "Red Sea"],
        answer: "Bay of Bengal"
    },
    {
        question: "Which king is credited with developing Mahabalipuram?",
        options: ["Raja Raja Chola I", "Narasimha Varman I", "Vikrama Chola", "Krishnadevaraya"],
        answer: "Narasimha Varman I"
    },
    {
        question: "Which temple complex has the famous Thousand Pillar Hall?",
        options: ["Tanjore Big Temple", "Madurai Meenakshi Temple", "Mahabalipuram Temple", "Brihadeeswara Temple"],
        answer: "Madurai Meenakshi Temple"
    },
    {
        question: "What is the UNESCO status of the Tanjore Big Temple?",
        options: ["National Heritage Site", "UNESCO World Heritage Site", "Cultural Heritage Site", "Historical Monument"],
        answer: "UNESCO World Heritage Site"
    },
    {
        question: "The Pancha Rathas in Mahabalipuram represent:",
        options: ["Five Chola kings", "Five Pandavas from the Mahabharata", "Five Jain monks", "Five Dravidian styles"],
        answer: "Five Pandavas from the Mahabharata"
    },
    {
        question: "The Gopurams of Madurai Meenakshi Temple are known for their:",
        options: ["Plain designs", "Intricate sculptures and colorful artwork", "Circular structure", "Absence of carvings"],
        answer: "Intricate sculptures and colorful artwork"
    },
    {
        question: "Which river flows near the Tanjore Big Temple?",
        options: ["Kaveri", "Vaigai", "Palar", "Tungabhadra"],
        answer: "Kaveri"
    },
    {
        question: "Mahabalipuram is also known as:",
        options: ["Rameswaram", "Mamallapuram", "Kanchipuram", "Thanjavur"],
        answer: "Mamallapuram"
    },
    {
        question: "The Brihadeeswara Temple is primarily built with:",
        options: ["Marble", "Granite", " Sandstone", "Limestone"],
        answer: "Granite"
    },
    {
        question: "Which architectural feature is unique to Mahabalipuram?",
        options: ["Hanging Pillars", "Cave temples and monolithic rathas", "Floating stones", "Circular shrines"],
        answer: "Cave temples and monolithic rathas"
    },
    {
        question: "The divine consort of Meenakshi in Madurai is:",
        options: ["Vishnu", "Shiva (Sundareswarar)", "Brahma", "Murugan"],
        answer: "Shiva (Sundareswarar)"
    },
    {
        question: "The famous Descent of the Ganges carving in Mahabalipuram is also known as:",
        options: ["Arjuna's Penance", "Krishna's Leela", "Narasimha’s Rescue", "Chola's Victory"],
        answer: "Arjuna's Penance"
    },
    {
        question: "Which temple features a golden tower called Vimana?",
        options: ["Tanjore Big Temple", "Mahabalipuram Temple", "Madurai Meenakshi Temple", "Rameswaram Temple"],
        answer: "Tanjore Big Temple"
    },
    {
        question: "Mahabalipuram's sculptures were created during the reign of which dynasty?",
        options: ["Chola", "Pallava", " Pandya", "Chera"],
        answer: "Pallava"
    },
    {
        question: "The Madurai Meenakshi Temple celebrates which major festival annually?",
        options: ["Pongal", "Navaratri", "Meenakshi Thirukalyanam", "Maha Shivaratri"],
        answer: "Meenakshi Thirukalyanam"
    },
];

// Render questions dynamically
const quizContainer = document.getElementById("quiz");

questions.forEach((q, index) => {
    let questionHTML = `<div class="question">
        <p>${index + 1}. ${q.question}</p>`;
    q.options.forEach(option => {
        questionHTML += `
            <label>
                <input type="radio" name="q${index}" value="${option}"> ${option}
            </label>`;
    });
    questionHTML += `</div>`;
    quizContainer.innerHTML += questionHTML;
});

// Submit quiz and calculate score
document.getElementById("submit").addEventListener("click", function () {
    let score = 0;
    questions.forEach((q, index) => {
        let selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && selected.value === q.answer) {
            score++;
        }
    });

    document.getElementById("result").innerHTML = `You scored ${score} out of ${questions.length}! 🎉`;
});
