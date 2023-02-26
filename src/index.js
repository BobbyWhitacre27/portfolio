import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    return (
        <div>
            <header>
                
                <div id='photoDiv'><img id='photo' src={require('./bobbyimage.jpeg')}  ></img></div>
                <div id='textDiv'>
                    <h1 id='hello'>WELCOME TO MY PORTFOLIO</h1>
                    <br></br>
                    <p id='description'>My name is Bobby Whitacre and I am a full-stack developer based in Washington, D.C.</p>
                    <br></br>
                    <p>Please see below for some of my recent projects.</p>
                </div>
                
            </header>
            <main>

                <div id="portfolioDiv">
                    <div className='title'><h3>PORTFOLIO:</h3></div>                    
                        <a className='projectLink' href='https://calm-taiyaki-b6ef03.netlify.app/'>Fitness Tracker</a>
                        <a className='projectLink' href='https://stellar-klepon-e9797a.netlify.app/'>Stranger's Things</a>
                        <a className='projectLink' href='https://adorable-dango-4eb802.netlify.app/'>Art Collector</a>
                        <a className='projectLink' href='https://cute-cheesecake-70dedb.netlify.app/'>Tic Tac Toe</a>
                        {/* <a className='projectLink' href='https://sensational-choux-d28f4f.netlify.app/'>Guessing Game</a> */}
                        <a className='projectLink' href='https://venerable-narwhal-ccd845.netlify.app/about.html'>Personal Site</a>
                        <a className='projectLink' href='https://bobbywhitacre27.github.io/cv/'>First Site</a>
                </div>

                <div id="skillsDiv">
                    <div className='title'><h3>SKILLS:</h3></div>
                    <div>JavaScript, React, Express, SQL, HTML, CSS, Node, GitHub</div>
                </div>

                <div id="educationDiv">
                    <div className='title'><h3>EDUCATION:</h3></div>
                    <div>
                        <div><b>Virginia Tech Coding Bootcamp, powered by FullStack Academy</b></div>
                        <p>Software Engineering Certificate - March 2023</p>
                        <div><img className='schoolLogos' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Virginia_Tech_Hokies_logo.svg/1280px-Virginia_Tech_Hokies_logo.svg.png'}></img><img className='schoolLogos' id='fullstackLogo' src={'https://s3.us-east-1.amazonaws.com/fsa2-assets/assets/Logos/fullstack-academy-logo-full-color-rgb.jpg'}></img></div>
                    </div>
                    <br></br>
                    <div>
                        <div><b>Virginia Tech</b></div>
                        <p>Bachelors of Science, Building Construction - December 2017</p>
                        <div><img className='schoolLogos' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Virginia_Tech_Hokies_logo.svg/1280px-Virginia_Tech_Hokies_logo.svg.png'}></img></div>
                    </div>
                </div>

            </main>

            <footer>
                <div id='footerDiv'>
                <a href="https://github.com/BobbyWhitacre27"><img className='icons' src={require('./github.png')}></img></a>
                <a href="mailto: bobby.whitacre27@gmail.com"><img className='icons' src={require('./email.png')}></img></a>
                <a href="https://www.linkedin.com/in/bobby-whitacre/"><img className='icons' src={require('./linkedin.png')}></img></a>
                <p>icons created by Freepik & riajulislam</p>
                </div>
            </footer>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app'),
);