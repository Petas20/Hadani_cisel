`use strict`;

/*vybrani HTML elementu (.trida ; #ID ; element)*/
console.log (document.querySelector(`.message`).textContent);

/* DOM - Document Object Model a manipulace s nim */
/* strukturovana JS reprezentace HTML dokumentu (webove stranky)*/
/* stromova struktura*/
/* document - HTML - HEAD a BODY */
/* DOM je web API (application programming interface) */

/* zmena hodnoty elementu  */
document.querySelector(`.message`).textContent=`Hádej cislo od 1 do 20`;
document.querySelector(`.guess`).value=0;

/* vygenerovani nahodneho cisla */
let secret=Math.floor(Math.random()*20)+1;

let score=20;
let highscore=0;

/* event listener - naslouchac udalosti + event handler (funkce) */
document.querySelector(`.check`).addEventListener(`click`,function(){
    let guess=Number(document.querySelector(`.guess`).value);

    if(!guess){
        document.querySelector(`.message`).textContent=`Musíš zadat nějaké číslo`;
    }
    else if(guess===secret){
        document.querySelector(`.message`).textContent=`SPRÁVNĚ !!!`;
        document.querySelector(`body`).style.backgroundColor=`green`;
        document.querySelector(`.number`).style.width=`80rem`; 
        document.querySelector(`.number`).textContent=secret;

        if (highscore<score){
            highscore=score;
            document.querySelector(`.highscore`).textContent=highscore;
        }


    }
    /* ternarni zapis */
    /* else if (guess !== secret){
        if(score > 0){
            document.querySelector(.`message`).textContent = 
        }
    } */
    else if(guess>secret){
        if (score>1){
            document.querySelector(`.message`).textContent=`Skoro, zkus menší číslo`;
            score--;
            document.querySelector(`.score`).textContent=score;
        }
        else {
            document.querySelector(`.message`).textContent=`KONEC HRY, na 20 pokusu jsi neuhádl(a) číslo od 1 do 20. Zamysli se nad sebou...:)`
            document.querySelector(`body`).style.backgroundColor=`red`;
            score=0;
            document.querySelector(`.score`).textContent=score;
        }
    }
    else if(guess<secret){
        if(score>1){
            document.querySelector(`.message`).textContent=`Skoro, zkus přidat`;
            score--;
            document.querySelector(`.score`).textContent=score;
        }
        else {
            document.querySelector(`.message`).textContent=`KONEC HRY, na 20 pokusu jsi neuhádl(a) číslo od 1 do 20. Zamysli se nad sebou...:)`
            document.querySelector(`body`).style.backgroundColor=`red`;
            score=0;
            document.querySelector(`.score`).textContent=score;
        }
    }
});
document.querySelector(`.again`).addEventListener(`click`,function(){
    score=20;
    secret=Math.floor(Math.random()*20)+1;
    document.querySelector(`.message`).textContent=`Hádej číslo od 1 do 20`;
    document.querySelector(`.score`).textContent=`20`;
    document.querySelector(`.number`).textContent=`?`;
    document.querySelector(`.guess`).value=0;
    document.querySelector(`body`).style.backgroundColor=`black`;
    document.querySelector(`.number`).style.width=`15rem`;
});




