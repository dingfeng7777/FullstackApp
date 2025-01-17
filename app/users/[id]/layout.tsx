'use client'
import { Layout, theme } from "antd";
import Title from "antd/es/typography/Title";
import SideBar from "./SideBar";

export default function UserLayout({
    children,
    params,
  }: Readonly<{
    children: React.ReactNode;
    params:{id:string}
  }>) {
    const { Header, Content, Sider } = Layout;
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return (
      <Layout style={{minHeight:"100vh"}}>
        <Sider style={{background:colorBgContainer}} width={200} >
            <SideBar id={params.id}/>
        </Sider>
        <Layout>
            <Header style={{background:colorBgContainer}}>
                <Title>Personal information record system</Title>
            </Header>
            <Content>
                {children}
            </Content>
        </Layout>
      </Layout>  
  )}