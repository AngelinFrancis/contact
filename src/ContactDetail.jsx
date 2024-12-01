import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBar from './HeaderBar';

const ContactDetail = () => {
  const params = useParams();
  const [ detail, setDetail ] = useState(null);

  const getDetail  = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    setDetail(response.data);
  }

  useEffect(() => {
    getDetail();
  }, [])

  return (
    <div className='flex flex-col items-center gap-5'>
      <HeaderBar title='Details'/>
      {detail ? (
        <div className='flex flex-col items-center text-center bg-gray-200 w-3/4 rounded-xl rounded py-7 gap-3 text-gray-700'>
        <h1 className='font-bold text-3xl text-black mb-4'>{detail.name}</h1>

        <div className='flex flex-col items-center p-5 rounded-3xl w-3/4 bg-white'>
          <h4 className='text-2xl font-bold text-black'>Personal details</h4>
          <span>{detail.username} | {detail.email}</span>
          <p>{`${detail.address.city}, ${detail.address.street} ${detail.address.suite}, ${detail.address.zipcode}`}</p>
          <p>{detail.phone}</p>
        </div>

        <div className='flex flex-col items-center mt-4 bg-white w-3/4 p-5 rounded-3xl'>
          <p className='text-black text-2xl font-bold'>{`${detail.company.name} (Company)`}</p>
          <p>{detail.company.bs}</p>
          <p>{detail.company.catchPhrase}</p>
        </div>
      </div>
      ) : <p className='font-black text-xl text-center'>Loading...</p>}
    </div>
  )
}

export default ContactDetail;