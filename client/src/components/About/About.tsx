import { Link } from "react-router-dom";
import Title from "../Title/Title";

function About() {
    return (

        <>
            <Title text={`About Us`}>
                <small className="text-muted d-block">
                    <span>Very interesting stuff about us</span>
                </small>
            </Title>

<div className="d-flex justify-content-center">
            <small className="text-muted d-block">
                Lots of words about business and aspiration and blah blah
            </small>
            </div>
            <div className="d-flex justify-content-center">
                <Link to="/"><button className="btn btn-primary">Back to Homepage</button></Link>
                
            </div>
        </>
    );
}

export default About;