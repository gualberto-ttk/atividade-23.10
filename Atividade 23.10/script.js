// lista inicial
const listaDeAfazeres = ["Comprar pão", "Estudar JavaScript", "Lavar louça"];

console.log("Lista:", listaDeAfazeres);
console.log("Primeiro:", listaDeAfazeres[0]);
console.log("Quantidade:", listaDeAfazeres.length);

// adiciona itens
listaDeAfazeres.push("Fazer exercícios");
listaDeAfazeres.unshift("Agendar médico");
console.log("Após adições:", listaDeAfazeres);

// remove do final
const removidoFinal = listaDeAfazeres.pop();
console.log("Afazer removido do final:", removidoFinal);

// remove do início
const removidoInicio = listaDeAfazeres.shift();
console.log("Afazer removido do início:", removidoInicio);

console.log("Após remoções:", listaDeAfazeres);

// cópia para organizar sem alterar o original
const listaOrganizada = [...listaDeAfazeres];
listaOrganizada.sort();
console.log("Organizada:", listaOrganizada);

listaOrganizada.reverse();
console.log("Organizada invertida:", listaOrganizada);

// confirma original intacta
console.log("Original (confirmar):", listaDeAfazeres);