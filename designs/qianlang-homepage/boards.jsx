/* 三个桌面首页。文案写在叶子节点里，方便直接改字。工具地址与现站一致。 */

const SITE = "https://www.kecology.com";

function HomeFormal() {
  return (
    <div className="board reg" data-screen-label="01">
      <header className="reg-head">
        <div className="reg-brand">前浪求知</div>
        <nav className="reg-nav">
          <a href={SITE + "/tool/"}>工具</a>
          <a href={SITE + "/guides/"}>指南</a>
          <a href={SITE + "/blog/"}>文章</a>
        </nav>
      </header>

      <section className="reg-hero">
        <p className="reg-kicker">公司</p>
        <h1>北京前浪求知科技有限公司</h1>
        <p className="reg-en">Beijing Qianlang Qiuzhi Technology Co., Ltd.</p>
        <p className="reg-lede">现对外经营网页工具。其它业务尚未公布。</p>
      </section>

      <section className="reg-biz">
        <p className="reg-label">业务</p>
        <div className="reg-row">
          <div className="reg-no">01</div>
          <div>
            <div className="reg-name">网页工具</div>
            <p className="reg-desc">已上线的一类 Web 产品。屏幕检测、作息计算、跨时区时间，以及 JSON 与常用 AI 对话入口。</p>
          </div>
          <div className="reg-status is-live">已上线</div>
        </div>
        <div className="reg-row">
          <div className="reg-no">02</div>
          <div>
            <div className="reg-name">后续业务</div>
            <p className="reg-desc">尚未公布。</p>
          </div>
          <div className="reg-status is-hold">预留</div>
        </div>
        <div className="reg-row">
          <div className="reg-no">03</div>
          <div>
            <div className="reg-name">后续业务</div>
            <p className="reg-desc">尚未公布。</p>
          </div>
          <div className="reg-status is-hold">预留</div>
        </div>
      </section>

      <section className="reg-tools">
        <p className="reg-label">网页工具目录</p>
        <table className="reg-table">
          <thead>
            <tr>
              <th>分类</th>
              <th>名称</th>
              <th>做什么</th>
              <th>地址</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cat">屏幕</td>
              <td><a className="tname" href={SITE + "/tool/black-screen"}>在线黑屏</a></td>
              <td>查漏光、坏点、IPS 辉光</td>
              <td className="path"><a href={SITE + "/tool/black-screen"}>/tool/black-screen</a></td>
            </tr>
            <tr>
              <td className="cat">屏幕</td>
              <td><a className="tname" href={SITE + "/tool/baby-black-screen"}>哄娃黑屏</a></td>
              <td>给幼儿用的假关机画面</td>
              <td className="path"><a href={SITE + "/tool/baby-black-screen"}>/tool/baby-black-screen</a></td>
            </tr>
            <tr>
              <td className="cat">作息</td>
              <td><a className="tname" href={SITE + "/tool/best-bedtime-calculator"}>入睡时间</a></td>
              <td>按睡眠周期倒推就寝时刻</td>
              <td className="path"><a href={SITE + "/tool/best-bedtime-calculator"}>/tool/best-bedtime-calculator</a></td>
            </tr>
            <tr>
              <td className="cat">作息</td>
              <td><a className="tname" href={SITE + "/tool/wakeup-calculator"}>起床时间</a></td>
              <td>按睡眠周期安排次日起床</td>
              <td className="path"><a href={SITE + "/tool/wakeup-calculator"}>/tool/wakeup-calculator</a></td>
            </tr>
            <tr>
              <td className="cat">时区</td>
              <td><a className="tname" href={SITE + "/tool/world-time-planner"}>会议时区</a></td>
              <td>对齐多地都能开会的时段</td>
              <td className="path"><a href={SITE + "/tool/world-time-planner"}>/tool/world-time-planner</a></td>
            </tr>
            <tr>
              <td className="cat">时区</td>
              <td><a className="tname" href={SITE + "/tool/what-time"}>各地时间</a></td>
              <td>查看城市当前时间</td>
              <td className="path"><a href={SITE + "/tool/what-time"}>/tool/what-time</a></td>
            </tr>
            <tr>
              <td className="cat">数据</td>
              <td><a className="tname" href={SITE + "/tool/json"}>JSON</a></td>
              <td>格式化、校验，转到 XML、YAML</td>
              <td className="path"><a href={SITE + "/tool/json"}>/tool/json</a></td>
            </tr>
            <tr>
              <td className="cat">入口</td>
              <td><a className="tname" href={SITE + "/tool/ai-chatbot-hub"}>AI 入口</a></td>
              <td>集中打开 ChatGPT、Gemini、Grok 等</td>
              <td className="path"><a href={SITE + "/tool/ai-chatbot-hub"}>/tool/ai-chatbot-hub</a></td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer className="reg-foot">
        <span>北京前浪求知科技有限公司</span>
        <span>首页</span>
      </footer>
    </div>
  );
}

