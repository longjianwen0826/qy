/**
 * FA系列库之兼容所有浏览器的本地存储组件
 *
 * @Detail
 * 1、必须基于jquery使用
 * 2、支持HTML5的浏览器，采用原生localStorage进行存储
 * 3、IE7及其以下版本，采用UserData进行存储
 * 4、在以上两种都不支持的浏览器中，采用cookie进行存储
 *
 * @API
 * 1、$.storage.set //设置本地存储
 * 2、$.storage.get //获取本地存储
 * 3、$.storage.remove //移除本地存储
 * 4、$.storage.clearAll //清空所有本地存储
 * 5、$.storage.getAll //获取所有本地存储，返回key
 * 
 * @Author WangRongJie（wangrongjie@fortuneage.com）
 */

$(function () {
    $.extend({
        storage: {
            /**
            * @param {String} key 待存储数据的key
            * @param {String} value 待存储的数据
            */
            set: function (key, value) {
                BrowserStorage.api.set({ key: key, value: value });
            },
            /**
            * @param {String} key 读取本地存储的key
            * @return {String} value 本地存储数据
            */
            get: function (key) {
                var val = BrowserStorage.api.get({ key: key });
                if (val.value != null && val.value != 'null') {
                    return val.value;
                } else {
                    return null;
                }
            },
            /**
            * @param {String/Object/Array} obj 待移除的存储数据相关配置，支持移除某一个本地存储，也支持数组形式的批量移除
            */
            remove: function (obj) {
                BrowserStorage.api.remove(obj);
            },
            /**
            * 清除所有本地存储
            */
            clearAll: function () {
                BrowserStorage.api.clearAll();
            },
            /**
            * 获取所有本地存储
            * @return  {Array} 所有的key
            */
            getAll: function () {
                return BrowserStorage.api.getAllKeys();
            }
        }
    });
});

var BrowserStorage = window.BrowserStorage || {
    version: '1.1'
};

BrowserStorage.localStorage = (function () {

    function _set(storageInfo) {
        var storageInfo = storageInfo || {};
        window.localStorage.setItem(storageInfo.key, storageInfo.value);

        if (storageInfo.expires) {
            var expires;
            if ('number' == typeof storageInfo.expires) {
                expires = new Date();
                expires.setTime(expires.getTime() + storageInfo.expires);
            }

            window.localStorage.setItem(storageInfo.key + ".expires", expires);
        }
    }

    function _get(config) {
        var result = null;
        if (typeof config === "string") config = { key: config };

        result = window.localStorage.getItem(config.key);
        if (result) {
            var expires = window.localStorage.getItem(config.key + ".expires");
            result = {
                value: result,
                expires: expires ? new Date(expires) : null
            };
            if (result && result.expires && result.expires < new Date()) {
                result = null;
                window.localStorage.removeItem(config.key);
                window.localStorage.removeItem(config.key + ".expires");
            }
        }
        return result ? result.value : null;
    }

    function _remove(config) {
        window.localStorage.removeItem(config.key);
        window.localStorage.removeItem(config.key + ".expires");
    }

    function _clearAll() {
        window.localStorage.clear();
    }

    function _getAllKeys() {
        var result = [], key;
        for (var i = 0, len = window.localStorage.length; i < len; i++) {
            key = window.localStorage.key(i);
            if (!/.+\.expires$/.test(key)) {
                result.push(key);
            }
        }
        return result;
    }

    return {
        get: _get,
        set: _set,
        remove: _remove,
        clearAll: _clearAll,
        getAllKeys: _getAllKeys
    };
})();

