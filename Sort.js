lista=[3,4,5,6,1];

temp=lista[lista.length-1];

i=lista.length-2;

while(i>=0 && temp<lista[i]){
	lista[i+1]=lista[i]
	i--;
	console.log(lista);
}

lista[i+1]=temp;

console.log(lista);