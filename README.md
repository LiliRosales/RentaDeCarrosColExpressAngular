# RentaDeCarrosColExpress

Instalar Angular

    1. Visitar https://angular.io/guide/setup-local

    2. Instalar en Visual studio:
        npm install -g @angular/cli

    3. Crear la aplicacion con el Nombre "RentaDeCarrosColExpressAngular"
        ng new RentaDeCarrosColExpressAngular

    4. Para ejecutar:
        ng server -open
        ng s -o

    5. Crear Modulos
        ng generate module modulos/seguridad --routing
        ng generate module modulos/administracion --routing
        ng generate module modulos/rentas --routing

    6. Crear Componentes

        Modulo Seguridad
            ng g c modulos/seguridad/identificacion
            ng g c modulos/seguridad/cambio-clave
            ng g c modulos/seguridad/recuperar-clave
        
        Modulo Administracion
            ng g c modulos/administracion/cliente
            ng g c modulos/administracion/asesor
            ng g c modulos/administracion/administrador
            ng g c modulos/administracion/vehiculo
            
        
        Modulo Rentas
            ng g c modulos/rentas/realizar-solicitud

    7. Creacion de plantillas
        ng g c plantillas/banner-navegacion
        ng g c plantillas/footer

    8. Editamos app.component.html de app para agregar los componentes de las plantillas
        <app-banner-navegacion></app-banner-navegacion>
        <router-outlet></router-outlet>
        <app-footer></app-footer>

    9. Instalar materialize
        npm install materialize-css@next

    10. Instalar librerias crypto
        npm install crypto-js --save
        npm install @types/crypto-js --save-dev

        se importa de alguna de estas dos formas:

        import * as CryptoJS from 'crypto-js';
        import CryptoJS = require('crypto-js);



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
