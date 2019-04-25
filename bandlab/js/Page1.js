class Page1 extends React.Component {
  constructor() {
    super()

    this.state = {
      isAsc: false,
      posts: [],
    }

    this.sortPosts = this.sortPosts.bind(this);
  }

  fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then(posts => {
        this.setState({
          posts
        }, () => {
          this.sortPosts(true)
        });
      })
  }

  sortPosts(asc) {
    const sortedPosts = this.state.posts.sort((post1, post2) => asc
      ? post1.title > post2.title
      : post1.title < post2.title);

    this.setState({
      posts: sortedPosts,
      isAsc: asc,
    })
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    const { isAsc, posts } = this.state;
    return (
      <div>
        <h2>Page 1</h2>
        {isAsc ? (
          <button onClick={() => this.sortPosts(false)}>
            Sort Descending
          </button>
        ) : (
            <button onClick={() => this.sortPosts(true)}>
              Sort Ascending
          </button>
          )}

        {posts.map((post) => (
          <Post key={post.id} postData={post} />
        ))}
      </div>
    )
  }
}