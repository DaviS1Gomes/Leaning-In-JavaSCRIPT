let matriz = [[1, 2], [3, 4], [5, 6]];

console.log(`Sua Matriz:`);
for (let i = 0; i < matriz.length; i++) {
  console.log(matriz[i]);
};

const linhas = matriz.length;
const colunas = matriz[0].length;
const transposta = [];

for (let j = 0; j < colunas; j++) {
  transposta[j] = [];

  for (let i = 0; i < linhas; i++) {
    transposta[j][i] = matriz[i][j];
  };
};


console.log(`Sua matriz transposta: `);
for (let i = 0; i < transposta.length; i++) {
  console.log(transposta[i]);
};