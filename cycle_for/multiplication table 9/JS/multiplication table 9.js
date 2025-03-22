

/*
	Name exercise: multiplication table 9
	Description: multiplication table 9
	Autor: camilo suaza
	Date: March 21th, 2025
*/


function calcularProducto() {
    let number = 5;  
    let product = 0;  

    for (let counter = 0; counter <= 9; counter++) {
        product = number * counter;  
        
       
        if (product % 2 === 0) {
            console.log(`Numero: ${number}, Contador: ${counter}, Producto: ${product}, Par`);
        } else {
            console.log(`Numero: ${number}, Contador: ${counter}, Producto: ${product}, Impar`);
        }
    }
}

calcularProducto();
