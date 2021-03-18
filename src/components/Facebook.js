import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {

    state = {
        auth: false,
        name: '',
    };

    responseFacebook = response => {
        console.log(response);
        if(response.status !== 'unknown')
        this.setState({
            auth: true,
            name: response.name,
        });
        
    }

    componentClicked = () => {
        console.log('Facebook btn clicked');
    }
    componentLogout = () => {
        console.log('Facebook btn clicked');
        this.setState({
            auth:false
        })
    }

    render(){
        let facebookData;

        this.state.auth ?
        facebookData = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px',
                    color: '#000'
                }}>
                    <h2>Welcome {this.state.name}!</h2>
                    <button onClick={this.componentLogout}>Log Out</button>
                </div>
            ) : 
            facebookData = (<FacebookLogin
                appId="448061323067871"
                autoLoad={true}
                fields="name,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />);

        return (
            <>
                {facebookData}
            </>
        );
    }
}