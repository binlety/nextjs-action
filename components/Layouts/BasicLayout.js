import React from 'react';
import { Container, Header, Sidebar, Content, Footer, Sidenav, Nav, Dropdown, Message, Avatar  } from 'rsuite'
import styles from './index.module.css'
import IconFont from '/components/IconFont';

const Layout = ({ children }) => {
  return (
    <div>
      <Container>
        <Header>Header</Header>
        <Container>
          <Sidebar>Sidebar</Sidebar>
          <Content>{children}</Content>
        </Container>
        <Footer>Footer</Footer>
      </Container>
      <IconFont style={{ color:"red", marginRight: 10, fontSize: '2em' }} type='icon-shangcheng'/>
      <Message duration={1000}>Informational</Message>
      <Avatar circle src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4" />
   </div>

  // <div className={styles.wrap}>
  //    <div className={styles.aside}>
  //       <Sidenav defaultOpenKeys={['3', '4']} activeKey="1">
  //         <Sidenav.Body>
  //           <Nav>
  //             <Nav.Item eventKey="1" >
  //               Dashboard
  //             </Nav.Item>
  //             <Nav.Item eventKey="2" >
  //               User Group
  //             </Nav.Item>
  //             <Dropdown eventKey="3" title="Advanced" >
  //               <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
  //               <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
  //               <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
  //               <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
  //             </Dropdown>
  //             <Dropdown eventKey="4" title="Settings" >
  //               <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
  //               <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
  //               <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
  //               <Dropdown.Menu eventKey="4-5" title="Custom Action">
  //                 <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
  //                 <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
  //               </Dropdown.Menu>
  //             </Dropdown>
  //           </Nav>
  //         </Sidenav.Body>
  //       </Sidenav>
  //    </div>
  //    <div className={styles.section}>{children}</div>
  // </div>

//   <div className='wrap'>
//   <div className='aside' style={{width: 240}}>
//      <Sidenav defaultOpenKeys={['3', '4']} activeKey="1">
//        <Sidenav.Body>
//          <Nav>
//            <Nav.Item eventKey="1" >
//              Dashboard
//            </Nav.Item>
//            <Nav.Item eventKey="2" >
//              User Group
//            </Nav.Item>
//            <Dropdown eventKey="3" title="Advanced" >
//              <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
//              <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
//              <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
//              <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
//            </Dropdown>
//            <Dropdown eventKey="4" title="Settings" >
//              <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
//              <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
//              <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
//              <Dropdown.Menu eventKey="4-5" title="Custom Action">
//                <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
//                <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
//              </Dropdown.Menu>
//            </Dropdown>
//          </Nav>
//        </Sidenav.Body>
//      </Sidenav>
//   </div>
//   <div className='section'  style={{display:'flex', justifyContent:'center', alignItems:'center'}}>content</div>
// </div>
  )
};

export default Layout;
