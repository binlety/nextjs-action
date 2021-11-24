import BasicLayout from './BasicLayout';
import SecurityLayout from './SecurityLayout';
import UserLayout from './UserLayout';
import BlankLayout from './BlankLayout';

const Layout = ({ type = '1', children }) => {
   if(type == 1){
     return (
      <SecurityLayout>
         <BasicLayout>{children}</BasicLayout>
      </SecurityLayout>
     )
   }else if(type == 2){
     return <UserLayout>{children}</UserLayout>
   }else{
    return <BlankLayout>{children}</BlankLayout>
   }
}

export default Layout