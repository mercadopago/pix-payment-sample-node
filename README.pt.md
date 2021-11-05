# Processamento de pagamento com Pix via Checkout Transparente
[English](README.md) / [Español](README.es.md)

**:warning: Atenção: Pix é uma forma de pagamento disponível apenas no Brasil**

## :computer: Tecnologias
- Node.js
- [NPM](https://www.npmjs.com) (dependency manager)
- Express

## 💡 Requisitos
- Node.js 10 ou mais recente (você pode baixar [aqui](https://nodejs.org))
- [Leia nossas instruções](https://www.mercadopago.com.br/developers/pt/guides/overview#bookmark_el_desarrollo_con_c%C3%B3digo) sobre como criar uma aplicação no Painel de Desenvolvedores do Mercado Pago para obter o access token. Essa chave irá te dar acesso às APIs do Mercado Pago.
- Para informações detalhadas sobre como receber pagamentos com Pix, [por favor leia nosso guia](https://www.mercadopago.com.br/developers/pt/guides/online-payments/checkout-api/other-payment-ways#bookmark_receber_pagamentos_com_pix) em Mercado Pago Developers.

## :gear: Instalação
1. Clone o projeto.
```bash
git clone https://github.com/mercadopago/pix-payment-sample-node.git
```

2. Acesse a pasta raiz do projeto.
```bash
cd pix-payment-sample-node
```

3. Instale as dependências necessárias.
```bash
npm install
```

## 🌟 Como executar
1. Execute o seguinte comando para iniciar a aplicação:
```bash
MERCADO_PAGO_SAMPLE_ACCESS_TOKEN=YOUR_ACCESS_TOKEN npm start
``` 

2. Lembre-se de trocar o valor de `YOUR_ACCESS_TOKEN` pela [credencial](https://www.mercadopago.com.br/developers/panel) da sua conta.

3. Acesse http://localhost:8080 em seu navegador.

### :test_tube: Testes
- Em nossas [instruções de teste](https://www.mercadopago.com.br/developers/pt/guides/online-payments/checkout-api/testing) você irá encontrar um guia sobre como criar **[usuários de teste](https://www.mercadopago.com.br/developers/pt/guides/online-payments/checkout-api/testing#bookmark_como_criar_usu%C3%A1rios)**.
- Você deve [criar uma chave Pix](https://www.mercadopago.com.br/stop/pix) na conta do Vendedor no Mercado Pago (lembre-se que você pode criar e usar um usuário de teste como Vendedor).
- **IMPORTANTE:** existem algumas limitações ao testar este método de pagamento com usuários de teste. Ao criar um pagamento, ele ficará pendente e o código Pix e QR Code correspondentes serão devolvidos, mas não será possível usar este código ou o QR Code para encerrar o fluxo e aprovar o pagamento.

## :handshake: Contribuindo
Você pode contribuir com este projeto reportando problemas e bugs. Antes de abrir uma issue, leia nosso [código de conduta](CODE_OF_CONDUCT.md).

## :bookmark: Licença
MIT License. Copyright (c) 2021 - Mercado Pago <br/>
Para mais informações, consulte o arquivo [LICENSE](LICENSE).