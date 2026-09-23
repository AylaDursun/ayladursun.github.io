import React from "react";
import '../../styles.css'

type Input = {
    title: string
    dates: string
    description: string
    key_projects?: string[]
}

const WorkExperience = ({title, dates, description, key_projects}: Input) => {
    return (
        <div>
            <strong>
                {dates}
                <br/>
                {title}
                <br/>
            </strong>
            <p>{description}</p>
            {/* {key_projects && key_projects.length > 0 && (
                <>Key Projects:<ul>
                    {key_projects.map((project, index) => (
                        <li key={index}>{project}</li>
                    ))}
                </ul><br/></>
            )} */}
             <br/>
        </div>
    )
};

export default WorkExperience;