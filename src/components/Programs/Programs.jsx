import React from "react"
import "./Programs.css"
import RightArrow from "../../assets/rightArrow.png"
import programsData from "../../data/programsData"

const Programs = () => {
  return (
   <section className="programs" id="programs">
        <div className="programs-header">
            <span className="stroke-text">Explore Our</span>
            <span>Programs</span>
            <span className="stroke-text">to shape you</span>
        </div>

        <div className="program-categories">
            {programsData.map((program,index)=>(
                <div className="category" key={index}>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={RightArrow} alt="right arrow" />
                    </div>
                </div>
            ))}
        </div>
   </section>
  )
}

export default Programs