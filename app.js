const Reader = require('./lib/utils/reader')
const ExplorerService = require('./lib/services/explorer-service')
const FizzBuzzService = require('./lib/services/fizzbuzz-service')
// Part 1 Read json file ===========================
const explorers = Reader.readJsonFile("explorers.json");

// Part 2: Get the quantity of explorers names in node
const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, 'node')
// console.log(explorersInNode)
// Part 3: Get the explorer's usernames in Node
const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, 'node');
// console.log(usernamesInNode)
// Part 4: Get a new list of explorers in node, if the score numbers is divisible by 3, I need a new propery called trick, and the value assigned is FIZZ, if not the value should be the score itself.
const explorersInNodeMission = ExplorerService.filterByMission(explorers, 'node')
const explorersInNodeAndFizzBuzzTrick = explorersInNodeMission.map((explorer) => FizzBuzzService.applyValidationInExplorer(explorer));
// console.log(explorersInNodeAndFizzBuzzTrick)
