var produtos = ["Computador","Telefone", "Mouse", "Teclado"];

console.log(produtos);
console.log(`A lista possui ${produtos.length} itens`);

produtos = produtos.filter(obj => obj != "Mouse");
console.log(produtos);

function buscar(search){
	var found = produtos.find(value => value == search);

		if(search == found){
			console.log(`O produto ${search} existe na lista`);
		}else{
			console.log(`O produto ${search} NÃO existe na lista`);
		}
}


produtos = produtos.filter(item => item !== 2)

console.log(produtos);