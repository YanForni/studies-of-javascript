/*
<S> => Representando State 
<T> => Representando Type 
<K> => Representando Key 
<V> => Representando Value 
<E> => Representando Element
*/


//função usando generic que permite a tipagem ser flexível até que está seja declarada
function useState<T>() {
  let state: T

  function get() {
    return state
  }

  function set(newValue: T) {
    state = newValue
  }

  return {get, set}
}
//outra forma de usar generic:
// function useState<T extends string|number = string>(){}
//          generic pode ser string ou number, caso não seja definido o tipo padrão será string      

//declarando o tipo que será usado
let newState = useState<string>()
newState.get()
newState.set("Another One")
console.log(newState.get());
