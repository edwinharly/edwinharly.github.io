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
      <div className='Post__container'>
        <p className='Post__title'>
          {postData.title}
        </p>
        {user && <User userData={user} />}
        <p className='Post__content'>
          {postData.body}
        </p>
      </div>
    );
  }
}