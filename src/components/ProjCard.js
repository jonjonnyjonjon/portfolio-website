import { Button } from "@mui/material";
import "./Projects.css"

const ProjCard = props => {
    return (
        <div className="projectCard">
            <img src={props.img} width="100%" alt="projcardimg" />
            <div className="seeMoreBtnBox">
                <p>E-commerce website</p>
                <span>Frontend, Backend</span>
                <Button variant="contained" size="small" className="seeMoreBtn">Click to see more</Button>
            </div>
        </div>

    );
}

export default ProjCard