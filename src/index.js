import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    return (
        <div>
            <header>
                <div id='photoDiv'><img id='photo' src={require('./bobbyimage.jpeg')}  ></img></div>

                <div id='textDiv'>
                    <h1>HELLO.</h1>
                    <br></br>
                    <p>My name is Bobby Whitacre and I am a full-stack developer based in Washington, D.C.</p>
                    <br></br>
                    <p>Take a look at some of my projects below.</p>
                </div>
            </header>
            <main>
                <div><a href='https://calm-taiyaki-b6ef03.netlify.app/'>Fitness Tracker</a></div>
                <div><a href='https://stellar-klepon-e9797a.netlify.app/'>Stranger's Things</a></div>
                <div><a href='https://adorable-dango-4eb802.netlify.app/'>Art Collector</a></div>
                <div><a href='https://cute-cheesecake-70dedb.netlify.app/'>Tic Tac Toe</a></div>
                <div><a href='https://sensational-choux-d28f4f.netlify.app/'>Guessing Game</a></div>
                <div><a href='https://venerable-narwhal-ccd845.netlify.app/about.html'>Personal Site</a></div>
            </main>
            <footer>
                <img className='icons' src={require('./github.png')}></img><img className='icons' src={require('./email.png')}></img><img className='icons' src={require('./linkedin.png')}></img>
                <p>icons created by Freepik & riajulislam</p>
            </footer>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app'),
);