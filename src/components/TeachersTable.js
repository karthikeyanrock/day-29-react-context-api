import TableTemplate from './table';
import { Button } from 'antd';
import Context from '../Context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const TeachersTable = () =>{
  const ContextData = useContext(Context);
  const navigate=useNavigate();
     return  (
      <>
        <Button type="dashed" className='p-1 d-flex' onClick={()=>navigate('/form',{state:{swift:false,action:'create'}})}>Create Teachers</Button><br/>
        <TableTemplate datas={ContextData.teachers}/>
      </>
  )
}
export default  TeachersTable;