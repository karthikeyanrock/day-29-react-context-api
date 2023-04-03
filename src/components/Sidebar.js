import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  HomeOutlined,
  UserAddOutlined,
  SyncOutlined
  
} from '@ant-design/icons';
import { BrowserRouter, Route, Routes, Link , useNavigate} from "react-router-dom";
import StudentsTable from './Studentstable';
import { Layout, Menu, theme , Typography} from 'antd';
import Home from './Home';
import TeachersTable from './TeachersTable';
import FormFill from './Form';
import Provider from '../Provider';
const { Header, Sider, Content } = Layout;
const { Title, Paragraph, Text} = Typography;


const Sidebar = () => {
  const navigate=useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Provider>
      <Sider collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'Home',
              onClick:(()=>navigate('/')),
            },
            {
              key: '2',
              icon: <TeamOutlined />,
              label: 'Students',
              onClick:(()=>navigate('/students')),
            },
            {
              key: '3',
              icon: <TeamOutlined  />,
              label: 'Teachers',
              onClick:(()=>navigate('/teachers')),
            },
            {
              key: '4',
              icon: <SyncOutlined spin  />,
              label: 'Add',
              onClick:(()=>navigate('/form')),
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            backgroundColor:'red',
            display:'flex'
          }}
        >
            <div className='headertab'>
                
                 {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                     className: 'trigger',
                     onClick: () => setCollapsed(!collapsed),
                   })}
            </div>
            <div style={{width:'100%' ,display:'flex',justifyContent:'right',alignItems:'center',marginRight:'100px'}}>
                <Title className='title'>Student And Teacher Dashboard</Title>
            </div>
        </Header>
          
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            overflow:'scroll'
          }}
        >
             <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/students' element={<StudentsTable/>}/>
                <Route path='/teachers' element={<TeachersTable/>}/>
                <Route path='/form/' element={<FormFill />}/>
             </Routes>
        </Content>
      </Layout></Provider>
    </Layout>
  );
};
export default Sidebar;