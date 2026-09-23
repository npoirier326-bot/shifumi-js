const boutons = document.querySelectorAll('.choix');
const affichageResult = document.getElementById('resultat');
const affichageVictoire = document.getElementById('gagner');
const affichageDéfaite = document.getElementById('perdre');
const affichageEgaliter = document.getElementById('egaliter');
const boutonReessayer = document.getElementById('reessayer');
const attaque = ['Pierre', 'Feuille', 'Ciseaux'];
const score = {gagner: 0,égaliter: 0, perdre: 0};

function comptabiliser(){
    affichageVictoire.textContent = score.gagner + ' victoire(s)';
    affichageDéfaite.textContent = score.perdre + ' défaite(s)';
    affichageEgaliter.textContent = score.égaliter + ' égalité(s)'
}

    boutons.forEach(button => {
        button.addEventListener('click',() =>{
            const choixDuJoueur = button.textContent;
            const choixDuRobot = attaque[Math.floor(Math.random()*3)];
            let issue;
            if (choixDuJoueur==choixDuRobot){
                issue= 'égaliter';
            }
            else if(
                (choixDuJoueur== 'Pierre' && choixDuRobot=='Ciseaux')||
                (choixDuJoueur== 'Feuille' && choixDuRobot=='Pierre')||
                (choixDuJoueur== 'Ciseaux' && choixDuRobot=='Feuille')
            ){
                issue= 'gagner';
            }
            else {
                issue= 'perdre';
            }
            score[issue]++;
            comptabiliser();
            affichageResult.textContent = "J'ai jouer " + choixDuJoueur + ", le robot a joué " + choixDuRobot + ", le résultat : " + issue;
            
        });
    });
    
    boutonReessayer.addEventListener('click', () =>{
        score.gagner= 0;
        score.perdre= 0;
        score.égaliter= 0;
        comptabiliser();
        affichageResult.textContent = '';
    });

