import React from "react";
import '../../styles.css'
import NavBar from "../Common/nav-bar";
import WorkExperience from "./work-experience";

const WorkExperiences = () => {
    return (
        <div>
            <div className="subheading">Work Experience</div>
                    <WorkExperience
                    dates="JANUARY 2023 – PRESENT,"
                    title="SOFTWARE ENGINEER I, FLEXCAR"
                    description="Worked as a backend engineer on the viability team to improve risk handling using data from 
                    third-party integrations, Took ownership of the design and implementation of multiple new features such 
                    as rejections based on driving records and integration with other services, Participated in multiple 
                    large-scale migrations including a complete rewrite, Communicated with other team members to 
                    coordinate work on large projects"
                    />
                    <WorkExperience
                        dates="JANUARY 2022 – DECEMBER 2022,"
                        title="SOFTWARE ENGINEER QA AUTOMATION CO-OP, WELLFRAME"
                        description="Extended automated mobile test coverage based on user workflows and stabilized 
                        existing tests following new releases, Created and updated scripts that communicate with 
                        APIs to write and receive testing metrics, Automated workflows with CI/CD pipelines in 
                        GitLab, Performed release testing"
                    />
                    <WorkExperience
                        dates="JUNE 2019 – SEPTEMBER 2023,"
                        title="TUTOR, FREELANCE"
                        description="Taught students in a variety of subjects including college-level computer 
                        science classes such as Fundamentals of Computer Science II and Algorithms and Data, 
                        Developed lesson plans based on age and skill level "
                    />
                    <WorkExperience
                        dates="2021 SPRING & FALL SEMESTERS,"
                        title="3D PRINTING STUDIO TECHNICIAN"
                        description="Worked to run 3D printing studio and fulfill student requests, Operated 3D printers and laser cutter, 
                        Set submitted files to ensure quality prints, Conducted post-processing work"
                    />
                    <WorkExperience
                        dates="FROM JUNE 2019 – TO AUGUST 2019,"
                        title="HOSTESS"
                        description="Worked in a team to ensure customers had a positive dining experience through 
                        communication and organization, Managed cash register"
                    />
                    <WorkExperience
                        dates="FROM JUNE 2018 – TO AUGUST 2018,"
                        title="CAMP COUNSELOR"
                        description="Ensured safety and enjoyment of children ages two to twelve, Adapted to unexpected 
                        circumstances, Worked with and trained other counselors, Promoted to supervisory role"
                    />
        </div>
    )
};

export default WorkExperiences;