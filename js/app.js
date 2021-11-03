document.addEventListener("DOMContentLoaded", e => {
    e.preventDefault();
    console.log("Loaded !");
    let el, title, copy_time, footer, content, selector;
    const x = 0;
    title = "Les grandes villes USA - 2021";
    let like = 0;
    let dislike = 0;
    let myButtonLike = document.querySelector('#my-button-like');
    let getLikeNum = document.getElementsByClassName('votelike');

    let myButtonDislike = document.querySelector('#my-button-dislike');

    let getDislikeNum = document.getElementsByClassName('votedislike');

    console.log(getLikeNum);


    content = [{
            image: "./asset/jeoLbiT.jpg",
            titre: "Ville de New york",
            contenu: "New York officiellement City of New York, autrement connue sous les noms et abréviations de New York City ou NYC, est la plus grande ville des États-Unis et l'une des plus importantes du continent américain. Elle se situe dans le Nord-Est des États-Unis, sur la côte atlantique, à l'extrémité sud-est de l'État de New York. La ville de New York se compose de cinq arrondissements appelés boroughs : Manhattan, Brooklyn, Queens, le Bronx et Staten Island. Ses habitants s'appellent les New-Yorkais. En 1664, les Anglais conquirent la Nouvelle-Amsterdam qui fut rebaptisée « New York » en l'honneur de Jacques, duc d'York et frère du roi Charles II. L'anglicanisme devint la religion officielle de la colonie en 1698. La ville se développa rapidement : en 1700, elle comptait près de 5 000 habitants.",
            like: "0",
            dislike: "0",

    },
     content = {
            image: "./asset/6k5sq56.jpg",
            titre: "Chicago",
            contenu: " La ville de New York est la ville la plus peuplée des États-Unis, avec une population deux fois supérieure à la deuxième ville du pays, Los Angeles (3 743 995 habitants). Elle compte en effet 8 175 133 habitants en 2010, ce qui représente près de 40 % de la population de l'État de New York. Le Grand New York ou New York Metropolitan area est l'aire urbaine la plus peuplée des États-Unis et la troisième du monde derrière Tokyo et Mexico. Cette région s'étend sur quatre États (New York, New Jersey, Connecticut, Pennsylvanie) et quelque 17 400 km2. Sa population est de 18,8 millions d'habitants en 20. La CMSA de New York rassemble environ 22,2 millions d'habitants en 2009",
            like: "0",
            dislike: "0",

    }, ];
    console.log(content);

    /* for (let i in content) {


         selector = document.querySelector("main");
         selector.innerHTML += ("<figure><div role='group'><img src='" + content[i].image + "' alt='coney' itemprop='image'> </div><figcaption><h2 id='history' class='focus'>" + content[i].titre + "</h2><p id='description'>" + content[i].contenu + "</p><button id='my-button-like'><span class='material-icons' aria-hidden='true'>thumb_up</span><span class='vote' itemprop='reviewCount'>0</span></button></figcaption></figure>");

         console.log(i + " " + content[i].titre);
    } */

    increaseLike = () => {
        like += 1;
        like == 1 ? myButtonLike.setAttribute("disabled", "true") : false;
        getLikeNum.innerHTML = `${like}`;
        console.log(getLikeNum.innerHTML);
        localStorage.setItem('like', like);
        console.log(like);
    }

    likeClick = () => {
        increaseLike()
    }
    myButtonLike.addEventListener('click', likeClick)


    increaseDislike = () => {
        console.log(getDislikeNum);
        dislike += 1;
        dislike == 1 ? myButtonDislike.setAttribute("disabled", "true") : false;
        getDislikeNum.innerHTML = `${dislike}`;
        console.log(getDislikeNum.innerHTML);
        localStorage.setItem('dislike', dislike);
        //localStorage.getItem()
        console.log(dislike);
    }

    dislikeClick = () => {
        increaseDislike()
    }
    myButtonDislike.addEventListener('click', dislikeClick)


    //  myButtonLike.addEventListener('click', function (event) {
    //    let newP = document.createElement('p');
    //  document.querySelector('#countlike').appendChild(newP)
    //   localStorage.setItem('email', formLogin.childNodes[3].value);
    //console.log('Hello H1');
    //    })
    //let printOut = document.querySelector('ul')
    // Send fetch request
    //fetch('https://api.openweathermap.org/data/2.5/weather?q=Paris&lang=fr&units=metric&appid=d2ac3faa06e597adb2f961fc3bcda333')
      //  .then(res => res.json())
      //  .then(resJson => printOut.innerHTML += `
   // <li></li> 
    //<li>${resJson.main.temp}</li> <li>${resJson.weather[0].description}${resJson.weather[0].main}</li>
    //<li>${resJson.main.temp_min}</li>`)


    //objet
    let time = {
        copy_time: new Date(),
        el: document.querySelector("footer p + p"),

    };
    time.el.innerText += ` ${time.copy_time.getFullYear()}`



})