function HomeProduct() {
  return (
    <div className="board prd" data-screen-label="02">
      <header className="prd-head">
        <div className="prd-brand">前浪求知</div>
        <nav className="prd-nav">
          <a href={SITE + "/tool/"}>工具</a>
          <a href={SITE + "/guides/"}>指南</a>
          <a href={SITE + "/blog/"}>文章</a>
        </nav>
      </header>
      <section className="prd-top">
        <div>
          <h1>北京前浪求知科技有限公司</h1>
          <p className="prd-en">Beijing Qianlang Qiuzhi Technology Co., Ltd.</p>
        </div>
        <div className="prd-catalog">
          <p className="prd-label">产品名录</p>
          <p className="prd-catalog-name">网页工具</p>
          <p className="prd-note">屏幕、作息、时区，以及数据格式。</p>
        </div>
      </section>

      <div className="prd-grid">
        <a className="prd-cell" href={SITE + "/tool/black-screen"}>
          <p className="prd-cat">屏幕</p>
          <h2>在线黑屏</h2>
          <p>查漏光、坏点、IPS 辉光。</p>
          <div className="prd-path">/tool/black-screen</div>
        </a>
        <a className="prd-cell" href={SITE + "/tool/baby-black-screen"}>
          <p className="prd-cat">屏幕</p>
          <h2>哄娃黑屏</h2>
          <p>给幼儿用的假关机画面。</p>
          <div className="prd-path">/tool/baby-black-screen</div>
        </a>
        <a className="prd-cell" href={SITE + "/tool/best-bedtime-calculator"}>
          <p className="prd-cat">作息</p>
          <h2>入睡时间</h2>
          <p>按睡眠周期倒推就寝时刻。</p>
          <div className="prd-path">/tool/best-bedtime-calculator</div>
        </a>
        <a className="prd-cell" href={SITE + "/tool/wakeup-calculator"}>
          <p className="prd-cat">作息</p>
          <h2>起床时间</h2>
          <p>按睡眠周期安排次日起床。</p>
          <div className="prd-path">/tool/wakeup-calculator</div>
        </a>
        <a className="prd-cell" href={SITE + "/tool/world-time-planner"}>
          <p className="prd-cat">时区</p>
          <h2>会议时区</h2>
          <p>对齐多地都能开会的时段。</p>
          <div className="prd-path">/tool/world-time-planner</div>
        </a>
        <a className="prd-cell" href={SITE + "/tool/what-time"}>
          <p className="prd-cat">时区</p>
          <h2>各地时间</h2>
          <p>查看城市当前时间。</p>
          <div className="prd-path">/tool/what-time</div>
        </a>
        <a className="prd-cell" href={SITE + "/tool/json"}>
          <p className="prd-cat">数据</p>
          <h2>JSON</h2>
          <p>格式化、校验，转到 XML、YAML。</p>
          <div className="prd-path">/tool/json</div>
        </a>
        <a className="prd-cell" href={SITE + "/tool/ai-chatbot-hub"}>
          <p className="prd-cat">入口</p>
          <h2>AI 入口</h2>
          <p>集中打开 ChatGPT、Gemini、Grok 等。</p>
          <div className="prd-path">/tool/ai-chatbot-hub</div>
        </a>
      </div>

      <footer className="prd-foot">
        <span>北京前浪求知科技有限公司</span>
        <nav>
          <a href={SITE + "/guides/"}>指南</a>
          <a href={SITE + "/blog/"}>文章</a>
        </nav>
      </footer>
    </div>
  );
}

