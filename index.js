const open = require('open');
const path = require("path");
const express = require('express');
const mercadopago = require('mercadopago');

const mercadoPagoAccessToken = process.env.MERCADO_PAGO_SAMPLE_ACCESS_TOKEN;
if (!mercadoPagoAccessToken) {
  console.log("Error: access token not defined");
  process.exit(1);
}

mercadopago.configurations.setAccessToken(mercadoPagoAccessToken);

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static("./static"));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.post("/process_payment", (req, res) => {
  const requestBody = req.body;
  const data = {
    payment_method_id: "pix",
    description: requestBody.description,
    transaction_amount: Number(requestBody.transactionAmount),
    payer: {
      email: requestBody.payer.email,
      first_name: requestBody.payer.firstName,
      last_name: requestBody.payer.lastName,
      identification: {
        type: requestBody.payer.identification.type,
        number: requestBody.payer.identification.number,
      }
    }
  };

  mercadopago.payment.create(data)
    .then(function(data) {
        const { response } = data;

        res.status(201).json({
          id: response.id,
          status: response.status,
          detail: response.status_detail,
          qrCode: response.point_of_interaction.transaction_data.qr_code,
          qrCodeBase64: response.point_of_interaction.transaction_data.qr_code_base64,
        });
    }).catch(function(error) {
      console.log(error);
      const { errorMessage, errorStatus }  = validateError(error);
      res.status(errorStatus).json({ error_message: errorMessage });
    });
});

function validateError(error) {
  let errorMessage = 'Unknown error cause';
  let errorStatus = 400;

  if(error.cause) {
    const sdkErrorMessage = error.cause[0].description;
    errorMessage = sdkErrorMessage || errorMessage;

    const sdkErrorStatus = error.status;
    errorStatus = sdkErrorStatus || errorStatus;
  }

  return { errorMessage, errorStatus };
}

app.listen(8080, () => {
  console.log("The server is now running on port 8080");
  open("http://localhost:8080");
});
