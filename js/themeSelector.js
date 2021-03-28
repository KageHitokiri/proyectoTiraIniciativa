'use strict'

$(document).ready(()=>{
    let theme;
    
    theme = $('#theme');
    $('#to__green').click(()=>{
        theme.attr('href','css/green.css');
    });
    $('#to__red').click(()=>{
        theme.attr('href','css/red.css');
    });
    $('#to__blue').click(()=>{
        theme.attr('href','css/blue.css');
    });
    $('#to__nocturne').click(()=>{
        theme.attr('href','css/nocturneMode.css');
    });
});

