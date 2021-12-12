const badgeStyle = {
    borderRadius: "5px",
    width: "fit-content",
    backgroundColor: "#EDF2F7",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: "5px",
    marginRight: "10px",
}

const SkillBadge = props => {
    return (
        <div style={badgeStyle}>
            {props.icon}
            <div style={{fontSize: "0.8rem", paddingLeft: "3px"}}>{props.text}</div>
        </div>
    )
}

export default SkillBadge