import React from "react";
import $ from "jquery";
import PerfectScrollbar from "react-perfect-scrollbar";

import SideBar from "./SideBar";
import AppMain from "./AppMain";

class App extends React.Component {
  componentDidMount() {
    $(function() {
      "use strict";

      const chatList = new PerfectScrollbar(".chat-sidebar-body", {
        suppressScrollX: true
      });

      const msgContent = new PerfectScrollbar(".chat-body-content", {
        suppressScrollX: true
      });

      $(".chat-item").on("click", function(e) {
        $(this)
          .addClass("selected")
          .removeClass("unread");
        $(this)
          .siblings()
          .removeClass("selected");

        if (window.matchMedia("(max-width: 767px)").matches) {
          $("body").addClass("chat-body-show");
          $("#menuMain").addClass("d-none");
          $("#menuBack").removeClass("d-none");
        }
      });

      $("#menuBack").on("click", function(e) {
        e.preventDefault();
        $("body").removeClass("chat-body-show");
        $("#menuMain").removeClass("d-none");
        $("#menuBack").addClass("d-none");
      });

      //$('[data-toggle="tooltip"]').tooltip();
    });
  }

  render() {
    return (
      <div>
        <PerfectScrollbar>
          <SideBar />
          <AppMain />
        </PerfectScrollbar>
      </div>
    );
  }
}
export default App;
