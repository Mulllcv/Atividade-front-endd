function boasVindas(){
    console.log("Bem-vindo ao Sistema Escolar!");
}

boasVindas();
boasVindas();

console.log();

function mostrarCurso(){
    console.log("Curso: Desenvolvimento de Sistemas");
    console.log("Instituição: Escola de Tecnologia");
}

mostrarCurso();

console.log();

function saudarAluno(nome){
    console.log("Olá: " + nome + "! Seja bem-vindo!");
}

saudarAluno("Carlos");
saudarAluno("Mariana");
saudarAluno("Pedro");

console.log();

function mostrarAluno(nome, curso){
    console.log("Aluno: " + nome);
    console.log("Curso: " + curso);
}

mostrarAluno("Ana", "Programação");

console.log();

function calcularMedia(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    console.log("Média do aluno: " + media);
}

calcularMedia(80, 60);

console.log();

function adicionarPontos(nota, pontosExtras) {
    let notaAtualizada = nota + pontosExtras;
    console.log("Nota atualizada: " + notaAtualizada);
}

adicionarPontos(65, 10);

console.log();

function verificarAprovacao(media) {
    if (media >= 60) {
        console.log("Aluno aprovado!");
    } else {
        console.log("Aluno reprovado!");
    }
}

verificarAprovacao(85);
verificarAprovacao(45);
verificarAprovacao(60);

console.log();

function classificarAluno(nota) {
    if (nota >= 90 && nota <= 100) {
        console.log("Excelente");
    } else if (nota >= 70) {
        console.log("Bom");
    } else if (nota >= 60) {
        console.log("Regular");
    } else if (nota >= 0) {
        console.log("Insuficiente");
    } else {
        console.log("Nota inválida!");
    }
}

classificarAluno(95);
classificarAluno(80);
classificarAluno(65);
classificarAluno(40);

console.log();

function calcularMensalidade(valor) {
    let desconto = valor * 0.10;
    let valorFinal = valor - desconto;
    return valorFinal;
}

let valorFinal = calcularMensalidade(500);
console.log(valorFinal);

console.log();

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function avaliarAluno(nome, nota1, nota2) {
    let media = calcularMedia(nota1, nota2);

    console.log("Aluno: " + nome);
    console.log("Média: " + media);

    if (media >= 60) {
        console.log("Situação: Aprovado");
    } else {
        console.log("Situação: Reprovado");
    }
}

avaliarAluno("Lucas", 80, 70);