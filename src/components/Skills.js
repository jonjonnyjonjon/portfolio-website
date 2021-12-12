import { Grid, Typography } from "@mui/material"
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa"

const Skills = () => {
    return (
        <section className="skills-section" id="skills-section">
            <div className="skills-text">
                <Typography variant="h3">
                    skills;    
                </Typography>
            </div>

            <div className="skills-box">
                <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                    <Grid item>
                        <FaReact size={100} /> ReactJS
                    </Grid>
                    <Grid item>
                        <FaNodeJs size={100} /> NodeJS
                    </Grid>
                    <Grid item>
                        <FaPython size={100} /> Python
                    </Grid>
                </Grid>
            </div>
    </section>
    )
}

export default Skills