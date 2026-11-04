let nome = "Samuel Viana";
let idade= "19";
let curso = "Desenvolvimento de Sistemas";
let mensalidade = 300;
let vagas = "10";
let possuiDesconto = true;

console.log ("====Inscrição em Cursos====");
console.log ("Nome: " + nome);
console.log ("Idade: " + idade);
console.log ("Curso: " + curso);

if (idade < 16) {
    console.log ("Inscrição não permitida");
} else if (idade < 18) {
    console.log ("Necessita de autorização do Responsável");
} else {
    console.log ("Inscrição permitida");
}

if (vagas > 0) {
    console.log ("Existem vagas disponiveis");
} else {
    console.log ("Não existem vagas disponiveis");
}

console.log ("Mensalidade original: R$ " + mensalidade.toFixed(2));
let mensalidadeFinal;

if (possuiDesconto == true) {
    mensalidadeFinal = mensalidade - (mensalidade * 0.15);
    console.log ("Desconto aplicado: 15%");
} else {
    mensalidadeFinal = mensalidade;
    console.log ("Desconto não aplicado");
}

console.log ("mensalidadeFinal: R$" + mensalidade.toFixed(2));

if (mensalidade <= 300) {
    console.log ("Classificação: Curso econômico");
} else if (Mensalidade <= 600) {
    console.log ("Classificação: Curso intermediário");
} else {
    console.log ("Classificação: Curso premium");
}

console.log ("=====================")

