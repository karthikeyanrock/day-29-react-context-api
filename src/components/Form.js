// import React from 'react';
import React , { useState , useContext } from 'react';
import Context from '../Context';
import { Button, Form, Input, Select ,InputNumber ,Switch} from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const { Option } = Select;


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
// form function below
const FormFill = () => {
  const {state}=useLocation();
  const contextData = useContext(Context);
  const [showLeafIcon, setShowLeafIcon] = useState(state!=null?state.swift:false);
  const navigate=useNavigate();
  
  
  
  const [form] = Form.useForm();
  const lastIndexstud=contextData.students.length-1;
  const lastIndexteach=contextData.teachers.length-1;
  const idstud=lastIndexstud===-1?1:contextData.students[lastIndexstud].id+1
  const idteach=lastIndexteach===-1?200:contextData.teachers[lastIndexteach].id+1
  
  if(state!==null){
    if(state.action==='view'||state.action==='edit'){
      form.setFieldsValue(
        {id:state.data.id,
        name: state.data.name,
        gender: state.data.gender,
        age:state.data.age,
        class:+state.data.class}
      )
    }
  }

  const onFinish = (values) => {
    if(state=== null){
      if(showLeafIcon=== true){
        contextData.setStudents([...contextData.students,{...values,id:(idstud),who:'student'}])
        toast.success("Student Added Successfully")
      }else{
        contextData.setTeachers([...contextData.teachers,{...values,id:(idteach),who:'teacher'}])
        toast.success("Person Added Successfully")
      }
      form.resetFields();
    }else if(state.action === 'edit'){
      console.log(values)
      if(showLeafIcon=== true){
        const finalUpdatedstuds=(contextData.students.map((e)=>e.id===values.id?{...values,who:'student'}:e));
        contextData.setStudents(finalUpdatedstuds)
        navigate('/students')
        toast.success("Updated successfully")
        
      }else{
        const finalUpdatedtchrs=(contextData.teachers.map((e)=>e.id===values.id?{...values,who:'teacher'}:e));
        contextData.setTeachers(finalUpdatedtchrs)
        navigate('/teachers')
        toast.success("Updated successfully")
      }
    }else{
      if(showLeafIcon=== true){
        contextData.setStudents([...contextData.students,{...values,id:(idstud),who:'student'}])
        toast.success("Student Added Successfully")
      }else{
        contextData.setTeachers([...contextData.teachers,{...values,id:(idteach),who:'teacher'}])
        toast.success("Teacher Added successfully")
      }
      form.resetFields();
    }
     
  };
  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue(
      (showLeafIcon === true)?
      {  id:(idstud),
        name: 'Hello world!',
        gender: 'male',
        age:16,
        class:10
      }: 
      {id:(idteach),
      name: 'Hello world!',
      gender: 'male',
      age:16,
      class:10}
    
    );
  };


// !  form details are below
  return (<>
      <Form className='formCont' {...layout} form={form} name="control-hooks" onFinish={onFinish} >
        <div className='container' style={{padding:'0 18%',alignItems:'left'}}>
        <div className='switchToggle'>
            <Switch 
            checkedChildren="Student"
            unCheckedChildren="Teacher"
            disabled={state!== null ? "disabled": false}
            checked={state !== null ?  state.swift:showLeafIcon}
            onChange={() => setShowLeafIcon(!showLeafIcon)}
            />
          
        </div><hr/>
            {/* id label and input box */}
       <Form.Item
        name="id"
        label="ID"
        
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input disabled />
      </Form.Item>
      {/* name label and input box */}
       <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input disabled={state==null?false:state.action=='view'?true:false} />
      </Form.Item>
      {/* gender selection dropdown and input box */}
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          allowClear
          disabled={state==null?false:state.action=='view'?true:false}
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      {/* age form item and input box */}
      <Form.Item
        name='age'
        label="Age"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
            required:true
          },
        ]}
      >
        <InputNumber disabled={state==null?false:state.action=='view'?true:false}/>
        </Form.Item>
       {/* class slection box and input box */}
        <Form.Item
        name='class'
        label="Class"
        
        rules={[
          {
            type: 'number',
            min: 0,
            max: 12,
            required: true
          },
        ]}
      >
        <InputNumber disabled={state==null?false:state.action=='view'?true:false}/>
      </Form.Item><hr/>
        {state==null ? 
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form.Item>
        : state.action=='view'? <h1>Read only Mode</h1>:
        state.action=='edit'?
        <Form.Item {...tailLayout}>
        <Button type='primary' shape='round' icon color='success' htmlType="submit"  >
            Update
        </Button>
        </Form.Item>
        :
        <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form.Item>
        }
    </div>
    </Form> </>
  );
};
export default FormFill ;