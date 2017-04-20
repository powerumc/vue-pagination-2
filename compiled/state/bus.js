'use strict';

var bus = require('../bus');

module.exports = function () {
  return {
    data: function data() {
      return {
        page: 1
      };
    },
    methods: {
      paginate: function paginate(page) {
        this.page = page;
        this.$root.$emit('vue-pagination::' + this.for, page);
      }
    }
  };
};
