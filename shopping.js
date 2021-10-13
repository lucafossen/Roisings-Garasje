document.getElementById('buyButton').onclick = function() {showBoughtItems()};

var prices = [94, 299, 399.90, 45.90, 49.90, 450, -1]

function showBoughtItems() {
    var id = document.getElementById('productID').value
    var amount = document.getElementById('itemAmount').value
    if (!isNaN(id) && !isNaN(amount) && id > 0 && amount > 0) {
        parseInt(id = document.getElementById('productID').value)
        parseInt(amount = document.getElementById('itemAmount').value)
        var alertVal = String(amount) + ' enheter av produktID ' + String(id) + ': ' + prices[id-1]*amount + ',-'
        if (prices[id-1]*amount < 1) {
            alertVal = 'Du har prøvd å kjøpe den ukjente gjenstanden. Jeg vil helst forhandle om prisen til denne varen.'
        }
        else if (id > 7) {
            alertVal = 'Jeg har ikke dette produkt nummeret. Dette er synd.'
        }
        alert(alertVal);
    }
    else {
        alert('Du må nok skrive et skikkelig tall for å kjøpe en skikkelig vare...')
    }
    
}