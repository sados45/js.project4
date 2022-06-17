let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
let clearToDo = document.getElementById('clearToDo');

let title = document.getElementById('title')/* biz burada ögrenmek icin title a renk atamasi yaptik. */

title.style.color ="yellow"

addToDoButton.style.color ="yellow" /*biz bu sekilde button rengine sekline müdahale edebiliyoruz. */

addToDoButton.addEventListener('click', function(){

    let paragraph= document.createElement('p');

    paragraph.classList.add('paragraph-styling')//cssteki paragraph-stylingi buraya ekledik. 
    toDoContainer.appendChild(paragraph);//appendChild cocugu tanimlatiyoruz. 
    paragraph.innerHTML=inputText.value;//paragrafin icine inputTexteki degerimizi giriyoruz. 
    inputText.value=""; //inputta yazdigimiz text kisminin yazdiktan sonra bos kalmasi icin. 

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration= 'line-through';//eklenen yazinin üstünü cizdik.
    }) 
        paragraph.addEventListener('dblclick', function(){
            toDoContainer.removeChild(paragraph)//iki kez tiklayinca yazilan cocuklari sil dedik. 
    })

    clearToDo.addEventListener('click', function(){
        paragraph.remove ();//bu islem parargafi siler.silmek istemeden sadece none olmasini istersek;
        //paragraph.style.display='none';
    })
    })