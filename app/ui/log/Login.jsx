'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { useRouter } from 'next/navigation';
  import React, {useState, useEffect} from 'react'
  import {useDispatch, useSelector} from 'react-redux'
  import { useLoginMutation } from "../slices/usersApiSlice"
  import { setCredentials } from "../slices/authSlice"
  import {Formik} from 'formik'
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Button } from "@/components/ui/button"
  import { FiEye, FiEyeOff } from "react-icons/fi";
 
  

const Login = () => {


  const [showPassword, setShowPassword] =useState(false)

  
const handleToggle = ()=>{
  setShowPassword(!showPassword)
}


  const router = useRouter();

  const dispatch = useDispatch()

  const [login, {isLoading} ]= useLoginMutation()
  const {userInfo} = useSelector((state) =>state.auth)


useEffect(() => {
  if (userInfo) {
    router.push('/dashboard');
  }
}, [router, userInfo]);


const handleSubmit = async (values, {setSubmitting, resetForm}) =>{
  try {
    const res = await login(values).unwrap()
    setSubmitting(true);
    //setting user to our localstorage
    dispatch(setCredentials({...res}))  
    router.push('/dashboard')
    resetForm();                                   
    
  } catch (err) {
    alert(err.data?.message || err.error)
  }
}

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          {/* <DialogTitle>Login</DialogTitle> */}
          <h4 className="text-left text-2xl font-black font-serif">Welcome to USSSO class 94 event!</h4>
          <p className="text-left">Please sign-in to your account </p>
        </DialogHeader>
        <Formik initialValues ={{
           email:"",
           password:""
        }}
        
        validate ={(values) => {
          const errors={}
          if (!values.password){
              errors.password='Required'
          }
        
          if (!values.email){
            errors.email='Required'
        }
      
          
        
          return errors;
        }}
        
        onSubmit ={handleSubmit}
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
        <form onSubmit={handleSubmit}>
        <div className="grid gap-4 py-4">
        
            <div className="grid grid-cols-4 items-center gap-4">
              
                <Label htmlFor="email" className="">
                  Email
                </Label>
                <Input
                type='text'
                name="email"
                  id="email"
                  values={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  defaultValue=""
                  
                  className="col-span-3"
                />
                 {touched.email && errors.email ?<div className='text-red-500 pl-2 font-semibold'>{errors.email}</div>: null}
              </div>
              <div className="grid grid-cols-4 items-center gap-4 relative">
                <Label htmlFor="password" className="">
                  Password
                </Label>
                <Input
                name='password'
                  id="password"
                  type={showPassword ? 'text':'password'}
                  values={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  defaultValue=""
                  className="col-span-3"
                />
                 <div className='z-50 absolute top-2 right-2'>
                    <button type='button' onClick={handleToggle}>{showPassword ? <FiEyeOff className='text-2xl text-[#83ed6b] '/> : <FiEye className='text-2xl text-[#83ed6b]' />  }</button> 
                </div>
                 {touched.password && errors.password ?<div className='text-red-500 pl-2 font-semibold'>{errors.password}</div>: null}

              </div>
             
              
              <div className=''>
                <button type="submit" className={`bg-[#83ed6b] w-full  text-white text-2xl rounded-lg py-2 ${ isSubmitting? 'opacity-50 cursor-not-allowed':''} `} disabled={ isSubmitting}> {isSubmitting ? 'Submitting...' : 'Submit'}</button>
             </div> 
       
        </div>
        </form>)}
        </Formik>
      
      </DialogContent>
     
    </Dialog>
  )
}

export default Login
  