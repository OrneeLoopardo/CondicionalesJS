const producto = [
    {nombre: 'plusbelle', valor: 150},
    {nombre: 'suave', valor: 250},
    {nombre: 'pantene', valor: 350},
    {nombre: 'sedal', valor: 500}
]
const valor=producto.map((el)=>{
    return{
        nombre:el.nombre,
        valor:el.valor + el.valor * 0.21 - el.valor * 0.5
    }
})
console.log(valor)