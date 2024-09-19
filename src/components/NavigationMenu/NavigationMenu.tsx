import Image from 'react-bootstrap/Image';
import './NavigationMenu.scss';
import Row from 'react-bootstrap/Row';
import { CategoriesLink } from '../CategoriesLink/CategoriesLink';

const pathname = [
  { label: '/orders', value: 'НАДХОДЖЕННЯ' },
  { label: '/products', value: 'ТОВАРИ' },
  { label: '/groups', value: 'ГРУПИ' },
  { label: '/users', value: 'КОРИСТУВАЧІ' },
  { label: '/settings', value: 'НАЛАШТУВАННЯ' },
];

const NavigationMenu = () => {
  return (
    <div className="nav_wrapper">
      <Row>
        <Image src="/logo.png" alt="logo" className="nav_logo" />
      </Row>
      {pathname.length &&
        pathname.map((item, index) => (
          <CategoriesLink key={index} label={item.label} value={item.value} />
        ))}
    </div>
  );
};

export default NavigationMenu;
