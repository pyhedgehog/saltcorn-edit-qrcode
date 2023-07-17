const util = require('util');
const { img } = require('@saltcorn/markup/tags');

const qrcode = {
  type: "String",
  isEdit: false,
  configFields: [
    {
      name: "size",
      label: "Size",
      sublabel: "Size of QR-code in pixels",
      default: 15,
      attributes: { max: 1000, min: 10 },
    }
  ],
  run: function(nm, v, attrs, cls) {
    var url = new URL('https://chart.googleapis.com/chart');
    url.searchParams.set('cht', 'qr');
    url.searchParams.set('chs', `${attrs.size || 15}x${attrs.size || 15}`);
    console.log(v);
    url.searchParams.set('chl', `${typeof v}/${v.constructor.name} ${util.inspect(v)}`);
    return img({src: url.toString()});
  }
};

module.exports = {
  sc_plugin_api_version: 1,
  fieldviews: { qrcode },
  plugin_name: "qrcode",
};
