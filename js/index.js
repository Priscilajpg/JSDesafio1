function bienvenida (){
    let opciones = Number(prompt(`Bienvenido a Creammy Desserts :D Que te puedo ofrecer?
            1. Comprar
            2. Registrarse
            3. Salir`))
    {
        if (opciones === 1)
        {
            let productos = Number(prompt(`Disponemos de estos pasteles y postres. Que desea llevar?:
            1. Cheesecake $1000
            2. Lemon Pie $1000
            3. Torta Oreo $1200`));
            let cheesecake = 1000;
            let lemonPie = 1000;
            let tortaOreo = 1200;
            if (productos === 1)
            {
                let pago = Number(prompt("Con cuanto va a pagar?"));
                let vuelto = pago-cheesecake;
                if(pago>1000)
                {
                    alert("Su vuelto es de $" + vuelto + ".");
                }
                else(pago<1000)
                {
                    let faltante = cheesecake-pago;
                    alert("Le hacen falta " + faltante + " para poder comprarlo.");
                }
            }
            else if (productos === 2)
            {
                let pago = Number(prompt("Con cuanto va a pagar?"));
                let vuelto = pago-lemonPie;
                if(pago>1000)
                {
                    alert("Su vuelto es de $" + vuelto + ".");
                }
                else(pago<1000)
                {
                    let faltante = lemonPie-pago;
                    alert("Le hacen falta " + faltante + " para poder comprarlo.");
                }
            }
            else if (productos === 3)
                {
                    let pago = Number(prompt("Con cuanto va a pagar?"));
                    let vuelto = pago-tortaOreo;
                    if(pago>1000)
                    {
                        alert("Su vuelto es de $" + vuelto + ".");
                    }
                    else(pago<1000)
                    {
                        let faltante = tortaOreo-pago;
                        alert("Le hacen falta " + faltante + " para poder comprarlo.");
                    }
                }
                }
            else if (opciones === 2)
            {
                alert("Al registrarse, podrá acceder a descuentos y novedades de la empresa. Por favor, para registrarse ingrese los siguientes datos:")

                let registro = {
                    nombre: prompt("Ingrese su nombre"),
                    apellido: prompt("Ingrese su apellido"),
                    email: prompt("Ingrese su email")
                }

                let nombre = registro["nombre"];
                let apellido = registro["apellido"];
                let email = registro["email"];

                alert(`Gracias por registrarse, ${nombre} ${apellido}. Le estaremos enviando las novedades a ${email}.`)
            }
            else if (opciones === 3)
            {
            }
            else
            {
                alert("Dato inválido. Por favor seleccione uno de los elementos de la lista.")
                alert(bienvenida());
            }
            alert("Gracias visitar Creammy Desserts.")
    }
}
bienvenida()