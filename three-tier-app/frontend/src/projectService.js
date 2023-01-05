const axios = require("axios")
const baseUrl = process.env.baseUrl || "http://localhost"
const port = process.env.port || 3001
const url = `${baseUrl}:${port}`

async function fetchProjects() {
  try{
    const result = await axios.get(`${url}/projects`)
    return result.data
  }catch(e){
    console.log("Error", e)
  }
}

function addProject() {

}

function deleteProject(id) {

}

function editProject(id) {

}

module.exports = {
  url,
  fetchProjects,
  addProject,
  deleteProject,
  editProject
}