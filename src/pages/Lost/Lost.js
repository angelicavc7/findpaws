import React from "react";
import "antd/dist/antd.css";
import { Layout, Breadcrumb } from "antd";
import FormSizeDemo from "../../Components/Form/FormSizeDemo";
import Header from "../../Components/Header/Header";
const { Content, Footer } = Layout;

function Lost() {
  return (
    <Layout className="layout">
      <Header />

      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <FormSizeDemo></FormSizeDemo>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
    // document.getElementById("container")
  );
}
export default Lost;