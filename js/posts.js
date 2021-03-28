'use strict'

$(document).ready(()=>{
    let posts;
    let postsDiv;
    postsDiv = $('#posts');

    /**
    * 
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

});