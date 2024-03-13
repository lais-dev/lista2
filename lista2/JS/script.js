// Solicitar ao usuário que insira as idades
const idades = prompt("Digite as idades separadas por vírgula (por exemplo: 20,30,25):").split(',').map(Number);

// a) A soma das idades
const somaIdades = idades.reduce((acc, idade) => acc + idade, 0);
document.write(`<p>A soma das idades é: ${somaIdades}.</p>`);

// b) A média aritmética simples das idades
const mediaIdades = somaIdades / idades.length;
document.write(`<p>A média aritmética simples das idades é: ${mediaIdades.toFixed(2)}.</p>`);

// c) A maior idade
const maiorIdade = Math.max(...idades);
document.write(`<p>A maior idade é: ${maiorIdade}.</p>`);

// d) As idades ímpares
const idadesImpares = idades.filter(idade => idade % 2 !== 0);
document.write(`<p>As idades ímpares são: ${idadesImpares.join(', ')}.</p>`);

// e) Verificar se todos são maiores de idade (idade >= 18); Retorno: true ou false
const todosMaioresIdade = idades.every(idade => idade >= 18);
document.write(`<p>Todos são maiores de idade? ${todosMaioresIdade}.</p>`);

// f) Verificar se todas as idades são maiores ou iguais a um valor informado pelo usuário
const valorUsuario = parseInt(prompt("Informe um valor para verificar se todas as idades são maiores ou iguais a ele:"));
const todasMaioresIguais = idades.every(idade => idade >= valorUsuario);
document.write(`<p>Todas as idades são maiores ou iguais a ${valorUsuario}? ${todasMaioresIguais}.</p>`);

// g) Exibir todas as idades maiores ou iguais a determinada idade
const determinadaIdade = parseInt(prompt("Informe uma idade para exibir todas as idades maiores ou iguais a ela:"));
const idadesMaioresIguais = idades.filter(idade => idade >= determinadaIdade);
document.write(`<p>As idades maiores ou iguais a ${determinadaIdade} são: ${idadesMaioresIguais.join(', ')}.</p>`);

// h) A média das idades das pessoas com idades maiores ou iguais a determinada idade
const mediaIdadesMaioresIguais = idadesMaioresIguais.length > 0 ? idadesMaioresIguais.reduce((acc, idade) => acc + idade, 0) / idadesMaioresIguais.length : 0;
document.write(`<p>A média das idades das pessoas com idades maiores ou iguais a ${determinadaIdade} é: ${mediaIdadesMaioresIguais.toFixed(2)}.</p>`);
