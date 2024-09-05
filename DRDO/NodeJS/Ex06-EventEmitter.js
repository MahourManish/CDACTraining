const myEvents = require("events");
const btn = new myEvents();
btn.on("myClick",()=>{ console.log("Button is clicked")});
btn.emit("myClick");
