if(oSession.fullUrl.IndexOf(".key?token=")!=-1){
    var key = "";
    for (var i = 0; i < oSession.responseBodyBytes.length; i ++) {
        key += oSession.responseBodyBytes[i].ToString("X2")
    }
    FiddlerObject.log(oSession.fullUrl + "\n"+key);
    var Content: byte[] = System.Text.Encoding.UTF8.GetBytes('{"url":"' + oSession.fullUrl + '","key":"'+key+'"}');
    var oRQH: HTTPRequestHeaders = new HTTPRequestHeaders("/", ['Host: 127.0.0.1:7809','Content-Length: '+Content.length.ToString(), 'Content-Type: application/json;charset=utf-8']);
    oRQH.HTTPMethod = "POST";
    var oSD = new System.Collections.Specialized.StringDictionary();
    var newSession = FiddlerApplication.oProxy.SendRequestAndWait(oRQH, Content, oSD, null);
    var second_res = newSession.GetResponseBodyAsString();
    FiddlerApplication.Log.LogString(second_res);
}