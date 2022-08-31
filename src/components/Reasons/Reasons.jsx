import React from "react"
import "./Reasons.css"
import Image1 from "../../assets/reason1.jpg"
import Image2 from "../../assets/reason2.jpg"
import Image3 from "../../assets/reason3.jpg"
import Image4 from "../../assets/reason4.jpg"
import NewBalance from "../../assets/nb.png"
import Adidas from "../../assets/adidas.png"
import Nike from "../../assets/nike.png"
import Tick from "../../assets/tick.png"

const Reasons = () => {
  return (
   <section className="reasons" id="reasons">
        <div className="left-reasons">
            <img src={Image1} alt="fitness"/>
            <img src={Image2} alt="fitness" />
            <img src={Image3} alt="fitness" />
            <img src={Image4} alt="fitness" />
        </div>
        <div className="right-reasons">
            <span>some reasons</span>

            <div>
                <span className="stroke-text">why</span>
                <span> choose us?</span>
            </div>
            
            <div className="right-details">
                <div>
                    <img src={Tick} alt="reason"/>
                    <span>EXPERT LOCAL COACHES</span>
                </div>
                <div>
                    <img src={Tick} alt="reason"/>
                    <span>AFFORDABLE</span>
                </div>
                <div>
                    <img src={Tick} alt="reason"/>
                    <span>1 FREE PROGRAM FOR NEW MEMBERS</span>
                </div>
                <div>
                    <img src={Tick} alt="reason"/>
                    <span>RELIABLE PARTNERS</span>
                </div>
            </div>

            <span style={{color:"var(--gray)", fontWeight:"normal"}}>OUR PARTNERS</span>
            <div className="partners">
                <img src={NewBalance} alt="new balance" />
                <img src={Adidas} alt="adidas" />
                <img src={Nike} alt="nike" />
            </div>

        </div>
   </section>
  )
}

export default Reasons