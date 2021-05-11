const Extracurriculars = () => {
  return(
    <section className="section extra">
      <p className="task"><i class="fas fa-laugh-wink"></i></p>
      <h1 className="heading">Extracurriculars</h1>
      <div className="Mentorship">
        <h3 className="heading border-2">Mentorship</h3>
        <p className="extracurricular-info">Selected as a Mentor under Mentor-Mentee program of CSE Department. Mentoring a group of freshers in their journey through Engineering ;)</p>
      </div>
      <div className="Opensource">
        <h3 className="heading border-2">Open Source Contributions</h3>
        <p className="extracurricular-info">Contributed to the open source community, would continue contributing. Recently participated in Hacktober Fest 2020.</p>
      </div>
      <div className="tennis">
        <h3 className="heading border-2"><a href="https://www.facebook.com/TennisClubIITG">GAME - SET - MATCH </a></h3>
        <p className="extracurricular-info">Tennis has always been an important part of my life.Currently I am the Tennis Club Secretary of the club.</p>
      </div>
    </section>
  );
}

export default Extracurriculars