BrowserStorage.userData = (function () {
    var _clearAllKey = "_baidu.ALL.KEY_";
    function _getInstance() {
        var _input = null;
        _input = document.createElement("input");
        _input.type = "hidden";
        _input.addBehavior("#default#userData");
        document.body.appendChild(_input);
        return _input;
    }

    function __setItem(config) {
        try {
            var input = _getInstance();
            var storageInfo = config || {};
            if (storageInfo.expires) {
                var expires;
                if ('number' == typeof storageInfo.expires) {
                    expires = new Date();
                    expires.setTime(expires.getTime() + storageInfo.expires);
                }
                input.expires = expires.toUTCString();
            }

            input.setAttribute(storageInfo.key, storageInfo.value);
            input.save(storageInfo.key);
        } catch (e) {
        }
    }
    function _set(config) {
        __setItem(config);

        var result = _get({ key: _clearAllKey });
        if (result) {
            result = { key: _clearAllKey, value: result };
        } else {
            result = { key: _clearAllKey, value: "" };
        }

        if (!(new RegExp("(^|\\|)" + config.key + "(\\||$)", 'g')).test(result.value)) {
            result.value += "|" + config.key;
            __setItem(result);
        }
    }

    function _get(config) {
        try {
            var input = _getInstance();
            input.load(config.key);
            return input.getAttribute(config.key) || null;
        } catch (e) {
            return null;
        }
    }
    function _remove(config) {
        try {
            var input = _getInstance();
            input.load(config.key);
            input.removeAttribute(config.key);
            var expires = new Date();
            expires.setTime(expires.getTime() - 1);
            input.expires = expires.toUTCString();
            input.save(config.key);

            var result = _get({ key: _clearAllKey });
            if (result) {
                result = result.replace(new RegExp("(^|\\|)" + config.key + "(\\||$)", 'g'), '');
                result = { key: _clearAllKey, value: result };
                __setItem(result);
            }

        } catch (e) {
        }
    }
    function _clearAll() {
        result = _get({ key: _clearAllKey });
        if (result) {
            var allKeys = result.split("|");
            var count = allKeys.length;
            for (var i = 0; i < count; i++) {
                if (!!allKeys[i]) {
                    _remove({ key: allKeys[i] });
                }
            }
        }
    }
    function _getAllKeys() {
        var result = [];
        var keys = _get({ key: _clearAllKey });
        if (keys) {
            keys = keys.split('|');
            for (var i = 0, len = keys.length; i < len; i++) {
                if (!!keys[i]) {
                    result.push(keys[i]);
                }
            }
        }
        return result;
    }

    return {
        get: _get,
        set: _set,
        remove: _remove,
        clearAll: _clearAll,
        getAllKeys: _getAllKeys
    };
})();

BrowserStorage.cookie = (function () {
    var _isValidKey = function (key) {
        return (new RegExp("^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24")).test(key);
    };

    var _get = function (config) {
        var value = null;
        if (_isValidKey(config.key)) {
            var reg = new RegExp("(^| )" + config.key + "=([^;\/]*)([^;\x24]*)(;|\x24)"), result = reg.exec(document.cookie);

            if (result) {
                value = result[2] || null;
            }
        }
        if (('string' == typeof value) && config.decode != false) {
            value = decodeURIComponent(value);
            return value;
        }
        return null;
    };

    var _set = function (config) {
        if (!_isValidKey(config.key)) {
            return;
        }

        config = config || {};
        if (config.encode != false) {
            config.value = encodeURIComponent(config.value);
        }

        var expires = config.expires;
        if (!(expires instanceof Date)) {
            expires = new Date();
            if ('number' == typeof config.expires) {
                expires.setTime(expires.getTime() + config.expires);
            } else {
                expires.setTime(expires.getTime() + 86400000 * 30);
            }
        }

        document.cookie = config.key + "=" + config.value
            + (config.path ? "; path=" + (config.path == './' ? '' : config.path) : "/")
            + (expires ? "; expires=" + expires.toGMTString() : "")
            + (config.domain ? "; domain=" + config.domain : "")
            + (config.secure ? "; secure" : '');
    };

    var _remove = function (config) {
        var obj = _get(config);
        if (obj != null) {
            config.value = null;
            config.expires = -1;
            _set(config);
        }
    };

    var _clearAll = function () {
        document.cookie = '';
    };

    var _getAllKeys = function () {
        var keys = [];
        var reg = /(^| )([^=; ]+)=([^;]*)(;|\x24)/igm;
        var localCookies = (document.cookie || '').match(reg);
        if (localCookies) {
            var items;
            for (var i = 0, len = localCookies.length; i < len; i++) {
                items = reg.exec(localCookies[i]);
                keys.push(items[2]); //第二项是key，第三项是value
            }
        }
        return keys;
    };

    return {
        get: _get,
        set: _set,
        remove: _remove,
        clearAll: _clearAll,
        getAllKeys: _getAllKeys
    };

})();

