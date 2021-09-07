import React from 'react'
import { RiExternalLinkLine, RiCodeSSlashFill } from 'react-icons/ri'

/**
* @author
* @function Project
**/

export const Project = ({image, name, codeLink, siteLink}) => {
    return (
        <>
            <li>
                <div className="project-wrap">
                    {image}
                    <div className="project-info">
                        <p>{name}</p>
                    </div>
                    <div className="project-visit">
                        <a href={codeLink} target="_blank" rel="noopener noreferrer">View Code <RiCodeSSlashFill /></a>
                        <a href={siteLink} target="_blank" rel="noopener noreferrer">Visit Site <RiExternalLinkLine /></a>
                    </div>
                </div>
            </li>
        </>
    )

}