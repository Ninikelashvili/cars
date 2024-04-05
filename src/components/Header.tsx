import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-center items-center gap-8 py-4'>
        <Link className='text-white-1' to='/'>Garage</Link>
        <Link className='text-white-1' to='/winners'>Winners</Link>
    </div>
  )
}

export default Header