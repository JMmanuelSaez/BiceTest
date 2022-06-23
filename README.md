# Test de programación - Banco Bice Lab

El proyecto ha sido desarrollado utilizando Angular versión 14, ejecutado sobre Nodejs versión 16.15.1.

La aplicación es capaz de obtener los datos relacionados al Dólar desde la 
API https://www.indecon.space/values/dolar y presenta en un gráfico lineal, 
el comportamiento del valor del Dólar desde enero de 2019 hasta agosto de 2020

## Respecto a la funcionalidad

Presenta los datos relacionados al Dólar en un gráfico lineal, valor y fecha, utilizando la librería ng2-charts
Se realiza análisis de vulnerabilidades en sitio Snyk https://snyk.io/test/

## Pasos para instalación

* Clonar el proyecto desde https://github.com/JMmanuelSaez/BiceTest
* git clone https://github.com/JMmanuelSaez/BiceTest.git
* npm install --force
* ng serve

## Test unitario

ng test

## Consideraciones

Fue necesario forzar la instalación ya que tuve problemas en la versión de ng2-charts que no logré resolver
