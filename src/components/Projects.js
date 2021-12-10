import { Grid, Typography } from "@mui/material"
import ProjCard from "./ProjCard"
import DoransInn from "../img/dorans-inn.png"
import Antbuildz from "../img/antbuildz.png"

const Projects = () => {
    return (
        <section className="projects-section" id="projects-section">
            <div className="projects-wrapper">
                <div className="projects-text">
                    <Typography variant="h3">
                        projects done;
                    </Typography>

                    <Typography variant="h6">
                        Here are a few projects I have done.
                    </Typography>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <ProjCard img={DoransInn}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ProjCard img={Antbuildz}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ProjCard />
                    </Grid>
                </Grid>
            </div>
        </section>
    )
}

export default Projects