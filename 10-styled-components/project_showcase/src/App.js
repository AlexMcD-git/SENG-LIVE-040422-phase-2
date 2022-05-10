import { useState, useEffect, createContext } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectEditForm from "./components/ProjectEditForm";
import ProjectDetail from "./components/ProjectDetail";
import Home from "./components/Home";

export const UserContext = createContext("");

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  }, []);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  const onAddProject = (newProj) => {
    setProjects((projects) => [...projects, newProj]);
  };

  const onUpdateProject = (updatedProj) => {
    const updatedProjects = projects.map((ogProject) => {
      if (ogProject.id === updatedProj.id) {
        return updatedProj;
      } else {
        return ogProject;
      }
    });
    setProjects(updatedProjects);
  };

  const onDeleteProject = (deletedProj) => {
    const updatedProjects = projects.filter(
      (project) => project.id !== deletedProj.id
    );
    setProjects(updatedProjects);
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      {currentUser ? null : (
        <button onClick={() => setCurrentUser("aysan")}>Login</button>
      )}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects/new">
          <ProjectForm onAddProject={onAddProject} />
        </Route>
        <Route path="/projects/:id/edit">
          <ProjectEditForm onUpdateProject={onUpdateProject} />
        </Route>
        <Route path="/projects/:id">
          <ProjectDetail />
        </Route>
        <UserContext.Provider value={currentUser}>
          <Route path="/projects">
            <ProjectList
              projects={projects}
              onDeleteProject={onDeleteProject}
            />
          </Route>
        </UserContext.Provider>
      </Switch>
    </div>
  );
};

export default App;
