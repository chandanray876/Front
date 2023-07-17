import React from "react";

function Chat() {
  return (
    <div class="inner-content" style={{ marginTop: 80 }}>
      <div class="job-task-block">
        <div class="container">
          <h2>Painting tasks</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div class="chat-box clearfix">
            <div class="rlt-chat-box">
              <div class="msg_history">
                <div class="incoming_msg clearfix">
                  <div class="incoming_msg_img">
                    <img src="images/customer-img.jpg" alt="" />
                  </div>
                  <div class="received_msg">
                    <span class="time_date">08:35PM</span>
                    <p>Hi ! How are you Buddy? what’s up now a days</p>
                  </div>
                </div>
                <div class="outgoing_msg clearfix">
                  <div class="incoming_msg_img">
                    <img src="images/blog-img2.jpg" alt="" />
                  </div>
                  <div class="received_msg">
                    <span class="time_date">08:35PM</span>
                    <p>Hi ! i am great thank you buddy </p>
                  </div>
                </div>
                <div class="incoming_msg clearfix">
                  <div class="incoming_msg_img">
                    <img src="images/customer-img.jpg" alt="" />
                  </div>
                  <div class="received_msg">
                    <span class="time_date">08:38PM</span>
                    <p>
                      That’s good . . . ok let me know if you wolud still like
                      to talk about plan.
                    </p>
                  </div>
                </div>
                <div class="outgoing_msg clearfix">
                  <div class="incoming_msg_img">
                    <img src="images/blog-img2.jpg" alt="" />
                  </div>
                  <div class="received_msg">
                    <span class="time_date">08:37PM</span>
                    <p>
                      Nice to see you too, I’d love upgrade. Are you still
                      offering a coupon?
                    </p>
                  </div>
                </div>
                <div class="incoming_msg clearfix">
                  <div class="incoming_msg_img">
                    <img src="images/customer-img.jpg" alt="" />
                  </div>
                  <div class="received_msg">
                    <span class="time_date">Just Now</span>
                    <p>
                      We sure are :) Just enter free month stil on your billing
                      page.
                    </p>
                  </div>
                </div>
              </div>

              <div class="chat-msg-box">
                <textarea
                  class="write_msg"
                  placeholder="Type a message here"
                ></textarea>
                <button class="msg_send_btn" type="button">
                  <i class="far fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
