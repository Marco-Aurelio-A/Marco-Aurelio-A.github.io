let texto_mostrar = document.querySelector("#texto_mostrar");
let texto_add = document.querySelector("#texto_add");
let texto_add_button = document.querySelector("#texto_add_bt")

let cor = 0;

let texto_lista = ["Você é Otário"];
let texto_lista_index = 0;

let texto = [];
let texto_index = 0;

function Escrever_texto()
{

    texto.push(texto_lista[texto_lista_index].charAt(texto_index));
    texto_mostrar.textContent = texto.join("").toString();

    if(texto_index < texto_lista[texto_lista_index].length)
    {

        texto_index++;

    }
    else
    {

        texto_index = 0;
        texto = [];

        if(texto_lista_index < texto_lista.length - 1)
        {

            texto_lista_index++;

        }
        else
        {

            texto_lista_index = 0;

        }

    }

    setTimeout(Escrever_texto, 200);

}

Escrever_texto();

function Mudar_cor()
{

    switch(cor)
    {

        case 0:

            texto_mostrar.style.color = "red";

        break;
        case 1:

            texto_mostrar.style.color = "green";

        break;
        default:

            texto_mostrar.style.color = "blue";
            cor = -1;

        break;

    }

    cor++;

    setTimeout(Mudar_cor, 150);

}

Mudar_cor();

function Add_texto()
{

    texto_lista.push(texto_add.value);

    texto_add.value = "";

}

texto_add_button.onclick = Add_texto;
