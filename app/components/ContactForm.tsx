// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
// import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xvgkjrjz");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='mx-auto mb-0 mt-8 max-w-md space-y-4'
    >
      {/* email */}
      <div>
        <label htmlFor='email' className='sr-only'>
          Email
        </label>
        <div className='relative'>
          <input
            id='email'
            type='email'
            name='email'
            className='w-full bg-white text-black rounded-lg border-gray-200 p-4 pe-12 text-2xl shadow-xs focus:ring-4 focus:ring-pink-300 focus:outline-none'
            aria-label='email'
            placeholder='Enter email'
            required
          />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
          <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='size-4 text-gray-400'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
              />
            </svg>
          </span>
        </div>
      </div>

      {/* textarea */}
      <div>
        <label htmlFor='message' className='sr-only'>
          Messgage
        </label>
        <div className='relative'>
          <textarea
            id='message'
            name='message'
            title='message'
            className='w-full rounded-lg bg-white text-black border-gray-200 p-4 pe-12 text-2xl shadow-xs form-control focus:ring-4 focus:ring-pink-300 focus:outline-none'
            aria-label='message'
            placeholder='Enter Message'
            required
          />
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />
        </div>
      </div>

      {/* button */}
      <div className='flex items-center justify-between'>
        <p className='text-2xl text-gray-500'>
          Don&apos;t worry we will not spam you :)
        </p>
        <button
          type='submit'
          disabled={state.submitting}
          className='inline-block rounded-lg bg-white px-5 py-3 text-2xl font-medium text-black'
          value='Send'
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
