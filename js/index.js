let productos = Number(prompt(`Buen dia, bienvenido a Creammy Desserts :D
                        Qué desea comprar? Ingrese un número
                        1. Cheesecake $1000
                        2. Lemon Pie $1000
                        3. Torta Oreo $1200
                        4. Salir`));

let cheesecake = 1000;
let lemonPie = 1000;
let tortaOreo = 1200;

while (productos !== 4 ){
    if (productos === 1)
    {
        let pago = Number(prompt("Con cuanto va a pagar?"));
        let vuelto = pago-cheesecake;
        if(pago>1000)
        {
            alert("Su vuelto es de $" + vuelto + ".");
            break;
        }
        else(pago<1000)
        {
            let faltante = cheesecake-pago;
            alert("Le hacen falta " + faltante + " para poder comprarlo.");
            break;
        }
    }
    else if (productos === 2)
    {
        let pago = Number(prompt("Con cuanto va a pagar?"));
        let vuelto = pago-lemonPie;
        if(pago>1000)
        {
            alert("Su vuelto es de $" + vuelto + ".");
            break;
        }
        else(pago<1000)
        {
            let faltante = lemonPie-pago;
            alert("Le hacen falta " + faltante + " para poder comprarlo.");
            break;
        }
    }
    else if (productos === 3)
    {
        let pago = Number(prompt("Con cuanto va a pagar?"));
        let vuelto = pago-tortaOreo;
        if(pago>1000)
        {
            alert("Su vuelto es de $" + vuelto + ".");
            break;
        }
        else(pago<1000)
        {
            let faltante = tortaOreo-pago;
            alert("Le hacen falta " + faltante + " para poder comprarlo.");
            break;
        }
    }
    else
    {
        alert("Dato inválido. Por favor seleccione uno de los elementos de la lista.")
        alert(productos);
        break;
    }
}
alert("Gracias visitar Creammy Desserts.")
