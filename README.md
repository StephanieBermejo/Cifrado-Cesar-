# Cifrado de Cesar

## Presentacion:
>Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.

## Diagrama de flujo:
![Diagrama de Flujo](C:\Users\StephanieBT\Desktop\diagrama.jpg)

## Pseudocodigo:
![Pseudocodigo](C:\Users\StephanieBT\Desktop\pseudocodigo.jpg)

## Desarrollo:

1. Inicio
2. Crear funcion cipher
3. text= usuario "ingresa texto"
4. Encuentra la posicion de esa letra en el texto ingresado.
  4.1. Usa "String.fromCharCode".
5. Encuentra la posicion de esa letra en el texto ingresado.
  5.1. Usa "charCodeAt".
6. Crea una variable X
  6.1. x= extraer desde la posicion 0 hasta la posicion 33
7. Crea una variable y
  7.1 y= extraer desde la posicion 33 hasta el final.
8. Imprimir la suma de y+x en consola.
9. Fin.
