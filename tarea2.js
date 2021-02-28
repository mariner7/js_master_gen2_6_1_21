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

function informacion(trabajador) {
    if(!trabajador.hijos) {
        var hijos = `no tiene hijos`
    } else {
        var hijos = `tiene ${trabajador.hijos}`
    }
    return `El trabajador ${trabajador.nombre} trabaja en ${trabajador.empresa.datos.nombre} con cargo ${trabajador.cargo} y le gusta ${trabajador.gustos[0]} y ${trabajador.gustos.length - 1 } más, ${hijos}`
}

function laboral(trabajador) {
    return `El trabajador ${trabajador.nombre} va a su trabajo en ${trabajador.empresa.ubicacion.comuna}, es ${trabajador.cargo}, en el puesto ${trabajador.empresa.ubicacion.puesto}, trabaja con ${trabajador.empresa.clientes[0]} y ${trabajador.empresa.clientes[1]}`
}