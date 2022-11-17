import Logo from '../logo/logo';
import UserNav from '../user-nav/user-nav';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo type="header" />
          </div>
          <UserNav />
        </div>
      </div>
    </header>
  );
}
export default Header;
