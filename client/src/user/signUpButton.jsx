import React from 'react'
import { MonzacContext } from '../context/monzacContext'
import { Button } from 'reactstrap';


class SignUpButton extends React.Component {
    state = {}
    render() {
        return (
            <MonzacContext.Consumer>
                {(context) => (
                    <React.Fragment>
                        <Button color="link" onClick={context.showSignUp}>Register</Button>
                    </React.Fragment>
                )}
            </MonzacContext.Consumer>
        );
    }
}

export default SignUpButton;