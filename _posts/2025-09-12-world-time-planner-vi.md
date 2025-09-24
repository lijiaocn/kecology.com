---
layout: page
title:  "Công cụ lập kế hoạch thời gian thế giới: Tìm trực tiếp thời gian họp hoàn hảo cho nhóm toàn cầu"
description: "Một công cụ đơn giản để tìm thời gian họp hoàn hảo trên các múi giờ khác nhau. Chọn thành phố hoặc múi giờ và trực quan hóa sự chồng chéo về thời gian."
date: "2025-09-15 18:08:24 +0800"
last_modified_at: "2025-09-23 15:35:24 +0800"
categories: "tools"
lang: vi
permalink: /vi/tool/world-time-planner
mysetting:
  nowrapper: true
  background-color: '#121212'
---

<link rel="stylesheet" href="/assets/css/world-time-planner.css?v=11">

<div id="world-time-planner-app">

  <div id="wtp-timeline-container" class="wtp-timeline-container">
    <div class="wtp-timeline-header">
      <div class="wtp-date-controls">
        <div id="wtp-date-buttons"></div>
        <input type="date" id="wtp-date-picker">
      </div>
      <div class="wtp-time-nav-controls">
        <button id="wtp-scroll-left-btn" title="Cuộn sang trái">&lt;</button>
        <button id="wtp-now-btn" title="Đến thời gian hiện tại">Bây giờ</button>
        <button id="wtp-scroll-right-btn" title="Cuộn sang phải">&gt;</button>
      </div>
    </div>
        <div id="wtp-scroll-container">
          <div id="wtp-rows-wrapper" style="position: relative;">
              <div id="wtp-time-rows"></div>
              <div id="wtp-time-selector" style="display: none;"></div>
          </div>
        </div>
  </div>

  <div class="wtp-selectors-container">
    <div class="wtp-tab-buttons">
      <div class="wtp-tab-btn-container">
        <button class="wtp-tab-btn active" data-tab="popular">Thành phố nổi tiếng</button>
        <button class="wtp-tab-btn" data-tab="country">Theo quốc gia</button>
        <button class="wtp-tab-btn" data-tab="timezone">Theo múi giờ</button>
      </div>
    </div>
    
    <div class="wtp-tab-content">
      <div class="wtp-tab-panel active" id="popular-cities-panel">
        <div id="popular-cities-list" class="wtp-city-grid"></div>
      </div>
      <div class="wtp-tab-panel" id="country-panel">
        <div id="country-list" class="wtp-country-grid"></div>
      </div>
      <div class="wtp-tab-panel" id="timezone-panel">
        <div id="timezone-list" class="wtp-city-grid"></div>
      </div>
    </div>
    
    <div id="city-modal" class="wtp-modal">
      <div class="wtp-modal-content">
        <span class="wtp-modal-close">&times;</span>
        <h3 id="modal-country-name"></h3>
        <div id="modal-country-info" class="wtp-country-info"></div>
        <div id="modal-city-list" class="wtp-city-grid"></div>
      </div>
    </div>
  </div>

  <div class="wtp-features-section">
    <h2>Công cụ lập kế hoạch thời gian thế giới</h2>
    <p class="wtp-features-intro">
      Lên kế hoạch cho các cuộc họp qua các múi giờ mà không bị nhầm lẫn. Công cụ này giúp bạn tìm thời gian họp tốt nhất cho các nhóm và khách hàng toàn cầu.
    </p>
    
    <div class="wtp-features-grid">
      <div class="wtp-feature-item">
        <h3>Giờ địa phương của bạn trước tiên</h3>
        <p>Xem giờ địa phương của bạn ở trên cùng một cách tự động. Không cần phải tìm hiểu xem bây giờ là mấy giờ ở nơi bạn đang ở.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Thêm múi giờ dễ dàng</h3>
        <p>Thêm bất kỳ thành phố hoặc múi giờ nào chỉ bằng một cú nhấp chuột. So sánh thời gian trên toàn thế giới ngay lập tức.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Lập kế hoạch thời gian trực quan</h3>
        <p>Kéo để chọn phạm vi thời gian và xem chúng trông như thế nào ở các múi giờ khác nhau. Hoàn hảo để lên lịch các cuộc họp.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Tích hợp lịch trực tiếp</h3>
        <p>Tạo sự kiện lịch trực tiếp trong Lịch Google, Outlook hoặc Lịch Yahoo. Không cần sao chép-dán.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Không cần đăng ký</h3>
        <p>Bắt đầu lập kế hoạch ngay lập tức. Không cần tài khoản, không cần tải xuống, không cần thiết lập.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Hoạt động ngoại tuyến</h3>
        <p>Sau khi tải, hoạt động mà không cần internet. Tuyệt vời cho du lịch hoặc kết nối không đáng tin cậy.</p>
      </div>
    </div>
    
    <div class="wtp-use-cases">
      <h3>Hoàn hảo cho:</h3>
      <ul>
        <li>
          <strong>Các nhóm làm việc từ xa ở các quốc gia khác nhau</strong><br>
          Sarah ở New York cần lên lịch một cuộc họp nhóm với các đồng nghiệp ở London, Tokyo và Sydney. Cô ấy kéo để chọn 2-4 giờ chiều theo giờ của mình và ngay lập tức thấy đó là 7-9 giờ tối ở London, 4-6 giờ sáng ngày hôm sau ở Tokyo và 6-8 giờ sáng ngày hôm sau ở Sydney.
        </li>
        <li>
          <strong>Các cuộc họp với khách hàng và đối tác quốc tế</strong><br>
          Một công ty tiếp thị ở Berlin cần thuyết trình cho một khách hàng ở San Francisco. Họ chọn 3-4 giờ chiều theo giờ Berlin và thấy đó là 6-7 giờ sáng ở San Francisco - quá sớm. Họ điều chỉnh thành 5-6 giờ chiều theo giờ Berlin để có một khung giờ tốt hơn từ 8-9 giờ sáng ở San Francisco.
        </li>
        <li>
          <strong>Lên lịch hội thảo trên web cho khán giả toàn cầu</strong><br>
          Một công ty công nghệ muốn tổ chức một hội thảo trên web cho người dùng trên toàn thế giới. Họ chọn 2-3 giờ chiều theo giờ EST và ngay lập tức thấy nó phù hợp với Châu Âu (7-8 giờ tối) và Châu Á (3-4 giờ sáng ngày hôm sau). Họ tạo lời mời lịch cho tất cả các múi giờ chỉ bằng một cú nhấp chuột.
        </li>
        <li>
          <strong>Lập kế hoạch du lịch cá nhân</strong><br>
          Mike đang đi công tác từ Chicago đến Paris. Anh ấy cần gọi cho gia đình ở nhà trong chuyến đi của mình. Anh ấy chọn 7-8 giờ tối theo giờ Paris và thấy đó là 1-2 giờ chiều ở Chicago - hoàn hảo cho một cuộc gọi trong giờ nghỉ trưa.
        </li>
        <li>
          <strong>Các cuộc gọi gia đình qua các múi giờ</strong><br>
          Một gia đình có các thành viên ở Los Angeles, New York và London. Họ muốn tìm một thời gian phù hợp với tất cả mọi người. Họ thử các khung giờ khác nhau và phát hiện ra rằng 10 giờ sáng ở LA phù hợp với 1 giờ chiều ở New York và 6 giờ tối ở London - mọi người đều có thể tham gia.
        </li>
      </ul>
    </div>
  </div>

  <!-- Time Range Selection Dialog -->
  <div id="wtp-range-dialog" class="wtp-range-dialog">
    <div class="wtp-range-dialog-content">
      <div class="wtp-range-dialog-body">
        <div id="wtp-range-info">
          <h3>Tinh chỉnh phạm vi thời gian</h3>
          <div class="wtp-range-edit-container">
            <div class="wtp-range-edit-item">
              <label>Bắt đầu</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-start-date-display">Đang tải...</span>
                <span class="wtp-time-value" id="wtp-start-time-display">Đang tải...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="start" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="start" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>Kết thúc</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-end-date-display">Đang tải...</span>
                <span class="wtp-time-value" id="wtp-end-time-display">Đang tải...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="end" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="end" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>Khoảng thời gian</label>
              <div class="wtp-datetime-display">
                <span class="wtp-time-value" id="wtp-duration-display">Đang tải...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="duration" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="duration" data-direction="increase">+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="wtp-meeting-links">
          <label class="wtp-meeting-label">Thêm vào Lịch</label>
          <div class="wtp-meeting-buttons">
            <button class="wtp-meeting-btn" id="wtp-google-meeting-btn">
              Lịch Google
            </button>
            <button class="wtp-meeting-btn" id="wtp-outlook-meeting-btn">
              Outlook
            </button>
            <button class="wtp-meeting-btn" id="wtp-yahoo-meeting-btn">
              Lịch Yahoo
            </button>
          </div>
        </div>
        <div id="wtp-timezone-times"></div>
      </div>
      <button class="wtp-range-dialog-close">&times;</button>
    </div>
  </div>

</div>

<template id="wtp-timeline-row-template">
  <div class="wtp-timeline-row">
    <div class="wtp-timezone-info">
      <button class="wtp-remove-btn">&times;</button>
      <div class="wtp-city"></div>
      <div class="wtp-current-time"></div>
    </div>
    <div class="wtp-timeline-track">
      <div class="wtp-hover-time-label"></div>
    </div>
  </div>
</template>

<script src="/assets/js/world-time-planner-vi.js?v=11"></script>
