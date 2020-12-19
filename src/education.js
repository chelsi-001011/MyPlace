const Education = () =>{
  return (<section className="education section">
    <h1 className="heading">Education</h1>
    <div className="item grid">
      <div className="col">
        <h3 className="item-heading">Indian Institute of Technology, Guwahati</h3>
        <p className="item-description">B. Tech. Computer Science and Engineering</p>
        <ul className="item-list ">
          <li className="item-listItem percentage">CGPA: 7.56</li>
        </ul>
      </div>
      <div className="col flex-center-end">
        <p className="item-timePeriod">2019 - 2023 (Expected)</p>
      </div>
    </div>

    <div className="item grid">
      <div className="col">
        <h3 className="item-heading">Convent Of Jesus & Mary, Dehradun</h3>
        <p className="item-description">ISC Board, 12th Grade</p>
        <ul className="item-list">
          <li className="item-listItem percentage">Percentage: 96.0%</li>
        </ul>
      </div>
      <div className="col flex-center-end">
        <p className="item-timePeriod">2019</p>
      </div>
    </div>

    <div className="item grid">
      <div className="col">
        <h3 className="item-heading">Convent Of Jesus & Mary, Dehradun</h3>
        <p className="item-description">ICSE Board, 10th Grade</p>
        <ul className="item-list">
          <li className="item-listItem percentage">Percentage: 93.2%</li>
        </ul>
      </div>
      <div className="col flex-center-end">
        <p className="item-timePeriod">2017</p>
      </div>
    </div>
  </section>);
}

export default Education