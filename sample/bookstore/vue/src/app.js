import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import Datepicker from 'vuejs-datepicker';
import $ from 'jquery';


Vue.use(BootstrapVue);
Vue.component('new-form', {
  template: '#form-template',
	props: ['propsdata1'],
	components: {
			Datepicker
	},
	data: function(){
		return{
				book: {
					radio: '',
					checkbox: [],
					dropdown: "",
					selected: "null",
					date: ""
				},
				dropdownoptions:[
					{text: 'Other', value: 'Other'}, 
					{text: 'Other 1', value: 'Other 1'}, 
					{text: 'Other 2', value: 'Other 2'}
				],				
				options:[
					{text: 'Item 1', value: 'first'}, 
					{text: 'Item 2', value: 'second'}, 
					{text: 'Item 3', value: 'third'}
				],
				radiooptions: [
					{text: 'A', value: 'A'}, 
					{text: 'B', value: 'B'},
					{text: 'C',	value: 'C'}
				],				
		
		}
	},
  created: function() {
		// We initially sync the internalValue with the value passed in by the parent
    this.book = Object.assign({}, this.book, this.propsdata1);
  },
  watch: {
    propsdata1: function () {
			this.book = Object.assign({}, this.propsdata1);
			if(!("date" in this.book))	{this.book = Object.assign({}, this.propsdata1, {date: ""});}
    }
  },	
  methods:{
    modifyItemEvents: function(){		
			console.log(this.book)
			this.$emit('modifyitem', this.book);
			this.book = {	radio: '', checkbox: [],	dropdown: "",	selected: "null",	date: ""}
    }
  }  
})


Vue.component('modal', {
  template: '#modal-template',
	props: {
		data: Object
	},
  methods:{
    addItemEvents: function(){
			this.$emit('additem');
			this.$emit('close');
    }
  }  
})

Vue.component('detail-grid', {
  template: '#table-template',
	props: { 
		data: Array,
		columns: Array
	},
	methods:{
		goToEditForm: function(){
			this.$emit('gotoeditform', event.currentTarget.id);
		}
	}
})

Vue.component('image-grid', {
  template: '#image-grid-template',
	props: { 
		data: Array,
		columns: Array
	}
})


// main controller?
var app = new Vue({
  el: '#table',
  data: {
    columns: ['ID', 'Title', 'Author', 'Rating', 'Date'],
	tabIndex: null,
    tableData: [],
		editBook: {},		
		newBook: {
			id: 11,
			title: 'The Wealth of Nations',
			author: 'Adam Smith',
			rating: 5,
			cover: 'https://images-na.ssl-images-amazon.com/images/I/71dsU1pQbiL.jpg'
		},
		showModal: false,
    tabs: [],
    tabCounter: 0,
		selectedRow: 0		
  },
  mounted: function () {
	 var self = this;  
	  $.getJSON( "../data/books1.json")
	  .done(function( json ) {
			self.tableData = json 
	  })
	  .fail(function( jqxhr, textStatus, error ) {
			var err = textStatus + ", " + error;
			console.log( "Request Failed: " + err );
	  });
  },  

  methods:{
		goToEditForm: function(rowIndex){
			this.selectedRow = rowIndex
			this.editBook = this.tableData[this.selectedRow]
			this.tabIndex=2;
			console.log(this.tableData)
		},

		addItemInModal: function(data){
				//push new record to existing table data
				this.tableData.push(data)
				//go back to detail grid
				this.tabIndex=0;				
				//increment ID
				this.newBook = Object.assign({}, this.newBook, Object.assign({id: this.tableData.length+1}));	
		},

		updateItem: function(data){
			//go back to detail grid
			var temp = Object.assign(this.tableData);
			temp[this.selectedRow] = data
			this.tableData = Object.assign([], temp)

			//initialize tab
			this.tabIndex=0;
		}
  }
})


function findToday(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    } 

    if(mm<10) {
        mm='0'+mm
    } 

    return today = dd+'/'+mm+'/'+yyyy;    
}
