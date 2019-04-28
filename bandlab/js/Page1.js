class Page1 extends React.Component {
  constructor() {
    super()

    this.state = {
      isAsc: false,
      posts: [],
    }

    this.sortAscending = this.sortAscending.bind(this);
    this.sortDescending = this.sortDescending.bind(this);
  }

  fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then(posts => {
        this.setState({
          posts
        }, () => this.sortAscending());
      })
  }

  sortAscending() {
    const posts = [...this.state.posts];
    posts.sort((post1, post2) => post1.title.localeCompare(post2.title));

    this.setState({
      posts,
      isAsc: true,
    })
  }

  sortDescending() {
    const posts = [...this.state.posts];
    posts.sort((post1, post2) => -(post1.title.localeCompare(post2.title)));

    this.setState({
      posts,
      isAsc: false,
    })
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    const { isAsc, posts } = this.state;
    return (
      <div className='Page1__container'>
        <p>My Feed</p>
        {isAsc ? (
          <button className='btn sortBtn' onClick={() => this.sortDescending()}>
            Sort Descending
          </button>
        ) : (
            <button className='btn sortBtn' onClick={() => this.sortAscending()}>
              Sort Ascending
            </button>
          )}
        <div className='Page1__postsContainer'>
          {posts.map((post) => (
            <Post key={post.id} postData={post} />
          ))}
        </div>
      </div>
    )
  }
}