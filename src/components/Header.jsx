import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'close' : 'Add'} 
        onClick={onAdd} />
    </header>
  )
}
// React CSS
// const headerStyle = {color: 'red', backgroundColor: 'navy'}
Header.defaultProps = {
  title: 'default props'
}
Header.propTypes = {
  title: PropTypes.string,
}
export default Header