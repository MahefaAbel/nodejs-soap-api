const soap = require("soap");
const express = require("express");

const app = express();

app.get("/add/:intA/:intB", (request, response) => {
    const url = "http://www.dneonline.com/calculator.asmx?wsdl";

    soap.createClient(url, (error, client) => {

        const intA = request.params.intA;
        const intB = request.params.intB;
        console.log("intA: "+intA, "intB: "+ intB);

        client.Add({intA: intA, intB: intB}, (eror, result) => {
            console.log("Resultat : ", result);
            response.json(["Resultat : ", result]);
        });
    });
});

app.listen(3000);