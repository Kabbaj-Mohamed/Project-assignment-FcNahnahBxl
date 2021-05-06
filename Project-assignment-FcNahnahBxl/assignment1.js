cv = {
    Nom: 'Kabbaj',
    Prénom: ' Mohamed-Saïd ',
    Age: '32',
    Adresse: ['Belgium.', 'Brussel.', 'Wezembeek-Oppem'],
    Langues: ['French ', 'Dutch ', 'English'],
    Expériences: ['Accountant'],
    Skills: [' Html', ' Css', 'Javascript'],
    Formation: { Nom: 'Intec Brussel', Lieu: 'Auderghem.', },
    Hobbies: ['Football', 'Basketball', 'Tennis'],
    Infos: { Gsm: '0435 957 604', email: 'msk@gmail.com' }
}

let output1 = " Hello my name is " + cv.Nom + cv.Prénom + 'and I am ' + cv.Age + ' years old.'
let output2 = " I come from " + cv.Adresse[0] + " I'm living in " + cv.Adresse[2] + " not  far from " + cv.Adresse[1]
let output3 = " I Can speak "+ cv.Langues[0]+ cv.Langues[1] +"and "+ cv.Langues[2]
let output4 = ". I've worked as an "+ cv.Expériences+" but now i want to become a webdevloper so i'm studing "+ cv.Skills[0]+","+ cv.Skills[1]+" and "+ cv.Skills[2] +" at "+ cv.Formation.Nom + " in "+cv.Formation.Lieu
let output5= " During my free time, i play "+ cv.Hobbies[0]
let output6= "If you want to play with me contact me on " + cv.Infos.Gsm +" or by email : " + cv.Infos.email


console.log( output1 + output2 + output3 + output4+ output5+ output6)



