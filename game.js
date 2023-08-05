
function compch(){
    const choices =["Rock","Paper","Scissors"];
    const compick = choices[Math.floor(Math.random*choices.length)];
    console.log(compick);
    return compick;
}

