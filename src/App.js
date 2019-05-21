import React, {Component} from "react";
import facade from "./apiFacade";
import databaseFacade from "./dataFacade";
import {HashRouter as Router, Route, Switch, NavLink} from "react-router-dom";
import FetchFavorite from "./tables/FetchFavoriteList";
import DummyTableClient from "./tables/DummyDataTableClient";
import DummyTableRemote from "./tables/DummyDataTableRemote";
import SwapiTable from "./tables/PersonTable";
import Employees from "./tables/Clients";
import Database from "./components/Database";
import Notes from "./components/Notes";

const URL = require('../package.json').config.url;


class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};
    }

    login = evt => {
        evt.preventDefault();
        this.props.login(this.state.username, this.state.password);
    };

    onChange = evt => {
        this.setState({[evt.target.id]: evt.target.value});
    };

    render() {
        return (
            <div id="loginBox" className="absolute-center">
                <h3 className="text-center mb-4">Login</h3>
                <form
                    className="text-center"
                    onSubmit={this.login}
                    onChange={this.onChange}
                >
                    <div className="form-group mb-4"><input
                        className="form-control text-center"
                        type="text"
                        id="username"
                        placeholder="username"
                        required
                    />
                    </div>
                    <div className="form-group mb-4">
                        <input
                            className="form-control text-center"
                            type="password"
                            id="password"
                            placeholder="password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

class LoggedIn extends Component {
    constructor(props) {
        super(props);
        this.state = {dataFromServer: "Fetching!!"};
    }

    componentDidMount() {
        const role = facade.getProfile(this.state.dataFromServer).roles;
        facade.fetchData(role).then(res => this.setState({dataFromServer: res}));
        console.log(facade.getProfile(this.state.dataFromServer).roles);
        
    }

    render() {
        return (
            <div>
                <h3>{this.state.dataFromServer}</h3>
            </div>
        );
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {loggedIn: false};
    }

    logout = () => {
        facade.logout();
        this.setState({loggedIn: false});
    };
    login = (user, pass) => {
        facade.login(user, pass).then(res => this.setState({loggedIn: true}));
    };


    render() {
        return (
            <Router>
                <div>
                    <NavMenu/>
                    <div className="container-fluid">
                        <Switch>
                            <Route exact path="/" render={() => <div><WelcomeMessage/></div>}/>
                            <Route path="/getperson" render={() => <div><SwapiTable facade={facade}/></div>}/>
                            <Route path="/getfavorite" render={() => <div><FetchFavorite facade={facade}/></div>}/>
                            <Route path="/getdummy" render={() => <div><DummyTableClient facade={facade}/></div>}/>
                            <Route path="/getdummy2" render={() => <div><DummyTableRemote facade={facade}/></div>}/>
                            <Route path="/employees" render={() => <div><Employees databaseFacade={databaseFacade}/></div>}/>
                            <Route path="/database" render={() => <div><Database /></div>}/>
                            <Route path="/notes" render={() => <div><Notes /></div>}/>
                            <Route path="/profilepage" render={() =>
                                <div>
                                    {!this.state.loggedIn ? (<LogIn login={this.login}/>) : (
                                        <div>
                                            <LoggedIn/>
                                            <NavLink to="/" onClick={this.logout}>Logout</NavLink>
                                            <PageViewNav/>
                                        </div>
                                    )}
                                </div>}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

const PageViewNav = ({match}) => {
    return (
        <div>
            <ul className="categoryList">
                <li><NavLink exact to="/employees">Potential clients</NavLink></li>
                {facade.getProfile().roles.includes("admin") || facade.getProfile().roles.includes("superuser") ? (
                    <div>
                    <li><NavLink exact to="/getperson">Board members</NavLink></li>
                    <li><NavLink exact to="/database">Database</NavLink></li>
                    {facade.getProfile().roles.includes("admin") ? (
                        <li><NavLink exact to="/notes">Notes</NavLink></li>    
                    ) : null}
                    {facade.getProfile().roles.includes("superuser") ? (
                        <li><NavLink exact to="/notes">Jon's notes</NavLink></li>   
                    ) : null}
                    </div>
                ) : null}
                {facade.getProfile().roles.includes("superuser") ? (
                <li><NavLink exact to="/getfavorite">Kurt's personal notes - My favorite characters</NavLink></li>
                ) : null}
                {facade.getProfile().roles.includes("user") && !(facade.getProfile().roles.includes("superuser")) ? (
                    <li><NavLink exact to="/getfavorite">Personal notes - My favorite characters</NavLink></li>
                    ) : null}
                <li><NavLink exact to="/getdummy">Company employees</NavLink></li>
                
            </ul>
        </div>
    )
}

const NavMenu = ({match}) => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-4">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/profilepage">
                        Profile Page
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

const WelcomeMessage = ({match}) => {
    return (
        <div className="text-center">
            <h1>Company Name!</h1>
            <p>
                Click <NavLink to="/profilepage">here</NavLink> to go to login.
            </p>
        </div>
    );
};

const NoMatch = ({location}) => {
    return (
        <div className="absolute-center text-center">
            <h1>404</h1>
            <h5>page <code>{location.pathname}</code> not found</h5>
        </div>
    )
}

export default App;
