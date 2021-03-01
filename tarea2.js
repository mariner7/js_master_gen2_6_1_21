/** Tarea 2
 * Raúl Torres Duque Vázquez Aldana
 * 
 */

const mascotas = {
    familias: ['perros', 'gatos', 'canarios', 'pez', 'serpiente'],
    eliminarMascota: function(familia) {
        this.familias.splice(this.familias.indexOf(familia), 1)
        return this.familias
    },
    eliminarUltimaMascota: function() {
        this.familias.splice(-1)
        return this.familias
    },
    agregarMascota: function(familia) {
        this.familias.splice(0, 0, familia)
        return this.familias
    },
    contadorMascota: function() {
        var contador = 0
        var mensaje
        this.familias.forEach(function(familia, index, array) {
            if(familia.endsWith('os')) { //también podría ser familia.substr(-2) === 'os'
                contador++
            }
        })
        mensaje = `En el arreglo hay ${contador} mascotas que terminan con 'os'`
        return mensaje
    }
}

mascotas.eliminarMascota('perros')
console.log(mascotas.familias)
//mascotas.eliminarUltimaMascota()
mascotas.agregarMascota('perros')
console.log(mascotas.familias)
console.log(mascotas.contadorMascota())

const trabajador = {
    nombre: 'John Smith',
    cargo: 'QA',
    empresa: {
        ubicacion: {
            comuna: 'Santiago',
            puesto: 'nº 24',
        },
        datos: {
            nombre: 'ACME',
        },
        clientes: ['Facebook', 'Google'],
    },
    gustos: ['comer', 'ver televisión', 'dormir'],
    hijos: null,
    
}

const {
    nombre: nombreTrabajador,
    cargo,
    empresa,
    gustos: [primerGusto, ...restoGustos],
    hijos = '(Sin hijos)',

} = trabajador;

const{
    ubicacion,
    datos,
    clientes: [primerCliente, ...restoClientes],
} = empresa;

const {
    comuna,
    puesto,
} = ubicacion

const {
    nombre,
} = datos;

const informacion = function (trabajador) {
    if(hijos === null) {
        var hijosMensaje = `no tiene hijos`
    } else {
        var hijosMensaje = `tiene ${hijos}`
    }
    return `El trabajador ${nombreTrabajador} trabaja en ${nombre} con cargo ${cargo} y le gusta ${primerGusto} y ${restoGustos.length} más, ${hijosMensaje}`
}

const laboral = function (trabajador) {
    return `El trabajador ${nombreTrabajador} va a su trabajo en ${comuna}, es ${cargo}, en el puesto ${puesto}, trabaja con ${primerCliente} y ${restoClientes}`
}

