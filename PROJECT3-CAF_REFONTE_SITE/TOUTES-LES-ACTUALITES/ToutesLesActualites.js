
/****************FORMULAIRE DE CONTACT****************/

//VARIABLES DES BOUTONS DU FORMULAIRE DE CONTACT
const Connexion = document.querySelector('.BoutonConnexion');
const PopUp = document.querySelector('.PopUpConnexion');
const Fermer = document.querySelector('.FermerConnexion');
const FormulaireConnexion = document.querySelector('.FormulaireConnexion');

//OUVRIR POP UP DE CONTACT
Connexion.addEventListener('click', () => {
    PopUp.style.display = 'block';   
});

//FERMER POP UP DE CONTACT
Fermer.addEventListener('click', () => {
   PopUp.style.display = 'none'; 
});

//FERMER POP UP EN CLIQUANT EN DEHORS DE CELLE-CI
window.addEventListener('click', (e) => {
    if (e.target === PopUp) {
        PopUp.style.display = 'none';
    }
});

/****************POP UP ACTUALITES GAUCHE 1 ****************/

//VARIABLES DES BOUTONS DU FORMULAIRE DE CONTACT
const PopUpGauche1 = document.querySelector('.PopUpGauche1');
const LireLArticle1 = document.querySelector('.LireLArticle1');
const FermerPopUpGauche1 = document.querySelector('.FermerPopUpGauche1');

//OUVRIR POP UP DE CONTACT
LireLArticle1.addEventListener('click', () => {
    PopUpGauche1.style.display = 'block';   
});

//FERMER POP UP DE CONTACT
FermerPopUpGauche1.addEventListener('click', () => {
   PopUpGauche1.style.display = 'none'; 
});

//FERMER POP UP EN CLIQUANT EN DEHORS DE CELLE-CI
window.addEventListener('click', (e) => {
    if (e.target === PopUpGauche1) {
        PopUpGauche1.style.display = 'none';
    }
});
