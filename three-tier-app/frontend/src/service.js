async function fetchProjects () {
  return [
    {
      id:0,
      team: "APIPeople PortX",
      client: "ModusBox",
      project: "DocFox - MVB",
      core: "Jack Henry Onboarding + JHA Sinergy",
      roles: {
        ba: "Arthur Anzai",
        sa: "Renan Roggia",
        dev: "Douglas Schwingel"
      },
      goLiveDate: new Date("2022-02-02")
    },
    {
      id:100,
      team: "APIPeople PortX",
      client: "ModusBox",
      project: "DocFox - Carver",
      core: "Jack Henry Onboarding + JHA Sinergy",
      roles: {
        ba: "Arthur Anzai",
        sa: "Renan Roggia",
        dev: "Renan Roggia"
      },
      goLiveDate: new Date("2022-02-02")
    }
  ]
}

function addProject(){

}

function deleteProject(id){

}

function editProject(id) {

}

module.exports = {
  fetchProjects,
  addProject,
  deleteProject,
  editProject
}