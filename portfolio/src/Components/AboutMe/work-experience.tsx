import React from "react";
import '../../styles.css'

type Input = {
    title: string
    dates: string
    description: string
}

const WorkExperience = ({title, dates, description}: Input) => {
    return (
        <div>
            <strong>
                {dates}
                <br/>
                {title}
                <br/>
            </strong>
            {description}
            <br/> <br/>
        </div>
    )
};

export default WorkExperience;