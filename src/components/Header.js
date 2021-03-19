export const Header = () => {
    return(

  <header>
    <div class="header-grid">
      <div class="profile-pic">
        <img
          src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg"
          alt="profile"
        />
      </div>
      <div class="profile-info">
        <div class="title row">
          <h2>Yasin</h2>
          <span class="verified-icon"></span>
          <button class="primary">Follow</button>
        </div>
        <div class="desktop-only">
          <div class="details row">
            <ul>
              <li>
                <span>722</span> posts
              </li>
              <li>
                <span>25.1m</span> followers
              </li>
              <li>
                <span>6</span> following
              </li>
            </ul>
          </div>
          <div class="description row last">
            <h1>Yasin</h1>
            <span>
              Everyone has a story to tell.
              <br />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="profile-info mobile-only">
      <div class="description row">
        <h1>Yasin</h1>
        <span>
          Everyone has a story to tell.
          <br />
        </span>
      </div>
    </div>
  </header>
    )
};
