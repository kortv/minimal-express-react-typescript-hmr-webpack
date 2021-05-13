import React, { Component } from 'react'
import { Button } from 'antd'
import './index.styl'

class Login extends Component {
  render() {
    return (
      <div className="index">
        <div className="top">
          <div className="logo">
            <img src="/common/img/del-logo.png" />
          </div>
          <div className="button" onClick={this.login}>
            Log in
          </div>
        </div>

        <div className="content">
          <div className="title">Welcome to Cortex</div>
          <div className="subtitle">Harnessing the power of data</div>
          <Button
            onClick={() => {
              console.info('object')
            }}
          >
            qwer
          </Button>
          <div className="list">
            <div className="listItem">
              Seamlessly connects to financial and other source systems to acquire audit data
            </div>
            <div className="listItem">Securely acquires, transfers and stages data</div>
            <div className="listItem">Repeatable and consistent</div>
            <div className="listItem">Advanced data analytics enabling a smarter audit</div>
          </div>
        </div>

        <div className="bottom">
          <div className="bleft">
            <strong>Need help? Question on Cortex? Email us at: </strong>
            <br />
            <span>© 2018 Deloitte. All rights reserved. See Terms of use for more information.</span>
            <div className="footer-text">
              Deloitte refers to one or more of Deloitte Touche Tohmatsu Limited, a UK private company limited by
              guarantee ("DTTL"), its network of member firms, and their related entities.
              <br />
              DTTL and each of its member firms are legally separate and independent entities. DTTL (also referred to as
              "Deloitte Global") does not provide services to clients. Please see{' '}
              <a href="https://www.deloitte.com/about">www.deloitte.com/about</a> for more detailed description of DTTL
              and its member firms.
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
