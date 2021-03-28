'use strict'

$(document).ready(()=>{
    let posts;
    let postsDiv;
    let theme;
    var formName;
    let about_p;

    postsDiv = $('#posts');
    /**
     * Post
     */
    posts = [
        {
            title: 'Prueba de título 1',
            date: "Publicado el " + moment().format('dddd') +" "+ + moment().date()+ "/"+ moment().format('MMMM')+"/"+ moment().format('YYYY'),
            content: '1Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt odio dolore nulla neque, vitae ipsum corporis, maiores beatae reprehenderit nisi soluta illum possimus? Delectus adipisci perspiciatis quidem, modi error aut.'
        },        {
            title: 'Prueba de título 2',
            date: "Publicado el " + moment().format('dddd') +" "+ + moment().date()+ "/"+ moment().format('MMMM')+"/"+ moment().format('YYYY'),
            content: '2Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt odio dolore nulla neque, vitae ipsum corporis, maiores beatae reprehenderit nisi soluta illum possimus? Delectus adipisci perspiciatis quidem, modi error aut.'
        },        {
            title: 'Prueba de título 3',
            date: "Publicado el " + moment().format('dddd') +" "+ + moment().date()+ "/"+ moment().format('MMMM')+"/"+ moment().format('YYYY'),
            content: '3Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt odio dolore nulla neque, vitae ipsum corporis, maiores beatae reprehenderit nisi soluta illum possimus? Delectus adipisci perspiciatis quidem, modi error aut.'
        },        {
            title: 'Prueba de título 4',
            date: "Publicado el " + moment().format('dddd') +" "+ + moment().date()+ "/"+ moment().format('MMMM')+"/"+ moment().format('YYYY'),
            content: '4Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt odio dolore nulla neque, vitae ipsum corporis, maiores beatae reprehenderit nisi soluta illum possimus? Delectus adipisci perspiciatis quidem, modi error aut.'
        },        {
            title: 'Prueba de título 5',
            date: "Publicado el " + moment().format('dddd') +" "+ + moment().date()+ "/"+ moment().format('MMMM')+"/"+ moment().format('YYYY'),
            content: '5Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt odio dolore nulla neque, vitae ipsum corporis, maiores beatae reprehenderit nisi soluta illum possimus? Delectus adipisci perspiciatis quidem, modi error aut.'
        }
    ];

    posts.forEach((item, index) =>{
        let post = `
            <article class="post">
                <h3>${item.title}</h3>
                <span class="article__date">${item.date}</span>
                <p class="article__text">${item.content}</p>
                <a href='#' class="readMoreButton">Leer más</a>
            </article>
        `
        postsDiv.prepend(post);
    })

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

    /**
     * Scroll suavizado
     */

    $('.goUp').click((e)=>{
        e.preventDefault();

        $('html,body').animate({
            scrollTop:0
        }, 300);

        return false;
    });

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