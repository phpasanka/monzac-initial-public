import React from 'react'
import { MonzacContext } from '../context/monzacContext'
import { Button } from 'reactstrap';
import Cookies from 'universal-cookie';

class SignInButton extends React.Component {
    state = {
        email: 'monzac@monzac.com'
    }
    onSignout = () => {
        fetch('/api/user/signout', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                const cookies = new Cookies()
                cookies.set('currentUser', '', { path: '/' });
            })
    }
    render() {
        return (
            <MonzacContext.Consumer>
                {(context) => (
                    <React.Fragment>
                        {context.state.currentUser === "" && <Button color="link" onClick={context.showLogin}>Sign In</Button>}
                        {context.state.currentUser !== "" && <Button color="link" onClick={() => {
                            this.onSignout()
                            context.showSignOut()
                        }}>{context.state.currentUser}</Button>}
                    </React.Fragment>
                )}
            </MonzacContext.Consumer>
        );
    }
}
export default SignInButton;