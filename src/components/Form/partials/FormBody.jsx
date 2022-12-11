import PropTypes from 'prop-types';
function FormBody({ title, className, onSubmit, children }) {
  return (
    <form
      method='POST'
      className={`${className} m-auto shadow-lg md:p-10 py-5 px-2 flex flex-col gap-y-4`}
      onSubmit={onSubmit}
    >
      <h1 className='text-center md:text-3xl text-xl font-semibold mb-4'>
        {title}
      </h1>
      {children}
    </form>
  );
}

FormBody.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormBody;
