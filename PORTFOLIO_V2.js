//TRADUCTION FRANCAIS/ANGLAIS
const button = document.querySelector('.English'); // Sélectionne le bouton 'English'

let isTranslated = false; // État de la traduction

button.addEventListener('click', function() { // Ajoute un écouteur d'événement au clic sur le bouton
    const translations = {
        'Bienvenue sur mon portfolio !': 'Welcome to my portfolio!',
        "Je m'appelle Elise, j'ai 29 ans et je suis actuellement en Bachelor Développement Web en alternance.": "My name is Elise, I am 29 years old and I am currently in a Web Development Bachelor's degree in work-study.",
        "Concernant les langages de programmation, j'ai pu apprendre le HTML et le CSS lors de mon début de formation en BTS Services Informatiques aux Organisations.":"Regarding programming languages, I was able to learn HTML and CSS at the beginning of my school lectures in BTS Services Informatiques aux Organisations.",
        "Par la suite, j'ai appris de manière autodidacte le SQL, Python, JavaScript, et bien d'autres afin d'avoir toutes les compétences nécessaires au développement Fullstack.":"Subsequently, I learned SQL, Python, JavaScript, and many others in a self-taught manner in order to have all the skills necessary for Full Stack development.",
        "Ici, vous pourrez voir les projets que j'ai développés, qui vous permettront de comprendre mon niveau de compétences.":"Here, you will be able to see the projects I have developed, which will allow you to understand my skill level.",
        "D'autres projets viendront s'ajouter au fur et à mesure de mon apprentissage.":"Other projects will be added as I progress in my learning.",
        "Bonne visite !":"Enjoy your visit!",
        "MES PROJETS :":"MY PROJECTS :",
        "PIPOUNES CREATION VERSION BTS":"PIPOUNES CREATION BTS VERSION",
        "C'est un site que j'ai créé au début du BTS SIO, pour m'entraîner à coder un site de A à Z, avec seulement les bases apprises, mais pas complètes.":"This is a website that I created at the beginning of the BTS SIO, to practice coding a website from A to Z, with only the basics learned, but not complete.",
        'Langages utilisés': 'Used languages',
        "Points positifs": "Positive points",
        "Tous les liens redirigent vers leur page correspondante.":"All links redirect to their corresponding page.",
        "Un formulaire d'inscription à la Newsletter du site.":"A registration form for the site's Newsletter.",
        "Un endroit pour se connecter ou créer un compte client.":"A place to log in or create a client account.",
        "Points négatifs": "Negative points",
        "Code basique, manque de structure et de lisibilité.":"Basic code, lack of structure and readability.",
        "Pour gérer tes tâches du quotidien avec facilité, encouragements et mignonnerie, quoi de mieux ?":"To manage your daily tasks with ease, encouragement, and cuteness, what could be better?",
        "Que ce soit pour le travail, les courses, ou même les projets personnels, elle est faite pour toi !":"Whether it's for work, shopping, or even personal projects, it's made for you!",
        "Toutes les cases sont modifiables.":"All boxes are editable.",
        "Possibilité de cocher les tâches effectuées.":"Ability to check off completed tasks.",
        "Possibilité de remettre le tableau à neuf.":"Ability to reset the board.",
        "Anglais et Français disponibles.":"English and French available.",
        "Mode clair et mode sombre disponibles.":"Light mode and dark mode available.",
        "Encouragements si tâches effectuées.":"Encouragements if tasks are completed.",
        "Rappels de tâches non remplies avant mise à zéro du tableau.":"Reminders of uncompleted tasks before resetting the board.",
        "Si jamais l'envie te prends de jouer au Tic Tac Toe, fonce !":"If you ever feel like playing Tic Tac Toe, go for it!",
        "Toutes les cases sont vides au départ.":"All boxes are empty at the start.",
        "Il n'est pas possible d'écrire deux fois dans la même case ou de modifier la valeur d'une case.":"It is not possible to write twice in the same box or to modify the value of a box.",
        "Un alignement de 3 mêmes sumboles fait gagner son utilisateur.":"Aligning 3 of the same symbols makes its user win.",
        "Facile de création.":"Easy to create.",
        "COMPETENCES":"SKILLS",
        "Connaissances sur 5":"Knowledge out of 5",
        "La base ! Dans différents projets.":"The basics! In various projects.",
        "Dans la ToDoList et dans des projets à venir.":"In the ToDoList and in upcoming projects.",
        "Appris en autodidacte.":"Learned in a self-taught manner.",
        "Quelques bases apprises en BTS SIO puis en autodidacte.":"Some basics learned in BTS SIO and then self-taught.",
        "A VENIR":"COMING SOON",
        "OUTILS INFORMATIQUES":"COMPUTER TOOLS",
        "Coder mes projets.":"Coding my projects.",
        "Apprendre différents langagess de programmation.":"Learning different programming languages.",
        "Créer/Modifier divers documents, bases de données futures.":"Creating/Modifying various documents, future databases.",
        "Suivre des développeurs et partager mes projets.":"Following developers and sharing my projects.",
        "Rejoins-moi sur LinkedIn et GitHub.":"Join me on LinkedIn and GitHub."
    };

    //Créer un objet inverse pour la traduction retour (Français <-> Anglais)
    const reverseTranslations = {}; // Objet pour les traductions inverses
    for (const key in translations) { // Parcourt chaque clé dans l'objet de traductions
        reverseTranslations[translations[key]] = key; // Ajoute la traduction inverse
    }

    // Choisir le dictionnaire approprié selon l'état
    const dictionary = isTranslated ? reverseTranslations : translations; // Dictionnaire à utiliser
    
    // Parcourir et traduire les éléments
    document.querySelectorAll('h1, h2, h3, h4, p, a, button, strong, div').forEach(element => {
    // Traduire seulement le texte direct (pas les enfants)
    if (element.childNodes.length > 0) {
        element.childNodes.forEach(node => {
            if (node.nodeType === 3) {
                const text = node.textContent.trim().replace(/\s+/g, ' ');
                if (dictionary[text]) {
                    node.textContent = dictionary[text];
                }
            }
        });
    }
});

    // Changer le texte du bouton
    button.textContent = isTranslated ? 'English' : 'Français';
    
    // Basculer l'état de traduction
    isTranslated = !isTranslated;
});