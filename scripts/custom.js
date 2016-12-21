"use strict";
const 
    ARRAYOFSTEPS = [
        "##### Preparing to load Motivation. #####",
        "#### Preparing mind to be motivated. ####",
        "# Mind starting motivational subroutine #",
        "## Motivational booting into workmode. ##",
        "# Starting anti-procrastination program #",
        "##### Ready to start 'motivation'. ######",
        "########## Starting motivation ##########"
    ],
    addSentenceOnScreen = function(sentence){
        return new Promise(function(resolve,err){
            $("#load_motivation").find('p').removeClass('active');
            $("#load_motivation").append('<p class="active">'+sentence+"</p>");
            setTimeout(resolve,3800);
        });
    },
    animateLoadingBar = function(i){
        $('#progress-bar').css('width',Math.round(((i+1)/ARRAYOFSTEPS.length)*100)+"%");
    },
    addSentencesOnScreen = function(i){
        if(i<ARRAYOFSTEPS.length){
            animateLoadingBar(i);
            addSentenceOnScreen(ARRAYOFSTEPS[i]).then(function(){addSentencesOnScreen(++i)});
        } else {
            showGrumpy();
        }
    },
    showGrumpy = function(){
        $('#grumpyrow').css({'height': '575px', top: 0});
    },
    runConsole = function(){
        addSentencesOnScreen(0);
    };

$('#start-loading').on('click',runConsole);
$('#reset-loading').on('click',function(){location.reload();});