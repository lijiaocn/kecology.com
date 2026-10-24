const { DesignCanvas, DCSection, DCArtboard } = window;
const { HomeFormal, HomeProduct, HomeIndex } = window;

function App() {
  return (
    <DesignCanvas>
      <DCSection
        id="home"
        title="公司首页"
        subtitle="采用方案 B，并改成公司主页。公司全称在左，产品名录「网页工具」在右。浅色信笺，不再用深色宣传区。"
        gap={72}
      >
        <DCArtboard id="registry" label="A · 登记册" width={1280} height={1360}>
          <HomeFormal />
        </DCArtboard>
        <DCArtboard id="product" label="B · 公司主页" width={1280} height={820}>
          <HomeProduct />
        </DCArtboard>
        <DCArtboard id="index" label="C · 目录页" width={1280} height={1220}>
          <HomeIndex />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
