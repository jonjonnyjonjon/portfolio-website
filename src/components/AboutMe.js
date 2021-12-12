import { Typography } from "@mui/material"

import InfoTerminal from "./InfoTerminal"

const Skills = () => {
    return (
        <section className="aboutme-section" id="aboutme-section">
            <div className="aboutme-text">
                <Typography variant="h3">
                    about me;    
                </Typography>
            </div>

            <div>
                <InfoTerminal />
            </div>
        </section>
    )
}

export default Skills