module.exports = ngModule => {
  ngModule.factory('httpInterceptorService', [
    function () {
      return {
        request(config) {
          config.headers = config.headers || {};
          // config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
          // config.headers['X-CSRF-Token'] = document.head.querySelector('meta[name="csrf-token"]').content || 'demo';
          return config;
        }
      };
    }
  ]);
};
