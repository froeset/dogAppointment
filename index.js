const express = require('express');
const { json } = require('express/lib/response');
const app = express()
const port = 3000
const url = "https://hsgnacbookmypetspayneuter.as.me/api/scheduling/v1/availability/month?owner=ac693d38&appointmentTypeId=46639033&calendarId=8273724&timezone=America%2FNew_York&month=2024-05-01";

app.get('/', (req, res) => {
    fetch(url)
    .then(res => res.json())
    .then(json => {
        let dog = Object.values(json);
        if(dog.includes(true)){
            res.sendStatus(500);
        }

        res.sendStatus(200);

    })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})