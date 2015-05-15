//Created by Gorkem Tolan
//**************************
//Requirements:
//require.js -> Please load requirejs before you use it.
//**************************
//Usage with no return: BaseRequire.callThis("libraryName","methodName", [params]);
//**********************
//Usage with return:
// var obj={};
// BaseRequire.callThis("libraryName","methodName", [params],obj);
// var returnValue = obj.value
//***************
define('BaseRequire',[], function() {
    return {
      callThis:function(lib, method, params,returnObj) {
          require([lib], function(f) {
              if (f.hasOwnProperty(method)) {
                  if (typeof f[method] == 'function') {
                      if (params != null && params.length > 0) {
                          if (f[method] === 'undefined' || returnObj==null) {
                              f[method].apply(null, params);
                          } else {
                              returnObj.value = f[method].apply(null, params);
                          }
                      } else {
                          f[method].call();
                      }
                  }
              }
          });
      }  
    };
});
