// ==UserScript==
// @name         Energy Tickets
// @namespace    https://github.com/Tomzilla12/Energy-Air-Game-Bot
// @version      1.5
// @description  Color the Energy Tickets when clicked (at first, press any key when the page is loaded)
// @author       Tomzilla12: https://github.com/Tomzilla12
// @match        *energy.ch/*
// @run-at       document-idle
// @grant        none
// @updateURL    https://openuserjs.org/meta/Tomzilla12/Energy_Tickets.meta.js
// @downloadURL  https://openuserjs.org/install/Tomzilla12/Energy_Tickets.user.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// ==/UserScript==

function setColor(coloredTicketIds) {
    $('.energy-ticket-info a').parent().css('background-color','#FFFFFF');
    $('.energy-ticket-info .energy-ticket-state').html('geöffnet');
    coloredTicketIds.forEach(function(ticketId) {
        $('.energy-ticket-info a[href="' + ticketId + '"]').parent().css('background-color','#D6A49F');
        $('.energy-ticket-info a[href="' + ticketId + '"]').parent().find('.energy-ticket-state').html('verschenkt');
    });
}

(function() {
    'use strict';
    
    $('body').keypress(function(event) {
        $('.energy-ticket-info').css('cursor','pointer');

        var coloredTicketIds;
        if (localStorage.getItem("coloredTickets") !== null) {
            coloredTicketIds = JSON.parse(localStorage.getItem('coloredTickets'));
        } else {
            coloredTicketIds = [];
        }
        console.log(coloredTicketIds);

        $('.energy-ticket-info').click(function() {
            var ticketId = $(this).find('a').attr('href');
            var coloredTicketIds = JSON.parse(localStorage.getItem('coloredTickets'));

            if (localStorage.getItem("coloredTickets") !== null) {
                var alreadyIncluded = false;
                coloredTicketIds.forEach(function(element) {
                    if (element == ticketId) {
                        alreadyIncluded = true;
                    }
                });
                if (!alreadyIncluded) {
                    coloredTicketIds.push(ticketId);
                } else {
                    var index = coloredTicketIds.indexOf(ticketId);
                    if (index > -1) {
                        coloredTicketIds.splice(index, 1);
                    }
                }
            } else {
                coloredTicketIds = [ticketId];
            }
            
            localStorage.setItem('coloredTickets', JSON.stringify(coloredTicketIds));
            console.log(coloredTicketIds);

            setColor(JSON.parse(localStorage.getItem('coloredTickets')));
        });
        setColor(JSON.parse(localStorage.getItem('coloredTickets')));
    });
})();