//hoc is a component that renders another component
//reuse code
//render hijacking
//prop manipulation
//abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is some info :{props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Don't share</p> }
            <WrappedComponent {...props}/>
        </div>
    )
};

//requireAuthentication

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? (
                <WrappedComponent {...props} />) : (<p> Need Auth</p>)}
        </div>
    )
}

const AuthInfo = requireAuthentication(Info);

//const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AuthInfo isAuth={true} info="These are the details" />, document.getElementById('app'));