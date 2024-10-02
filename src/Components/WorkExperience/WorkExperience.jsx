import React from 'react';
import "./WorkExperience.css";
import { WORK_EXPERIENCE } from '../../utils/data';
import ExperienceCard from './ExperienceCard/ExperienceCard';

const WorkExperience = () => {
    return(
        <section className='experience-container'>
            <h5>Expêriencia de trabalho</h5>
            <div className="experience-content">
                {WORK_EXPERIENCE.map((item) => (
                    <ExperienceCard key={item.empresa} details={item} />
                ))}
            </div>
        </section>
    )
}

export default WorkExperience;