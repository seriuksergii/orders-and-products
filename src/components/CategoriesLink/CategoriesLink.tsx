import { Link, useLocation } from 'react-router-dom';
import './CategoriesLink.scss';

const CategoriesLink: React.FC<{ label: string; value: string }> = ({
  value,
  label,
}) => {
  const location = useLocation();

  return (
    <div>
      <Link
        to={label}
        className={
          location.pathname.includes(`${label}`) ? 'link active-link' : 'link'
        }
      >
        {value}
      </Link>
    </div>
  );
};

export default CategoriesLink;
