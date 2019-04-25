class Post extends React.Component {
  constructor() {
    super()

    this.state = {
      user: null,
    }
  }

  componentDidMount() {
    this.fetchUser()
  }

  fetchUser() {
    const { postData } = this.props

    fetch('https://jsonplaceholder.typicode.com/users/' + postData.userId)
      .then(resp => resp.json())
      .then(user => {
        this.setState({
          user
        });
      })
  }

  render() {
    const { postData } = this.props

    const { user } = this.state

    return (
      <div>
        {user && (
          <User userData={user} />
        )}
        <div>
          <h2>{postData.title}</h2>
          <p>{postData.body}</p>
        </div>
        <hr />
      </div>
    )
  }
}