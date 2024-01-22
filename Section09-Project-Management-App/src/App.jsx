import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectsSidebar from "./Components/ProjectsSidebar";

function App() {

  const [projectData, setProjectData] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  const [showProject, setShowProject] = useState(false);
  const [projectsData, setProjectsData] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const addProjectData = (data) => {
    setProjectsData((prevState) => [...prevState, data])
  }
  const handleSelectProject = (id) => {
    selectedProjectId(id);
  }
  return (
    <main className="h-screen my-8 flex gap-8">
     <ProjectsSidebar onStartAddProject={() => setShowProject(!showProject)} projects={projectsData}  onSelectProject={handleSelectProject}
        selectedProjectId={selectedProjectId}/>
     {showProject ? <NewProject onAdd={addProjectData}/> :   <NoProjectSelected onStartAddProject={() => setShowProject(!showProject)}/>}
   
    </main>
  );
}

export default App;
