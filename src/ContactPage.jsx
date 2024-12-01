import Contact from './Contact';
import HeaderBar from './HeaderBar';

const ContactPage = ({ contacts }) => {
  return (
    <>
      <HeaderBar title='Contact'/>
      <div className='flex flex-col justify-center items-center w-full mt-5 '>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-3 md:gap-5 w-3/4'>
          {contacts.map((contactDetails) => {
            return (
              <Contact 
                key={contactDetails.id}
                details={contactDetails}
            />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ContactPage;
