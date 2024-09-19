import "./App.css";
import { Button, Card, Col, Container, Nav, Row } from "react-bootstrap";
import GoblinValley from "./assets/GoblinValley.jpg";
import TravelBlog from "./assets/TravelBlogThumbnail.jpg";
import EncounterManager from "./assets/EncounterManagerThumbnail.jpg";
import Medieval from "./assets/Medieval.jpg";

function App() {
  return (
    <Container data-bs-theme="black">
      <Row>
        <Col>
          <Card className="bg-black text-white">
            <Card.Header className="text-center">
              <h1>Joseph Billings</h1>
              <h3>Web Developer - Full Stack Software Engineer</h3>
            </Card.Header>
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                I’m a full stack developer with a strong focus on backend
                development, specializing in API design, SQL databases, and
                Node.js. On the frontend, I’m skilled in JavaScript, React,
                Redux, CSS, and HTML, creating responsive, user-friendly
                interfaces. I’m passionate about building efficient, scalable
                systems that seamlessly connect the front and back end,
                delivering secure, maintainable, and impactful software. Let’s
                collaborate to bring innovative ideas to life!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button>
                <Nav.Link href="https://www.linkedin.com/in/joseph-billings/">
                  LinkedIn Profile
                </Nav.Link>
              </Button>
              <Button>
                <Nav.Link href="https://github.com/jobill18">
                  GitHub Page
                </Nav.Link>
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="bg-black text-white ">
            <Card.Header className="text-center">
              <h3>My Projects</h3>
            </Card.Header>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="w-100">
            <Card.Img src={GoblinValley} />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>
              <h3>Travel Social Site</h3>
            </Card.Header>
            <Card.Img src={TravelBlog} />
            <Card.Footer>
              This project was designed to create a site that allows a user to
              share their favorite places to visit and see what locations others
              in the community have enjoyed most. We used the Countries Now API
              to ensure that we included every country, state, and city in our
              drop down options. We also included options for users to create a
              wishlist of locations that interest them using entries from other
              users.
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Header>Dungeons and Dragons Planner</Card.Header>
            <Card.Img src={EncounterManager} />
            <Card.Footer>
              I thought up this project when I was considering how to make
              planning for an encounter in Dungeons and Dragons easier. I used
              the D&D 5e API to access the monster stats then built a relational
              database to hold the user data including allowing them to save and
              edit encounters with different monsters and titles to identify
              them by. I was also able to include a function to make an attack
              roll based on the monsters stats and keep track of their hit
              points.
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src={Medieval} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
