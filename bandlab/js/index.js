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
      <div>
        <h1>Hello App</h1>
        <ul>
          <li>
            <a href="#" onClick={() => this.switchToPage(1)}>Page 1</a>
          </li>
          <li>
            <a href="#" onClick={() => this.switchToPage(2)}>Page 2</a>
          </li>
        </ul>
        {page === 1 && (<Page1 />)}
        {page === 2 && (<Page2 />)}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);