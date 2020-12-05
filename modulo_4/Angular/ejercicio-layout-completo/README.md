# Layout completo de mini-aplicación

## Resumen

Ejemplo modelo: https://carherco.es/curso-angular-ejercicio-final

Nuevo proyecto de Angular con routing, con estilos scss y con Angular Material

Crea los componentes necesarios para crear el layout  
- Dos menús. Un menú público que se mostrará cuando el usuario todavía no haya hecho login y un menú privado que se mostrará cuando el usuario haya hecho login  
- Enlaces del menú público.  
- Enlaces del menú privado.  
- Logo y nombre de la web en la cabecera.  Algún contenido estático en el pie.

Routing para asingar una url a cada una de las 7 páginas de los menús

Formulario de login incluyendo validaciones y mensajes de error.  Botón de login deshabilitado mientras formulario inválido.

Servicio Auth que gestione el estado relacionado con la autenticación del usuario

Persistencia del estado de autenticación usando localstorage

El componente de login redirije al usuario al dashboard si éxito

Solamente se muestra el menú público si el usuario no está logueado y el menú privado si el usuario sí está logueado.

Botón para salir

Cuando el usuario esté logueado, muestra el username del usuario.

## Mejoras incluídas aparte del ejercicio

- El botón de logout redirije al home cuando el usuario termina sesión
- Se añaden guardas (interfaz CanActivate) a "app-routing.module.ts", de forma que el routing chequee automáticamente si el usuario está logueado.  Si no está logueado, redirije al home

## Revisión

