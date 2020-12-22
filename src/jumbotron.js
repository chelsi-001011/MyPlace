import profilePhoto from './profilephoto.png';

const Jumbotron = () =>{
  return (<article className="jumbotron header grid responsiveGrid">
    <div className="col responsiveBottom">
      <h2 className='jumboName heading'>Hi! I'm Chelsi Rawat.</h2>
      <p className="para basicIntro">I am an undergraduate Computer Science and Engineering Student at <span className="collegeName"><a href="https://www.iitg.ac.in/" target="_blank">IIT Guwahati</a></span>.</p>
      <p className="para">Looking for <span className="sde">Software Development</span> opportunities.</p>
      <div className="para">View my <a className="resume" href="https://drive.google.com/file/d/1zfQSdHtf5KGvGgUidyysDCOSMHEav_xJ/view?usp=sharing" target="_blank">Resume</a>!</div>
      <br></br>
    </div>
    <div className="col responsiveHide">
      <img className="profilePhoto" src={profilePhoto}></img>
    </div>
  </article>
  );
}

export default Jumbotron