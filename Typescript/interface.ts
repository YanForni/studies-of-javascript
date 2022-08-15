//interface também serve para criar novos tipos, o recomendado é usar type por ser mais flexivél e simples
type TPerson = {
  name: string;
  id: number;
}
//note que em interface não é utilizado '='
interface IPerson {
  name: string;
  id: number;
}

type TPayment = {
  method: string;
}

interface IPayment {
  method: string;
}

type TAccount = TPerson & TPayment

//para criar uma interface que seja união de outras, usamos extends
interface IAcount extends IPerson, IPayment {}