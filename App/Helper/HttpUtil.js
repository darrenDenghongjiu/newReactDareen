import request from 'superagent';

const ROOT_URL = '';//接口路径

function setHeader(head) {
    let headers = {};
    headers['Content-Type'] = 'application/json; charset=UTF-8';
    head(headers);
};

function resultForHttp(error, result, callback) {
    if (error) {
        alert('当前网络故障，请稍后重试');
        callback(false, null);
    } else {
        if (result.body.respCode == '00000') {
            callback(true, result.body.data);
        } else {
            //后台抛出逻辑错误码在这里判断
            let alertText = result.body.memo;
            callback(false, null);
        }
    }
};

var HttpUtil = {
    get(url, callback){
        setHeader(function (headers) {
            request.get(ROOT_URL + url)
                .timeout(30000)
                .set(headers)
                .end(function (error, result) {
                    resultForHttp(error, result, callback);
                });
        })
    },
    post(url, data, callback){
        setHeader(function (headers) {
            request.post(ROOT_URL + url)
                .set(headers)
                .send(data)
                .end(function (error, result) {
                    resultForHttp(error, result, callback);
                });
        });
    },

    put(url, data, callback){
        setHeader(function (headers) {
            request.put(ROOT_URL + url)
                .timeout(30000)
                .set(headers)
                .send(data)
                .end(function (error, result) {
                    resultForHttp(error, result, callback);
                });
        });
    },

    delete(url, data, callback){
        setHeader(function (headers) {
            request.delete(ROOT_URL + url)
                .timeout(30000)
                .set(headers)
                .send(data)
                .end(function (error, result) {
                    resultForHttp(error, result, callback)
                });
        });
    }
};

export default HttpUtil;