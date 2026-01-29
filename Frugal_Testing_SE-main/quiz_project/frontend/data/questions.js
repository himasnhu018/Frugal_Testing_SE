// questions.js
// Array of sample questions. Each question has: id, category, difficulty, text, options (array), answer (index)
const QUESTIONS = [
  // --- General Knowledge (Easy) ---
  {
    id: 1,
    category: "general",
    difficulty: "easy",
    text: "What is the largest animal on Earth?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Great White Shark"],
    answer: 2
  },
  {
    id: 2,
    category: "general",
    difficulty: "easy",
    text: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: 2
  },
  {
    id: 3,
    category: "general",
    difficulty: "easy",
    text: "Which season comes after Summer?",
    options: ["Winter", "Spring", "Autumn", "Monsoon"],
    answer: 2
  },
  {
    id: 4,
    category: "general",
    difficulty: "easy",
    text: "What is the capital city of Japan?",
    options: ["Seoul", "Beijing", "Bangkok", "Tokyo"],
    answer: 3
  },
  {
    id: 5,
    category: "general",
    difficulty: "easy",
    text: "The primary color that is also a fruit is:",
    options: ["Green", "Yellow", "Blue", "Red"],
    answer: 3
  },
  {
    id: 6,
    category: "general",
    difficulty: "easy",
    text: "Which of these is a fictional wizard?",
    options: ["Sherlock Holmes", "Harry Potter", "Frodo Baggins", "James Bond"],
    answer: 1
  },
  {
    id: 7,
    category: "general",
    difficulty: "easy",
    text: "A group of lions is called a:",
    options: ["Herd", "Pack", "Pride", "Flock"],
    answer: 2
  },
  {
    id: 8,
    category: "general",
    difficulty: "easy",
    text: "How many days are in a leap year?",
    options: ["365", "366", "364", "360"],
    answer: 1
  },
  {
    id: 9,
    category: "general",
    difficulty: "easy",
    text: "What is the highest mountain peak in the world?",
    options: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"],
    answer: 3
  },
  {
    id: 10,
    category: "general",
    difficulty: "easy",
    text: "Which famous structure is in Paris, France?",
    options: ["Statue of Liberty", "Big Ben", "Eiffel Tower", "Colosseum"],
    answer: 2
  },
  {
    id: 11,
    category: "general",
    difficulty: "easy",
    text: "What do bees produce?",
    options: ["Milk", "Cotton", "Honey", "Silk"],
    answer: 2
  },
  
  // --- General Knowledge (Medium) ---
  {
    id: 12,
    category: "general",
    difficulty: "medium",
    text: "The Suez Canal connects which two bodies of water?",
    options: ["Atlantic and Pacific Ocean", "Mediterranean and Red Sea", "Black and Caspian Sea", "Baltic and North Sea"],
    answer: 1
  },
  {
    id: 13,
    category: "general",
    difficulty: "medium",
    text: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    answer: 2
  },
  {
    id: 14,
    category: "general",
    difficulty: "medium",
    text: "In Greek mythology, who was the god of the sea?",
    options: ["Zeus", "Hades", "Poseidon", "Ares"],
    answer: 2
  },
  {
    id: 15,
    category: "general",
    difficulty: "medium",
    text: "What is the official language of Brazil?",
    options: ["Spanish", "English", "Portuguese", "French"],
    answer: 2
  },
  {
    id: 16,
    category: "general",
    difficulty: "medium",
    text: "The currency of India is the:",
    options: ["Yen", "Rupee", "Dollar", "Euro"],
    answer: 1
  },
  {
    id: 17,
    category: "general",
    difficulty: "medium",
    text: "Which war featured the Axis and Allied powers?",
    options: ["World War I", "Korean War", "Cold War", "World War II"],
    answer: 3
  },
  {
    id: 18,
    category: "general",
    difficulty: "medium",
    text: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain"],
    answer: 0
  },
  {
    id: 19,
    category: "general",
    difficulty: "medium",
    text: "Which country is home to the Great Barrier Reef?",
    options: ["South Africa", "Mexico", "Australia", "Indonesia"],
    answer: 2
  },
  {
    id: 20,
    category: "general",
    difficulty: "medium",
    text: "The process of a caterpillar turning into a butterfly is called:",
    options: ["Reformation", "Metamorphosis", "Evolution", "Mitosis"],
    answer: 1
  },
  {
    id: 21,
    category: "general",
    difficulty: "medium",
    text: "Which musical instrument has black and white keys and is played by hitting them?",
    options: ["Guitar", "Violin", "Drums", "Piano"],
    answer: 3
  },
  {
    id: 22,
    category: "general",
    difficulty: "medium",
    text: "Who was the first person to walk on the moon?",
    options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
    answer: 1
  },
  
  // --- General Knowledge (Hard) ---
  {
    id: 23,
    category: "general",
    difficulty: "hard",
    text: "Which philosophical school is associated with Zeno of Citium?",
    options: ["Epicureanism", "Stoicism", "Skepticism", "Cynicism"],
    answer: 1
  },
  {
    id: 24,
    category: "general",
    difficulty: "hard",
    text: "What is the smallest country in the world by land area?",
    options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
    answer: 2
  },
  {
    id: 25,
    category: "general",
    difficulty: "hard",
    text: "The term 'Quid Pro Quo' is Latin for:",
    options: ["Thus spoke", "For this reason", "Something for something", "My mistake"],
    answer: 2
  },
  {
    id: 26,
    category: "general",
    difficulty: "hard",
    text: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Galileo Galilei"],
    answer: 2
  },
  {
    id: 27,
    category: "general",
    difficulty: "hard",
    text: "Which historical figure is known for the phrase 'Veni, Vidi, Vici'?",
    options: ["Augustus", "Alexander the Great", "Julius Caesar", "Nero"],
    answer: 2
  },
  {
    id: 28,
    category: "general",
    difficulty: "hard",
    text: "In which year did the Soviet Union officially dissolve?",
    options: ["1989", "1991", "1995", "1988"],
    answer: 1
  },
  {
    id: 29,
    category: "general",
    difficulty: "hard",
    text: "What is the name for a period of ten years?",
    options: ["Century", "Millennium", "Decade", "Epoch"],
    answer: 2
  },
  {
    id: 30,
    category: "general",
    difficulty: "hard",
    text: "Which author created the character Sherlock Holmes?",
    options: ["Agatha Christie", "Sir Arthur Conan Doyle", "Edgar Allan Poe", "Charles Dickens"],
    answer: 1
  },
  {
    id: 31,
    category: "general",
    difficulty: "hard",
    text: "What is the only US state to have a coastline on the Atlantic Ocean and the Gulf of Mexico?",
    options: ["Texas", "Florida", "California", "Louisiana"],
    answer: 1
  },
  {
    id: 32,
    category: "general",
    difficulty: "hard",
    text: "The concept of 'Tabula Rasa' suggests the mind is what at birth?",
    options: ["Full of innate ideas", "A blank slate", "Pre-programmed", "Naturally evil"],
    answer: 1
  },
  {
    id: 33,
    category: "general",
    difficulty: "hard",
    text: "What is the term for a word that reads the same backward or forward?",
    options: ["Anagram", "Homonym", "Palindrome", "Synonym"],
    answer: 2
  },

  // --- Math (Easy) ---
  {
    id: 34,
    category: "math",
    difficulty: "easy",
    text: "What is 7 + 5?",
    options: ["11", "12", "13", "14"],
    answer: 1
  },
  {
    id: 35,
    category: "math",
    difficulty: "easy",
    text: "If you have 10 apples and eat 3, how many are left?",
    options: ["6", "7", "8", "9"],
    answer: 1
  },
  {
    id: 36,
    category: "math",
    difficulty: "easy",
    text: "What is 4 multiplied by 2?",
    options: ["6", "8", "10", "42"],
    answer: 1
  },
  {
    id: 37,
    category: "math",
    difficulty: "easy",
    text: "How many sides does a triangle have?",
    options: ["2", "3", "4", "5"],
    answer: 1
  },
  {
    id: 38,
    category: "math",
    difficulty: "easy",
    text: "What is 15 divided by 3?",
    options: ["3", "4", "5", "6"],
    answer: 2
  },
  {
    id: 39,
    category: "math",
    difficulty: "easy",
    text: "Which number is greater: 25 or 15?",
    options: ["15", "25", "They are equal", "Cannot be determined"],
    answer: 1
  },
  {
    id: 40,
    category: "math",
    difficulty: "easy",
    text: "What is 50 + 50?",
    options: ["50", "100", "150", "200"],
    answer: 1
  },
  {
    id: 41,
    category: "math",
    difficulty: "easy",
    text: "Which of these is an even number?",
    options: ["7", "11", "13", "16"],
    answer: 3
  },
  {
    id: 42,
    category: "math",
    difficulty: "easy",
    text: "What is the next number in the sequence: 2, 4, 6, 8, ...?",
    options: ["9", "10", "11", "12"],
    answer: 1
  },
  {
    id: 43,
    category: "math",
    difficulty: "easy",
    text: "What is the result of 9 - 4?",
    options: ["3", "4", "5", "6"],
    answer: 2
  },
  {
    id: 44,
    category: "math",
    difficulty: "easy",
    text: "How many zeroes are in the number one thousand?",
    options: ["2", "3", "4", "5"],
    answer: 1
  },
  
  // --- Math (Medium) ---
  {
    id: 45,
    category: "math",
    difficulty: "medium",
    text: "What is 8 x 9 + 4?",
    options: ["72", "76", "80", "78"],
    answer: 1
  },
  {
    id: 46,
    category: "math",
    difficulty: "medium",
    text: "If $x = 5$, what is $3x - 2$?",
    options: ["10", "13", "15", "17"],
    answer: 1
  },
  {
    id: 47,
    category: "math",
    difficulty: "medium",
    text: "What is the area of a rectangle with length 6 cm and width 4 cm?",
    options: ["10 cm²", "12 cm²", "24 cm²", "20 cm²"],
    answer: 2
  },
  {
    id: 48,
    category: "math",
    difficulty: "medium",
    text: "What is the value of $\\frac{1}{2} + \\frac{1}{4}$?",
    options: ["$\frac{1}{6}$", "$\frac{2}{4}$", "$\frac{3}{4}$", "1"],
    answer: 2
  },
  {
    id: 49,
    category: "math",
    difficulty: "medium",
    text: "What is 20% of 100?",
    options: ["10", "20", "50", "80"],
    answer: 1
  },
  {
    id: 50,
    category: "math",
    difficulty: "medium",
    text: "Solve for $y$: $2y - 1 = 9$",
    options: ["4", "5", "8", "10"],
    answer: 1
  },
  {
    id: 51,
    category: "math",
    difficulty: "medium",
    text: "What is the square root of 64?",
    options: ["4", "8", "16", "32"],
    answer: 1
  },
  {
    id: 52,
    category: "math",
    difficulty: "medium",
    text: "How many degrees are in a straight line?",
    options: ["90°", "180°", "270°", "360°"],
    answer: 1
  },
  {
    id: 53,
    category: "math",
    difficulty: "medium",
    text: "If a shirt costs $40 and is on sale for 10% off, what is the discount amount?",
    options: ["$4", "$10", "$30", "$36"],
    answer: 0
  },
  {
    id: 54,
    category: "math",
    difficulty: "medium",
    text: "The perimeter of a square with a side length of 5 meters is:",
    options: ["10 m", "15 m", "20 m", "25 m"],
    answer: 2
  },
  {
    id: 55,
    category: "math",
    difficulty: "medium",
    text: "What is the value of $(-2)^3$?",
    options: ["4", "8", "-4", "-8"],
    answer: 3
  },

  // --- Math (Hard) ---
  {
    id: 56,
    category: "math",
    difficulty: "hard",
    text: "If $\\log_{2}(x) = 3$, what is the value of $x$?",
    options: ["6", "8", "9", "16"],
    answer: 1
  },
  {
    id: 57,
    category: "math",
    difficulty: "hard",
    text: "Solve the quadratic equation: $x^2 - 5x + 6 = 0$.",
    options: ["$x=1, 6$", "$x=2, 3$", "$x=-2, -3$", "$x=5, 1$"],
    answer: 1
  },
  {
    id: 58,
    category: "math",
    difficulty: "hard",
    text: "What is the derivative of $f(x) = x^3$?",
    options: ["$x^2$", "$3x^2$", "$3x$", "$3x^4$"],
    answer: 1
  },
  {
    id: 59,
    category: "math",
    difficulty: "hard",
    text: "In a right triangle, if the two legs are 3 and 4, what is the hypotenuse?",
    options: ["5", "6", "7", "9"],
    answer: 0
  },
  {
    id: 60,
    category: "math",
    difficulty: "hard",
    text: "How many permutations are there of the letters in the word 'CAT'?",
    options: ["3", "6", "9", "27"],
    answer: 1
  },
  {
    id: 61,
    category: "math",
    difficulty: "hard",
    text: "What is the value of $\\pi$ (pi) rounded to two decimal places?",
    options: ["3.10", "3.14", "3.41", "3.16"],
    answer: 1
  },
  {
    id: 62,
    category: "math",
    difficulty: "hard",
    text: "The sum of the interior angles of a pentagon is:",
    options: ["360°", "540°", "720°", "900°"],
    answer: 1
  },
  {
    id: 63,
    category: "math",
    difficulty: "hard",
    text: "What is the result of $\\int 2x dx$?",
    options: ["$2 + C$", "$x^2 + C$", "$2x^2 + C$", "$1 + C$"],
    answer: 1
  },
  {
    id: 64,
    category: "math",
    difficulty: "hard",
    text: "Simplify the expression $\\frac{x^2 - 4}{x - 2}$ for $x \neq 2$.",
    options: ["$x - 2$", "$x + 2$", "$x^2 + 2$", "$4 - x$"],
    answer: 1
  },
  {
    id: 65,
    category: "math",
    difficulty: "hard",
    text: "What is the term for a line that touches a curve at a single point?",
    options: ["Chord", "Secant", "Radius", "Tangent"],
    answer: 3
  },
  {
    id: 66,
    category: "math",
    difficulty: "hard",
    text: "If $f(x) = 2x$ and $g(x) = x + 1$, what is $f(g(2))$?",
    options: ["3", "4", "5", "6"],
    answer: 3
  },

  // --- Science (Easy) ---
  {
    id: 67,
    category: "science",
    difficulty: "easy",
    text: "Water's chemical formula is:",
    options: ["CO2", "H2O", "O2", "H2"],
    answer: 1
  },
  {
    id: 68,
    category: "science",
    difficulty: "easy",
    text: "Which planet is known as the Red Planet?",
    options: ["Venus", "Earth", "Mars", "Jupiter"],
    answer: 2
  },
  {
    id: 69,
    category: "science",
    difficulty: "easy",
    text: "What force keeps us on the ground?",
    options: ["Friction", "Tension", "Gravity", "Magnetism"],
    answer: 2
  },
  {
    id: 70,
    category: "science",
    difficulty: "easy",
    text: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: 2
  },
  {
    id: 71,
    category: "science",
    difficulty: "easy",
    text: "The nearest star to Earth is:",
    options: ["Alpha Centauri", "Proxima Centauri", "The Moon", "The Sun"],
    answer: 3
  },
  {
    id: 72,
    category: "science",
    difficulty: "easy",
    text: "What is the boiling point of water in Celsius?",
    options: ["0°C", "50°C", "100°C", "212°C"],
    answer: 2
  },
  {
    id: 73,
    category: "science",
    difficulty: "easy",
    text: "What is the largest organ of the human body?",
    options: ["Heart", "Liver", "Brain", "Skin"],
    answer: 3
  },
  {
    id: 74,
    category: "science",
    difficulty: "easy",
    text: "Which state of matter has a definite volume but no definite shape?",
    options: ["Solid", "Liquid", "Gas", "Plasma"],
    answer: 1
  },
  {
    id: 75,
    category: "science",
    difficulty: "easy",
    text: "Which animal group does a snake belong to?",
    options: ["Mammals", "Birds", "Reptiles", "Amphibians"],
    answer: 2
  },
  {
    id: 76,
    category: "science",
    difficulty: "easy",
    text: "The center of an atom is called the:",
    options: ["Electron cloud", "Shell", "Nucleus", "Proton"],
    answer: 2
  },
  {
    id: 77,
    category: "science",
    difficulty: "easy",
    text: "What is the chemical symbol for Gold?",
    options: ["Ag", "Fe", "Au", "Na"],
    answer: 2
  },
  
  // --- Science (Medium) ---
  {
    id: 78,
    category: "science",
    difficulty: "medium",
    text: "What is the process by which plants make their food?",
    options: ["Respiration", "Transpiration", "Photosynthesis", "Digestion"],
    answer: 2
  },
  {
    id: 79,
    category: "science",
    difficulty: "medium",
    text: "What subatomic particle has a positive charge?",
    options: ["Electron", "Neutron", "Proton", "Photon"],
    answer: 2
  },
  {
    id: 80,
    category: "science",
    difficulty: "medium",
    text: "Which unit is used to measure electric current?",
    options: ["Volt", "Ohm", "Watt", "Ampere"],
    answer: 3
  },
  {
    id: 81,
    category: "science",
    difficulty: "medium",
    text: "What type of rock is formed from cooled magma or lava?",
    options: ["Sedimentary", "Metamorphic", "Igneous", "Volcanic"],
    answer: 2
  },
  {
    id: 82,
    category: "science",
    difficulty: "medium",
    text: "In the human body, which structure connects muscle to bone?",
    options: ["Ligament", "Cartilage", "Tendon", "Nerve"],
    answer: 2
  },
  {
    id: 83,
    category: "science",
    difficulty: "medium",
    text: "What is the main component of the air we breathe?",
    options: ["Oxygen", "Carbon Dioxide", "Argon", "Nitrogen"],
    answer: 3
  },
  {
    id: 84,
    category: "science",
    difficulty: "medium",
    text: "Sound travels fastest through which medium?",
    options: ["Air", "Water", "Vacuum", "Steel"],
    answer: 3
  },
  {
    id: 85,
    category: "science",
    difficulty: "medium",
    text: "What is the $\\text{pH}$ value of a neutral substance?",
    options: ["0", "5", "7", "14"],
    answer: 2
  },
  {
    id: 86,
    category: "science",
    difficulty: "medium",
    text: "Who proposed the three laws of motion and universal gravitation?",
    options: ["Galileo Galilei", "Albert Einstein", "Isaac Newton", "Nikola Tesla"],
    answer: 2
  },
  {
    id: 87,
    category: "science",
    difficulty: "medium",
    text: "A rainbow is an example of which phenomenon of light?",
    options: ["Reflection", "Refraction", "Diffraction", "Dispersion"],
    answer: 3
  },
  {
    id: 88,
    category: "science",
    difficulty: "medium",
    text: "Which layer of the atmosphere is closest to Earth's surface?",
    options: ["Stratosphere", "Mesosphere", "Thermosphere", "Troposphere"],
    answer: 3
  },

  // --- Science (Hard) ---
  {
    id: 89,
    category: "science",
    difficulty: "hard",
    text: "The half-life of a radioactive isotope is 10 days. How much of a 100g sample remains after 30 days?",
    options: ["50g", "25g", "12.5g", "6.25g"],
    answer: 2
  },
  {
    id: 90,
    category: "science",
    difficulty: "hard",
    text: "Which particle mediates the strong nuclear force?",
    options: ["Photon", "W/Z Boson", "Graviton", "Gluon"],
    answer: 3
  },
  {
    id: 91,
    category: "science",
    difficulty: "hard",
    text: "What is the most abundant element in the Earth's crust?",
    options: ["Iron", "Silicon", "Oxygen", "Aluminum"],
    answer: 2
  },
  {
    id: 92,
    category: "science",
    difficulty: "hard",
    text: "What biological process converts $\\text{RNA}$ into $\\text{DNA}$?",
    options: ["Transcription", "Translation", "Reverse Transcription", "Replication"],
    answer: 2
  },
  {
    id: 93,
    category: "science",
    difficulty: "hard",
    text: "The maximum number of electrons in the N-shell ($n=4$) of an atom is:",
    options: ["8", "18", "32", "50"],
    answer: 2
  },
  {
    id: 94,
    category: "science",
    difficulty: "hard",
    text: "Which of these is a noble gas?",
    options: ["Chlorine", "Fluorine", "Neon", "Nitrogen"],
    answer: 2
  },
  {
    id: 95,
    category: "science",
    difficulty: "hard",
    text: "The acceleration due to gravity on Earth is approximately:",
    options: ["$9.8 \text{ m/s}^2$", "$1.6 \text{ m/s}^2$", "$10 \text{ m/s}^2$", "$32 \text{ ft/s}^2$"],
    answer: 0
  },
  {
    id: 96,
    category: "science",
    difficulty: "hard",
    text: "What is the primary function of the mitochondria in a cell?",
    options: ["Protein synthesis", "Waste disposal", "Energy production (ATP)", "Cell division"],
    answer: 2
  },
  {
    id: 97,
    category: "science",
    difficulty: "hard",
    text: "The phenomenon where light bends as it passes from one medium to another is called:",
    options: ["Diffraction", "Interference", "Refraction", "Polarization"],
    answer: 2
  },
  {
    id: 98,
    category: "science",
    difficulty: "hard",
    text: "Who developed the binomial nomenclature system for naming organisms?",
    options: ["Charles Darwin", "Gregor Mendel", "Carolus Linnaeus", "Louis Pasteur"],
    answer: 2
  },
  {
    id: 99,
    category: "science",
    difficulty: "hard",
    text: "The mass number of an atom is the total number of which particles?",
    options: ["Protons only", "Neutrons only", "Protons and Neutrons", "Protons, Neutrons, and Electrons"],
    answer: 2
  }
];