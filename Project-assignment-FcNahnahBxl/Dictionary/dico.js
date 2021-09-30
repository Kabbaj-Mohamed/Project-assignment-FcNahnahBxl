//API : https://dictionaryapi.dev/
// Example request : https://api.dictionaryapi.dev/api/v2/entries/en/hello
const button = document.querySelector('#button')


button.addEventListener('click', rechercher)



function rechercher() {
      

    //récupérer le texte entré par l'utilisateur
let word = document.querySelector("#text").value;

//lien de l'api
let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}` ;
fetch(url)
.then(res=>res.json())
.then(data=>{
        console.log(data)
        document.querySelector("#nom").innerHTML= word;                            // afficher la valeur (mot) saisi dans l'input :  "Hello"
        document.querySelector('#phonetics').innerHTML=data[0].phonetics[0].text;
        document.querySelector('#definition').innerHTML=data[0].meanings[0].definitions[0].definition;
        document.querySelector('#example').innerHTML=data[0].meanings[0].definitions[0].example
    })

    }

