var commonFactories=angular.module("openevent");commonFactories.factory("ApiJsonFactory",["$q","$http",function(e,o){var n=(config.use_testApi?"testapi/":config.apiBaseGetUrl)+"event/"+config.eventId;return{getJson:function(t){if("event"!==t||config.use_testApi)var r=n+"/"+t;else var r=n;console.log(r);var i=e.defer(),c=o.get(r);return c.then(function(e){i.resolve(e)},function(e){console.error(e)}),i.promise}}}]);