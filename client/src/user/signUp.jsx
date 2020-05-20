import React from 'react'
import { MonzacContext } from '../context/monzacContext'
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from 'reactstrap';
const styles = {
    boxShadow: "none",
};
const signInFormstyle = {
    backgroundColor: "aliceblue",
}

class SignUp extends React.Component {
    state = {}
    render() {
        return (
            <MonzacContext.Consumer>
                {(context) => (
                    <Container style={signInFormstyle}>
                        <Row >
                            <Col>
                                <Form>
                                    <FormGroup>
                                        <Label>Username</Label>
                                        <Input style={styles} type="text" name="username" id="frm_username" ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Email</Label>
                                        <Input style={styles} type="email" name="email" id="frm_username" ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Password</Label>
                                        <Input style={styles} type="password" name="password" id="frm_password" ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Confirm Password</Label>
                                        <Input style={styles} type="password" name="passwordconfirm" id="frm_password_confirm"></Input>
                                    </FormGroup>
                                    <Container fluid>
                                        <Row>
                                            <Col >
                                                <Button color="link" className="float-right">Submit</Button>
                                                <Button color="link" className="float-right" onClick={context.showSignUp}>Cancel</Button>
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

export default SignUp;