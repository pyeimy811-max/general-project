import {z} from "zoo";
export const correo = z.trim()
.toLowerCase()
.string()
.pipe(z.email("Escribe un correo válido, por ejemplo nombre@dominio.com"));