import React from 'react';
import './navbar.css'
import './navbarevents.js'

function NavBar() {
  return (
    <>
    <div id='header'>
      <header className="header-contaner sticky">
        <div className="header">
          <div className="logo">
            <a href="index.html">  <img className="logo1" src="assets/Continuum_Insight_Logo_Horizontal_Black.png" alt="" /></a>
          </div>
          <div id="logi" className="nav1">
            <div className="login">
              <a href="#">Panel Portal</a>
              <a href="#">Login/Signup <i className="fa-solid fa-caret-down"></i></a>
              <a href="#">English</a>
            </div>
          </div>
          <nav>
            <div className="mobillogo  ">
              <a href="index.html"><img className="logo2" src="assets/Continuum_Insight_Logo_Horizontal_Black.png" alt="" /></a>

            </div>
            <div className="menu">
              <ul className="mainul">
                <li>
                  <a href="">Services </a> <span className="switch-toggle tc1"><i
                    className="fa fa-solid fa-caret-down"></i></span>
                  <div className="drop drop-1 ">
                    <div className="img">
                      <div className="text">
                        <h2>Services</h2>
                        <span>subject</span>
                      </div>
                      <img src="assets/fileinfo-2.jfif" alt=""></img>
                    </div>
                    <ul>

                      <li><a href="survey">Online Survey</a></li>
                      <li><a href="survey#coverage">Coverage</a></li>
                      <li><a href="survey#business-segment">Business Segments</a></li>
                      <li><a href="survey#technology">Technology</a></li>


                    </ul>
                    <ul>

                      <li><a href="/cati">CATI</a></li>
                      <li><a href="/cati#team">TEAM</a></li>
                      <li><a href="/cati#Quality-control">Quality Control</a></li>
                      <li><a href="survey#technology">Technology</a></li>


                    </ul>
                    <ul>

                      <li><a href="/programming">Survey Programming & Hosting</a></li>
                      <li><a href="/programming#data-processing">Data Processing & Analysis</a></li>

                      <button className="btn btn-lg"> EXPLORE REFINITIV INDEXES</button>


                    </ul>


                  </div>
                </li>
                <li>
                  <a href="#">Markets </a><span className="switch-toggle tc2"><i className="fa fa-solid fa-caret-down"></i></span>
                  <div className="drop drop-2">
                    <div className="img">
                      <div className="text">
                        <h2>Markets </h2>
                        <span>subject</span>
                      </div>
                      <img src="assets/slid2.jpg" alt=""></img>
                    </div>
                    <ul>
                      <li><a href="market-map.html">Market Map</a></li>
                      <li><a href="bussiness-segment.html">Business Segments</a></li>


                    </ul>
                    <ul>

                      <li><a href="project-management.html">Project Management</a></li>
                      <li><a href="programming.html">Programming / Hosting</a></li>
                      <li><a href="panel.html">Panel</a></li>
                      <li><a href="technology.html">Technology</a></li>


                    </ul>
                    <ul>

                      <li><a href="project-management.html">Project Management</a></li>
                      <li><a href="programming.html">Programming / Hosting</a></li>

                      <button className="btn btn-lg"> EXPLORE REFINITIV INDEXES</button>


                    </ul>



                  </div>
                </li>
                <li>
                  <a href="#">Abouts</a><span className="switch-toggle tc3"><i className="fa fa-solid fa-caret-down"></i></span>

                  <div className="drop drop-3">
                    <div className="img">
                      <div className="text">
                        <h2>About</h2>
                        <span>subject</span>
                      </div>
                      <img src="assets/fileinfo-3.jfif" alt=""></img>
                    </div>
                    <ul>
                      <li><a href="Leadership.html">Leadership</a></li>
                      <li><a href="coar-values.html">Coar Values</a></li>
                      <li><a href="careers.html">Careers</a></li>


                    </ul>
                    <ul>

                      <li><a href="project-management.html">Project Management</a></li>
                      <li><a href="programming.html">Programming / Hosting</a></li>
                      <li><a href="panel.html">Panel</a></li>
                      <li><a href="technology.html">Technology</a></li>


                    </ul>
                    <ul>

                      <li><a href="project-management.html">Project Management</a></li>
                      <li><a href="programming.html">Programming / Hosting</a></li>

                      <button className="btn btn-lg"> EXPLORE REFINITIV INDEXES</button>


                    </ul>


                  </div>
                </li>
                <li>
                  <a href="#">Clint Resources
                  </a><span className="switch-toggle tc4"><i className="fa fa-solid fa-caret-down"></i></span>
                  <div className="drop drop-4 ">
                    <div className="img">
                      <div className="text">
                        <h2>Clint Resources</h2>
                        <span>subject</span>
                      </div>
                      <img src="assets/slid3.jfif" alt=""></img>
                    </div>
                    <ul>
                      <li><a href="about-quest.html">About Quest</a></li>
                      <li><a href="about-quest.html">Panel Book</a></li>
                      <li><a href="about-quest.html">Quality - Quest DETECT</a></li>
                      <li><a href="about-quest.html">Project Management</a></li>

                    </ul>

                    <ul>
                      <li><a href="about-quest.html">Programming</a></li>
                      <li><a href="about-quest.html">ESOMAR 28</a></li>
                      <li><a href="about-quest.html">Blog</a></li>

                    </ul>

                    <ul>

                      <li><a href="project-management.html">Project Management</a></li>
                      <li><a href="programming.html">Programming / Hosting</a></li>

                      <button className="btn btn-lg"> EXPLORE REFINITIV INDEXES</button>


                    </ul>

                  </div>

                </li>

                <li><a href="/contact">Contact</a></li>
                <li className="mobil"><a href="#">Panel Portal</a></li>
                <li className="mobil"><a href="#">Login/Signup</a><i className="fa fa-solid fa-caret-down"></i> </li>
                <li className="mobil"><a href="#">English</a></li>


                <li className="sear">
                  <a href="#"><i className="fa sear fa-search"></i></a>
                </li>
              </ul>

            </div>
           
          </nav>
        </div>
      </header>
      </div>
    </>
  );
}

export default NavBar;