import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import { adminSideBarItems } from "../../routes/admin.routes";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div
            style={{
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "red",
            }}
          >
            <h2 style={{ color: "white" }}>PH-Uni</h2>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={adminSideBarItems}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                // background: colorBgContainer,
                // borderRadius: borderRadiusLG,
              }}
            >
              <Outlet></Outlet>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
