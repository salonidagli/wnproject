
var mqtt = require("mqtt");
var client = mqtt.connect("ws://<AWS-EC2-IP-ADDRESS>:9001", {
  //open connection with your broker in AWS via websocket
  username:"wnproject", //authenticate your broker with username and password
  password:"saloni@1",
});


  //read sensor data from raspberry pi pin GPIO 4
  function timer() {
      client.publish(
        "mqtt/dht",
        JSON.stringify(`123`) //convert number to string
      ); //publish sensor data to broker on topic mqtt/dht

      console.log("topic published to the broker");
   
  }


);

