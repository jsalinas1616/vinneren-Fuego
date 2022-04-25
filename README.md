# Ejecutar el codigo del nivel 1

### `node satellitesDistance`

Si deseas obtener la distancia de cada satelite a emisor del mensaje, necesitas correr el archivo llamando satellitesDistance.

### `node message.js`

Si deseas obtner el mensaje de la nave imperial deberias de correr el archivo message.js

# Ejecutar el codigo del nivel 2

### `npm run start`

Para ejecutar el programa es necesario enviar por POST el siguiente payload:
{
"satellites": [
{
"name": "kenobi",
"message": ["este", "", "", "mensaje", ""]
},{
"name": "skywalker",
"message": ["", "es", "", "", "secreto"]
},{
"name": "sato",
"message": ["este", "", "un", "", ""]
}
]
}
