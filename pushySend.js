const axios = require("axios");

const PUSHY_API_KEY = process.env.PUSHY_API_KEY || "YOUR_PUSHY_API_KEY";

async function sendPushyNotification(deviceToken, title, message) {
  const data = {
    to: deviceToken,
    notification: {
      body: message,
      title: title,
      badge: 1,
      sound: "ping.aiff",
    },
    data: { customKey: "customValue" },
  };

  const response = await axios.post(`https://api.pushy.me/push?api_key=${PUSHY_API_KEY}`, data);
  return response.data;
}

module.exports = { sendPushyNotification };
