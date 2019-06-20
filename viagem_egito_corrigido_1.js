// Definindo variáveis que vamos precisar de usar:
var canvas;
var c;
var canvasWidth = 1340; // Aumentei aqui o tamanho da tela
var canvasHeight = 590;
var xpos = 550; // posição x do avião na tela
var ypos = 150; // posição y do avião na tela
var planeImage = new Image();




/* esta função (function) inicia a tua tela (canvas) */
function prepararTela()
{
	// cria a tela (canvas)
	var canvasDiv = document.getElementById('canvasDiv'); // Indo buscar a tela ao HTML
	canvas = document.createElement('canvas');
	canvas.setAttribute('width', canvasWidth); // define largura da tela
	canvas.setAttribute('height', canvasHeight); // define altura da tela
	canvas.setAttribute('id', 'canvas'); // identifica a tela que estamos a usar
	canvasDiv.appendChild(canvas);

	c = document.getElementById('canvas').getContext("2d"); // a nova variável "c" vai referir-se ao nosso canvas (que está em 2D)

	DesenhaContorno(0, 0, canvasWidth, canvasHeight); // desenha os limites do quadrado

	DesenharCasa(); // desenha o boneco da casa!! (que eu desenhei para tu veres um exemplo :) ).

	/* CAROLINA NÃO TINHAS ADICIONADO A FUNÇÃO QUE INCLUI O AVIÃO NA TELA : */
	DesenharAviao(xpos,ypos); // coloca a imagem do avião

}

/* função que desenha um rectangulo à volta de coisas */
function DesenhaContorno(xPos, yPos, width, height)
{
	c.lineWidth = 5; // largura da linha de contorno
	c.strokeStyle = 'black'; // queremos a linha de contorno a preto
	var fillRect = false; // é falso porque não vamos preencher o rectângulo

	c.rect(xPos, yPos, width, height); //finalmente desenhamos o rectângulo

	if (fillRect) { // "if" é uma condição. SE fillrect = "true" preenche o rectângulo. Como é "false", o rectângulo não vai estar preenchido.
  		c.fill();
	}

	c.stroke(); // manda desenhar as linhas
}

function DesenharCasa(){

var cX = 200;
var cY = 200;
var blue = "#447FFF"; //azul
var white = "#FFF"; // branco
var red = "#FF0000"; //vermelho
var brown = "#4c0000"; // castanho
var beige = "#FCD071"; //bege claro
var dark_beige = "#D3AE5F"; //bege escuro
// corpo da casa
c.beginPath(); //iniciar bloco -> se não iniciares e terminares o bloco. o fill() vai preencher toda a tela!
c.rect(cX - 100, cY - 50, 200, 200);
c.fillStyle = blue;
c.fill();
c.closePath(); //terminar bloco

// janela
c.beginPath();
c.rect(cX - 70, cY - 20, 40, 40);
c.fillStyle = white;
c.fill();
c.closePath();

// telhado
c.beginPath(); // Nós queremos fazer um triangulo. mas o método "triangle" do khan academy não existe na realidade
c.moveTo(cX - 100, cY - 50);  // então é necessário desenhar as 3 linhas do triângulo e depois preencher com o "fill"
c.lineTo(cX, cY - 150);
c.lineTo(cX + 100, cY - 50);
c.lineTo(cX - 100, cY -50);
c.fillStyle = red;
c.fill();
c.closePath();


// Desenhando os tijolos no corpo da casa!
for (var j = 0; j < 7; j++) {
  for (var i = 0; i < 8; i++) {
   c.beginPath();
   c.moveTo((cX - 100) + (i * 30), (cY + 135) - (j * 30));
   c.lineTo((cX - 130) + (i * 30), (cY + 135) - (j * 30));
   c.lineTo((cX - 130) + (i * 30), (cY + 150) - (j * 30));
   if ( j != 6 ) {
   c.moveTo((cX - 115) + (i * 30), (cY + 135) - (j * 30));
   c.lineTo((cX - 115) + (i * 30), (cY + 120) - (j * 30));
   c.lineTo((cX - 85) + (i * 30), (cY + 120) - (j * 30));
   }
   c.strokeStyle = white; // cor das linhas entre os tijolos
   c.stroke();
   c.closePath();
  }
}

// porta
c.beginPath();
c.rect(cX + 20, cY + 71, 50, 80);
c.fillStyle = brown;
c.fill();
c.closePath();

// Linhas da janela (a cruz)
c.beginPath();
c.moveTo(cX - 70, cY); // linha inicia aqui
c.lineTo(cX - 30, cY); // linha termina aqui
c.moveTo(cX - 50, cY - 20); // linha inicia aqui
c.lineTo(cX - 50, cY + 20); // linha termina aqui
c.rect(cX - 70, cY - 20, 40, 40); // rectangulo
c.strokeStyle = brown;
c.lineWidth = 4;
c.stroke();
c.closePath();

//Pirâmide
c.beginPath(); // Nós queremos fazer um triangulo. mas o método "triangle" do khan academy não existe na realidade
c.moveTo(cX + 600, cY + 150); // 1 então é necessário desenhar as 3 linhas do triângulo e depois preencher com o "fill"
c.lineTo(cX + 800, cY - 120); // 2
c.lineTo(cX + 1000, cY + 150); // 3
c.lineTo(cX + 600, cY + 150); //1
c.fillStyle = beige;
c.fill();
c.closePath();

c.beginPath()// Desenhando os tijolos no corpo da pirâmide!

for (var j = 1; j < 13; j++) {
  for (var i = 0; i < 13; i++) {
  	c.rect(cX + 600 + (i * 30.65), cY + 150 - (j * 20.80), 30.65,20.80);
   c.strokeStyle = dark_beige; // cor das linhas entre os tijolos
  } // FIM DO CICLO EM I
}
c.stroke();
c.closePath();

//Pirâmide Branca
c.beginPath(); // Nós queremos fazer um triangulo. mas o método "triangle" do khan academy não existe na realidade
c.moveTo(cX + 600, cY + 150); // 1 então é necessário desenhar as 3 linhas do triângulo e depois preencher com o "fill"
c.lineTo(cX + 800, cY - 120); // 2
c.lineTo(cX + 600, cY - 120); // 3
c.lineTo(cX + 600, cY + 150); //1
c.fillStyle = white;
c.strokeStyle = white;
c.fill();
c.stroke();
c.closePath();

//Pirâmide Branca
c.beginPath(); // Nós queremos fazer um triangulo. mas o método "triangle" do khan academy não existe na realidade
c.moveTo(cX + 800, cY -120); // 1 então é necessário desenhar as 3 linhas do triângulo e depois preencher com o "fill"
c.lineTo(cX + 1000, cY - 120); // 2
c.lineTo(cX + 1000, cY +150); // 3
c.lineTo(cX + 800, cY -120); //1
c.fillStyle = white;
c.strokeStyle = white;
c.fill();
c.stroke();
c.closePath();

} // ESTA FUNÇÃO NAO ESTAVA FECHADA, TENS QUE VERIFICAR SEMPRE QUE FECHAS OTODOS S PARENTESIS

//agora vamos desenhar o avião
function DesenharAviao(xpos,ypos) {
  var size_x = 220; // largura do avião
  var size_y = 150; // altura do avião
  planeImage.src = 'plane.png';
  planeImage.onload = function(){
    c.drawImage(planeImage, xpos, ypos, size_x, size_y);
  }
}
