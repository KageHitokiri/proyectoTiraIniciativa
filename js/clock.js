'use strict'

$(document).ready(()=>{
    setInterval(function(){
        let clock = moment().format('hh:mm:ss');
        $('#clock__container').html(clock);     
    }, 1000)
})