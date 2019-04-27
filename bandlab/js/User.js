const User = ({
  userData,
}) => (
    <div className='User__container'>
      <a className='User__name' href={'mailto:' + userData.email}>
        {userData.username}
      </a> (<a className='User__website' href={'http://www.' + userData.website}>
        {userData.website}
      </a>)
    </div>
  )