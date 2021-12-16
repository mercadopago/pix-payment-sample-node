document.getElementById("form-checkout").addEventListener("submit", function(e) {
    e.preventDefault();
    sendPayment();
});

function sendPayment() {
    const productCost = document.getElementById("amount").value;
    const productDescription = document.getElementById("product-description").innerText;

    const payerFirstName = document.getElementById("form-checkout__payerFirstName").value;
    const payerLastName = document.getElementById("form-checkout__payerLastName").value;
    const payerEmail = document.getElementById("form-checkout__payerEmail").value;

    const identificationType = document.getElementById("form-checkout__identificationType").value;
    const identificationNumber = document.getElementById("form-checkout__identificationNumber").value;
    
    document.getElementById("loading-message").style.display = "block";

    fetch("/process_payment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            transactionAmount: Number(productCost),
            description: productDescription,
            payer: {
                firstName: payerFirstName,
                lastName: payerLastName,
                email: payerEmail,
                identification: {
                    type: identificationType,
                    number: identificationNumber,
                }
            },
        }),
    })
        .then(response => {
            return response.json();
        })
        .then(result => {
            if(!result.hasOwnProperty("error_message")) {
                document.getElementById("payment-id").innerText = result.id;
                document.getElementById("payment-status").innerText = result.status;
                document.getElementById("payment-detail").innerText = result.detail;
                document.getElementById("qr-code-image").src = `data:image/jpeg;base64,${result.qrCodeBase64}`;
                document.getElementById("pix-code").innerText = result.qrCode;

                document.getElementById("success-response").style.display = "block";
                document.getElementById("pix-code-section").style.display = "block";
            } else {
                document.getElementById("error-message").innerText = result.error_message;
                document.getElementById("fail-response").style.display = "block";
            }

            $('.container__payment').fadeOut(500);
            setTimeout(() => { $('.container__result').show(500).fadeIn(); }, 500);
        })
        .catch(error => {
            alert("Unexpected error\n"+JSON.stringify(error));
        });
};

// Handle transitions
document.getElementById('checkout-btn').addEventListener('click', function(){
    $('.container__cart').fadeOut(500);
    setTimeout(() => {
        $('.container__payment').show(500).fadeIn();
    }, 500);
});

document.getElementById('go-back').addEventListener('click', function(){
    $('.container__payment').fadeOut(500);
    setTimeout(() => { $('.container__cart').show(500).fadeIn(); }, 500);
});

// Handle price update
function updatePrice(){
    let quantity = document.getElementById('quantity').value;
    let unitPrice = document.getElementById('unit-price').innerText;
    let amount = parseInt(unitPrice) * parseInt(quantity);

    document.getElementById('cart-total').innerText = '$ ' + amount;
    document.getElementById('summary-price').innerText = '$ ' + unitPrice;
    document.getElementById('summary-quantity').innerText = quantity;
    document.getElementById('summary-total').innerText = '$ ' + amount;
    document.getElementById('amount').value = amount;
};

document.getElementById('quantity').addEventListener('change', updatePrice);
updatePrice();
