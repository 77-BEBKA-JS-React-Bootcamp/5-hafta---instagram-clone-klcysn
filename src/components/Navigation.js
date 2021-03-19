import "../style/Main.scss"

export const Navigation = () =>{

    return(
        <nav>
        <div class="fixed">
          <div class="nav-content">
            <img src="/logo192.png" class="logo" alt="logo" />
            <div class="desktop-only">
              <div class="search-guide">
                <span class="search-icon"></span>
                <span class="search-placeholder">Search</span>
              </div>
            </div>
            <div>
              <button class="primary">Log In</button>
              <button>Sign Up</button>
            </div>
          </div>
        </div>
        <div class="mock"></div>
      </nav>
    )
}