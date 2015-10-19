(function() {
  'use strict';

  angular
    .module('quoteApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