function HomeIndex() {
  return (
    <div className="board idx" data-screen-label="03">
      <p className="idx-kicker">首页目录</p>
      <h1>北京前浪求知科技有限公司</h1>
      <p className="idx-en">Beijing Qianlang Qiuzhi Technology Co., Ltd.</p>
      <hr className="idx-rule" />
      <p className="idx-lede">目录只列两样：已经上线的业务，和还空着的位置。</p>

      <section className="idx-block">
        <h2 className="idx-h">业务</h2>
        <div className="idx-line">
          <span className="n">01</span>
          <span>网页工具</span>
          <span className="live">已上线</span>
        </div>
        <p className="idx-sub">屏幕</p>
        <a className="idx-tool" href={SITE + "/tool/black-screen"}>
          <span className="nm">在线黑屏</span>
          <span className="dots"></span>
          <span className="path">/tool/black-screen</span>
        </a>
        <a className="idx-tool" href={SITE + "/tool/baby-black-screen"}>
          <span className="nm">哄娃黑屏</span>
          <span className="dots"></span>
          <span className="path">/tool/baby-black-screen</span>
        </a>
        <p className="idx-sub">作息</p>
        <a className="idx-tool" href={SITE + "/tool/best-bedtime-calculator"}>
          <span className="nm">入睡时间</span>
          <span className="dots"></span>
          <span className="path">/tool/best-bedtime-calculator</span>
        </a>
        <a className="idx-tool" href={SITE + "/tool/wakeup-calculator"}>
          <span className="nm">起床时间</span>
          <span className="dots"></span>
          <span className="path">/tool/wakeup-calculator</span>
        </a>
        <p className="idx-sub">时区</p>
        <a className="idx-tool" href={SITE + "/tool/world-time-planner"}>
          <span className="nm">会议时区</span>
          <span className="dots"></span>
          <span className="path">/tool/world-time-planner</span>
        </a>
        <a className="idx-tool" href={SITE + "/tool/what-time"}>
          <span className="nm">各地时间</span>
          <span className="dots"></span>
          <span className="path">/tool/what-time</span>
        </a>
        <p className="idx-sub">数据与入口</p>
        <a className="idx-tool" href={SITE + "/tool/json"}>
          <span className="nm">JSON</span>
          <span className="dots"></span>
          <span className="path">/tool/json</span>
        </a>
        <a className="idx-tool" href={SITE + "/tool/ai-chatbot-hub"}>
          <span className="nm">AI 入口</span>
          <span className="dots"></span>
          <span className="path">/tool/ai-chatbot-hub</span>
        </a>

        <div className="idx-line" style={{ marginTop: 28 }}>
          <span className="n">02</span>
          <span>后续业务</span>
          <span className="hold">预留 · 尚未公布</span>
        </div>
        <div className="idx-line">
          <span className="n">03</span>
          <span>后续业务</span>
          <span className="hold">预留 · 尚未公布</span>
        </div>
      </section>

      <footer className="idx-foot">
        <span>北京前浪求知科技有限公司</span>
        <nav>
          <a href={SITE + "/tool/"}>工具汇总</a>
          <a href={SITE + "/guides/"}>指南</a>
          <a href={SITE + "/blog/"}>文章</a>
        </nav>
      </footer>
    </div>
  );
}

Object.assign(window, { HomeFormal, HomeProduct, HomeIndex });
