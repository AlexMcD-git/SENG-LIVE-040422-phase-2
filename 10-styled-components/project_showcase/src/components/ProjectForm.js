import { useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";

const ProjectForm = ({ onAddProject }) => {

  const initialState = {
    name: "",
    about: "",
    phase: "",
    link: "",
    image: "",
  }

  const {formData, setFormData, handleChange} = useForm(initialState)

  const nameInputRef = useRef() // return value will be: {current: the element we attached the reference to}

  const aboutInputRef = useRef()

  // when the projectForm loads(DOMCONTENTLOADED), then bring the input field immediately into focus
  useEffect(() => {
    // how to access input element using the reference we created 
    nameInputRef.current.focus()
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...formData, claps: 0 }),
    };

    fetch("http://localhost:4000/projects", configObj)
      .then((resp) => resp.json())
      .then((project) => {
        onAddProject(project);
        setFormData(initialState);
      });
  };

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={formData.name}
          ref={nameInputRef}
        />

        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          onChange={handleChange}
          value={formData.about}
          ref={aboutInputRef}
        />

        <label htmlFor="phase">Phase</label>
        <select
          name="phase"
          id="phase"
          onChange={handleChange}
          value={formData.phase}
        >
          <option value="">Pick a Phase</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input
          type="text"
          id="link"
          name="link"
          onChange={handleChange}
          value={formData.link}
        />

        <label htmlFor="image">Screenshot</label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={handleChange}
          value={formData.image}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
