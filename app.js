const Reader = require('./lib/utils/reader')
const ExplorerService = require('./lib/services/explorer-service')
const FizzBuzzService = require('./lib/services/fizzbuzz-service')
const express = require('express');
const app = express();
const PORT = 3000

const explorers = Reader.readJsonFile("explorers.json");
app.use(express.json())

app.get('/v1/explorers/:mission', (req, res) => {
    const mission = req.params.mission
    console.log(`GET EXPLORERS BY MISSION: ${mission}`)
    const explorersInMission = ExplorerService.filterByMission(explorers, mission)

    if (Object.entries(explorersInMission).length !== 0) {
        const fizzBuzzedTrickedExplorers = explorersInMission.map(explorer => FizzBuzzService.applyValidationInExplorer(explorer))
        res.status(200).json(fizzBuzzedTrickedExplorers)
    }
    else {
        res.status(404).json({ "message": "No explorers found" })
    }

})

app.get('/v1/explorers/amount/:mission', (req, res) => {
    const mission = req.params.mission
    console.log(`GET EXPLORERS AMOUNT BY MISSION: ${mission}`)
    const amountOfExplorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission)

    if (amountOfExplorersByMission !== 0) {
        res.status(200).json(amountOfExplorersByMission)
    }
    else {
        res.status(404).json({ "message": "No explorers found" })
    }
})

app.get('/v1/explorers/usernames/:mission', (req, res) => {
    const mission = req.params.mission
    console.log(`GET EXPLORERS USERNAMES BY MISSION: ${mission}`)
    const explorersUsernamesByMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission)

    if (Object.entries(explorersUsernamesByMission).length !== 0) {
        res.status(200).json(explorersUsernamesByMission)
    }
    else {
        res.status(404).json({ "message": "No explorers found" })
    }
})

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
})