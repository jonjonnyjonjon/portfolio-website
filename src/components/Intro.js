import { Typography } from "@mui/material"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Intro = () => {
    return (
        <section className="intro-section" id="intro-section">
            <div style={{textAlign: "center"}}>
                <h1 className="greeting">hello world;</h1>
            </div>
            
            <div style={{textAlign: "center"}}>
                My name is Jonathan. <br/>
                I am an aspiring Software Engineer and Web Developer.
            </div>

            <div className="social-media-icons">
                <FaGithub size={40} onClick={() => window.open("https://www.github.com/jonjonnyjonjon", "_blank")} style={{ "cursor": "pointer" }} fontSize="large" />
                <FaLinkedin size={40} onClick={() => window.open("https://www.linkedin.com/in/jonathan-htwong", "_blank")} style={{ "cursor": "pointer" }} fontSize="large" />
                <MdEmail size={40} onClick={() => window.open("mailto:jonathanwong99@gmail.com", "_blank")} style={{ "cursor": "pointer" }} fontSize="large" />
            </div>
        </section>
    )
}

export default Intro