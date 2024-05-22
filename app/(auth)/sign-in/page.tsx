import SignInForm from '@/components/form/SignInForm';

console.log(SignInForm)
const page = () => {
  return (
<div className='flex justify-center items-center h-screen'>
    <div className='w-1/2'>
      <SignInForm />
    </div>
</div>
  );
};

export default page;