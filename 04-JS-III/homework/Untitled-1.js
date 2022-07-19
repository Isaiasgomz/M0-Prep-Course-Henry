let array1= ["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"];

function mesesDelAño(array){
    for (let index = 0; index < array1.length; index++) {
        let resultado = []
        if ( index === 'Enero' ){
            resultado.push(index)
            return resultado
        }
    }
}
console.log(mesesDelAño(array1))
