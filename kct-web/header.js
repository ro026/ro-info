document.addEventListener("DOMContentLoaded", () => {
    const headerHTML = `
      <header class="site-header" role="banner" aria-label="サイトヘッダー">
        <div class="logo"><a href="index.html">文化祭2025</a></div>
        <nav class="nav-links" id="navLinks" role="navigation" aria-label="メインメニュー">
          <a href="index.html">トップページ</a>
          <a href="map1.html">マップ</a>
          <a href="dashimono.html">出し物一覧</a>
        </nav>
        <button class="menu-toggle" id="menuToggle" aria-expanded="false" aria-controls="navLinks" aria-label="メニューを開閉">☰</button>
      </header>
      <div class="header-spacer" id="headerSpacer"></div>
    `;
  
    const mount = document.querySelector(".header");
    if (!mount) return;
    mount.innerHTML = headerHTML;
  
    const headerEl = mount.querySelector(".site-header");
    const spacerEl = mount.querySelector("#headerSpacer");
  
    // ヘッダー高さを計測してスペーサーに反映（コンテンツのズレ防止）
    const setSpacer = () => {
      const h = headerEl.getBoundingClientRect().height;
      spacerEl.style.height = `${h}px`;
    };
    setSpacer();
    window.addEventListener("resize", setSpacer);
  
    // ハンバーガー開閉
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    menuToggle.addEventListener("click", () => {
      console.log("dkgjoiejrioj")
      navLinks.classList.toggle("active");
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
    });
  });
  