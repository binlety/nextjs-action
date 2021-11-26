import { useEffect } from "react";
import Layout from "@/components/Layouts/index";
import { Button, IconButton, ButtonGroup, ButtonToolbar, toaster, Notification, Message } from 'rsuite';
import axios from '@/utils/request.js'
import { setToken } from "@/utils/authority";
export default function LayoutTest(){

  useEffect(()=>{
    // fetch('/blade-user/is-zjf')
    // .then(res=>res.json())
    // .then(res=>console.log(res,'fetch'))
    // .catch(err=>console.log(err,'err'))

    axios.get('/blade-user/is-zjf').then(res=>console.log(res))
  },[])

  return (
    <Layout type='1'>
      <ButtonToolbar>
        <Button appearance="primary">Primary</Button>
       </ButtonToolbar>
    </Layout>
  )
}