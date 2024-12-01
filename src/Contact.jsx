import { useNavigate } from 'react-router-dom';

const Contact = ({ details }) => {
  const {name, id, phone, company } = details;
  const navigate = useNavigate();

  return (
    <>
      <div 
        className='flex flex-col p-2 w-full bg-gray-200 shadow-md rounded-lg hover:opacity-70 cursor-pointer'
        onClick={() => navigate('/' + id)}
      >
        <h4 className='font-bold text-black sm:text-lg md:text-xl'>{name}</h4>
        <p>{phone}</p>
        <p>{company.name}</p>
      </div>
    </>
  )
}

export default Contact;