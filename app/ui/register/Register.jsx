'use client'
import React, {useState} from 'react'
import {useFormik} from 'formik'
import { useRegisterMutation } from '../slices/usersApiSlice'
import {toast} from 'react-toastify'
import { states } from './State'

const validate = values =>{
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
}


const Register = () => {
    const [register, { status, error,isLoading}] = useRegisterMutation()

    const handleSubmit = async(values)=>{
        try{
            await register(values).unwrap()
       
            const toastInstance = toast("Invitee registered successfully!", {
                position: "top-center", 
            });
        return () => {
            toast.dismiss(toastInstance);
        };
        }catch (err){
            console.log(err.message)
            if (err.data && err.data.message) {
                // display unique email error message
                // alert(err.data.message);
                const toastInstance = toast(err.data.message, {
                    position: "top-center", 
                });
            return () => {
                toast.dismiss(toastInstance);
            };
              } else {
                // display generic error message
                alert("Error registering Invitee: " + err.message);
              }
        }
    }
 

    if (status ==='error'){
        return <div>Something went wrong</div>
    }

    
    const formik = useFormik({
        initialValues:{
            first_name:"",
            last_name:"",
            email:"",
            phone_number:null,
            state:"",
            gender:""
        },
        onSubmit: (values, onSubmitProps) => {
            console.log(values)
            handleSubmit(values)
             onSubmitProps.setSubmitting(false)
             onSubmitProps.resetForm()
        },
        validate
    })

    
  return (
    <div className='w-full md:bg-white dark:bg-black shadow-lg rounded-lg md:w-full mx-auto ' >
        <div className='lg:w-[80%] w-full h-full md:mt-24   py-24 md:px-4  mx-auto my-auto'>
        <form onSubmit={formik.handleSubmit}>
      
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
                        value={formik.values.first_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='p-2 w-full outline-none border border-solid rounded-lg border-slate-300 text-gray-500 h-12 bg-transparent  '
                    />
                    {formik.touched.first_name && formik.errors.first_name ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.first_name}</div>: null}
                </div>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor="Last Name" className='block text-base mb-2 text-gray-500 pl-2'>Last Name</label>
                    <input
                        type='text'
                        name="last_name"
                        id='last_name'
                        value={formik.values.last_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='p-2 w-full outline-none border border-solid rounded-lg border-slate-300 text-gray-500 h-12 bg-transparent  '
                    />
                    {formik.touched.last_name && formik.errors.last_name ?<div className='text-red-500 pl-2 font-semibold'>{formik.errors.last_name}</div>: null}
                </div>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor="Email" className='block text-base mb-2 text-gray-500 pl-2'>Email</label>
                    <input
                        type='text'
                        name="email"
                        id='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='p-2 w-full outline-none border border-solid rounded-lg border-slate-300 text-gray-500 h-12 bg-transparent  '
                    />
                    {formik.touched.email && formik.errors.email ?<div className='text-red-500 pl-2 font-semibold'>{formik.errors.email}</div>: null}
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
                        type='number'
                        name="phone_number"
                        id='phone_number'
                        value={formik.values.phone_number}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='p-2 w-full outline-none border border-solid rounded-lg border-slate-300 text-gray-500 h-12 bg-transparent  '
                    />
                    {formik.touched.phone_number && formik.errors.phone_number ?<div className='text-red-500 pl-2 font-semibold'>{formik.errors.phone_number}</div>: null}
                </div>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor="State of Residence" className='block text-base mb-2 text-gray-500 pl-2'>State of Residence</label>
                    <select
                        type='text'
                        name="state"
                        id='state'
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='p-2 w-full outline-none border border-solid rounded-lg border-slate-300 bg-white dark:bg-black text-gray-500 h-12 bg-transparent  '
                    >
                        
                            {states.map((state) =>(
                              <option key={state.code} value={state.name}>{state.name} </option>
                            ))}
                        
                    </select>
                    {formik.touched.phone_number && formik.errors.phone_number ?<div className='text-red-500 pl-2 font-semibold'>{formik.errors.phone_number}</div>: null}
                </div>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor="Gender" className='block text-base mb-2 text-gray-500 pl-2'>Gender</label>
                    <select
                        type='text'
                        name="gender"
                        id='gender'
                        value={formik.values.gender}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='p-2 w-full outline-none border border-solid rounded-lg border-slate-300 bg-white dark:bg-black text-gray-500 h-12 bg-transparent  '
                    >
                        <option value=''></option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </select>
                    {formik.touched.gender && formik.errors.gender ?<div className='text-red-500 pl-2 font-semibold'>{formik.errors.gender}</div>: null}
                </div>
            </div>
            <div className='w-full h-12 my-8 pt-4 '>
                <button type="submit" className={`bg-[#83ed6b] w-full  text-white text-2xl rounded-lg py-4 ${!formik.isValid || formik.isSubmitting? 'opacity-50 cursor-not-allowed':''}`} disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
            </div>   
        </form>
        <div>

        </div>
    </div>
    </div>
  )
}

export default Register