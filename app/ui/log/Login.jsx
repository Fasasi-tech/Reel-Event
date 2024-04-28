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
  import {useFormik} from 'formik'
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Button } from "@/components/ui/button"
 


  const validate = values =>{
    const errors={}
    if (!values.password){
        errors.password='Required'
    }
  
    if (!values.email){
      errors.email='Required'
  }

    
  
    return errors;
  }
  

const Login = () => {

  const router = useRouter();

  const dispatch = useDispatch()

  const [login, {isLoading} ]= useLoginMutation()
  const {userInfo} = useSelector((state) =>state.auth)


useEffect(() => {
  if (userInfo) {
    router.push('/dashboard');
  }
}, [router, userInfo]);

// if (userInfo){
//   redirect('dashboard')
// }

const handleSubmit = async (values) =>{
  try {
    const res = await login(values).unwrap()
    //setting user to our localstorage
    dispatch(setCredentials({...res}))  
    router.push('/dashboard')                                   
    
  } catch (err) {
    toast.error(err.data?.message || err.error)
  }
}

  const formik = useFormik({
    initialValues:{
        email:"",
        password:""
        
    },
    validate,
    onSubmit: (values, onSubmitProps) => {
        console.log(values)
        handleSubmit(values)
         onSubmitProps.setSubmitting(false)
         onSubmitProps.resetForm()
    },
    
})
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          {/* <DialogTitle>Login</DialogTitle> */}
          <h2 className="text-left text-2xl font-black font-serif">Welcome to Reel Event!</h2>
          <p className="text-left">Please sign-in to your account </p>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <form onSubmit={formik.handleSubmit}>
        <div className="grid gap-4 py-4">
        
            <div className="grid grid-cols-4 items-center gap-4">
              
                <Label htmlFor="email" className="">
                  Email
                </Label>
                <Input
                type='text'
                name="email"
                  id="email"
                  values={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  defaultValue=""
                  
                  className="col-span-3"
                />
                 {formik.touched.email && formik.errors.email ?<div className='text-red-500 pl-2 font-semibold'>{formik.errors.email}</div>: null}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="">
                  Password
                </Label>
                <Input
                name='password'
                  id="password"
                  type="password"
                  values={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  defaultValue=""
                  className="col-span-3"
                />
                 {formik.touched.password && formik.errors.password ?<div className='text-red-500 pl-2 font-semibold'>{formik.errors.password}</div>: null}

              </div>
              <DialogFooter>
          <Button type="submit" className={!formik.isValid || formik.isSubmitting? 'opacity-50 cursor-not-allowed':''} disabled={!formik.isValid || formik.isSubmitting}>Submit</Button>
        </DialogFooter>
        </div>
        </form>
      
      </DialogContent>
     
    </Dialog>
  )
}

export default Login
  