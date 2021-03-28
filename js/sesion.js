'use strict'

$(document).ready(()=>{
    let formName;
    let about_p;

    $('#login form').submit(function(){
        formName = $('#form__name').val();
        localStorage.setItem('form__name', formName);
    });

    formName = localStorage.getItem('form__name');

    if (formName!=null && formName!="undefined") {
        about_p = $('#about p');
        about_p.html('Bienvenido, '+formName);
        about_p.append('<a href="#" id="logout">Cerrar Sesión</a>');
        $('#login').hide();
        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        });
    }
})