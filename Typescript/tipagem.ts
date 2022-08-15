//tipos dos parâmetros explícitos
function showTicket(user: string, ticket: number) {
  console.log(`Olá ${user}, o seu ticket é: ${ticket}.`);
}

showTicket("Yan", 69);

//se os tipos não forem explícitos, será atribuído o tipo any
let anyThing: any;
anyThing = 5;
anyThing = [1, 2, 3];
anyThing = "Texto";
anyThing = true;

let text: string;
//text = 5 este caso é um erro pois text é uma veriável do tipo string
text = "Texto";

//neste caso o tipo é inferido como string(declarado implícitamente)
let person = "Yan";
