import React, { useEffect } from 'react'
import FormikForm from '../Form';
import { getData } from '../../actions/example'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  //const data = useSelector((state) => state.example.data);
  const loading = useSelector((state) => state.example.loading)

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch call action getData -
    dispatch(getData())
      
  // eslint-disable-next-line  
  }, [])

  if(loading) return <div className="text-center">Loading...</div>

  return (
    <div className="home container text-center">
        <h1>Create your CV PDF </h1>
        
        <FormikForm/>
    </div>
  )
}

export default Home
