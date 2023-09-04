const util = require('util');
const { img } = require('@saltcorn/markup/tags');

const qrcode = {
  type: "String",
  isEdit: false,
  configFields: [
    {
      name: "size",
      label: "Size",
      type: 'Integer',
      sublabel: "Size of QR-code in pixels",
      default: 50,
      attributes: { max: 1000, min: 30 },
    },
    {
      name: "border",
      label: "White border",
      type: 'Bool',
      sublabel: "Add white border around QR-code",
      default: false
    }
  ],
  run: function(v, req, attrs) {
    var url = new URL('https://chart.googleapis.com/chart');
    url.searchParams.set('cht', 'qr');
    url.searchParams.set('chs', `${attrs.size || 150}x${attrs.size || 150}`);
    url.searchParams.set('chl', String(v));
    url.searchParams.set('chld', `L|${attrs.border?1:0}`);
    return img({src: url.toString()});
  }
};

module.exports = {
  sc_plugin_api_version: 1,
  fieldviews: { qrcode },
  plugin_name: "qrcode",
};
