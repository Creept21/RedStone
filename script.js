document.addEventListener('DOMContentLoaded', () => {

    const planets = [
        { id: 'mercury', name: 'Mercury', diameter: '4,879 km', distance: '58 million km', atmosphere: 'Trace amounts of hydrogen, helium, and oxygen', surface: 'Rocky, heavily cratered', fact: 'Mercury has no moons.' },
        { id: 'venus', name: 'Venus', diameter: '12,104 km', distance: '108 million km', atmosphere: 'Thick, toxic carbon dioxide', surface: 'Extreme volcanic activity, scorching hot', fact: 'A day on Venus is longer than its year.' },
        { id: 'earth', name: 'Earth', diameter: '12,742 km', distance: '150 million km', atmosphere: 'Nitrogen and oxygen', surface: '71% water, diverse landforms', fact: 'The only known planet to support life.' },
        { id: 'mars', name: 'Mars', diameter: '6,779 km', distance: '228 million km', atmosphere: 'Thin, mostly carbon dioxide', surface: 'Cold desert with polar ice caps', fact: 'Home to the tallest volcano in the solar system, Olympus Mons.' },
        { id: 'jupiter', name: 'Jupiter', diameter: '139,820 km', distance: '778 million km', atmosphere: 'Hydrogen and helium', surface: 'A gaseous giant with no solid surface', fact: 'The Great Red Spot is a storm larger than Earth.' },
        { id: 'saturn', name: 'Saturn', diameter: '116,460 km', distance: '1.4 billion km', atmosphere: 'Hydrogen and helium', surface: 'A gas giant known for its stunning rings', fact: 'Saturn\'s rings are made of ice and rock particles.' },
        { id: 'uranus', name: 'Uranus', diameter: '50,724 km', distance: '2.9 billion km', atmosphere: 'Hydrogen, helium, and methane', surface: 'An ice giant with a tilted axis', fact: 'Uranus rotates on its side, almost at a 90-degree angle.' },
        { id: 'neptune', name: 'Neptune', diameter: '49,244 km', distance: '4.5 billion km', atmosphere: 'Hydrogen, helium, and methane', surface: 'A cold, dark, and windy ice giant', fact: 'Neptune has the fastest winds in the solar system.' }
    ];

    const planetQuizzes = {
        'sun': [
            { question: "What type of star is the Sun?", options: ["Red Dwarf", "Yellow Dwarf", "Red Giant", "White Dwarf"], answer: "Yellow Dwarf" },
            { question: "What is the Sun primarily made of?", options: ["Rock and Ice", "Nitrogen and Oxygen", "Hydrogen and Helium", "Carbon and Iron"], answer: "Hydrogen and Helium" },
            { question: "How long does it take for sunlight to reach Earth?", options: ["8 seconds", "8 minutes", "8 hours", "8 days"], answer: "8 minutes" },
            { question: "What process powers the Sun?", options: ["Nuclear Fission", "Chemical Burning", "Nuclear Fusion", "Radioactive Decay"], answer: "Nuclear Fusion" },
            { question: "What is the outermost layer of the Sun's atmosphere?", options: ["The Photosphere", "The Chromosphere", "The Corona", "The Core"], answer: "The Corona" },
        ],
        'mercury': [
            { question: "What is Mercury's surface primarily like?", options: ["Hot and Volcanic", "Icy and Blue", "Rocky and Cratered", "Water and Land"], answer: "Rocky and Cratered" },
            { question: "How many moons does Mercury have?", options: ["1", "3", "0", "2"], answer: "0" },
            { question: "How long is a year on Mercury?", options: ["88 Earth days", "225 Earth days", "365 Earth days", "687 Earth days"], answer: "88 Earth days" },
            { question: "What is a unique fact about Mercury's rotation?", options: ["It spins backwards", "A day is longer than its year", "It has a perfect circular orbit", "It rotates on its side"], answer: "A day is longer than its year" },
            { question: "What is the primary feature of Mercury's atmosphere?", options: ["It is very thick", "It is made of methane", "It is almost non-existent", "It is the same as Earth's"], answer: "It is almost non-existent" },
        ],
        'venus': [
            { question: "What is Venus known as?", options: ["The Morning Star", "The Red Planet", "The Blue Marble", "The Ringed Planet"], answer: "The Morning Star" },
            { question: "What is Venus's atmosphere primarily made of?", options: ["Nitrogen and Oxygen", "Carbon Dioxide", "Hydrogen and Helium", "Sulfur Dioxide"], answer: "Carbon Dioxide" },
            { question: "A day on Venus is longer than its what?", options: ["Week", "Month", "Year", "Orbit"], answer: "Year" },
            { question: "Which of the following describes Venus's surface?", options: ["Icy plains", "Liquid oceans", "Extreme volcanic activity", "Heavily forested"], answer: "Extreme volcanic activity" },
            { question: "Why is Venus the hottest planet in the solar system?", options: ["It is closest to the Sun", "It has a runaway greenhouse effect", "It's a hotbed of volcanic activity", "It reflects a lot of sunlight"], answer: "It has a runaway greenhouse effect" },
        ],
        'earth': [
            { question: "What is the primary gas in Earth's atmosphere?", options: ["Carbon Dioxide", "Hydrogen", "Nitrogen", "Oxygen"], answer: "Nitrogen" },
            { question: "What percentage of Earth's surface is covered by water?", options: ["50%", "71%", "90%", "30%"], answer: "71%" },
            { question: "What unique feature allows Earth to support life?", options: ["Its moons", "Its magnetic field", "Liquid water on its surface", "Its rings"], answer: "Liquid water on its surface" },
            { question: "How long does it take for Earth to orbit the Sun?", options: ["24 hours", "365.25 days", "10 years", "500 days"], answer: "365.25 days" },
            { question: "What is Earth's only natural satellite?", options: ["Phobos", "Ganymede", "The Moon", "Titan"], answer: "The Moon" },
        ],
        'mars': [
            { question: "What is the tallest volcano in the solar system, located on Mars?", options: ["Olympus Mons", "Mount Fuji", "Mauna Kea", "Krakatoa"], answer: "Olympus Mons" },
            { question: "Mars is known as the 'Red Planet' due to what?", options: ["The presence of iron oxide", "Its color is a mystery", "It is covered in red algae", "It's near a red star"], answer: "The presence of iron oxide" },
            { question: "What are Mars's two moons?", options: ["Io and Europa", "Phobos and Deimos", "Titan and Rhea", "Triton and Nereid"], answer: "Phobos and Deimos" },
            { question: "Mars has polar ice caps. What are they made of?", options: ["Just water ice", "Just dry ice", "Both water and dry ice", "Solid methane"], answer: "Both water and dry ice" },
            { question: "What is Mars's atmosphere primarily made of?", options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Helium"], answer: "Carbon Dioxide" },
        ],
        'jupiter': [
            { question: "The Great Red Spot is a famous storm on which planet?", options: ["Saturn", "Jupiter", "Neptune", "Mars"], answer: "Jupiter" },
            { question: "Jupiter's atmosphere is mostly made of what?", options: ["Methane and Oxygen", "Nitrogen and Carbon Dioxide", "Hydrogen and Helium", "Sulfuric Acid and Water"], answer: "Hydrogen and Helium" },
            { question: "What is a key feature of Jupiter's nature?", options: ["It has a solid surface", "It is a gaseous giant", "It is colder than Uranus", "It is the only planet with rings"], answer: "It is a gaseous giant" },
            { question: "What is the name of Jupiter's largest moon?", options: ["Io", "Ganymede", "Europa", "Callisto"], answer: "Ganymede" },
            { question: "What is a unique fact about Jupiter's day?", options: ["It has the longest day in the solar system", "It has the shortest day in the solar system", "It spins backwards", "It has a day longer than its year"], answer: "It has the shortest day in the solar system" },
        ],
        'saturn': [
            { question: "What are Saturn's famous rings primarily made of?", options: ["Ice and Rock", "Liquid Metal", "Gas and Dust", "Volcanic Ash"], answer: "Ice and Rock" },
            { question: "Which moon of Saturn is the second-largest in the solar system?", options: ["Titan", "Ganymede", "Io", "Triton"], answer: "Titan" },
            { question: "If you put Saturn in a giant pool of water, what would happen?", options: ["It would sink", "It would dissolve", "It would explode", "It would float"], answer: "It would float" },
            { question: "How many moons does Saturn have?", options: ["Less than 20", "Between 20 and 50", "Over 80", "Exactly 7"], answer: "Over 80" },
            { question: "What gives Saturn its pale yellow color?", options: ["Traces of Ammonia", "Large dust storms", "Helium and Oxygen", "Iron deposits"], answer: "Traces of Ammonia" },
        ],
        'uranus': [
            { question: "Uranus rotates on its side at nearly a 90-degree angle, making it known as the what?", options: ["Blue Giant", "Icy Planet", "Gas Giant", "Planet on its Side"], answer: "Planet on its Side" },
            { question: "Uranus appears bluish-green due to the presence of which gas?", options: ["Nitrogen", "Methane", "Sulfur", "Carbon Dioxide"], answer: "Methane" },
            { question: "How long does a year on Uranus last?", options: ["10 Earth years", "84 Earth years", "165 Earth years", "1 Earth year"], answer: "84 Earth years" },
            { question: "What is Uranus categorized as?", options: ["Terrestrial Planet", "Gas Giant", "Dwarf Planet", "Ice Giant"], answer: "Ice Giant" },
            { question: "What is unique about Uranus's rings compared to Saturn's?", options: ["They are much larger", "They are vertical", "They are darker and less visible", "They are made of rock"], answer: "They are darker and less visible" },
        ],
        'neptune': [
            { question: "Which planet has the fastest winds in the solar system?", options: ["Jupiter", "Neptune", "Uranus", "Earth"], answer: "Neptune" },
            { question: "Neptune is an ice giant, a category of planets that includes which other planet?", options: ["Uranus", "Jupiter", "Mars", "Saturn"], answer: "Uranus" },
            { question: "How long is a year on Neptune?", options: ["10 Earth years", "50 Earth years", "165 Earth years", "500 Earth years"], answer: "165 Earth years" },
            { question: "Neptune's large, dark storms are similar to Jupiter's Great Red Spot but are known as what?", options: ["Dark Spots", "Great Dark Spots", "Blue Tornadoes", "Neptunian Winds"], answer: "Great Dark Spots" },
            { question: "What is the name of Neptune's largest moon?", options: ["Titan", "Triton", "Io", "Charon"], answer: "Triton" },
        ]
    };

    // --- Variables for elements ---
    const mainContainer = document.querySelector('.main-container');
    const solarSystem = document.querySelector('.solar-system');
    const speedSlider = document.getElementById('speed-slider');
    const toggleOrbitsBtn = document.getElementById('toggle-orbits-btn');
    const orbits = document.querySelectorAll('.orbit');

    const quizContainer = document.getElementById('quiz-container');
    const quizQuestionEl = document.getElementById('quiz-question');
    const quizOptionsEl = document.getElementById('quiz-options');
    const closeQuizBtn = document.getElementById('close-quiz-btn');

    const feedbackPopup = document.getElementById('feedback-popup');
    const feedbackMessage = document.getElementById('feedback-message');
    const feedbackCloseBtn = document.getElementById('feedback-close-btn');

    const scorePopup = document.getElementById('score-popup');
    const finalScoreMsg = document.getElementById('final-score-msg');
    const scoreDetails = document.getElementById('score-details');
    const scoreCloseBtn = document.getElementById('score-close-btn');

    const sizeCompareBtn = document.getElementById('size-compare-btn');
    const backToOrbitsBtn = document.getElementById('back-to-orbits-btn');
    const sizeCompareContainer = document.getElementById('size-compare-container');
    const planetRow = document.getElementById('planet-row');

    // --- State variables ---
    let currentQuestionIndex = 0;
    let score = 0;
    let currentQuizQuestions = [];

    // --- Planet Info Card Logic ---
    planets.forEach(planet => {
        const planetElement = document.getElementById(planet.id);
        
        planetElement.addEventListener('click', (event) => {
            const existingCard = document.querySelector('.info-card');
            if (existingCard) {
                existingCard.remove();
            }

            const infoCard = document.createElement('div');
            infoCard.classList.add('info-card');
            infoCard.innerHTML = `
                <h2>${planet.name}</h2>
                <p>Diameter: ${planet.diameter}</p>
                <p>Distance from Sun: ${planet.distance}</p>
                <p>Atmosphere: ${planet.atmosphere}</p>
                <p>Surface: ${planet.surface}</p>
                <p>Fact: ${planet.fact}</p>
                <button id="start-planet-quiz">Quiz Me!</button>
                <button class="close-btn">X</button>
            `;
            
            document.body.appendChild(infoCard);
            infoCard.style.top = `${event.clientY}px`;
            infoCard.style.left = `${event.clientX}px`;

            infoCard.querySelector('.close-btn').addEventListener('click', () => {
                infoCard.remove();
            });

            infoCard.querySelector('#start-planet-quiz').addEventListener('click', () => {
                infoCard.remove();
                if (planetQuizzes[planet.id]) {
                    showQuiz(planetQuizzes[planet.id]);
                } else {
                    alert("No quiz available for this planet.");
                }
            });
        });
    });

    // --- Controls Logic (Speed and Orbits) ---
    speedSlider.addEventListener('input', (event) => {
        const speed = parseFloat(event.target.value);
        orbits.forEach(orbit => {
            const initialDuration = parseFloat(getComputedStyle(orbit).getPropertyValue('animation-duration'));
            orbit.style.animationDuration = `${initialDuration / speed}s`;
        });
    });

    toggleOrbitsBtn.addEventListener('click', () => {
        orbits.forEach(orbit => {
            orbit.classList.toggle('hidden-orbit');
        });
    });

    // --- Quiz Logic ---
    function showQuiz(questions) {
        quizContainer.classList.remove('hidden');
        score = 0;
        currentQuestionIndex = 0;
        currentQuizQuestions = questions;
        showQuestion(currentQuizQuestions[currentQuestionIndex]);
    }

    function showQuestion(question) {
        quizQuestionEl.textContent = question.question;
        const options = quizOptionsEl.querySelectorAll('.quiz-option-btn');
        options.forEach((btn, index) => {
            btn.textContent = question.options[index];
            btn.classList.remove('correct', 'incorrect');
            btn.onclick = () => checkAnswer(btn, question.options[index], question.answer);
        });
    }

    function checkAnswer(button, selectedOption, correctAnswer) {
        const options = quizOptionsEl.querySelectorAll('.quiz-option-btn');
        options.forEach(btn => btn.onclick = null);

        if (selectedOption === correctAnswer) {
            button.classList.add('correct');
            feedbackMessage.textContent = "Correct! Great job!";
            score++;
        } else {
            button.classList.add('incorrect');
            feedbackMessage.textContent = `Incorrect. The correct answer was: ${correctAnswer}`;
        }

        feedbackPopup.classList.remove('hidden');

        feedbackCloseBtn.onclick = () => {
            feedbackPopup.classList.add('hidden');
            currentQuestionIndex++;
            if (currentQuestionIndex < currentQuizQuestions.length) {
                showQuestion(currentQuizQuestions[currentQuestionIndex]);
            } else {
                quizContainer.classList.add('hidden');
                showFinalScore();
            }
        };
    }

    function showFinalScore() {
        scorePopup.classList.remove('hidden');
        const totalQuestions = currentQuizQuestions.length;
        finalScoreMsg.textContent = `Quiz Completed!`;
        scoreDetails.textContent = `You scored ${score} out of ${totalQuestions} marks.`;

        scoreCloseBtn.onclick = () => {
            scorePopup.classList.add('hidden');
        };
    }

    closeQuizBtn.addEventListener('click', () => {
        quizContainer.classList.add('hidden');
    });

    // --- Size Comparison Logic ---
    sizeCompareBtn.addEventListener('click', () => {
        sizeCompareContainer.classList.remove('hidden');
        mainContainer.style.display = 'none';
        createPlanetSizes();
    });

    backToOrbitsBtn.addEventListener('click', () => {
        sizeCompareContainer.classList.add('hidden');
        mainContainer.style.display = 'flex';
        planetRow.innerHTML = '';
    });

    function createPlanetSizes() {
        planetRow.innerHTML = '';

        const largestPlanetDiameter = Math.max(...planets.map(p => parseFloat(p.diameter.replace(/,/g, ''))));
        
        planets.forEach(planet => {
            const diameterInKm = parseFloat(planet.diameter.replace(/,/g, ''));
            
            const relativeSize = (diameterInKm / largestPlanetDiameter) * 200;

            const planetItem = document.createElement('div');
            planetItem.classList.add('planet-size-item');
            
            planetItem.innerHTML = `
                <div class="planet-size-circle" style="
                    width: ${relativeSize}px;
                    height: ${relativeSize}px;
                    background-color: ${planet.color};
                "></div>
                <p>${planet.name}</p>
            `;
            
            planetRow.appendChild(planetItem);
        });
    }
    
    // --- Sun Quiz Logic ---
    const sunElement = document.querySelector('.sun');
    sunElement.addEventListener('click', (event) => {
        const existingCard = document.querySelector('.info-card');
        if (existingCard) {
            existingCard.remove();
        }

        const sunInfoCard = document.createElement('div');
        sunInfoCard.classList.add('info-card');
        sunInfoCard.innerHTML = `
            <h2>The Sun</h2>
            <p>Fact: The Sun is the star at the center of our solar system.</p>
            <button id="start-sun-quiz">Quiz Me!</button>
            <button class="close-btn">X</button>
        `;
        document.body.appendChild(sunInfoCard);

        sunInfoCard.style.top = `${event.clientY}px`;
        sunInfoCard.style.left = `${event.clientX}px`;

        sunInfoCard.querySelector('.close-btn').addEventListener('click', () => {
            sunInfoCard.remove();
        });

        sunInfoCard.querySelector('#start-sun-quiz').addEventListener('click', () => {
            sunInfoCard.remove();
            showQuiz(planetQuizzes['sun']);
        });
    });
});


/*

document.addEventListener('DOMContentLoaded', () => {

    const planets = [
        { id: 'mercury', name: 'Mercury', diameter: '4,879 km', distance: '58 million km', atmosphere: 'Trace amounts of hydrogen, helium, and oxygen', surface: 'Rocky, heavily cratered', fact: 'Mercury has no moons.' },
        { id: 'venus', name: 'Venus', diameter: '12,104 km', distance: '108 million km', atmosphere: 'Thick, toxic carbon dioxide', surface: 'Extreme volcanic activity, scorching hot', fact: 'A day on Venus is longer than its year.' },
        { id: 'earth', name: 'Earth', diameter: '12,742 km', distance: '150 million km', atmosphere: 'Nitrogen and oxygen', surface: '71% water, diverse landforms', fact: 'The only known planet to support life.' },
        { id: 'mars', name: 'Mars', diameter: '6,779 km', distance: '228 million km', atmosphere: 'Thin, mostly carbon dioxide', surface: 'Cold desert with polar ice caps', fact: 'Home to the tallest volcano in the solar system, Olympus Mons.' },
        { id: 'jupiter', name: 'Jupiter', diameter: '139,820 km', distance: '778 million km', atmosphere: 'Hydrogen and helium', surface: 'A gaseous giant with no solid surface', fact: 'The Great Red Spot is a storm larger than Earth.' },
        { id: 'saturn', name: 'Saturn', diameter: '116,460 km', distance: '1.4 billion km', atmosphere: 'Hydrogen and helium', surface: 'A gas giant known for its stunning rings', fact: 'Saturn\'s rings are made of ice and rock particles.' },
        { id: 'uranus', name: 'Uranus', diameter: '50,724 km', distance: '2.9 billion km', atmosphere: 'Hydrogen, helium, and methane', surface: 'An ice giant with a tilted axis', fact: 'Uranus rotates on its side, almost at a 90-degree angle.' },
        { id: 'neptune', name: 'Neptune', diameter: '49,244 km', distance: '4.5 billion km', atmosphere: 'Hydrogen, helium, and methane', surface: 'A cold, dark, and windy ice giant', fact: 'Neptune has the fastest winds in the solar system.' }
    ];

    const planetQuizzes = {
        'sun': [
            { question: "What type of star is the Sun?", options: ["Red Dwarf", "Yellow Dwarf", "Red Giant", "White Dwarf"], answer: "Yellow Dwarf" },
            { question: "What is the Sun primarily made of?", options: ["Rock and Ice", "Nitrogen and Oxygen", "Hydrogen and Helium", "Carbon and Iron"], answer: "Hydrogen and Helium" },
            { question: "How long does it take for sunlight to reach Earth?", options: ["8 seconds", "8 minutes", "8 hours", "8 days"], answer: "8 minutes" },
            { question: "What process powers the Sun?", options: ["Nuclear Fission", "Chemical Burning", "Nuclear Fusion", "Radioactive Decay"], answer: "Nuclear Fusion" },
            { question: "What is the outermost layer of the Sun's atmosphere?", options: ["The Photosphere", "The Chromosphere", "The Corona", "The Core"], answer: "The Corona" },
        ],
        'mercury': [
            { question: "What is Mercury's surface primarily like?", options: ["Hot and Volcanic", "Icy and Blue", "Rocky and Cratered", "Water and Land"], answer: "Rocky and Cratered" },
            { question: "How many moons does Mercury have?", options: ["1", "3", "0", "2"], answer: "0" },
            { question: "How long is a year on Mercury?", options: ["88 Earth days", "225 Earth days", "365 Earth days", "687 Earth days"], answer: "88 Earth days" },
            { question: "What is a unique fact about Mercury's rotation?", options: ["It spins backwards", "A day is longer than its year", "It has a perfect circular orbit", "It rotates on its side"], answer: "A day is longer than its year" },
            { question: "What is the primary feature of Mercury's atmosphere?", options: ["It is very thick", "It is made of methane", "It is almost non-existent", "It is the same as Earth's"], answer: "It is almost non-existent" },
        ],
        'venus': [
            { question: "What is Venus known as?", options: ["The Morning Star", "The Red Planet", "The Blue Marble", "The Ringed Planet"], answer: "The Morning Star" },
            { question: "What is Venus's atmosphere primarily made of?", options: ["Nitrogen and Oxygen", "Carbon Dioxide", "Hydrogen and Helium", "Sulfur Dioxide"], answer: "Carbon Dioxide" },
            { question: "A day on Venus is longer than its what?", options: ["Week", "Month", "Year", "Orbit"], answer: "Year" },
            { question: "Which of the following describes Venus's surface?", options: ["Icy plains", "Liquid oceans", "Extreme volcanic activity", "Heavily forested"], answer: "Extreme volcanic activity" },
            { question: "Why is Venus the hottest planet in the solar system?", options: ["It is closest to the Sun", "It has a runaway greenhouse effect", "It's a hotbed of volcanic activity", "It reflects a lot of sunlight"], answer: "It has a runaway greenhouse effect" },
        ],
        'earth': [
            { question: "What is the primary gas in Earth's atmosphere?", options: ["Carbon Dioxide", "Hydrogen", "Nitrogen", "Oxygen"], answer: "Nitrogen" },
            { question: "What percentage of Earth's surface is covered by water?", options: ["50%", "71%", "90%", "30%"], answer: "71%" },
            { question: "What unique feature allows Earth to support life?", options: ["Its moons", "Its magnetic field", "Liquid water on its surface", "Its rings"], answer: "Liquid water on its surface" },
            { question: "How long does it take for Earth to orbit the Sun?", options: ["24 hours", "365.25 days", "10 years", "500 days"], answer: "365.25 days" },
            { question: "What is Earth's only natural satellite?", options: ["Phobos", "Ganymede", "The Moon", "Titan"], answer: "The Moon" },
        ],
        'mars': [
            { question: "What is the tallest volcano in the solar system, located on Mars?", options: ["Olympus Mons", "Mount Fuji", "Mauna Kea", "Krakatoa"], answer: "Olympus Mons" },
            { question: "Mars is known as the 'Red Planet' due to what?", options: ["The presence of iron oxide", "Its color is a mystery", "It is covered in red algae", "It's near a red star"], answer: "The presence of iron oxide" },
            { question: "What are Mars's two moons?", options: ["Io and Europa", "Phobos and Deimos", "Titan and Rhea", "Triton and Nereid"], answer: "Phobos and Deimos" },
            { question: "Mars has polar ice caps. What are they made of?", options: ["Just water ice", "Just dry ice", "Both water and dry ice", "Solid methane"], answer: "Both water and dry ice" },
            { question: "What is Mars's atmosphere primarily made of?", options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Helium"], answer: "Carbon Dioxide" },
        ],
        'jupiter': [
            { question: "The Great Red Spot is a famous storm on which planet?", options: ["Saturn", "Jupiter", "Neptune", "Mars"], answer: "Jupiter" },
            { question: "Jupiter's atmosphere is mostly made of what?", options: ["Methane and Oxygen", "Nitrogen and Carbon Dioxide", "Hydrogen and Helium", "Sulfuric Acid and Water"], answer: "Hydrogen and Helium" },
            { question: "What is a key feature of Jupiter's nature?", options: ["It has a solid surface", "It is a gaseous giant", "It is colder than Uranus", "It is the only planet with rings"], answer: "It is a gaseous giant" },
            { question: "What is the name of Jupiter's largest moon?", options: ["Io", "Ganymede", "Europa", "Callisto"], answer: "Ganymede" },
            { question: "What is a unique fact about Jupiter's day?", options: ["It has the longest day in the solar system", "It has the shortest day in the solar system", "It spins backwards", "It has a day longer than its year"], answer: "It has the shortest day in the solar system" },
        ],
        'saturn': [
            { question: "What are Saturn's famous rings primarily made of?", options: ["Ice and Rock", "Liquid Metal", "Gas and Dust", "Volcanic Ash"], answer: "Ice and Rock" },
            { question: "Which moon of Saturn is the second-largest in the solar system?", options: ["Titan", "Ganymede", "Io", "Triton"], answer: "Titan" },
            { question: "If you put Saturn in a giant pool of water, what would happen?", options: ["It would sink", "It would dissolve", "It would explode", "It would float"], answer: "It would float" },
            { question: "How many moons does Saturn have?", options: ["Less than 20", "Between 20 and 50", "Over 80", "Exactly 7"], answer: "Over 80" },
            { question: "What gives Saturn its pale yellow color?", options: ["Traces of Ammonia", "Large dust storms", "Helium and Oxygen", "Iron deposits"], answer: "Traces of Ammonia" },
        ],
        'uranus': [
            { question: "Uranus rotates on its side at nearly a 90-degree angle, making it known as the what?", options: ["Blue Giant", "Icy Planet", "Gas Giant", "Planet on its Side"], answer: "Planet on its Side" },
            { question: "Uranus appears bluish-green due to the presence of which gas?", options: ["Nitrogen", "Methane", "Sulfur", "Carbon Dioxide"], answer: "Methane" },
            { question: "How long does a year on Uranus last?", options: ["10 Earth years", "84 Earth years", "165 Earth years", "1 Earth year"], answer: "84 Earth years" },
            { question: "What is Uranus categorized as?", options: ["Terrestrial Planet", "Gas Giant", "Dwarf Planet", "Ice Giant"], answer: "Ice Giant" },
            { question: "What is unique about Uranus's rings compared to Saturn's?", options: ["They are much larger", "They are vertical", "They are darker and less visible", "They are made of rock"], answer: "They are darker and less visible" },
        ],
        'neptune': [
            { question: "Which planet has the fastest winds in the solar system?", options: ["Jupiter", "Neptune", "Uranus", "Earth"], answer: "Neptune" },
            { question: "Neptune is an ice giant, a category of planets that includes which other planet?", options: ["Uranus", "Jupiter", "Mars", "Saturn"], answer: "Uranus" },
            { question: "How long is a year on Neptune?", options: ["10 Earth years", "50 Earth years", "165 Earth years", "500 Earth years"], answer: "165 Earth years" },
            { question: "Neptune's large, dark storms are similar to Jupiter's Great Red Spot but are known as what?", options: ["Dark Spots", "Great Dark Spots", "Blue Tornadoes", "Neptunian Winds"], answer: "Great Dark Spots" },
            { question: "What is the name of Neptune's largest moon?", options: ["Titan", "Triton", "Io", "Charon"], answer: "Triton" },
        ]
    };

    // --- Planet Info Card Logic ---
    planets.forEach(planet => {
        const planetElement = document.getElementById(planet.id);
        
        planetElement.addEventListener('click', (event) => {
            const existingCard = document.querySelector('.info-card');
            if (existingCard) {
                existingCard.remove();
            }

            const infoCard = document.createElement('div');
            infoCard.classList.add('info-card');
            infoCard.innerHTML = `
                <h2>${planet.name}</h2>
                <p>Diameter: ${planet.diameter}</p>
                <p>Distance from Sun: ${planet.distance}</p>
                <p>Atmosphere: ${planet.atmosphere}</p>
                <p>Surface: ${planet.surface}</p>
                <p>Fact: ${planet.fact}</p>
                <button id="start-planet-quiz">Quiz Me!</button>
                <button class="close-btn">X</button>
            `;
            
            document.body.appendChild(infoCard);
            infoCard.style.top = `${event.clientY}px`;
            infoCard.style.left = `${event.clientX}px`;

            infoCard.querySelector('.close-btn').addEventListener('click', () => {
                infoCard.remove();
            });

            // Start a planet-specific quiz from the info card
            infoCard.querySelector('#start-planet-quiz').addEventListener('click', () => {
                infoCard.remove();
                if (planetQuizzes[planet.id]) {
                    currentQuestionIndex = 0;
                    showQuiz(planetQuizzes[planet.id]);
                } else {
                    alert("No quiz available for this planet.");
                }
            });
        });
    });

    // --- Controls Logic (Speed and Orbits) ---
    const speedSlider = document.getElementById('speed-slider');
    const toggleOrbitsBtn = document.getElementById('toggle-orbits-btn');
    const orbits = document.querySelectorAll('.orbit');

    speedSlider.addEventListener('input', (event) => {
        const speed = parseFloat(event.target.value);
        orbits.forEach(orbit => {
            // Corrected line: Parse the string to a float before calculation
            const initialDuration = parseFloat(getComputedStyle(orbit).getPropertyValue('animation-duration'));
            
            // This calculation is a simple way to adjust speed
            orbit.style.animationDuration = `${initialDuration / speed}s`;
        });
    });

    toggleOrbitsBtn.addEventListener('click', () => {
        orbits.forEach(orbit => {
            orbit.classList.toggle('hidden-orbit');
        });
    });

    // --- Quiz Logic ---
    const quizContainer = document.getElementById('quiz-container');
    const quizQuestionEl = document.getElementById('quiz-question');
    const quizOptionsEl = document.getElementById('quiz-options');
    const closeQuizBtn = document.getElementById('close-quiz-btn');
    let currentQuestionIndex = 0;

    function showQuiz(questions) {
        quizContainer.classList.remove('hidden');
        showQuestion(questions[currentQuestionIndex], questions);
    }

    function showQuestion(question, questions) {
        quizQuestionEl.textContent = question.question;
        const options = quizOptionsEl.querySelectorAll('.quiz-option-btn');
        options.forEach((btn, index) => {
            btn.textContent = question.options[index];
            btn.classList.remove('correct', 'incorrect');
            btn.onclick = () => checkAnswer(btn, question.options[index], question.answer, questions);
        });
    }
    const feedbackPopup = document.getElementById('feedback-popup');
    const feedbackMessage = document.getElementById('feedback-message');
    const feedbackCloseBtn = document.getElementById('feedback-close-btn');


    function showFinalScore() {
        scorePopup.classList.remove('hidden');
        const totalQuestions = currentQuizQuestions.length;
        finalScoreMsg.textContent = `Quiz Completed!`;
        scoreDetails.textContent = `You scored ${score} out of ${totalQuestions} marks.`;

        scoreCloseBtn.onclick = () => {
            scorePopup.classList.add('hidden');
            currentQuestionIndex = 0; // Reset for next time
        };
    }

    function checkAnswer(button, selectedOption, correctAnswer) {
        const options = quizOptionsEl.querySelectorAll('.quiz-option-btn');
        options.forEach(btn => btn.onclick = null);

        if (selectedOption === correctAnswer) {
            button.classList.add('correct');
            feedbackMessage.textContent = "Correct! Great job!";
            score++; // Increment score for a correct answer
        } else {
            button.classList.add('incorrect');
            feedbackMessage.textContent = "Incorrect. The correct answer was: " + correctAnswer;
        }

        feedbackPopup.classList.remove('hidden');

        feedbackCloseBtn.onclick = () => {
            feedbackPopup.classList.add('hidden');

            currentQuestionIndex++;
            if (currentQuestionIndex < currentQuizQuestions.length) {
                showQuestion(currentQuizQuestions[currentQuestionIndex]);
            } else {
                // Show the final score pop-up
                quizContainer.classList.add('hidden');
                showFinalScore();
            }
        };
    }

    closeQuizBtn.addEventListener('click', () => {
        quizContainer.classList.add('hidden');
    });

    // --- Size Comparison Logic ---
    const sizeCompareBtn = document.getElementById('size-compare-btn');
    const backToOrbitsBtn = document.getElementById('back-to-orbits-btn');
    const sizeCompareContainer = document.getElementById('size-compare-container');
    const planetRow = document.getElementById('planet-row');
    const solarSystem = document.querySelector('.solar-system');

    function showSizeComparison() {
        sizeCompareContainer.classList.remove('hidden');
        solarSystem.style.display = 'none';
        createPlanetSizes();
    }

    function hideSizeComparison() {
        sizeCompareContainer.classList.add('hidden');
        solarSystem.style.display = 'block';
        planetRow.innerHTML = '';
    }

    function createPlanetSizes() {
        planetRow.innerHTML = '';

        const largestPlanetDiameter = Math.max(...planets.map(p => parseFloat(p.diameter.replace(/,/g, ''))));
        
        planets.forEach(planet => {
            const diameterInKm = parseFloat(planet.diameter.replace(/,/g, ''));
            
            const relativeSize = (diameterInKm / largestPlanetDiameter) * 200;

            const planetItem = document.createElement('div');
            planetItem.classList.add('planet-size-item');
            
            planetItem.innerHTML = `
                <div class="planet-size-circle" style="
                    width: ${relativeSize}px;
                    height: ${relativeSize}px;
                    background-color: ${planet.color};
                "></div>
                <p>${planet.name}</p>
            `;
            
            planetRow.appendChild(planetItem);
        });
    }

    sizeCompareBtn.addEventListener('click', showSizeComparison);
    backToOrbitsBtn.addEventListener('click', hideSizeComparison);

    // New variables for scoring
    const scorePopup = document.getElementById('score-popup');
    const finalScoreMsg = document.getElementById('final-score-msg');
    const scoreDetails = document.getElementById('score-details');
    const scoreCloseBtn = document.getElementById('score-close-btn');

    let score = 0; // The new score variable
    let currentQuizQuestions = []; // To hold the specific quiz questions

    function showQuiz(questions) {
        quizContainer.classList.remove('hidden');
        score = 0; // Reset score for the new quiz
        currentQuizQuestions = questions;
        showQuestion(currentQuizQuestions[currentQuestionIndex]);
    }

    // --- Sun Quiz Logic ---
    const sunElement = document.querySelector('.sun');
    sunElement.addEventListener('click', () => {
        const existingCard = document.querySelector('.info-card');
        if (existingCard) {
            existingCard.remove();
        }

        const sunInfoCard = document.createElement('div');
        sunInfoCard.classList.add('info-card');
        sunInfoCard.innerHTML = `
            <h2>The Sun</h2>
            <p>Fact: The Sun is the star at the center of our solar system.</p>
            <button id="start-sun-quiz">Quiz Me!</button>
            <button class="close-btn">X</button>
        `;
        document.body.appendChild(sunInfoCard);

        sunInfoCard.style.top = `${event.clientY}px`;
        sunInfoCard.style.left = `${event.clientX}px`;

        sunInfoCard.querySelector('.close-btn').addEventListener('click', () => {
            sunInfoCard.remove();
        });

        sunInfoCard.querySelector('#start-sun-quiz').addEventListener('click', () => {
            sunInfoCard.remove();
            currentQuestionIndex = 0;
            showQuiz(planetQuizzes['sun']);
        });
    });
});


*/