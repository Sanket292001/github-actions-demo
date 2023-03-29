const express = require('express')
const app = express()
const port = 3000 || process.env.PORT

app.get('/', (req, res) => {
  res.send("API Base Endpoint");
})

app.get('/target_types', (req, res) => {
  res.json(["docker-nodes", "hardware-nodes", "max-capacity-nodes", "nightly", "any"])
})

app.get('/targets', (req, res) => {
    var target_type = req.query.target_type

    if (target_type === "docker-nodes") {
        res.json(["docker-cicd-1","docker-cicd-2","docker-cicd-3"])
    } else if (target_type === "hardware-nodes") {
        res.json(["hardware-cicd-1","hardware-cicd-2","hardware-cicd-3"])
    } else if (target_type === "max-capacity-nodes") {
        res.json(["max-capacity-cicd-1","max-capacity-cicd-2","max-capacity-cicd-3"])
    } else if (target_type === "nightly") {
        res.json(["nightly-cicd-1","nightly-cicd-2","nightly-cicd-3","nightly-cicd-4"])
    } else {
        res.json(["node-1","node-2","node-3"])   
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
