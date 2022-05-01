class ExplorerService {
    static filterByMission(explorers, mission) {
        return explorers.filter((explorer) => explorer.mission == mission);
    }
    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission.length
    }
    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersUsernamesByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersUsernamesByMission.map((explorer) => explorer.githubUsername)
    }
}

module.exports = ExplorerService