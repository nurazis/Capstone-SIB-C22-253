import { useMemo } from 'react';
import PropTypes from 'prop-types';
function Loading({ className }) {
  const style = useMemo(() => {
    const theme = localStorage.getItem('theme') || 'dark';
    if (theme === 'dark') {
      return 'bg-neutral-content';
    }
    return 'bg-neutral';
  });
  return (
    <div className={`${className}`}>
      <div className='flex items-center gap-4'>
        <span
          className={`${style} p-2 w-4 h-4 rounded-full animate-bounce`}
          style={{ animationDelay: '0.1s' }}
        ></span>
        <span
          className={`${style} p-2 w-4 h-4 rounded-full animate-bounce`}
          style={{ animationDelay: '0.2s' }}
        ></span>
        <span
          className={`${style} p-2 w-4 h-4 rounded-full animate-bounce`}
          style={{ animationDelay: '0.3s' }}
        ></span>
        <span
          className={`${style} p-2 w-4 h-4 rounded-full animate-bounce`}
          style={{ animationDelay: '0.4s' }}
        ></span>
      </div>
    </div>
  );
}

Loading.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Loading;
