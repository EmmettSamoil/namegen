//Event listeners
document.getElementById('random').addEventListener('click', genRandom);
document.getElementById('all').addEventListener('click', genAll);

//Containers
let nameArray = [" 'Crusher' ", " 'The Scientist' ", " 'Twinkle-Toes' ", " 'The Coder' ", " 'The jester' ", " 'The Sloth' ", " 'Quick-Silver' "];
let firstName = document.getElementById('firstN');
let lastName = document.getElementById('lastN');

//Function
function genRandom () {
    let randomName = nameArray[Math.floor(Math.random() * nameArray.length)];
    // console.log( + nameArray[0])
   document.getElementById('output').innerHTML = firstName.value + randomName + lastName.value;
}

function genAll () {
    document.getElementById('output').innerHTML = '';
    for (let i = 0; i < nameArray.length; i++) {
        console.log(nameArray[i]);
        document.getElementById('output').innerHTML += firstName.value + nameArray[i] + lastName.value + " , " ;
        // document.write("\n"); 
    }
}

