//header: background color #2E948A

let header = document.getElementsByTagName('header');

header[0].style.backgroundColor = '#2e948a';

//'Cursos' specify the correct link to 'Cursos' page

let linkCursos = document.querySelector('#menu_opcoes nav a');

linkCursos.setAttribute('href', 'cursos.html');

//Change title from 'Depoimentos' to 'O que falam sobre nós'

let depoimentosTitulo = document.querySelector('.titulo.depoimento h3');

depoimentosTitulo.innerHTML = 'O que falam sobre nós';

//Change title from 'Blog' to 'Mais conteúdo pra você'

let blogTitulo = document.querySelectorAll('.titulo h3')[1];

blogTitulo.innerHTML = 'Mais conteúdo pra você';

//Changing the titles to uppercase

let upperCaseTitle = document.querySelectorAll('.titulo');

for(let i = 0; i < upperCaseTitle.length; i++) {
  upperCaseTitle[i].style.textTransform = 'uppercase';
}

//Adding href to blog button

let linkButton = document.querySelector('#todos_posts');

linkButton.setAttribute('href', 'blog.html');

//Adding a new course at investimento_poupando_independencia

let section = document.querySelector('#investimentos_poupando_independencia');

