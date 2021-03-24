import Vue from "vue";
import moment from "moment";
/**
 *时间过滤
 */
Vue.filter("dateFormat", function(value, format) {
  let str = format || "YYYY-MM-DD HH:mm";
  return moment(value).format(str);
});

Vue.filter("priceFormat", function(value, format) {
  let str = format || "￥";
  return str + Number(value || 0).toFixed(2);
});
