// import React from "react";
// import "./Socket.css";


// $(function() {
//       const socket = io();
//       //when user types message into form, the server gets it as a chat message event (#m)
//         $("form").submit(function () {
//           socket.emit("chat message", $("#m").val());
//             $("#m").val("");
//               return false;
//         });
//         //capturing a message on the client side and appending it to the page
//         socket.on("chat message", function(msg) {
//           $("#messages").append($("<li>").text(msg));
//           //adding autoscroll to bottom of the page
//           window.scrollTo(0, document.body.scrollHeight);
//         });
//     });
    
//   </script>

//   <body>
//     <ul id="messages"></ul>
//     <form action="">
//       <input id="m" autocomplete="off" /><button>Send</button>
//     </form>
//   </body>