import * as  React from 'react';
import { Nav, Navbar, Image } from 'react-bootstrap';
import { IUserProps } from 'models/iuserprops';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.scss';
import { RootState } from 'store/rootreducer';
import { logoutAsync } from 'store/auth/authactions';
import { ThunkDispatch } from 'redux-thunk';
import { IStyleData } from 'models/istyledata';
import { getCSSFromStyleData, StyleProperties } from 'handlers/styledatatocsshandler';

interface IHeaderState {
    loginState : boolean;
}

interface IHeaderStoreProps {
    userProps: IUserProps;
    loginState: boolean;
    styleData: IStyleData;
}

interface IHeaderDispatchprops {
    logout: (loginState: boolean) => void;
}

interface IHeaderProps extends IHeaderStoreProps, IHeaderDispatchprops {}

export class Header extends React.Component<IHeaderProps, IHeaderState> {
    public render() {
        return <header className="header">
            <Navbar expand="lg"  style={getCSSFromStyleData(this.props.styleData, 
            [StyleProperties.backgroundColour, StyleProperties.textColour, StyleProperties.fontFamily])}>
                <Navbar.Brand>
                    <Link to="/">
                        <Image className="logoImage" style={getCSSFromStyleData(this.props.styleData,
                        [StyleProperties.backgroundColour, StyleProperties.textColour])} fluid={true} src={this.props.styleData.logoUrl} />
                    </Link>
                </Navbar.Brand>
                <Nav>
                    <Link to="/controlPanel" style={getCSSFromStyleData(this.props.styleData,
                    [StyleProperties.backgroundColour, StyleProperties.textColour, StyleProperties.fontFamily])} className="navbar-link"> Control Panel </Link>
                </Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav className="nav-custom-right flex-md-column flex-lg-column">
                        <Navbar.Text className="text-right" style={getCSSFromStyleData(this.props.styleData, [StyleProperties.backgroundColour, StyleProperties.textColour])}>
                            Welcome: {this.props.userProps.forename} {this.props.userProps.surname} 
                        </Navbar.Text>  
                        <Link className="navbar-link text-right" style={getCSSFromStyleData(this.props.styleData, [StyleProperties.backgroundColour, StyleProperties.textColour])} to="/login" onClick={(e: any)=> {this.props.logout(this.props.loginState)}}>{this.props.loginState ? "Logout" : "Login"}  </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <link href={this.props.styleData.fontUrl} rel="stylesheet"></link>
        </header>
    }
}



const mapStateToProps = (state: RootState) :  IHeaderStoreProps => {
    return {
        userProps: state.auth.userProps,
        loginState: state.auth.loggedIn,
        styleData: state.application.styleData,
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): IHeaderDispatchprops => {
    return {
        logout: async () => {
            await dispatch(logoutAsync())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);