import ProjectListItem from "./ProjectListItem";

function ProjectList(props) {
  return (
    <div>
      {props.projects.map((project) => (
        <ProjectListItem project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
