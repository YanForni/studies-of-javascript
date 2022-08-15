//Podemos inserir um novo tipo através de type
// é recomendado que os tipos criados tenham sempre a primeira letra maiúscula
// definindo as propriedades de um objeto
type UserResponse = {
  id: number,
  name: string,
  avater: string
}
let userResponse = {} as UserResponse;
console.log(userResponse.id, userResponse.name, userResponse.avater);