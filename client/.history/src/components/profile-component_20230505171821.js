const ProfileComponent = (props) => {
    let { currentUser, setCurrentUser } = props;
  
    return (
      <div style={{ padding: "3rem" }}>
        {!currentUser && <div>Before you access the profile, you need to login first.</div>}
        {currentUser && (
          <div>
            <h2>Your Profile: </h2>
  
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <strong>Name: {currentUser.user.username}</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>您的用戶ID: {currentUser.user._id}</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>您註冊的電子信箱: {currentUser.user.email}</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>身份: {currentUser.user.role}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  };
  
  export default ProfileComponent;
  