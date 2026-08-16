# Proyecto 04 - Tienda de Licores

Este proyecto es una aplicación web de comercio electrónico enfocada en la venta de botellas y bebidas alcohólicas. La interfaz está diseñada como una tienda moderna y elegante para explorar productos, filtrar por categoría, revisar detalles y agregar artículos al carrito de compras.

## Descripción del proyecto

La aplicación permite a los usuarios:

- Explorar un catálogo de productos con diseño visual atractivo.
- Filtrar artículos por categoría y ordenar la vista según criterios disponibles.
- Navegar entre páginas con React Router.
- Ver un resumen del carrito y actualizar cantidades.
- Recibir notificaciones visuales al agregar productos.
- Mantener una experiencia fluida con una estructura modular y reutilizable.

La temática del proyecto se centra en una "barra de la casa", con una propuesta visual inspirada en una selección premium de destilados y bebidas de alta gama.

## Funcionalidades principales

- Catálogo de productos con paginación.
- Filtros por tipo de producto o categoría.
- Vista principal, acerca de, catálogo y carrito.
- Carrito de compras con gestión de cantidades.
- Contextos globales para carrito y mensajes de notificación.
- Diseño responsivo para distintos tamaños de pantalla.
- Datos simulados cargados desde un archivo JSON local.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- React Router DOM
- CSS Modules / estilos personalizados

## Estructura del proyecto

- src/pages: páginas principales de la aplicación.
- src/components: componentes reutilizables de productos, layout y UI.
- src/context: contextos de carrito y toasts.
- src/hooks: lógica reutilizable para catálogo y carrito.
- src/services: acceso a datos de productos.
- public/mock: archivo JSON con productos de ejemplo.
- src/assets/img: imágenes locales de los productos.

## Archivo de productos y ubicación de imágenes

La información de los productos se encuentra en el archivo JSON:

```text
public/mock/products.json
```

Este archivo contiene un arreglo de objetos, donde cada producto incluye campos como:

- id
- name
- price
- image
- category
- abv
- stock
- description

Ejemplo:

```json
{
  "id": "p1",
  "name": "Ron Añejo 12 años",
  "price": 24.5,
  "image": "/src/assets/img/vodka01.png",
  "category": "ron",
  "abv": 40,
  "stock": 12,
  "description": "Ron añejo, sabor suave y notas de caramelo."
}
```

El campo `image` indica la ruta de la imagen que se mostrará en la tarjeta del producto. En este proyecto, las imágenes están ubicadas principalmente en la carpeta:

```text
src/assets/img/
```

También existen imágenes en la carpeta pública, por ejemplo:

```text
public/assets/
```

Estas rutas se leen desde el JSON y luego son renderizadas por el componente `ProductCard` en `src/components/product/ProductCard.jsx`. Si una imagen no carga correctamente, el componente reemplaza la vista con una imagen fallback para evitar que la interfaz se rompa.

La carga de productos se realiza desde el servicio:

```text
src/services/products.js
```

que consulta el archivo JSON mediante `fetch('/mock/products.json')`. Luego, el hook `useProducts` en `src/hooks/useProducts.js` procesa los datos, aplica filtros y calcula la paginación antes de mostrarlos en la página de catálogo.

## Instalación

1. Clona este repositorio.
2. Entra a la carpeta del proyecto.
3. Instala las dependencias:

```bash
npm install
```

4. Inicia la aplicación en modo desarrollo:

```bash
npm run dev
```

5. Abre la URL que te indique Vite en el navegador.

## Scripts disponibles

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Objetivo

El proyecto busca demostrar el desarrollo de una interfaz de e-commerce con React, aplicando buenas prácticas de componentes, rutas, contexto y manejo de estado para construir una experiencia de compra dinámica y moderna.
