// adicionando style na tag body

let principal = document.querySelector('body');

principal.style.display = "block";
principal.style.height = "150px";

// adicionando imagem de fundo

principal.style.backgroundImage = "url('/img/capa.jpg')";

// criando uma div

let div = document.createElement('div');

principal.appendChild(div);

// adicionando style a tag div

div.style.display = "flex";
div.style.flexDirection = "column";
div.style.alignItems = "center";

// criando o titulo com createElement e innerText

let titulo = document.createElement('h1');
let subTitulo = document.createElement('h2');

titulo.style.fontFamily = "Arial";
titulo.style.color = "white";
subTitulo.style.color = "white";
titulo.style.fontWeight = "700";
titulo.style.fontSize = "40px";
titulo.style.margin = "40px";

titulo.id = 'titulo';

titulo.innerText = "PS2 com jogos inclusos PROMOÇÃO!";
subTitulo.innerText = "R$: 1.500,00";

// adicionando o titulo com appendChild

div.appendChild(titulo);
div.appendChild(subTitulo);

// criando a imagem principal o modificando direto no Javascript

let imgPS2 = document.createElement('img');

imgPS2 = new Image(350, 300); // alterando tamanho da imagem direto no Javascript

imgPS2.src = "/img/ps2.png";

// adicionando a imagem principal

div.appendChild(imgPS2);

// criando a descrição e preço do produto usando tampleteString e innerHTML

let container = document.createElement('div');

container.style.color = "white";
container.style.textAlign = "center";
container.style.fontSize = "20px";
container.style.fontFamily = "Arial";
container.style.display = "flex";
container.style.margin = "70px";
container.style.gap = "50px"

container.innerHTML =
    `
    <div>
        <h3>God Of War 2</h3>
        <img src="/img/god of war 2.webp"
            style="width: 200px;
            border-radius: 20px;
            box-shadow: 5px 5px purple;">
        </img>
    </div>

    <div>
        <h3>PES 2013</h3>
        <img src="/img/pes 2013.webp"
            style="width: 200px;
            border-radius: 20px;
            box-shadow: 5px 5px purple;">
        </img>
    </div>

    <div>
        <h3>GTA San Andreas</h3>
        <img src="/img/gta san andreas.webp"
            style="width: 200px;
            border-radius: 20px;
            box-shadow: 5px 5px purple;">
        </img>
    </div>

    <div>
        <h3>Need For Speed 2</h3>
        <img src="/img/need for speed 2.webp"
            style="width: 200px;
            border-radius: 20px;
            box-shadow: 5px 5px purple;">
        </img>
    </div>

    <div>
        <h3>Resident Evil 4</h3>
        <img src="/img/resident evil 4.webp"
            style="width: 200px;
            border-radius: 20px;
            box-shadow: 5px 5px purple;">
        </img>
    </div>
       
    `;

div.appendChild(container);
