import clsx from 'clsx';

const Container = ({ children, className }) => {
  return (
    <div className={clsx('container', { [className]: className })}>
      {children}
    </div>
  );
};

export default Container;