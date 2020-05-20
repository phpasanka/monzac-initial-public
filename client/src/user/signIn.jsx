import React from 'react'
import { MonzacContext } from '../context/monzacContext'
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from 'reactstrap';
const styles = {
    boxShadow: "none",
};
const loginFormstyle = {
    backgroundColor: "aliceblue",
}
class SignIn extends React.Component {
    state = {}
    render() {
        return (
            <MonzacContext.Consumer>
                {(context) => (
                    <Container style={loginFormstyle}>
                        <Row >
                            <Col>
                                <Form>
                                    <FormGroup>
                                        <Label>Username</Label>
                                        <Input style={styles} type="text" name="username" id="frm_username" ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Password</Label>
                                        <Input style={styles} type="password" name="password" id="frm_password"></Input>
                                    </FormGroup>
                                    <Container fluid>
                                        <Row>
                                            <Col >
                                                <Button color="link" className="float-right">Sign In</Button>
                                                <Button color="link" className="float-right" onClick={context.showLogin}>Cancel</Button>
                                            </Col>
                                        </Row>
                                    </Container>

                                </Form>
                            </Col>
                        </Row>
                    </Container>
                )
                }
            </MonzacContext.Consumer>
        );
    }
}

export default SignIn;