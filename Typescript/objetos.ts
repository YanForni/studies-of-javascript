type Point = {
  x: number;
  y: number;
};

function printCoord(points: Point) {
  console.log(`O eixo x é: ${points.x}`);
  console.log(`O eixo y é: ${points.y}`);
}

printCoord({ x: 24, y: 24 });

type User = {
  name: string;
  email: string;
  age: number;
  // o ponto de interrogação torna a propriedade opcional
  isAdmin?: boolean;
};

type Character = {
  nickname: string;
  level: number;
};

//criando um tipo que é a união de outros
type PlayerInfo = User & Character;
const info: PlayerInfo = {
  name: "Yan",
  email: "yanfornimedeiros@gmail.com",
  age: 21,
  nickname: "shocko",
  level: 32,
};
