import { useNavigate } from 'react-router-dom';

const HeaderBar = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className='relative flex w-full bg-[#a61d4a] p-3 justify-center'>
      <h3 className='font-bold text-white text-2xl'>{title}</h3>
      {title === 'Details' && (
        <button
          className='absolute bg-[#a61d4a] px-4 py-2 rounded-lg text-white hover:opacity-70 text-lg border right-3 top-1'
          onClick={() => navigate('/')}
        >
          Back
        </button>
      )}
    </div>
  )
}

export default HeaderBar;