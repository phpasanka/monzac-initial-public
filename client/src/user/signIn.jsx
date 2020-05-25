
import React from 'react'
import { MonzacContext } from '../context/monzacContext'
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from 'reactstrap';
import SignUpButton from "./signUpButton";
import Cookies from 'universal-cookie';
//import { NotificationContainer, NotificationManager } from 'react-notifications';
//import 'react-notifications/lib/notifications.css';
const styles = {
    boxShadow: "none",
};
const loginFormstyle = {
    backgroundColor: "aliceblue",
}
class SignIn extends React.Component {
    state = {
        email: "",
        password: ""
    }

    updateEmail = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }
    updatePassword = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }
    setCookie = (user) => {
        const cookies = new Cookies();
        cookies.set('currentUser', user, { path: '/' });
        // console.log(cookies.get('currentUser'));
    }

    render() {
        const onSubmit = (event, callback) => {
            event.preventDefault();
            fetch('/api/user/login', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                if (res.status === 200) {
                    alert('Access granted..!')
                    //NotificationManager.info('Info message');
                    this.setCookie(this.state.email)
                    return callback(null, res, this.state.email);
                }
                else {
                    alert('Access denied..!')
                    return callback(res, null, "");
                }
            })
                .catch(err => {
                    console.log(err);
                    alert('Error login, plase try again...!')
                })
        }
        //<NotificationContainer />
        return (

            <MonzacContext.Consumer>
                {(context) => (

                    <Container style={loginFormstyle}>


                        <Row >
                            <Col>
                                <Form>
                                    <FormGroup>
                                        <Label>Email</Label>
                                        <Input style={styles} type="email" name="email" id="frm_email" onChange={this.updateEmail}></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Password</Label>
                                        <Input style={styles} type="password" name="password" id="frm_password" onChange={this.updatePassword}></Input>
                                    </FormGroup>
                                    <Container fluid>
                                        <Row>
                                            <Col >
                                                <Button color="link" className="float-right" onClick={(event) => {
                                                    onSubmit(event, (err, result, user) => {
                                                        if (!err) {
                                                            context.showLogin()
                                                            context.setCurrentUser(user)
                                                        }
                                                    })
                                                }}>Sign In</Button>
                                                <Button color="link" className="float-right" onClick={context.showLogin}>Cancel</Button>
                                                <SignUpButton />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Form>
                            </Col>
                        </Row>
                        {/* <NotificationContainer /> */}

                    </Container>
                )
                }
            </MonzacContext.Consumer>
        );
    }
}

export default SignIn;