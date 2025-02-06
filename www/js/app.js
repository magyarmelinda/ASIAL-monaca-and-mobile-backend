// API key 
const applicationKey = "**********";
const clientKey = "**********";
// SDK initialization 
const ncmb = new NCMB(applicationKey, clientKey);

// Processing when the button is pressed 
function pushButton() {
  // Get the value of the text area 
  let message = document.getElementById("message").value;
  alert(message);

  /** Save to mobile backend **/
  // Generate destination class 
  const MessageClass = ncmb.DataStore("MessageClass");
  // Generate class instance 
  const messageClass = new MessageClass();
  // Set data Save 
  messageClass.set("message", message).save();
}

// Processing when the Omikuji button is pressed 
function omikuji() {
  /** Get from mobile backend **/
  // Generate destination class 
  const Omikuji = ncmb.DataStore("Omikuji");
  // Get processed
  Omikuji.fetchAll()
    .then(function (objects) {
      /* Get processing at the time of success */
      // Greate a random number
      let random = Math.floor(Math.random() * objects.length);
      // Random number th data
      let object = objects[random];
      // "result" field value acquisition
      let result = object.get("result");
      // Displaying the result on the screen 
      document.getElementById("result").innerText = result;
    }).catch(function (error) {
      /* Processing when acquisition fails */
      alert("Error:" + error.code);
    })
}
