import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import FoundForm from "../../components/Found/FoundForm";
import Header from "../../components/Header/Header";
const { Content, Footer } = Layout;

function Found() {
  return (
    <div>
      <Layout className="layout">
        <Header />
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <FoundForm></FoundForm>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </div>
  );
}
export default Found;
