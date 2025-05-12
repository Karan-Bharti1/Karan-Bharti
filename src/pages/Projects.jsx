import Header from "../components/header"
import projectsData from "../database/data"

const Projects=()=>{
return(<>
<Header/>
<hr/>
<main>
    <section className="container">
    <h2 className="text-center py-2">My Projects</h2>
     <div className="row mt-5">
            {projectsData.map((project, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{project.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {project.techStack}
                    </h6>
                    <p className="card-text">{project.description}</p>
                    <ul className="mb-3">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm me-2"
                      >
                        Live Site
                      </a>
                      <a
                        href={project.links.frontendRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark btn-sm me-2"
                      >
                        Frontend
                      </a>
                      <a
                        href={project.links.backendRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark btn-sm"
                      >
                        Backend
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </section>
</main>
</>)
}
export default Projects