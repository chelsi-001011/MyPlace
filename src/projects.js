const Projects = () =>{
  return (
  <section className="projects section">
    <h1 className="heading">Projects</h1>
    <div className="projects-container">
      <div className="project">
        <h3 className="projectName">CCD Diary <a href="https://git.io/JkX6A" target="_blank" className="link"><i class="fas fa-link"></i></a></h3>
        <p className="projectDescription">It is a Team Management Portal to keep record of companies during the Internship/Placement Season.</p>
        <div className="technology">
          <span className="techName border-1">Django</span>
          <span className="techName border-1">CSS</span>
          <span className="techName border-1">Javascript</span>
        </div>
      </div>

      <div className="project">
        <h3 className="projectName">CampZone <a href="https://git.io/JkX65" target="_blank" className="link"><i class="fas fa-link"></i></a></h3>
        <p className="projectDescription">It is a campsite review website, where users can create their own campsites, view and comment on others’ campsites.</p>
        <div className="technology">
          <span className="techName border-1">nodeJS</span>
          <span className="techName border-1">CSS</span>
          <span className="techName border-1">Javascript</span>
          <span className="techName border-1">Heroku</span>
        </div>
      </div>

    <div className="project">
        <h3 className="projectName">Techniche 2021 <a href="https:techniche.org" target="_blank" className="link"><i class="fas fa-link"></i></a></h3>
        <p className="projectDescription">Contributed to the live website of the annual techno-management festival of IITG by updating and maintainingthe website. Also working on Techniche 2021 mobile application - Releasing soon :) </p>
        <div className="technology">
          <span className="techName border-1">Javascript</span>
          <span className="techName border-1">Django</span>
          <span className="techName border-1">CSS</span>
        </div>
      </div>

      <div className="project">
        <h3 className="projectName">Personal Website <a href="#" target="_blank" className="link"><i class="fas fa-link"></i></a></h3>
        <p className="projectDescription">Developed and designed by Chelsi Rawat  &#123;Me&#125; using technologies i have never worked with! :) </p>
        <div className="technology">
          <span className="techName border-1">Javascript</span>
          <span className="techName border-1">ReactJS</span>
          <span className="techName border-1">CSS</span>
        </div>
      </div>

    </div>
  </section>);
}

export default Projects