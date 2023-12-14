exports = async function ({ query, headers, body }, response) {
    try {   
      const date = new Date();
      date.setHours(date.getHours() + 7);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      const formattedDateTime = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;  //DateTime dd/mm/yyyy, hh:mm:ss,VI TimeZone
      
      const bodyData = JSON.parse(body.text());
  
      const database = context.services.get("mongodb-atlas").db("ReportHHH");
      const dataCollection = database.collection("Login");
      ////////////////////////////////
      const user = await dataCollection.findOne({ username:bodyData.username, password:bodyData.password });
      if (user) {
        await dataCollection.updateOne(
            { _id: user._id },
            { $set: { formattedDateTime } }
          );
        return true
      } else {
        return false
      }
      ////////////////////////////////
    } catch (error) {
      console.error(error);
      return "Đã xảy ra lỗi khi lưu dữ liệu.";
    }
  };