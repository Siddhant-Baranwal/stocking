import React, { useState, useEffect } from "react";
import { DesktopOutlined, FileOutlined, PieChartOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import CompanyDashboard from "./CompanyDashboard";
import ComparisonMetrics from "./ComparisonMetrics";
import FuturePredictions from "./FuturePredictions";
import ThemeSwitch from "../theme/ThemeSwitch";
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
  getItem("Comparison Metrics", "2", <DesktopOutlined />),
  getItem("Future Predictions", "3", <FileOutlined />),
];

const CompanyData = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState("CompanyDashboard");
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

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

  // Update theme in localStorage and state
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', JSON.stringify(newMode));
      return newMode;
    });
  };

  // Dynamic styles based on theme
  const contentStyle = {
    margin: "4px",
    padding: "16px",
    background: isDarkMode ? "#1c1c1c" : "#dddddd", 
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    border: isDarkMode ? "1px solid #333" : "1px solid #ddd", 
    color: isDarkMode ? "#ffffff" : "#000000",
    overflowY: "auto",
    maxHeight: "100vh",
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          overflow: "hidden",
          position: "fixed",
          height: "100vh",
          left: 0,
          top: 0,
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: isDarkMode ? "#001529" : "#f5f5f5",
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme={isDarkMode ? "dark" : "light"} 
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={handleMenuItemClick}
        />
        <div className="flex items-center" style={{ padding: "10px" }}>
          <ThemeSwitch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </div>
      </Sider>
      <Layout style={{ marginLeft: collapsed ? "80px" : "200px" }}>
        <Content style={contentStyle}>
          {selectedComponent === "CompanyDashboard" && <CompanyDashboard isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
          {selectedComponent === "ComparisonMetrics" && <ComparisonMetrics isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
          {selectedComponent === "FuturePredictions" && <FuturePredictions isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default CompanyData;
