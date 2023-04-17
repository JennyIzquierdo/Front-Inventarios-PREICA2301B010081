import { axiosConfig  } from "../configuration/axiosConfig"

const getTipoEquipos = (estado) => {
    return axiosConfig.get('tipoequipos?estado='+estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
} 

const createTipoEquipo = () => {
    // implementarlo
}

export {
    getTipoEquipos,
    createTipoEquipo
}