const checkBox = document.getElementById('checkbox');
const sliderContainer = document.getElementById('speed');
const options = document.getElementById('options');
const orbitsManager = document.getElementById('orbit-container');
const title = document.getElementById('options-title');

const solarSystemView = document.getElementById('solar-system-view');
const planetInfoPage = document.getElementById('planet-info-page');
const planetInfoTitle = document.getElementById('planet-info-title');
const planetInfoText = document.getElementById('planet-info-text');
const planetImagePlaceholder = document.getElementById('planet-image-placeholder');
const planetInfoCard = document.querySelector('.planet-info-card');
const infoActions = document.querySelector('.info-actions');

const quizContainer = document.getElementById('quiz-container');
const quizTitle = document.getElementById('quiz-title');
const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const scoreText = document.getElementById('score-text');
const submitButton = document.querySelector('.submit-button');

let currentQuizPlanetIndex = -1;
let currentQuestionIndex = 0;
let quizScore = 0;

const names = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];

const text = [
    'Orbit speed: 47.4 km/s \n Diameter: 4879 km \n Orbital period: 88 days \n \n Mercury is the closest planet to the sun, but is not the hottest planet in the solar system. It is also the only planet in our solar system to have no moons! As well as the only planet that is too small to have an atmosphere.',
    'Orbit speed: 35.0 km/s \n Diameter: 12,104 km \n Orbital period: 224.7 days \n \n Venus is the 2nd planet from the sun and is the hottest planet in the solar system as its atmosphere is made up mostly of greenhouse gases, which hold the suns heat in.',
    'Orbit speed: 29.8 km/s \n Diameter: 12,756 km \n Orbital period: 365.25 days \n \n Earth is the 3rd planet from the sun and is home to us humans. It is the only known planet to sustain any form of intelligent life (Humans). It is also the only known planet to sustain any life at all! Also, Earth is the only planet in our solar system to have liquid water at its surface, which is one of the reasons why life was able to evolve here.',
    'Orbit speed: 24.1 km/s \n Diameter: 6792 km \n Orbital period: 687 days \n \n Mars is the 4th planet from the sun and is the last terrestrial planet (A planet made up of mostly rocks). Also, scientists believe that it could have once supported life millions of years ago.',
    'Orbit speed: 13.1 km/s \n Diameter: 142,984 km \n Orbital period: 4331 days \n \n Jupiter is the 5th planet from the sun and is the first gas giant in the solar system weighing more than all the planets weights combined! It is also the largest planet in our solar system, but does not have the most moons.',
    'Orbit speed: 9.7 km/s \n Diameter: 120,536 km \n Orbital period: 10,747 days \n \n Saturn is the 6th planet from the sun and the only planet to have visible rings, which are made up of mostly ice and rock. It is also the planet which has the most moons (82 of them), even though it is smaller than Jupiter!',
    'Orbit speed: 6.8 km/s \n Diameter: 51,118 km \n Orbital period: 30,589 days \n \n Uranus is the 7th planet in the solar system and like neptune, is made nearly entirely of a mixture of gases. Scientists have also found that one of the gases that makes up uranus is methane, which makes the planet smell like rotten eggs!!',
    'Orbit speed: 5.4 km/s \n Diameter: 49,528 km \n Orbital period: 59,800 days \n \n Neptune is the furthest planet from our sun. It is also the coldest of all the planets and is made up mostly of a mixture of gases.'
];

const planetImages = [
    'assets/mercuryImage.jpg',
    'assets/venusImage.jpg',
    'assets/earthImage.jpg',
    'assets/marsImage.jpg',
    'assets/jupiterImage.jpeg',
    'assets/saturnImage.jpg',
    'assets/uranusImage.jpg',
    'assets/neptuneImage.jpg'
];

const speeds = [0.02, 0.051428, 0.08348, 0.157, 1.00112, 2.41942, 7.008, 13.765714];

