// ==UserScript==
// @name         Energy Air Game Bot
// @namespace    https://github.com/Tomzilla12/Energy-Air-Game-Bot
// @version      1.3
// @description  Go through the Energy Air Game automatically
// @author       Tomzilla12: https://github.com/Tomzilla12
// @match        *game.energy.ch/*
// @run-at       document-end
// @grant        none
// @updateURL    https://openuserjs.org/meta/Tomzilla12/Energy_Air_Game_Bot.meta.js
// @downloadURL  https://openuserjs.org/install/Tomzilla12/Energy_Air_Game_Bot.user.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// ==/UserScript==

(function($) {
    $.fn.isBgColor = function(color) {
        var thisBgColor = this.eq(0).css('backgroundColor');
        var computedColor = $('<div/>').css({ 
            backgroundColor: color
        }).css('backgroundColor');
        return thisBgColor === computedColor;
    }
})(jQuery);

(function() {
    'use strict';
    
    var phone = "XXX";
    var questions = [
        {solution:"1", question:"Wie viele Sitzplätze hat das Stade de Suisse bei Sportveranstaltungen?"},
        {solution:"1", question:"Welches Stadion ist das grösste der Schweiz?"},
        {solution:"1", question:"Wann fand das Energy Air letztes Jahr statt?"},
        {solution:"1", question:"Welcher Energy Air Act aus den letzten Jahren stand nur mit seinem Gitarristen auf der Bühne?"},
        {solution:"3", question:"Welche Plätze gibt es am Energy Air? "},
        {solution:"1", question:"Welcher Künstler stand NOCH NIE auf der Energy Air Bühne?"},
        {solution:"3", question:"Welche Farben dominieren das Energy Air Logo?"},
        {solution:"2", question:"Was bedeutet Air auf Deutsch?"},
        {solution:"2", question:"Welcher DJ stand noch nie auf der Energy Air Bühne?"},
        {solution:"2", question:"Wie viel kostet die Energy Air App? "},
        {solution:"1", question:"Welcher Act stand schon einmal auf der Energy Air Bühne?"},
        {solution:"3", question:"Wer hatte den letzten Auftritt am Energy Air 2016?"},
        {solution:"3", question:"Wie lautet der offizielle Energy Air Hashtag?"},
        {solution:"3", question:"Welcher dieser Acts Stand schon auf der Stade de Suisse Bühne?"},
        {solution:"3", question:"Wo findet das Energy Air statt?"},
        {solution:"1", question:"Wann ist die offizielle Türöffnung beim Energy Air?"},
        {solution:"3", question:"Wie oft pro Jahr findet das Energy Air statt? "},
        {solution:"1", question:"Von welchem vergangenen Energy Air Act ist der Song «Angelina»?"},
        {solution:"3", question:"Was ist das Energy Air als einziger Energy Event?"},
        {solution:"1", question:"Wie viele Male standen Dabu Fantastic bereits auf der Energy Air Bühne?"},
        {solution:"1", question:"Von welchem ehemaligen Energy Air Act ist der Song «Bilder im Kopf»?"},
        {solution:"1", question:"In welchem Jahr stand OneRepublic auf der Bühne des Energy Air?"},
        {solution:"3", question:"Wie viele Tage dauert das Energy Air? "},
        {solution:"1", question:"Welche deutsche Sängerin stand letztes Jahr auf der Energy Air Bühne?"},
        {solution:"3", question:"Welcher Act stand NOCH NIE auf der Energy Air Bühne?"},
        {solution:"1", question:"Ab wann darf man, ohne eine erwachsene Begleitperson, am Energy Air teilnehmen?"},
        {solution:"1", question:"Wann fand das erste Energy Air statt?"},
        {solution:"1", question:"Wie hiess die Energy Air Hymne 2015?"},
        {solution:"3", question:"In welcher Schweizer Stadt hat Energy KEIN Radiostudio?"},
        {solution:"1", question:"Wie viele Tickets werden für das Energy Air verlost?"},
        {solution:"1", question:"Wann wurde das Stade de Suisse offiziell fertig gestellt?"},
        {solution:"1", question:"Wie viel kostet ein Energy Air Ticket?"},
        {solution:"3", question:"Wie hiess der Energy Air Song im Jahr 2014? "},
        {solution:"2", question:"In welchem Monat findet das Energy Air jeweils statt?"},
        {solution:"2", question:"Zum wievielten Mal findet das Energy Air statt? "},
        {solution:"1", question:"Mit welchem Künstler stand Schlangenfrau Nina Burri auf der Bühne?"},
        {solution:"3", question:"Wer hatte den letzten Auftritt am Energy Air 2016? "},
        {solution:"1", question:"Wie viele Zuschauer passen ins Stade de Suisse? "},
        {solution:"3", question:"Wo kann man Energy Air Tickets kaufen?"},
        {solution:"1", question:"Das Energy Air ist ...?"},
        {solution:"2", question:"Was ist die obere Altersbeschränkung des Energy Air?"},
        {solution:"1", question:"Wie hiess das Stade de Suisse früher?"},
        {solution:"2", question:"Wann findet das diesjährige Energy Air statt?"},
        {solution:"2", question:"Wie gross ist die Spielfläche des Stade de Suisse?"},
        {solution:"1", question:"Von wem wird das Energy Air durchgeführt?"},
        {solution:"1", question:"Wie heissen zwei andere grosse Events von Energy?"},
        {solution:"1", question:"Welcher Pop-Sänger stand in diesem Jahr schon auf der Bühne des Stade de Suisse?"},
        {solution:"1", question:"Welcher Fussballverein ist im Stade de Suisse Zuhause?"},
        {solution:"3", question:"Welcher Act performte in einem Karton-Hippie-Bus?"}
    ];
    
    if ($('h1').html() == 'GEWINNE JETZT TICKETS MIT DEM ENERGY AIR GAME') {
        $('input#mobile').val(phone);
        $('button:submit').click();
    } else if ($('#gameover h2').html() == 'GAME OVER') {
        window.location = "https://game.energy.ch/includes/restart.php";
    } else if ($('#decision h2').html() == 'Glückwunsch!') {
        $('button:submit').click();
    } else if ($('#wingame h1').html() == 'Hinter welchem Energy Air Logo versteckt sich das Ticket?') {
        //var rnd = Math.floor((Math.random() * 12));
        var forwardUrl = document.URL + '?ticket=' + 0;
        window.location = forwardUrl;
    } else if ($('#wingame h1').html() == 'Das war das falsche Logo, knapp daneben! Versuche es erneut!') {
        window.location = "https://game.energy.ch/includes/restart.php";
    } else if ($('body').isBgColor('#ffffff')) {
        window.location = "https://game.energy.ch/";
    }
    
    var question = $('.question > h1').html();
    
    for (var x = 0; x < questions.length; x++) {
        if (questions[x].question == question) {
            $('#option' + questions[x].solution).attr('checked', 'checked');
            $('button:submit').click();
        }
    }
})();