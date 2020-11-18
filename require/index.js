export const request=(params)=>{
  var baseUrl="";
  return new Promise((resolve,reject)=>{
    
    wx.request({
      ...params,
      url:baseUrl+params.url,
      success:(res)=>{
        resolve(res);
      },
      fail:(err)=>{
        reject(err);
      }
    });
    
  })
}

