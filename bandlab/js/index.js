class App extends React.Component {
  constructor() {
    super()

    this.state = {
      page: 1,
    }

    this.switchToPage = this.switchToPage.bind(this)
  }

  switchToPage(page) {
    this.setState({
      page
    })
  }

  render() {
    const { page } = this.state;

    return (
      <div className='container'>
        <p className='app_title'>Hi!</p>
        <ul className='nav'>
          <li>
            <a className={(page === 1 ? 'active' : 'inactive') + ' btn'} href="#" onClick={() => this.switchToPage(1)}>
              My Feed
            </a>
          </li>
          <li>
            <a className={(page === 2 ? 'active' : 'inactive') + ' btn'} href="#" onClick={() => this.switchToPage(2)}>
              My Tracks
            </a>
          </li>
        </ul>
        <br/>
        {page === 1 && (<Page1 />)}
        {page === 2 && (<Page2 />)}
      </div >
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);