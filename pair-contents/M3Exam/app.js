const main = document.getElementById("root");
const fetchButton = document.getElementById("fetch");
const msg = document.getElementById("msg")
const logo = document.createElement('img');
logo.src = 'https://www.studioghibli.com.au/wp-content/uploads/2017/07/ghibli_logo_gold.png';
logo.setAttribute('align', 'center');
const container = document.createElement("div");
container.setAttribute("class", "container");

main.appendChild(logo);
main.appendChild(container);

const getFilms = () => {
  fetch("https://ghibliapi.herokuapp.com/films")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((movie) => {


        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const h2 = document.createElement("h2");
        h2.textContent = movie.title;

        var title = movie.title.replace(/[^a-zA-Z]/g, "");
			  var url = encodeURI('https://www.studioghibli.com.au/' 
					+ title.toLowerCase());

        var desc = movie.description.substring(0,160) + '.....';
			  const p = document.createElement('p');
			  p.textContent = desc;

        p.textContent = `${desc}...`;
        const p2 = document.createElement("p");
        container.appendChild(card);

        const a = document.createElement('a');
			  a.setAttribute('href', url);
			  a.textContent = 'Learn More';

        container.appendChild(card);
        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(p2);
        card.appendChild(a);

        msg.style.display="none";
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const fetchFilms = getFilms();