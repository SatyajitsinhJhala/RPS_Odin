    const choices =['rock','paper','scissor'];
    let player_score=0;
    let comp_score=0;
function compch(){
    const comp_pick = choices[Math.floor(Math.random()*choices.length)];
    return comp_pick;
}
let selected_opt='None';
function updateselected_opt(pl_option){
    selected_opt=pl_option;
    console.log("player picked "+pl_option);
    comp_opt=compch();
    console.log("computer picked "+comp_opt);
    compare(selected_opt, comp_opt);
}

document.getElementById('rock').addEventListener('click',function(){
    updateselected_opt('rock');
});
document.getElementById('paper').addEventListener('click',function(){
    updateselected_opt('paper');
});
document.getElementById('scissor').addEventListener('click',function(){
    updateselected_opt('scissor');
});

function compare(selected_opt,comp_opt){
  
    if(selected_opt=='rock'&&comp_opt=='scissor'){
        ++player_score;
        
    }else if(selected_opt=='scissor'&&comp_opt=='rock'){
        ++comp_score;
        
    }else if(selected_opt=='paper'&&comp_opt=='rock'){
        ++player_score;
        
    }else if(selected_opt=='rock'&&comp_opt=='paper'){
        ++comp_score;
        
    }else if(selected_opt=='scissor'&&comp_opt=='paper'){
        ++player_score;
        
    }else if(selected_opt=='paper'&&comp_opt=='scissor'){
        ++comp_score;
        
    }else if(selected_opt==comp_opt){
        document.getElementById('display').textContent = "It is a TIE-CONTINUE";
    }
    console.log("player: "+ player_score+" computer: "+ comp_score);
    document.getElementById('p_s').textContent = player_score;
    document.getElementById('c_s').textContent = comp_score;
    
    
    if(player_score==5){
        // console.log("The player has WON");
        document.getElementById('display').textContent = "The player has WON";
        player_score=0;
        comp_score=0;
    }else if(comp_score==5){
        document.getElementById('display').textContent = "The computer has won";
        player_score=0;
        comp_score=0;
    }
}
