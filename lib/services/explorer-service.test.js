test('ExplorerService', () => {
    const ExplorerService = require('./explorer-service')
    const explorers = [{
        "name": "Woopa1",
        "githubUsername": "ajolonauta1",
        "score": 1,
        "mission": "node",
        "stacks": [
            "javascript",
            "reasonML",
            "elm"
        ]
    }]

    const explorersByMission = ExplorerService.filterByMission(explorers, "node")
    expect(explorersByMission.length).toBe(1)

});