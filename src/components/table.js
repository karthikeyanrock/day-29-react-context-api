import {Table} from 'reactstrap'
import { EyeOutlined , DeleteOutlined , EditOutlined} from '@ant-design/icons';
import { Button , Space } from 'antd'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';


const TableTemplate = ({datas}) =>{
    const ContextData = useContext(Context);
    const navigate = useNavigate();
    const handleDelete=(person)=>{
        if(person.who ==='student'){
          ContextData.setStudents(ContextData.students.filter((e)=>person.id!==e.id))
        }else{
          ContextData.setTeachers(ContextData.teachers.filter((e)=>person.id!==e.id))
        }
    }
    
    return (<Table dark hover responsive bordered>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Class</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {datas.map((person)=>
          <tr key={person.id}>
          <th scope="row">{person.id}</th>
            <td>{person.name}</td>
            <td>{person.age}</td>
            <td>{person.gender}</td>
            <td>{person.class}</td>
          <td>
              <Space wrap>
             <Button type="primary" shape="circle" className='btncust' icon={<EyeOutlined />} size={'medium'} onClick={()=>navigate('/form',{state:{swift:person.who==='student'?true:false,id:person.id,action:'view',data:person}})} />
             <Button type="primary" shape="circle" className='btncust' icon={<EditOutlined />} size={'medium'} onClick={()=>navigate('/form',{state:{swift:person.who==='student'?true:false,id:person.id,action:'edit',data:person}})}/>
  
             <Button type="primary" danger className='btncust' shape="circle" icon={<DeleteOutlined />} size={'medium'} onClick={()=>handleDelete(person)} />
              </Space>
          </td>
        </tr>
     )}
    </tbody>
  </Table>)
}

export default TableTemplate ;