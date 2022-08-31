import React from "react"
import plansData from "../../data/plansData"
import Tick from "../../assets/whiteTick.png"
import "./Plans.css"

const Plans = () => {
  return (
        <section className="plans" id="plans">
            <div className="blur blur-plans-1"></div>
            <div className="blur blur-plans-2"></div>
            <div className="plans-header" style={{gap:"2rem"}}>
                <span className="stroke-text">Ready To Start</span>
                <span>Your Journey</span>
                <span className="stroke-text">With Us</span>
            </div>

            <div className="plan-cards">
                {plansData.map((plan, index)=>(
                    <div className="plan-card" key={index}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span> R{plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature)=>(
                                <div className="feature">
                                    <img src={Tick} alt="tick" />
                                    <span key={index}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <span>See more Benefits</span>
                        </div>
                        <button className="btn">Join</button>
                    </div>
                ))} 
            </div>
        </section>
  )
}

export default Plans