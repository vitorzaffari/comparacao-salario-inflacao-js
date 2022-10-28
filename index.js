import input from 'readline-sync';

var i = 0
let labelAno = "Ano:";
let labelSalario = "Salário mínimo:";
let labelInflacao = "Inflação IPCA:";
let labelCrescimento = "Crescimento salarial:"

let salarioMin = [
    { ano: 2010, salario: 510.00 },
    { ano: 2011, salario: 545.00 },
    { ano: 2012, salario: 622.00 },
    { ano: 2013, salario: 678.00 },
    { ano: 2014, salario: 724.00 },
    { ano: 2015, salario: 788.00 },
    { ano: 2016, salario: 880.00 },
    { ano: 2017, salario: 937.00 },
    { ano: 2018, salario: 954.00 },
    { ano: 2019, salario: 998.00 },
    { ano: 2020, salario: 1045.00 }
];

let inflacao = [
    { ano: 2010, ipca: 5.91 },
    { ano: 2011, ipca: 6.50 },
    { ano: 2012, ipca: 5.84 },
    { ano: 2013, ipca: 5.91 },
    { ano: 2014, ipca: 6.41 },
    { ano: 2015, ipca: 10.67 },
    { ano: 2016, ipca: 6.29 },
    { ano: 2017, ipca: 2.95 },
    { ano: 2018, ipca: 3.75 },
    { ano: 2019, ipca: 4.31 },
    { ano: 2020, ipca: 4.52 }
];

console.log("Escolha uma opção:");

var resposta = input.question('1 - Listar os salarios minimos de 2010 a 2020' + '\n' + '2 - Listar o indice IPCA de 2010 a 2020' + '\n' + '3 - Comparacao entre o percentual de aumento salarial e o IPCA' + '\n');

switch (resposta) {
    case "1":
        console.log("Salários minímos de 2010 à 2020: " + '\n');

        while (i < salarioMin.length) {
            var ano = salarioMin[i].ano;
            var salario = salarioMin[i].salario;


            console.log(labelAno.padEnd(20, ' ') + ano + '\n' + labelSalario.padEnd(20, ' ') + "R$ " + salario.toFixed(2).replace(".", ",") + '\n');
            i = i + 1;
        }
        break;

    case "2":
        console.log("Índice IPCA de 2010 à 2020: " + '\n');

        while (i < inflacao.length) {
            var ano = inflacao[i].ano;
            var inflacaoipca = inflacao[i].ipca;

            console.log(labelAno.padEnd(20, ' ') + ano + '\n' + labelInflacao.padEnd(20, ' ') + inflacaoipca.toFixed(2).replace(".", ",") + "%" + '\n');
            i = i + 1;
        }
        break;

    case "3":
        console.log("Comparação entre o percentual de aumento salarial e o IPCA:" + '\n');

        while (i < inflacao.length) {
            var ano = salarioMin[i].ano;
            var salario = salarioMin[i].salario;
            var crescimentoSal = "-";
            var inflacaoipca = inflacao[i].ipca;
            while (i > 0) {
                var diferenca = (salarioMin[i].salario - salarioMin[i - 1].salario);
                var crescimentoSal = ((diferenca / salarioMin[i - 1].salario) * 100);
                crescimentoSal = crescimentoSal.toFixed(2).replace(".", ",") + "%";
                break
            }
            console.log(labelAno.padEnd(25, ' ') + ano + '\n' + labelSalario.padEnd(25, ' ') + "R$ " + salario.toFixed(2).replace(".", ",") + '\n' + labelCrescimento.padEnd(25, ' ') + crescimentoSal + '\n' + labelInflacao.padEnd(25, ' ') + inflacaoipca.toFixed(2).replace(".", ",") + "%" + '\n');
            i = i + 1;
        }
        break;

    default:
        console.log("Opção inválida." + '\n');
} 
