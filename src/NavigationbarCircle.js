import React from 'react'
import '../style.css'

const navs = [
  <div onClick={() => alert('Home')}><i className="fas fa-home"></i> Home</div>,
  <div onClick={() => alert('About')}><i className="fas fa-user-alt"></i> About</div>,
  <div onClick={() => alert('Contact')}><i className="fas fa-envelope"></i> Contact</div>
]

export default class NavigationbarCircle extends React.Component {

  openNav = (e) => {

    const container = document.querySelector('.container-circle-navbar');
    container.classList.add('show-nav-circle');
    this.props.onOpen && this.props.onOpen(e)
  }

  closeNav = (e) => {
    const container = document.querySelector('.container-circle-navbar');
    container.classList.remove('show-nav-circle')
    this.props.onClose && this.props.onClose(e)
  }

  render() {
    const {
      openIcon = <i className="fas fa-times"></i>,
      closeIcon = <i className="fas fa-bars"></i>,
      circleBackgroundColor = 'transparent',
      navItems = []
    } = this.props;
    return (<>
      <div className="circle-container" >
        <div className="nav-circle" style={{ backgroundColor: circleBackgroundColor }} >
          <button onClick={this.closeNav} id="close">
            {openIcon}
          </button>
          <button onClick={this.openNav} id="open">
            {closeIcon}
          </button>
        </div>
      </div>

      <nav>
        <ul>
          {navItems.map((n, i) => <li key={`nav-item-${i}`}> {n} </li>)}
        </ul>
      </nav>
    </>)
  }
}