import React, { Component } from 'react'
import './Style.css'

class componentName extends Component {
  render() {
    return (
      <div>
            <header className= "header">
                <div>
                  <h1>
                    {/* <div className="logo-box">
                        <img src=".../ToolBox/illuminare_gold.png" alt ="logo" className="logo" />
                    </div> */}
                    <div className="text-box">
                    <h1 className="heading-primary">
                          <span className="heading-primary-main"> ILLUMINARE </span>
                          <span className="heading-primary-sub">  my portfolio </span>
                      </h1>
                      <a href="#" className="btn btn-white"> Discover portfolio</a>
                    </div>
                      
                  </h1>
                </div>
            </header>
      </div>
    )
  }
}

export default componentName
