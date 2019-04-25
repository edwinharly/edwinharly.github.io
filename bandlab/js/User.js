const User = ({
  userData,
}) => (
    <h3>
      <a href={'mailto:' + userData.email}>
        {userData.username}
      </a> (<a href={'http://www.' + userData.website}>
        {userData.website}
      </a>)
    </h3>
  )