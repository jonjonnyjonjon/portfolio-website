import { Typography } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "./Intro.css"

const Intro = () => {

    return (
        <section className="intro-section">
            <div style={{textAlign: "center"}}>
                <Typography variant="h3" className="greeting">
                    hello world;
                </Typography>

            </div>
            
            <div style={{textAlign: "center"}}>
                My name is Jonathan. <br/>
                I am an aspiring Software Engineer and Web Developer.
            </div>

            <div className="social-media-icons">
                <GitHubIcon onClick={() => window.open("https://www.github.com/jonjonnyjonjon", "_blank")} style={{ "cursor": "pointer" }} fontSize="large" />
                <LinkedInIcon onClick={() => window.open("https://www.linkedin.com/in/jonathan-htwong", "_blank")} style={{ "cursor": "pointer" }} fontSize="large" />
                <EmailIcon onClick={() => window.open("mailto:jonathanwong99@gmail.com", "_blank")} style={{ "cursor": "pointer" }} fontSize="large" />
            </div>
        </section>
    )
}

export default Intro