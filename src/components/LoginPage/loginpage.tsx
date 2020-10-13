import { ILoginFormData } from "models/iloginformdata";
import React, { ChangeEvent, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";
import { ILoginAction } from "store/actions";
import { loginAsync } from "store/auth/authactions";
import { RootState } from "store/rootreducer";

interface ILoginPageStoreProps {
    username: string,
    loginState: boolean,
}

interface ILoginPageDispatchProps {
    login: (payload: ILoginFormData) => void;
}


export interface ILoginPageProps  extends ILoginPageStoreProps, ILoginPageDispatchProps {}

interface ILoginPageState {
    username: string,
    password: string,
}

export class LoginPage extends React.Component<ILoginPageProps, ILoginPageState> {
    public constructor(props: ILoginPageProps) {
        super(props);
        this.state = { username: this.props.username, password: '' };
    }


    private handleLogin(event : FormEvent<HTMLElement>) {
        this.props.login({username: this.state.username, password: this.state.password});
        event.preventDefault();
    }
    

    public render() {
        if(this.props.loginState) {
            return <Redirect to="/controlpanel" />
        }
        return <Form onSubmit={(e: FormEvent<HTMLElement>) =>{ this.handleLogin(e)}}>
            <Form.Group>
                <Form.Label>
                    Username:
                </Form.Label>
                <Form.Control name="username" type="text" placeholder="Enter Username" value={this.state.username} onChange={this.handleUserNameChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    Password:
                </Form.Label>
                <Form.Control name="password" type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    }

    private handlePasswordChange = (event: ChangeEvent<any>) => {
        this.setState({
            password : event.target.value
        })
    }

    private handleUserNameChange = (event: ChangeEvent<any>) => {
        this.setState({
            username : event.target.value
        })
    }
}

const mapStateToProps = (state: RootState): ILoginPageStoreProps =>{
    return {
        username : state.auth.userProps.username,
        loginState: state.auth.loggedIn,
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, {}, ILoginAction>): ILoginPageDispatchProps => {
    return {
        login: async (payload) => {
            await dispatch(loginAsync(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)