const quizData = [
    [
        { question: "Which planet is the closest to the Sun?", options: ["Venus", "Earth", "Mars", "Mercury"], answer: "Mercury" },
        { question: "Mercury has no moons.", options: ["True", "False"], answer: "True" },
        { question: "What is Mercury's orbital period in Earth days?", options: ["88", "225", "365", "687"], answer: "88" },
        { question: "Which of the following is true about Mercury?", options: ["It has a thick atmosphere", "It is the hottest planet", "It is the smallest planet", "It has visible rings"], answer: "It is the smallest planet" },
        { question: "What is the diameter of Mercury?", options: ["4,879 km", "12,104 km", "12,756 km", "6,792 km"], answer: "4,879 km" }
    ],
    [
        { question: "Which planet is the hottest in our solar system?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Venus" },
        { question: "Venus's atmosphere is made up of mostly what type of gases?", options: ["Nitrogen", "Oxygen", "Greenhouse gases", "Methane"], answer: "Greenhouse gases" },
        { question: "What is Venus's orbital period in Earth days?", options: ["88", "224.7", "365.25", "687"], answer: "224.7" },
        { question: "Venus is the _________ planet from the sun.", options: ["1st", "2nd", "3rd", "4th"], answer: "2nd" },
        { question: "What is the diameter of Venus?", options: ["4,879 km", "12,104 km", "12,756 km", "6,792 km"], answer: "12,104 km" }
    ],
    [
        { question: "Earth is the only planet known to sustain life.", options: ["True", "False"], answer: "True" },
        { question: "What is Earth's orbital period in days?", options: ["88", "224.7", "365.25", "687"], answer: "365.25" },
        { question: "Which of these is unique to Earth among solar system planets?", options: ["Presence of moons", "Liquid water at its surface", "A solid surface", "An atmosphere"], answer: "Liquid water at its surface" },
        { question: "What is Earth's orbit speed?", options: ["47.4 km/s", "35.0 km/s", "29.8 km/s", "24.1 km/s"], answer: "29.8 km/s" },
        { question: "What is the diameter of Earth?", options: ["4,879 km", "12,104 km", "12,756 km", "6,792 km"], answer: "12,756 km" }
    ],
    [
        { question: "Mars is the last of which type of planets?", options: ["Gas giants", "Terrestrial planets", "Ice giants", "Dwarf planets"], answer: "Terrestrial planets" },
        { question: "Scientists believe Mars may have once supported life.", options: ["True", "False"], answer: "True" },
        { question: "How long is a year on Mars?", options: ["88 days", "365 days", "687 days", "4331 days"], answer: "687 days" },
        { question: "What is the diameter of Mars?", options: ["4,879 km", "12,104 km", "12,756 km", "6,792 km"], answer: "6,792 km" },
        { question: "What is Mars's orbit speed?", options: ["29.8 km/s", "24.1 km/s", "13.1 km/s", "9.7 km/s"], answer: "24.1 km/s" }
    ],
    [
        { question: "Jupiter is the largest planet in our solar system.", options: ["True", "False"], answer: "True" },
        { question: "What type of planet is Jupiter?", options: ["Terrestrial", "Ice giant", "Gas giant", "Dwarf planet"], answer: "Gas giant" },
        { question: "Jupiter's mass is greater than the combined mass of all other planets.", options: ["True", "False"], answer: "True" },
        { question: "How many moons does Jupiter have?", options: ["82", "79", "67", "53"], answer: "79" },
        { question: "What is Jupiter's orbital period in days?", options: ["687", "4331", "10,747", "30,589"], answer: "4331" }
    ],
    [
        { question: "Saturn is the only planet with visible rings.", options: ["True", "False"], answer: "True" },
        { question: "What are Saturn's rings primarily made of?", options: ["Rock and gas", "Ice and dust", "Ice and rock", "Solid gold"], answer: "Ice and rock" },
        { question: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Saturn" },
        { question: "What is the diameter of Saturn?", options: ["142,984 km", "120,536 km", "51,118 km", "49,528 km"], answer: "120,536 km" },
        { question: "What is Saturn's orbital period in days?", options: ["4331", "10,747", "30,589", "59,800"], answer: "10,747" }
    ],
    [
        { question: "What gas makes Uranus smell like rotten eggs?", options: ["Methane", "Sulfur", "Hydrogen sulfide", "Ammonia"], answer: "Methane" },
        { question: "Uranus is the 7th planet from the Sun.", options: ["True", "False"], answer: "True" },
        { question: "Uranus is made nearly entirely of a mixture of gases.", options: ["True", "False"], answer: "True" },
        { question: "What is the diameter of Uranus?", options: ["120,536 km", "51,118 km", "49,528 km", "142,984 km"], answer: "51,118 km" },
        { question: "What is Uranus's orbit speed?", options: ["9.7 km/s", "6.8 km/s", "5.4 km/s", "13.1 km/s"], answer: "6.8 km/s" }
    ],
    [
        { question: "Which planet is the furthest from the Sun?", options: ["Uranus", "Pluto", "Saturn", "Neptune"], answer: "Neptune" },
        { question: "Neptune is the coldest of all the planets.", options: ["True", "False"], answer: "True" },
        { question: "Neptune is made mostly of a mixture of gases.", options: ["True", "False"], answer: "True" },
        { question: "What is the diameter of Neptune?", options: ["51,118 km", "49,528 km", "120,536 km", "142,984 km"], answer: "49,528 km" },
        { question: "What is Neptune's orbital period in days?", options: ["30,589", "59,800", "10,747", "4331"], answer: "59,800" }
    ]
];

loadSavedData();

// UPDATED: This function now passes the value to setupSpeedsOfPlanets
function getInputOfSpeed(item) {
    var slideValue = item.value;
    localStorage.setItem('speed', item.value);
    // Pass the slider value to the main speed function
    setupSpeedsOfPlanets(slideValue);
}

// UPDATED: This function now contains all the logic for setting speeds and reversing the slider effect
function setupSpeedsOfPlanets(item) {
    var slideValue = parseInt(item); // Ensure it's a number
    var calculationValue;

    // Values from the slider (10-500) need to be inverted for the speed calculation.
    // A high slider value (e.g., 500) should result in a low calculation value (e.g., 10) for a fast speed.
    if (slideValue <= 500) {
        sliderContainer.value = slideValue;
        // Invert the value: (max + min) - current value
        calculationValue = (500 + 10) - slideValue;
    } else {
        // Handles the 'realtime' case which uses a very large number, so no inversion is needed.
        calculationValue = slideValue;
        sliderContainer.value = "500"; // Visually max out the slider for realtime
    }

    for (var i = 0; i < names.length; i++) {
        var nameOfItem = '--' + names[i] + 'Speed';
        var value = calculationValue * speeds[i];
        value = value + 's';
        document.querySelector('body').style.setProperty(nameOfItem, value);
    }
}

function loadSavedData() {
    var data = localStorage.getItem('speed');
    if (data == null) {
        data = 500;
        localStorage.setItem('speed', 500);
    }
    sliderContainer.value = data;
    setupSpeedsOfPlanets(data);
    var savedInfo = localStorage.getItem('checked');
    if (savedInfo == 1) {
        checkBox.checked = true;
    } else if (savedInfo == null) {
        checkBox.checked = false;
        localStorage.setItem('checked', 0);
    } else {
        checkBox.checked = false;
    }
    updateStateOfSystem(checkBox.checked);
}

function checkMediaOfUser(media) {
    if (media.matches) {
        options.classList.add('options-mobile');
        document.getElementById('space').classList.add('spacing-mobile');
        title.classList.add('options-title-mobile');
    } else {
        options.classList.remove('options-mobile');
        document.getElementById('space').classList.remove('spacing-mobile');
        title.classList.remove('options-title-mobile');
    }
}

var x = window.matchMedia("(max-width: 700px)")
checkMediaOfUser(x)
x.addListener(checkMediaOfUser)

function resetData() {
    localStorage.setItem('speed', 500);
    sliderContainer.value = "500";
    setupSpeedsOfPlanets(500);
    checkBox.checked = false;
    localStorage.setItem('checked', 0);
    updateStateOfSystem(checkBox.checked);
}

function saveCheckState() {
    if (checkBox.checked) {
        localStorage.setItem('checked', 1);
    } else {
        localStorage.setItem('checked', 0);
    }
    updateStateOfSystem(checkBox.checked);
}

function updateStateOfSystem(item) {
    if (item) {
        orbitsManager.classList.add('showing');
        orbitsManager.classList.remove('hiding');
    } else {
        orbitsManager.classList.remove('showing');
        orbitsManager.classList.add('hiding');
    }
}

function capitaliseFirstLetter(word) {
    return word.substring(0, 1).toUpperCase() + word.slice(1);
}

function showPlanetInfo(num) {
    solarSystemView.classList.add('hiding');
    planetInfoPage.classList.remove('hiding');
    
    const planetName = capitaliseFirstLetter(names[num]);
    const planetInfo = text[num];
    const planetImage = planetImages[num];

    planetInfoPage.style.backgroundImage = `url(${planetImage})`;
    planetInfoCard.style.backgroundImage = `none`;
    planetInfoPage.style.background = 'none';

    planetImagePlaceholder.style.backgroundImage = `url(${planetImage})`;
    planetInfoTitle.innerText = planetName;
    planetInfoText.innerText = planetInfo;

    // Reset view to info card
    quizContainer.classList.add('hiding');
    planetInfoCard.classList.remove('hiding');
    infoActions.style.display = 'block';
}

function goBack() {
    solarSystemView.classList.remove('hiding');
    planetInfoPage.classList.add('hiding');
}

function startQuiz() {
    planetInfoCard.classList.add('hiding');
    quizContainer.classList.remove('hiding');

    currentQuestionIndex = 0;
    quizScore = 0;
    submitButton.style.display = 'block';
    scoreText.innerText = 'Score: 0 / 5';

    const planetName = planetInfoTitle.innerText.toLowerCase();
    currentQuizPlanetIndex = names.indexOf(planetName);

    loadQuestion();
}

function closeQuiz() {
    quizContainer.classList.add('hiding');
    planetInfoCard.classList.remove('hiding');
}

function loadQuestion() {
    if (currentQuestionIndex < quizData[currentQuizPlanetIndex].length) {
        const questionData = quizData[currentQuizPlanetIndex][currentQuestionIndex];
        quizTitle.innerText = `Quiz: ${capitaliseFirstLetter(names[currentQuizPlanetIndex])}`;
        quizQuestion.innerText = questionData.question;
        quizOptions.innerHTML = '';
        questionData.options.forEach((option, index) => {
            const label = document.createElement('label');
            label.className = 'quiz-option-label';
            label.innerHTML = `
                <input type="radio" name="quiz-option" value="${option}" class="quiz-option-input">
                <span class="quiz-option-text">${option}</span>
            `;
            quizOptions.appendChild(label);
        });
    } else {
        endQuiz();
    }
}

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="quiz-option"]:checked');
    if (selectedOption) {
        submitButton.disabled = true; // Disable button to prevent multiple submissions
        const userAnswer = selectedOption.value;
        const correctAnswer = quizData[currentQuizPlanetIndex][currentQuestionIndex].answer;
        const allOptions = document.querySelectorAll('.quiz-option-label');

        allOptions.forEach(optionLabel => {
            const optionValue = optionLabel.querySelector('.quiz-option-input').value;
            if (optionValue === correctAnswer) {
                optionLabel.style.backgroundColor = '#4CAF50'; // Green for correct answer
                optionLabel.querySelector('.quiz-option-text').style.color = 'white';
            } else if (optionValue === userAnswer) {
                optionLabel.style.backgroundColor = '#F44336'; // Red for incorrect answer
                optionLabel.querySelector('.quiz-option-text').style.color = 'white';
            }
        });

        if (userAnswer === correctAnswer) {
            quizScore++;
        }

        setTimeout(() => {
            currentQuestionIndex++;
            scoreText.innerText = `Score: ${quizScore} / 5`;
            
            // Reset colors and re-enable button
            allOptions.forEach(optionLabel => {
                optionLabel.style.backgroundColor = '';
                optionLabel.querySelector('.quiz-option-text').style.color = '';
            });
            submitButton.disabled = false;
            
            loadQuestion();
        }, 1500); // 1.5 second delay before loading next question
    }
}

function endQuiz() {
    quizTitle.innerText = "Quiz Complete!";
    quizQuestion.innerText = `You scored ${quizScore} out of 5!`;
    quizOptions.innerHTML = '';
    submitButton.style.display = 'none';
    scoreText.innerText = '';
}
