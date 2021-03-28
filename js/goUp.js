'use strict'

$(document).ready(()=>{
    $('.goUp').click((e)=>{
        e.preventDefault();

        $('html,body').animate({
            scrollTop:0
        }, 300);

        return false;
    });
})