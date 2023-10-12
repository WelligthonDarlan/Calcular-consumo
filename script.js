// Função para escrever automaticamente em moeda Brasileira ao digitar ('BRL') - ATIVADA AO DIGITAR QUALQUER TECLA

// Essa função chamada "moeda" é responsável por formatar um campo de entrada de texto para que ele exiba um valor monetário no formato de moeda brasileira (R$). 

//Vou explicar passo a passo como ela funciona ⏬:

// A função recebe quatro parâmetros: "a", "e", "r" e "t". Esses parâmetros são utilizados dentro da função para realizar as operações.

// São declaradas algumas variáveis locais: "n", "h", "u", "l", "o". Essas variáveis serão utilizadas para armazenar valores temporários durante a execução da função.

// A linha a.value = a.value.replace("R$ ", ""); remove a string "R$ " do valor atual do campo de entrada "a". Isso é feito para garantir que o valor seja tratado corretamente.

// A função verifica se o caractere digitado está entre os números de 0 a 9. Caso contrário, retorna false, indicando que o caractere não é válido.

// A função percorre o valor atual do campo de entrada "a" e remove todos os caracteres que não são números. O resultado é armazenado na variável "l".

// O valor digitado é adicionado ao final da string "l".

// A função verifica o tamanho da string "l" e realiza diferentes formatações com base nesse tamanho. Por exemplo, se o tamanho for 0, o valor do campo de entrada é limpo. Se o tamanho for 1, o valor é formatado como "R$ 0" + "r" + "0" + "l". Se o tamanho for maior que 2, a função realiza uma formatação mais complexa.

// A função retorna false para evitar que o caractere digitado seja exibido no campo de entrada.

function moeda(a, e, r, t) {
  let n = "",
    h = (j = 0),
    u = (tamanho2 = 0),
    l = (ajd2 = ""),
    o = window.Event ? t.which : t.keyCode;
  a.value = a.value.replace("R$ ", "");
  if (((n = String.fromCharCode(o)), -1 == "0123456789".indexOf(n))) return !1;
  for (u = a.value.replace("R$ ", "").length, h = 0; h < u && ("0" == a.value.charAt(h) || a.value.charAt(h) == r); h++);
  for (l = ""; h < u; h++) -1 != "0123456789".indexOf(a.value.charAt(h)) && (l += a.value.charAt(h));
  if (((l += n), 0 == (u = l.length) && (a.value = ""), 1 == u && (a.value = "R$ 0" + r + "0" + l), 2 == u && (a.value = "R$ 0" + r + l), u > 2)) {
    for (ajd2 = "", j = 0, h = u - 3; h >= 0; h--) 3 == j && ((ajd2 += e), (j = 0)), (ajd2 += l.charAt(h)), j++;
    for (a.value = "R$ ", tamanho2 = ajd2.length, h = tamanho2 - 1; h >= 0; h--) a.value += ajd2.charAt(h);
    a.value += r + l.substr(u - 2, u);
  }
  return !1;
}

//Função para converter o valor em numero comum para ser calculado
function realToDolar(num) {
  num = num.replace(".", "");
  num = num.replace(",", ".");
  num = num.replace("R", "");
  num = num.replace("$", "");
  return num;
}

const kilometerPerLiter = document.getElementById("kilometerPerLiter");
const inputFuelPrice = document.getElementById("inputFuelPrice");
const distanceInKm = document.getElementById("distanceInKm");
const selectDayWork = document.getElementById("selectDayWork");
const resultArea = document.getElementById("resultArea");

const btnEqual = document.getElementById("btnEqual").addEventListener("click", function () {
    // Verificar se algum dos campos de entrada está vazio
    if (kilometerPerLiter.value === "" || inputFuelPrice.value === "" || distanceInKm.value === "") {
      alert("Por favor, preencha todos os campos.");
      return; // Sair da função imediatamente se algum campo estiver vazio
    }

  let pricePerDay = ((distanceInKm.value / kilometerPerLiter.value) * realToDolar(inputFuelPrice.value)).toFixed(2);
  let pricePerWeek = (pricePerDay * selectDayWork.value).toFixed(2);
  let pricePerMonth = (pricePerWeek * 4).toFixed(2);
  let pricePerYear = (pricePerWeek * 52).toFixed(2);

  let son = resultArea.querySelector("li");

  if (son === null) {
    const li1 = document.createElement("li");
    li1.innerText = `Consumo:`;
    li1.id = "liConsumption";

    const li6 = document.createElement("li");
    li6.innerText = `Km por litros: ${kilometerPerLiter.value}km/l
    Preço do combustível: R$${inputFuelPrice.value} 
    Distancia: ${distanceInKm.value}km`;
    li6.id = "liInfo";

    // Formatando o valor para aparecer em real 'BRL' na tabela
    let dayFormatado = Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(pricePerDay);
    let weekFormatado = Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(pricePerWeek);
    let monthFormatado = Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(pricePerMonth);
    let yearFormatado = Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(pricePerYear);

    const li2 = document.createElement("li");
    li2.innerText = `Dia: R$ ${dayFormatado}`;
    li2.id = "li2";
    const li3 = document.createElement("li");
    li3.innerText = `Semana: R$ ${weekFormatado}`;
    li3.id = "li3";
    const li4 = document.createElement("li");
    li4.innerText = `Mês: R$ ${monthFormatado}`;
    li4.id = "li4";
    const li5 = document.createElement("li");
    li5.innerText = `Ano: R$ ${yearFormatado}`;
    li5.id = "li5";

    resultArea.appendChild(li1);
    resultArea.appendChild(li6);
    resultArea.appendChild(li2);
    resultArea.appendChild(li3);
    resultArea.appendChild(li4);
    resultArea.appendChild(li5);

    this.innerText = "Limpar";
    this.style.backgroundColor = "#dc3545";
    this.style.border = "#dc3545";
    this.href = "#col2";

    resultArea.style.backgroundColor = "#212529ee";
    resultArea.style.boxShadow = "-2px 2px 8px #0000004d";
  } else {
    let liInfo = document.getElementById("liInfo");
    let resultArea = document.getElementById("resultArea");

    resultArea.removeChild(liConsumption);
    resultArea.removeChild(liInfo);
    resultArea.removeChild(li2);
    resultArea.removeChild(li3);
    resultArea.removeChild(li4);
    resultArea.removeChild(li5);

    kilometerPerLiter.value = "";
    inputFuelPrice.value = "";
    distanceInKm.value = "";
    this.innerText = "Calcular";
    this.style.backgroundColor = "#0d6efd";
    this.style.border = "##0d6efd";
    this.href = "#col1";

    resultArea.style.backgroundColor = "";
    resultArea.style.boxShadow = "";


  }
});
