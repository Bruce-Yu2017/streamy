import React from 'react';
import { clientId } from './clientId';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: clientId,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    })
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    }
    else {
      this.props.signOut();
    }
  }

  onSignIn = () => {
    this.auth.signIn();
  }
  onSignOut = () => {
    this.auth.signOut();
    // window.gapi.auth2.getAuthInstance().signOut()
  }

  renderAuthButton() {
    if (this.props.auth === null) {
      return null
    }
    else if (this.props.auth) {
      return (
        <button onClick={this.onSignOut} className='ui red google button'>
          <i className='google icon' />
          Sign out!
        </button>
      )
    }
    else {
      return (
        <button onClick={this.onSignIn} className='ui red google button'>
          <i className='google icon' />
          Sign in!
        </button>
      )
    }
  }

  
  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {auth: state.auth.isSignIn}
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);