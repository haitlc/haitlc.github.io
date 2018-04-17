Ext.require(["Ext.app.Application", "Ext.Component", "Ext.Widget"]);
Ext.require("Ext.reactor.RendererCell");
Ext.create({
  xtype: 'container',
  padding: '20'
});
Ext.create({"xtype":"container"});
Ext.require('Ext.plugin.Responsive');
Ext.create('Ext.data.Store', {
  fields: ['name', 'value'],
  comboData: comboData
});
Ext.create({
  xtype: 'formpanel',
  shadow: true
});
Ext.create({
  xtype: 'fieldset',
  title: 'Text Input'
});
Ext.create({
  xtype: 'textfield',
  placeholder: 'Single-line',
  label: 'Singleline'
});
Ext.create({
  xtype: 'textareafield',
  placeholder: 'Multi-line',
  label: 'Multiline'
});
Ext.create({
  xtype: 'spinnerfield',
  label: 'Number',
  stepValue: 1
});
Ext.create({
  xtype: 'datepickerfield',
  width: 150,
  value: new Date(),
  destroyPickerOnHide: true,
  label: 'Date Field',
  picker: {
    yearFrom: 1990
  }
});
Ext.create({
  xtype: 'fieldset',
  title: 'Buttons'
});
Ext.create({"xtype":"container"});
Ext.create({
  xtype: 'button',
  text: 'Default',
  ui: ''
});
Ext.create({
  xtype: 'button',
  ui: 'action',
  iconCls: 'x-fa fa-search'
});
Ext.create({
  xtype: 'button',
  text: 'Search',
  ui: 'action',
  iconCls: 'x-fa fa-heart'
});
Ext.create({
  xtype: 'fieldset',
  title: 'Dropdown'
});
Ext.create({
  xtype: 'fieldset',
  title: 'Radio, Checkbox'
});
Ext.create({"xtype":"containerfield"});
Ext.create({"xtype":"radiofield"});
Ext.create({"xtype":"radiofield"});
Ext.create({"xtype":"radiofield"});
Ext.create({"xtype":"radiofield"});
Ext.create({"xtype":"containerfield"});
Ext.create({
  xtype: 'checkboxfield',
  boxLabel: '1'
});
Ext.create({
  xtype: 'checkboxfield',
  boxLabel: '2',
  checked: true
});
Ext.create({
  xtype: 'checkboxfield',
  boxLabel: '3'
});
Ext.create({
  xtype: 'checkboxfield',
  boxLabel: '4',
  disabled: true
});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"fieldset"});
Ext.create({"xtype":"textfield"});
Ext.create({"xtype":"textareafield"});
Ext.create({"xtype":"spinnerfield"});
Ext.create({"xtype":"formpanel"});
Ext.create({"xtype":"comboboxfield"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"containerfield"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"checkboxfield"});
Ext.create({"xtype":"radiofield"});
Ext.create('Ext.data.Store', {
  fields: ['key', 'name', 'status'],
  data: data
});
Ext.create({
  xtype: 'grid',
  store: this.store
});
Ext.create({
  xtype: 'toolbar',
  docked: 'top'
});
Ext.create({
  xtype: 'searchfield',
  ui: 'faded',
  ref: function ref(field) {
    return _this2.query = field;
  },
  placeholder: 'Search...',
  onChange: this.onSearch.bind(this),
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    flex: 1
  }), _defineProperty(_ref2, medium, {
    flex: undefined
  }), _ref2)
});
Ext.create({
  xtype: 'column',
  text: 'ID',
  dataIndex: 'key',
  flex: 1,
  resizable: true
});
Ext.create({
  xtype: 'column',
  text: 'Name',
  dataIndex: 'name',
  flex: 3,
  resizable: true
});
Ext.create({
  xtype: 'column',
  text: 'Status',
  dataIndex: 'status',
  flex: 2,
  resizable: true,
  renderer: this.renderStatus.bind(this)
});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"searchfield"});
Ext.create('Ext.data.Store', {
  fields: ['name', 'email', 'phone', 'hoursTaken', 'hoursRemaining'],
  data: data
});
Ext.create({
  xtype: 'grid',
  store: this.store
});
Ext.create({
  xtype: 'toolbar',
  docked: 'top'
});
Ext.create({
  xtype: 'searchfield',
  ui: 'faded',
  ref: function ref(field) {
    return _this2.query = field;
  },
  placeholder: 'Search...',
  onChange: this.onSearch.bind(this),
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    flex: 1
  }), _defineProperty(_ref2, medium, {
    flex: undefined
  }), _ref2)
});
Ext.create({
  xtype: 'column',
  text: 'Name',
  dataIndex: 'name',
  flex: 2,
  resizable: true
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'email',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref3 = {}, _defineProperty(_ref3, small, {
    hidden: true
  }), _defineProperty(_ref3, medium, {
    hidden: false
  }), _ref3)
});
Ext.create({
  xtype: 'column',
  text: 'Phone',
  dataIndex: 'phone',
  flex: 2,
  resizable: true
});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"searchfield"});
Ext.create({
  xtype: 'container',
  fullscreen: true,
  layout: 'fit'
});
Ext.create({
  xtype: 'titlebar',
  title: 'ExtReact Sample',
  docked: 'top'
});
Ext.create({
  xtype: 'button',
  align: 'left',
  iconCls: 'x-fa fa-bars',
  handler: this.toggleAppMenu,
  ripple: false
});
Ext.create({
  xtype: 'sheet',
  displayed: showAppMenu,
  side: 'left',
  onHide: this.onHideAppMenu
});
Ext.create({
  xtype: 'panel',
  scrollable: true,
  title: 'ExtReact Sample'
});
Ext.create({
  xtype: 'panel',
  scrollable: true,
  docked: 'left',
  shadow: true,
  zIndex: 2
});
Ext.create({
  xtype: 'transition',
  type: 'fade'
});
Ext.create({"xtype":"transition"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"titlebar"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"sheet"});
Ext.create({"xtype":"panel"});
Ext.require('Ext.data.TreeStore');
Ext.create({"xtype":"treelist"});
Ext.create({"xtype":"treelist"});
Ext.require(['Ext.MessageBox']);
Ext.create({"xtype":"container"});
Ext.create({
  xtype: 'panel',
  shadow: true,
  title: 'Modal Window',
  layout: {
    type: 'vbox',
    align: 'stretch'
  }
});
Ext.create({
  xtype: 'button',
  handler: function handler() {
    return Ext.Msg.alert('Title', 'The quick brown fox jumped over the lazy dog.');
  },
  text: 'Alert'
});
Ext.create({
  xtype: 'button',
  handler: function handler() {
    return Ext.Msg.prompt('Welcome!', "What's your first name?", _this2.onPromptResult.bind(_this2));
  },
  text: 'Prompt'
});
Ext.create({
  xtype: 'button',
  handler: function handler() {
    return Ext.Msg.confirm("Confirmation", "Are you sure you want to do that?", _this2.onConfirmResult.bind(_this2));
  },
  text: 'Confirm'
});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"button"});
Ext.create('Ext.data.TreeStore', {
  rootVisible: true,
  root: data
});
Ext.create({
  xtype: 'tree',
  store: this.store,
  shadow: true
});
Ext.create({"xtype":"tree"})