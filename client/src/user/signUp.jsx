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
    state = {
        email: "",
        password: "",
        confirmpassword: ""
    }
    updateEmail = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }
    updatePassword = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }
    updateConfirmPassword = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        fetch('/api/user/insert', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status === 200) {
                alert('user registered successfully...!');
            }
            else {
                alert('user registered faild...!');
            }
        }).catch(err => {
            console.log(err);
            const error = new Error(err.error);
            throw error;
        })
    }




    render() {
        return (
            <MonzacContext.Consumer>
                {(context) => (
                    <Container style={signInFormstyle}>
                        <Row >
                            <Col>
                                <Form>
                                    {/* <FormGroup>
                                        <Label>Username</Label>
                                        <Input style={styles} type="text" name="username" id="frm_username" ></Input>
                                    </FormGroup> */}
                                    <FormGroup>
                                        <Label>Email</Label>
                                        <Input style={styles} type="email" name="email" id="frm_username" onChange={this.updateEmail}></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Password</Label>
                                        <Input style={styles} type="password" name="password" id="frm_password" onChange={this.updatePassword} ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Confirm Password</Label>
                                        <Input style={styles} type="password" name="confirmpassword" id="frm_password_confirm" onChange={this.updateConfirmPassword}></Input>
                                    </FormGroup>
                                    <Container fluid>
                                        <Row>
                                            <Col >
                                                <Button color="link" className="float-right" onClick={this.onSubmit}>Submit</Button>
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