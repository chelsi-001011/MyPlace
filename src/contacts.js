import ContactMe from './contactbadge.js';

const Contacts = () =>{
  return(
    <section className="contacts section">
      <h1 className="heading">Lets Hangout!</h1>
      <p className="para">Do you speak <span className="border-3">Coffee</span>? It's ok if you don't, I speak <span className="border-3">English</span> too :)</p>
      <p className="para">Looking for <span className="border-3">Software Development</span> opportunities. </p>
      <ContactMe/>
    </section>
  );
}

export default Contacts;