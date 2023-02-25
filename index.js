import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {


    return (
        <BrowserRouter>
            <div>
                <nav id="navbar">
                    <div id='title'>
                        <h1>Stranger's Things</h1>
                    </div>
                    <div id='navlinks'>
                        <Link to={'/Home'} className='navLink'>Home</Link>
                        <Link to={'/Posts'} className='navLink'>Posts</Link>
                        <Link to={'/Profile'} className='navLink'>Profile</Link>
                    </div>
                    <div id='signInOutButtons'>
                        <div id='username'>{user?.username}</div>
                        {!user?.username ? <button className='buttons'><Link to={'/Login'} className='navLink'>Log-In</Link></button> : ''}
                        {user?.username ? <button id='logoutButton' className='buttons' onClick={logOut}>Log-Out</button> : ''}
                    </div>
                </nav>
                <div id='main-section'>
                    <Switch>
                        <Route path="/Home">
                            <Home user={user} />
                        </Route>
                        <Route path="/Posts">
                            <Posts user={user} />
                        </Route>
                        <Route path="/Profile">
                            <Profile user={user} posts={posts}/>
                        </Route>
                        <Route path="/Login">
                            <LogIn handleLogIn={handleLogIn} />
                        </Route>
                        <Route exact path="/SignUp">
                            <SignUp />
                        </Route>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app'),
);