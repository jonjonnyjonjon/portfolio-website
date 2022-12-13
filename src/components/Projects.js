// import { Card, CardContent, Grid, Typography } from "@mui/material"
// import SkillBadge from "./SkillBadge"

// import DoransInn from "../img/dorans-inn.png"
// import Antbuildz from "../img/antbuildz.png"

// import { FaPython, FaJava, FaGithub } from "react-icons/fa";
// import { GrMysql } from "react-icons/gr"
// import { SiSpringboot, SiHibernate, SiApachemaven, SiThymeleaf, SiRabbitmq, SiJinja } from "react-icons/si"

// const Projects = () => {
//     return (
//         <section className="projects-section" id="projects-section">
//             <div className="projects-wrapper">
//                 <div className="projects-text">
//                     <h1>projects done;</h1> 
//                     <span>Here are a few projects I have done.</span>
//                 </div>
//                 {/* <Grid container spacing={2}>
//                     <Grid item xs={12} md={4}>
//                         <ProjCard img={DoransInn}/>
//                     </Grid>
//                     <Grid item xs={12} md={4}>
//                         <ProjCard img={Antbuildz}/>
//                     </Grid>
//                     <Grid item xs={12} md={4}>
//                         <ProjCard />
//                     </Grid>
//                 </Grid> */}
//                 <Grid container className="project-card" direction="row" justifyContent="center" alignItems="center">
//                     <Grid item md={5}>
//                         <img src={DoransInn} alt="DoransInn logo" />
//                     </Grid>
//                     <Grid item md={7}>
//                         <Card style={{ boxShadow: "12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 100px 100px 80px rgba(0, 0, 0, 0.07)" }}>
//                             <CardContent>
//                                 <Typography sx={{fontSize: 14}}color="text.secondary">
//                                     School project
//                                 </Typography>
//                                 <Typography variant="h5">
//                                     Doran's Inn: An E-Commerce Platform
//                                 </Typography>
//                                 <Typography variant="body1">
//                                     A web app that simulates the purchasing process on an e-commerce shopping platform. Utilizes Flask to build a microservice architecture and a message-oriented middleware, RabbitMQ.
//                                 </Typography>
//                                 <div className="project-card-badges" style={{ display: "flex", justifyContent: "space-between" }}>
//                                     <div className="skill-badges">
//                                         <SkillBadge icon={<FaPython size="1rem" />} text="Python" />
//                                         <SkillBadge icon={<GrMysql size="1rem" />} text="MySQL" />
//                                         <SkillBadge icon={<SiRabbitmq size="1rem" />} text="RabbitMQ" />
//                                         <SkillBadge icon={<SiJinja size="1rem" />} text="Jinja" />
//                                     </div>
//                                     <div>
//                                         <FaGithub onClick={() => window.open("https://www.github.com/jonjonnyjonjon", "_blank")} style={{ "cursor": "pointer" }}/>
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 </Grid>

//                 <Grid container className="project-card">
//                     <Grid item xs={12} md={5}>
//                         <img src={Antbuildz} alt="Antbuildz logo"/>
//                     </Grid>
//                     <Grid item xs={12} md={7}>
//                         <Card style={{ boxShadow: "12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 100px 100px 80px rgba(0, 0, 0, 0.07)" }}>
//                             <CardContent>
//                                 <Typography sx={{fontSize: 14}} color="text.secondary">
//                                     School project
//                                 </Typography>
//                                 <Typography variant="h5">
//                                     Antbuilz: A Bidding Platform
//                                 </Typography>
//                                 <Typography variant="body1">
//                                     A web app for the construction industry to rent and loan industrial equipment. Search for your wanted equipment and place your desired bids on them. 
//                                 </Typography>

//                                 <div className="project-card-badges">
//                                     <div>
//                                         <SkillBadge icon={<FaJava size="1rem" />} text="Java" />
//                                         <SkillBadge icon={<SiSpringboot size="1rem" />} text="Springboot" />
//                                         <SkillBadge icon={<SiHibernate size="1rem" />} text="Hibernate" />
//                                         <SkillBadge icon={<SiApachemaven size="1rem" />} text="Maven" />
//                                         <SkillBadge icon={<SiThymeleaf size="1rem" />} text="Thymeleaf" />
//                                         <SkillBadge icon={<GrMysql size="1rem" />} text="MySQL" />
//                                     </div>
//                                     <div>
//                                         <FaGithub onClick={() => window.open("https://www.github.com/jonjonnyjonjon", "_blank")} style={{ "cursor": "pointer" }}/>
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 </Grid>

//             </div>
//         </section>
//     )
// }

// export default Projects