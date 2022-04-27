function ProjectListItem(props) {
  return (
    <li>
      <figure>
        <img src={props.project.image} alt={`project ${props.project.name}`} />
      </figure>
      <article>
        <h4>{props.project.name}</h4>
        <p>{props.project.about}</p>
      </article>
    </li>
  );
}

export default ProjectListItem;
