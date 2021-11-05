# Procesamiento de pago con Pix a través de Checkout API
[English](README.md) / [Português](README.pt.md)

**:warning: Atención: Pix es un método de pago solo disponible en Brasil**

## :computer: Tecnologías
- Node.js
- [NPM](https://www.npmjs.com) (dependency manager)
- Express

## 💡 Requisitos
- Node.js 10 o superior (descarga [aquí](https://nodejs.org)).
- [Lee nuestras instrucciones](https://www.mercadopago.com.br/developers/es/guides/overview#bookmark_el_desarrollo_con_c%C3%B3digo) sobre cómo crear una aplicación en el Panel de Desarrolladores de Mercado Pago para obtener el access token. Esta llave te dará acceso a las API de Mercado Pago.
- Para obtener información detallada sobre cómo recibir pagos con Pix, [por favor lee nuestra guía](https://www.mercadopago.com.br/developers/es/guides/online-payments/checkout-api/other-payment-ways#bookmark_recibir_pagos_con_pix) en Mercado Pago Developers.

## :gear: Instalación
1. Clona el proyecto.
```bash
git clone https://github.com/mercadopago/pix-payment-sample-node.git
```

2. Accede a la carpeta del proyecto.
```bash
cd pix-payment-sample-node
```

3. Instala las dependencias necesarias.
```bash
npm install
```

## 🌟 Como ejecutar
1. Ejecuta el siguiente comando para iniciar la aplicación:
```bash
MERCADO_PAGO_SAMPLE_ACCESS_TOKEN=YOUR_ACCESS_TOKEN npm start
```

2. Recuerda cambiar el valor de `YOUR_ACCESS_TOKEN` por la [credencial](https://www.mercadopago.com.br/developers/panel) de su cuenta.

3. Accede a http://localhost:8080 en su navegador.

### :test_tube: Pruebas
- En nuestras [instrucciones de prueba](https://www.mercadopago.com.br/developers/es/guides/online-payments/checkout-api/testing) encontrarás una guía sobre cómo crear **[usuarios de prueba](https://www.mercadopago.com.br/developers/es/guides/online-payments/checkout-api/testing#bookmark_c_mo_crear_usuarios)**.
- Tienes que [crear una clave PIX](https://www.mercadopago.com.br/stop/pix) en la cuenta del Vendedor en Mercado Pago (recuerda que puedes crear y usar un usuario de prueba como Vendedor).
- **IMPORTANTE:** existen algunas limitaciones al realizar pruebas de este medio de pago con test users. Al crear un pago, este quedará pendiente y se devolverán el código Pix y Código QR correspondientes, pero no será posible utilizar dichos códigos para finalizar el flujo y aprobar el pago de prueba.

## :handshake: Contribuyendo
Puedes contribuir a este proyecto informando problemas y bugs. Antes de abrir una contribución, lee nuestro [código de conducta](CODE_OF_CONDUCT.md).

## :bookmark: Licencia
MIT License. Copyright (c) 2021 - Mercado Pago <br/>
Para obtener más información, consulte el archivo [LICENSE](LICENSE).
