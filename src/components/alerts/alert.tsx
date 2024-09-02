import { ReactNode } from 'react';
import './index.scss'
import {  X } from 'lucide-react';


interface IProps {
  type: string ;
  titleIcon : ReactNode ;
  title : string;
  desc : string;
}


const Alert = ({type='alert-light' , titleIcon , title ,desc }:IProps) => {


  return (
    <>
      <div className={type}>
        <div className='alert-header'>
          <div className='title'>
            {titleIcon}
            <h4>{title}</h4>
          </div>
          <X  className='close' size={19}/> 
        </div>
        <p>{desc}</p>
      </div>

    </>
  )
}

export default Alert; 
