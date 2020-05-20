import React from 'react'
import { MonzacContext } from '../context/monzacContext'
import { Button } from 'reactstrap';


class SignInButton extends React.Component {
    state = {}
    render() {
        return (
            <MonzacContext.Consumer>
                {(context) => (
                    <React.Fragment>
                        <Button color="link" onClick={context.showLogin}>Sign In</Button>
                    </React.Fragment>
                )}
            </MonzacContext.Consumer>
        );
    }
}

export default SignInButton;