import Button from "./Button"

const Header = ( {title, onAdd, toggleTasks} ) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button text={`${toggleTasks ? 'Close' : 'Add'}`} bgColor={`${toggleTasks ? 'tomato' : 'steelblue'}`} onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

// Header.propTypes = {
//     title: PropTypes.string,
// };

export default Header