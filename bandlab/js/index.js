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
        <h1>Hi!</h1>
        <ul className='nav'>
          <li>
            <a className={page === 1 ? 'active' : 'inactive'} href="#" onClick={() => this.switchToPage(1)}>
              My Feed
            </a>
          </li>
          <li>
            <a className={page === 2 ? 'active' : 'inactive'} href="#" onClick={() => this.switchToPage(2)}>
              My Tracks
            </a>
          </li>
        </ul>
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