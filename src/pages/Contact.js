
import ContactForm from "../forms/ContactForm"
import Portrait from '../images/portrait.jpg';

export default function Contact(){
    return  <div>
                <div className="contact-form">
                <div className="row">
                  <div className="col-sm-8">
                    <ContactForm/>
                  </div>
                  <div className="col">
                    <div className="portrait-container">
                      <img src={Portrait} className="portrait" alt="" />
                      <h4>Emily Smith<br/>
                      (111) 222-3333
                      </h4>
                    </div>
                  </div>
                </div>
                
                </div>
                <div className="contact-container"></div>
            </div>
    
}