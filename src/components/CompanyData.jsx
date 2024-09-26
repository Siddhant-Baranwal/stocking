import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import CompanyDashboard from "./CompanyDashboard";
import ComparisonMetrics from "./ComparisonMetrics";
import FuturePredictions from "./FuturePredictions";

const { Content, Sider } = Layout;

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}

const items = [
  getItem("Company Overview", "1", <PieChartOutlined />),
  getItem("Comparision Metrics", "2", <DesktopOutlined />),
  getItem("Future Predictions", "3", <FileOutlined />),
];

const CompanyData = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedComponent, setSelectedComponent] =
    useState("CompanyDashboard");

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // Handle menu item clicks to update the selected component
  const handleMenuItemClick = (item) => {
    switch (item.key) {
      case "1":
        setSelectedComponent("CompanyDashboard");
        break;
      case "2":
        setSelectedComponent("ComparisonMetrics");
        break;
      case "3":
        setSelectedComponent("FuturePredictions");
        break;
      default:
        break;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          overflow: "hidden", // Ensure no scrolling in sidebar
          position: "fixed", // Fix the sidebar position
          height: "100vh", // Set full viewport height
          left: 0, // Stick to the left side of the screen
          top: 0,
          zIndex: 10, // Ensure it's above other elements
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={handleMenuItemClick} // Correct onClick usage
        />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? "80px" : "200px" }}>
        {" "}
        {/* Adjust content margin based on sidebar */}
        <Content
          style={{
            margin: "4px", // Slim margin
            padding: "16px", // Inner padding for the content
            background: "#1c1c1c", // Darker content background
            borderRadius: "8px", // Rounded edges
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", // Subtle shadow
            border: "1px solid #333", // Border to define edges
            color: "#ffffff", // Text color for dark mode
            overflowY: "auto", // Allow vertical scrolling in content
            maxHeight: "100vh", // Ensure content takes full viewport height
          }}
        >
          {selectedComponent === "CompanyDashboard" && <CompanyDashboard />}
          {selectedComponent === "ComparisonMetrics" && <ComparisonMetrics />}
          {selectedComponent === "FuturePredictions" && <FuturePredictions />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default CompanyData;