BrowserStorage.api = (function () {
    var _browserInfo = (function () {
        var userAgent = navigator.userAgent.toLowerCase();
        return {
            version: (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
            safari: /webkit/.test(userAgent),
            opera: /opera/.test(userAgent),
            msie: /msie/.test(userAgent) && !/opera/.test(userAgent),
            mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent)
        };
    })();
    var _isSupportLocalStorage = function () {
        var isSupport = false;
        try {
            isSupport = ('localStorage' in window) && (window.localStorage.getItem);
        } catch (e) {
            isSupport = false;
        }
        return isSupport;
    };
    var _isSupportUserData = function () {
        return _browserInfo.msie;
    };
    var _isValidKey = function (key) {
        return (new RegExp("^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24")).test(key);
    };

    var _set = function (obj, enableUD) {
        //保存单个对象
        var _set_ = function (config) {
            //key校验
            if (!_isValidKey(config.key)) { return; }

            // 计算cookie过期时间
            var expires = config.expires;
            if (!(expires instanceof Date)) {
                expires = new Date();
                if ('number' == typeof config.expires) {
                    expires.setTime(expires.getTime() + config.expires);
                } else {
                    // 在没有设置过期时间的情况下，默认：30day
                    expires.setTime(expires.getTime() + 86400 * 30);
                }
            }
            config.expires = expires;

            if (_isSupportLocalStorage()) {
                BrowserStorage.localStorage.set(config);
            } else if (_isSupportUserData() && enableUD) {
                BrowserStorage.userData.set(config);
            } else {
                BrowserStorage.cookie.set(config);
            }
        };

        //判断传入的参数是否为数组
        if (obj && obj.constructor === Array && obj instanceof Array) {
            for (var i = 0, len = obj.length; i < len; i++) {
                _set_(obj[i]);
            }
        } else if (obj) {
            _set_(obj);
        }
    };

    var _get = function (obj, enableUD) {
        //获取某一个本地存储
        var _get_ = function (config) {
            //结果
            var result = null;
            if (typeof config === "string") config = { key: config };
            //key校验
            if (!_isValidKey(config.key)) { return result; }

            if (_isSupportLocalStorage()) {
                result = BrowserStorage.localStorage.get(config);
            } else if (_isSupportUserData() && enableUD) {
                result = BrowserStorage.userData.get(config);
            } else {
                result = BrowserStorage.cookie.get(config);
            }

            return { key: config.key, value: result };
        };

        var rst = null;
        //判断传入的参数是否为数组
        if (obj && obj.constructor === Array && obj instanceof Array) {
            rst = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                rst.push(_get_(obj[i]));
            }
        } else if (obj) {
            rst = _get_(obj);
        }
        return rst;
    };

    var _remove = function (obj, enableUD) {
        //enableUD = true;
        //移除某一项本地存储的数据
        var _remove_ = function (config) {

            if (typeof config === "string") config = { key: config };
            //key校验
            if (!_isValidKey(config.key)) { return result; }

            if (_isSupportLocalStorage()) {
                BrowserStorage.localStorage.remove(config);
            } else if (_isSupportUserData() && enableUD) {
                BrowserStorage.userData.remove(config);
            } else {
                BrowserStorage.cookie.remove(config);
            }
        };

        //判断传入的参数是否为数组
        if (obj && obj.constructor === Array && obj instanceof Array) {
            for (var i = 0, len = obj.length; i < len; i++) {
                _remove_(obj[i]);
            }
        } else if (obj) {
            _remove_(obj);
        }
    };

    var _clearAll = function (enableUD) {
        if (_isSupportLocalStorage()) {
            BrowserStorage.localStorage.clearAll();
        } else if (_isSupportUserData() && enableUD) {
            BrowserStorage.userData.clearAll();
        } else {
            BrowserStorage.cookie.clearAll();
        }
    };

    var _getAllKeys = function (enableUD) {
        var result = null;

        if (_isSupportLocalStorage()) {
            result = BrowserStorage.localStorage.getAllKeys();
        } else if (_isSupportUserData() && enableUD) {
            result = BrowserStorage.userData.getAllKeys();
        } else {
            result = BrowserStorage.cookie.getAllKeys();
        }

        return result;
    };

    return {
        get: _get,
        set: _set,
        remove: _remove,
        clearAll: _clearAll,
        getAllKeys: _getAllKeys
    };

})();