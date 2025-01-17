import React from 'react'
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { FormOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

type MenuItem = Required<MenuProps>['items'][number];

interface Props{
        id:string
}
const SideBar = (props: Props) => {
    const router = useRouter()
    const handleClick : MenuProps['onClick'] =(e) => {
        router.push(`/users/${props.id}/${e.key}`)
    }
    const items:MenuItem[] = [
        {key:'detail',label:'User Detail',icon:<UserOutlined />},
        {key:'forms',label:'User Forms',icon:<FormOutlined />}
    ]
  return (
   <Menu items={items} onClick={handleClick}/>
  )
}

export default SideBar
