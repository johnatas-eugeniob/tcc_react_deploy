import { UserProvider } from '../Context';
import './style.css';
import HeaderSemLinkContent from '../HeaderSemLinkContent';

function HeaderSemLink() {
  return (
    <UserProvider>
      <HeaderSemLinkContent />
    </UserProvider>
  );
}

export default HeaderSemLink;
