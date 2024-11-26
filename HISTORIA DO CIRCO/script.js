/* Fonte e estilo básico */
body {
    font-family: 'Bai Jamjuree', sans-serif;
    background-color: #f5e1d3;
    color: #333;
    margin: 0;
    padding: 0;
}

/* Título da história */
h1 {
    text-align: center;
    font-size: 2.5em;
    color: #ff6600;
    margin-top: 20px;
}

/* Estilo para as imagens */
img {
    display: block;
    margin: 20px auto;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

/* Passos da história */
.passo {
    display: none;
    text-align: center;
    padding: 20px;
    background-color: #fff;
    margin: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease-in-out;
}

/* Passo ativo */
.passo.ativo {
    display: block;
    opacity: 1;
}

/* Botões */
button {
    padding: 10px 20px;
    background-color: #ff6600;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1.2em;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #e65c00;
}

/* Estilo para imagens nas etapas */
#passo-4 img,
#passo-8 img {
    width: 80%;
    max-width: 600px;
    height: auto;
}

/* Estilo para o fundo */
main {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}