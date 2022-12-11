import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../../utils/firebaseAuth';
import LogoutBtn from './partials/LogoutBtn';
import DropdownBtn from './partials/DropdownBtn';
import ThemeBtn from './partials/ThemeBtn';
import PropTypes from 'prop-types';
function Header({ useAdmin, useTheme }) {
  const [admin, setAdmin] = useAdmin();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);
  const location = useLocation();

  const onLogout = () => {
    logout();
    setAdmin(false);
    navigate('/');
  };

  useEffect(() => {
    if (location.pathname === '/admin/login') {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [location]);

  return (
    <header className='sticky top-0 z-50 container max-w-full'>
      <div className='navbar bg-base-100 shadow-lg'>
        <div className='flex-1'>
          <Link className='btn btn-ghost normal-case text-xl' to={'/'}>
            MenHeApp
          </Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal p-0 items-center'>
            {admin ? (
              <li className='hidden md:block'>
                <LogoutBtn onClick={onLogout} />
              </li>
            ) : (
              <li className='hidden border border-white md:block'>
                <Link
                  className={selected ? 'underline underline-offset-8' : ''}
                  to={'/admin/login'}
                >
                  Login Admin
                </Link>
              </li>
            )}
            <li>
              <ThemeBtn useTheme={useTheme} />
            </li>
            <li className='dropdown dropdown-end block md:hidden'>
              <DropdownBtn>
                {admin ? (
                  <li>
                    <LogoutBtn onClick={onLogout} />
                  </li>
                ) : (
                  <li>
                    <Link
                      className={selected ? 'underline underline-offset-8' : ''}
                      to={'/admin/login'}
                    >
                      Login admin
                    </Link>
                  </li>
                )}
              </DropdownBtn>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  useAdmin: PropTypes.func.isRequired,
  useTheme: PropTypes.func.isRequired,
};

export default Header;
