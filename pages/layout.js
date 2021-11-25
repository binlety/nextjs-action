import { useEffect } from "react";
import Layout from "/components/Layouts/index";
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';

export default function LayoutTest(){

  useEffect(()=>{
    fetch('/api/test.api')
    // .then(res=>res.json())
    .then(res=>console.log(res,'res'))
    .catch(err=>console.log(err,'err'))
  },[])

  return (
    <Layout type='1'>
      <ButtonToolbar>
        <Button appearance="primary">Primary</Button>
       </ButtonToolbar>
    </Layout>
  )
}