import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  const onClick = () => {console.log('click')};
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick} />
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