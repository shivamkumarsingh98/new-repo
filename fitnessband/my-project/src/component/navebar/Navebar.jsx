import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown } from 'react-bootstrap';
import style from "./Navebar.module.css"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Navebar() {
    let navigate = useNavigate()
    const [showDropdownone, setShowDropdownone] = useState(false);
    const [showDropdowntwo, setShowDropdowntwo] = useState(false);
    const [showDropdownthree, setShowDropdownthree] = useState(false);
    const [showDropdownfour, setShowDropdownfour] = useState(false);
    return (
        <div className={style.body}>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand onClick={() => navigate(`/Home`)}><img
                        alt=""
                        src="./images/fit-ogp-logo.jpg"
                        width="120"
                        height="50"
                        className="d-inline-block align-top"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown  title="Workout & Programs" id="basic-nav-dropdown" show={showDropdownone} onMouseEnter={() => setShowDropdownone(true)} onMouseLeave={() => setShowDropdownone(false)}>
                                <NavDropdown.Item  onClick={() => navigate(`/Workout`)}>Workout video</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate(`/Workoutprograms`)}>Workout Programs</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate(`/Mealplans`)}>Meal Plans</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Costom Workout</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Routines</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="HEALTHY LIVING" id="basic-nav-dropdown" show={showDropdowntwo} onMouseEnter={() => setShowDropdowntwo(true)} onMouseLeave={() => setShowDropdowntwo(false)}>
                                <NavDropdown.Item onClick={() => navigate(`/Fitness`)}>Fitness</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate(`/Health`)}>
                                    Health
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate(`/Nutrition`)}>Nutrition</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    Healthy Recipy
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    Expert
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="COMMUNITY" id="basic-nav-dropdown" show={showDropdownthree} onMouseEnter={() => setShowDropdownthree(true)} onMouseLeave={() => setShowDropdownthree(false)}>
                                <NavDropdown.Item href="#action/3.1">Comunity</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Blog
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#home">FB PLUS</Nav.Link>
                            <Nav.Link href="#link">ABOUT</Nav.Link>
                            <Nav.Link href="#link">STORE</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className={style.sectiontwo}>
                <div className={style.innersectiontwo}>
                    <label>Hello!</label>
                    <label className={style.line}></label>
                    <NavDropdown title="MY FITNESS" id="basic-nav-dropdown" className={style.myfitness} show={showDropdownfour} onMouseEnter={() => setShowDropdownfour(true)} onMouseLeave={() => setShowDropdownfour(false)}>
                        <NavDropdown.Item className={style.myfitnessitem}>
                            <h3>OIN FOR FREE!</h3>
                                <p>Join for free and start</p>
                                <p> building and tracking</p>
                                <p> your workouts,</p>
                                <p>get support from other</p>
                                <p> Fitness Blender</p>
                                <p> members and more!</p>
                        </NavDropdown.Item>
                        <NavDropdown.Item class="mt-15" className={style.myfitnessitem} href="#action/3.2">
                            <button variant="primary">JOIN</button>
                        </NavDropdown.Item>
                        <NavDropdown.Item className={style.myfitnessitem} href="#action/3.3"><Button variant="primary">SIGN IN</Button></NavDropdown.Item>
                        <NavDropdown.Item className={style.myfitnessitem} href="#action/3.4">
                            <Button variant="primary">SKIP</Button>
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>
                <div>
                    <i class="bi bi-bag"></i>
                </div>
            </div>

        </div>
    )
}

export default Navebar
