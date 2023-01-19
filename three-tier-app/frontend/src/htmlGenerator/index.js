const { url } = require("../projectService")

function generateProjectHTML( projects ) {
  const tableStyle = `width:100%; text-align:center;`
  const editEntry =(e) => {
    clickedId = e.path[2].children[0].innerText
    console.log("edit", clickedId )
  }
  const deleteEntry = async (e) => {
    clickedId = e.path[2].children[0].innerText
    await fetch(`${url}/projects/${clickedId}`, {method:"DELETE"} )
  }
  const navigateToAddProjectPage = () => {
    window.location.href = '/projects/add';
  }

  return `
  <!DOCTYPE html>
  <html lang="en-us">
  
  <body>
    <script>
      const editEntry=${editEntry}
      const deleteEntry=${deleteEntry}
      const addEntry=${navigateToAddProjectPage}
    </script>
    
    <h1>Projects</h1>
    <button onclick="addEntry()">Add</button>
    <table style="${tableStyle}">
    <tr>
      <th style="display:none;">Id</th>  
      <th>Team</th>
      <th>Client</th>
      <th>Project</th>
      <th>Core</th>
      <th>Go Live</th>
      <th>Manage</th>
    </tr>
      ${!projects ? "<tr><td>No Project</td></tr>" : projects.map(p => `<tr>
        <td style="display:none;">${p.id}</td>
        <td>${p.team}</td>
        <td>${p.client}</td>
        <td>${p.project}</td>
        <td>${p.core}</td>
        <td>${p.goLiveDate}</td>
        <td><button onclick="editEntry(event)">edit</button> <button onclick="deleteEntry(event)">delete</button></td>
      </tr>`)}
    </table>
  </body>
  
  </html>
`
}

module.exports = {
  generateProjectHTML
}
