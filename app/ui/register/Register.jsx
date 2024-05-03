'use client'
import React, {useState} from 'react'

import { Formik } from 'formik';
import { useRegisterMutation } from '../slices/usersApiSlice'
import { states } from './State'


// const validate = values =>{
//     const errors={}
//     if (!values.first_name){
//         errors.first_name='Required'
//     }

//     if(!values.last_name){
//         errors.last_name='Required'
//     }

//     if(!values.email){
//         errors.email='Required'
//     }

//     if(!values.phone_number){
//         errors.phone_number='Required'
//     }

//     if(!values.gender){
//         errors.gender='Required'
//     }

//     if(!values.state){
//         errors.state='Required'
//     }

//     return errors;
// }


const Register = () => {
    const [register, { status, error,isLoading}] = useRegisterMutation()
    const [submittings, setSubmittings] = useState(false);

    // const handleSubmit = async(values)=>{
    //     try{
          
    //         await register(values).unwrap()
    //         setSubmittings(true)
    //        alert('invitee registered successfully')
    //       // onSubmitProps.resetForm();
       
         
           
    //     }
    //     catch (err){
    //         console.log(err.message)
    //         if (err.data && err.data.message) {
    //            alert(err.data.message)
                
    //           } else {
    //             // display generic error message
    //             alert("Error registering Invitee: " + err.message);
    //           }
              
    //     }
    // }
    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
          // Assuming `register` is a function that sends form data to the backend
          await register(values).unwrap();
          setSubmitting(true);
          alert('Invitee registered successfully');
          resetForm();
        } catch (err) {
          console.log(err.message);
          if (err.data && err.data.message) {
            alert(err.data.message);
          } else {
            // Display a generic error message
            alert("Error registering Invitee: " + err.message);
          }
        }
      };
 

    if (status ==='error'){
        return <div>Something went wrong</div>
    }

    
    // const formik = useFormik({
    //     initialValues:{
    //         first_name:"",
    //         last_name:"",
    //         email:"",
    //         phone_number:null,
    //         state:"",
    //         gender:""
    //     },
    //     onSubmit: (values, onSubmitProps) => {
    //         console.log(values)
    //         onSubmitProps.setSubmitting(true);
    //         handleSubmit(values, onSubmitProps)
    //          onSubmitProps.setSubmitting(false)
    //         //  onSubmitProps.resetForm()
    //     },
    //     validate
    // })

 
  return (
    
    <div className='w-full md:bg-white dark:bg-black shadow-lg rounded-lg md:w-full mx-auto ' >
       <Formik   initialValues = {{
        first_name:"",
        last_name:"",
        email:"",
        phone_number:"",
        state:"",
        gender:""
    }}
    validate ={(values) => {
          
   const errors={}
     if (!values.first_name){
         errors.first_name='Required'
    }

    if(!values.last_name){
        errors.last_name='Required'
    }

    if(!values.email){
        errors.email='Required'
     }

     if(!values.phone_number){
        errors.phone_number='Required'
    }

    if(!values.gender){
        errors.gender='Required'
    }

   if(!values.state){
        errors.state='Required'
    }

     return errors;
 }}
        
        //  onSubmit = (values, {setSubmitting}) => {
        //   console.log(values)
           
        //    handleSubmit(values)
        //    setSubmitting(false)
        //    //  onSubmitProps.resetForm()
        //  },
        
        // onSubmit={(values) => {
           
        //     handleSubmit(values)
        //     console.log(values)
            
            
            
        // }}
        onSubmit={handleSubmit}

    
    >
         {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) =>(
        <div className='lg:w-[80%] w-full h-full md:mt-24   py-24 md:px-4  mx-auto my-auto'>
        <form onSubmit={handleSubmit} >
      
            <div className='flex justify-start text-2xl font-medium mb-8'>
                <h1 className='font-serif md:text-4xl text-[#83ed6b]'>Invitee Registration</h1>
            </div>
            <div className='grid lg:grid-cols-2 place-items-center  gap-x-8'>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor="First Name" className='block text-base mb-2 text-gray-500 pl-2'>First Name</label>
                    <input       
                        type='text'
                        name="first_name"
                        id='first_name'
                        value={values.first_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='p-2 w-full outline-none border border-solid rounded-lg border-slate-300 text-gray-500 h-12 bg-transparent  '
                    />
                    {touched.first_name && errors.first_name ? <div className='text-red-500 pl-2 font-semibold'>{errors.first_name}</div>: null}
                </div>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor="Last Name" className='block text-base mb-2 text-gray-500 pl-2'>Last Name</label>
                    <input
                        type='text'
                        name="last_name"
                        id='last_name'
                        value={values.last_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='p-2 w-full outline-none border border-solid rounded-lg border-slate-300 text-gray-500 h-12 bg-transparent  '
                    />
                    {touched.last_name && errors.last_name ?<div className='text-red-500 pl-2 font-semibold'>{errors.last_name}</div>: null}
                </div>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor="Email" className='block text-base mb-2 text-gray-500 pl-2'>Email</label>
                    <input
                        type='text'
                        name="email"
                        id='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='p-2 w-full outline-none border border-solid rounded-lg border-slate-300 text-gray-500 h-12 bg-transparent  '
                    />
                    {touched.email && errors.email ?<div className='text-red-500 pl-2 font-semibold'>{errors.email}</div>: null}
                </div>
                {/* <div className='h-12 mb-12 w-full'>
                    <label htmlFor="Phone Number" className='block text-base mb-2 text-gray-500 pl-2'>Phone Number</label>
                    <input
                        type='text'
                        name="phone_number"
                        id='phone_number'
                        value={formik.values.phone_number}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='p-2 w-full outline-none border border-solid rounded-lg border-slate-300 text-gray-500 h-12 bg-transparent  '
                    />
                    {formik.touched.phone_number && formik.errors.phone_number ?<div className='text-red-500 pl-2 font-semibold'>{formik.errors.phone_number}</div>: null}
                </div> */}
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor="Phone Number" className='block text-base mb-2 text-gray-500 pl-2'>Phone Number</label>
                    <input
                        type='text'
                        name="phone_number"
                        id='phone_number'
                        value={values.phone_number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='p-2 w-full outline-none border border-solid rounded-lg border-slate-300 text-gray-500 h-12 bg-transparent  '
                    />
                    {touched.phone_number &&errors.phone_number ?<div className='text-red-500 pl-2 font-semibold'>{errors.phone_number}</div>: null}
                </div>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor="State of Residence" className='block text-base mb-2 text-gray-500 pl-2'>State of Residence</label>
                    <select
                        type='text'
                        name="state"
                        id='state'
                        value={values.state}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='p-2 w-full outline-none border border-solid rounded-lg border-slate-300 bg-white dark:bg-black text-gray-500 h-12 bg-transparent  '
                    >
                        
                            {states.map((state) =>(
                              <option key={state.code} value={state.name}>{state.name} </option>
                            ))}
                        
                    </select>
                    {touched.phone_number && errors.phone_number ?<div className='text-red-500 pl-2 font-semibold'>{errors.phone_number}</div>: null}
                </div>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor="Gender" className='block text-base mb-2 text-gray-500 pl-2'>Gender</label>
                    <select
                        type='text'
                        name="gender"
                        id='gender'
                        value={values.gender}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='p-2 w-full outline-none border border-solid rounded-lg border-slate-300 bg-white dark:bg-black text-gray-500 h-12 bg-transparent  '
                    >
                        <option value=''></option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </select>
                    {touched.gender && errors.gender ?<div className='text-red-500 pl-2 font-semibold'>{errors.gender}</div>: null}
                </div>
            </div>
            <div className='w-full h-12 my-8 pt-4 '>
                <button type="submit" className={`bg-[#83ed6b] w-full  text-white text-2xl rounded-lg py-4 ${ isSubmitting? 'opacity-50 cursor-not-allowed':''} `} disabled={ isSubmitting}> {isSubmitting ? 'Submitting...' : 'Submit'}</button>
            </div>   
        </form>
        <div>

        </div>
    </div>)}
    </Formik> 
    </div>
  )
}

export default Register