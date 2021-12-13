import { Grid, Typography } from "@mui/material"
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa"

const Skills = () => {
    return (
        <section className="skills-section" id="skills-section">
            <div className="skills-text">
                <h1>skills;</h1>
            </div>

            <div className="skills-box">
                <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                    <Grid item>
                        <FaReact className="fareact" /> ReactJS
                    </Grid>
                    <Grid item>
                        <FaNodeJs className="fanodejs" /> NodeJS
                    </Grid>
                    <Grid item>
                        <FaPython className="fapython" /> Python
                    </Grid>
                </Grid>
            </div>
    </section>
    )
}

export default Skills