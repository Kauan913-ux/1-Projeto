// objetos e arrays
const pessoa = {
  nome: 'Lucas',
  idade: 20,
  genero: {
    nome: 'Masculino',
    descricao: 'Homem'
  },
  endereco: {
    rua: 'Rua das Flores',
    numero: 123,
    cidade: 'São Paulo',
    estado: 'SP',
    pais: 'Brasil'
  },
  contato: {
    email: 'lucas@example.com',
    telefone: '1234-5678'
  }
};
// console.log(pessoa.nome);

const idades = [
  20, // 0
  30, // 1
  'Rodrigo', // 2
  50, // 3
  60, // 4
  { nome: 'Lucas', idade: 20 }, // 5
];
console.log(idades[5]);
console.log(idades[5].idade);
