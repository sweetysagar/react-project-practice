import { UserClass } from "./userClass";

const About = ({name}) => {
    console.log("About props:", name);
    console.log("aboutName value:", name);
    return <div>
        <UserClass name={"Bruce Wills from About" }/>
        <h2> This is an about page where {name} is coming from body component </h2>
    </div>
}

export default About;