import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux';
import { chooseName, chooseMake, chooseModel, chooseYear } from "../redux/slices/RootSlice";

// interfaces

interface CollectionFormProps {
  id?: string[]
}

const CollectionForm = (props:CollectionFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.name } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      // Use dispatch to update our state in our store
      dispatch(chooseName(data.car_name));
      dispatch(chooseMake(data.make));
      dispatch(chooseModel(data.model));
      dispatch(chooseYear(data.year));

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000);
      
    }
    
  }

  return (


    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="car_name">Car Name</label>
          <Input {...register('car_name')} name='car_name' placeholder="Name"/>
        </div>
        <div>
          <label htmlFor="make">Make</label>
          <Input {...register('make')} name='make' placeholder="Make"/>
        </div>
        <div>
          <label htmlFor="model">Model</label>
          <Input {...register('model')} name='model' placeholder="Model"/>
        </div>
        <div>
          <label htmlFor="model">Year</label>
          <Input {...register('model')} name='model' placeholder="Model"/>
        </div>
        <div className="flex p-1">
          <Button
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            >
              Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CollectionForm