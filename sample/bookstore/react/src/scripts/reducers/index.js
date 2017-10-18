export default (state={
    books: [{
    "id" : 1,
    "title" : "The Hunger Games",
    "author" : "Suzanne Collins",
    "rating" : "4.35",
    "cover" : "http://images.gr-assets.com/books/1447303603l/2767052.jpg"
    }, {
    "id" : 2,
    "title" : "Harry Potter",
    "author" : "J.K. Rowling",
    "rating" : "4.46",
    "cover" : "https://images.gr-assets.com/books/1387141547l/2.jpg"
    }, {
    "id" : 3,
    "title" : "To Kill a Mockingbird",
    "author" : "Harper Lee",
    "rating" : "4.25",
    "cover" : "http://images.gr-assets.com/books/1361975680l/2657.jpg"
    }],   
    newBook:{
        id: 11,
        author: "Adam Smith",
        rating: 100,
        title: "The Wealth of Nations",
        cover: "https://images-na.ssl-images-amazon.com/images/I/71dsU1pQbiL.jpg",
        date: new Date().toISOString(),
        dropDown: "",
        radio: "",
        checkbox1: false,
        checkbox2: false,
        checkbox3: false        
    },
    editingBook:{
        id: 1,
        title: "The Hunger Games",
        author: "Suzanne Collins",
        rating: "4.35",
        cover: "http://images.gr-assets.com/books/1447303603l/2767052.jpg",
        date: new Date("2008-09-14T23:24:00").toISOString(),
        dropDown: "",
        radio: "",
        checkbox1: false,
        checkbox2: false,
        checkbox3: false     
    },       
    formattedValue: "123",
    tabActiveKey: 1,
    columnIndex: 0 

}, action) => {
  switch (action.type) {
    case 'homeTabChange':
        let tempStateInhomeTabChange = Object.assign({}, state, {tabActiveKey: action.key});
        return tempStateInhomeTabChange

    case 'updateBtnPress':
        //1.jump to tab 3 
        //2.prepare editingBok  (parse date to MM/DD/YYYY & select book)
        let tabActiveKey = action.tabActiveKey
        let tempEditingBook = Object.assign({}, state.books[action.columnIndex])        
        tempEditingBook.date = parseDisplayDateToCalanderDate(tempEditingBook.date)
        return Object.assign({}, state, 
            {editingBook: tempEditingBook},
            {tabActiveKey: tabActiveKey},
            {columnIndex: action.columnIndex} 
        )

    case 'dateUpdate':
        let tempNewBook = Object.assign({}, state[action.bookInUse], {date: action.date});
        let emptyObj = {}
        emptyObj[action.bookInUse] = tempNewBook           
        let tempState = Object.assign({}, state, emptyObj, {formattedValue: action.formattedValue});
        return tempState;
        //or this: ({...state, newBook: {...state.newBook, date: action.date}, formattedValue: action.formattedValue});
    
    case 'inputUpdate':
        let tempNewBook1 = Object.assign({}, state[action.bookInUse], {[action.name]: action.value});
        let emptyObj1 = {}
        emptyObj1[action.bookInUse] = tempNewBook1        
        let tempState1 = Object.assign({}, state, emptyObj1); 

        return tempState1;        
    
    case 'chkbxUpdate':
        let tempNewBook2 = Object.assign({}, state[action.bookInUse], {[action.name]: action.value});
        let emptyObj2 = {}
        emptyObj2[action.bookInUse] = tempNewBook2
        let tempState2 = Object.assign({}, state, emptyObj2);
        return tempState2;
        

    case 'booksAdd':
        //parse date to MM/DD/YYYY
        let tempNewBookInbooksAdd = Object.assign({}, state.newBook)
        let tempDate = new Date(tempNewBookInbooksAdd.date)
        tempNewBookInbooksAdd.date = ('0' + tempDate.getDate()).slice(-2) + '/'
                                        + ('0' + (tempDate.getMonth()+1)).slice(-2) + '/'
                                        + tempDate.getFullYear();
        let tempBook = [...state.books, tempNewBookInbooksAdd]
        return Object.assign({}, state, {books: tempBook}, {tabActiveKey: 1}, {
            //initialize new book form    
            newBook:{
                id: state.books.length+2,
                author: "Adam Smith",
                rating: 100,
                title: "The Wealth of Nations",
                cover: "https://images-na.ssl-images-amazon.com/images/I/71dsU1pQbiL.jpg",
                date: new Date().toISOString(),
                dropDown: "",
                radio: "",
                checkbox1: false,
                checkbox2: false,
                checkbox3: false                    
            }}
        )

    case 'booksUpdate':
        //parse date to MM/DD/YYYY
        let tempEditingBookInbooksUpdate = Object.assign({}, state.editingBook)
        let tempDateInbooksUpdate = new Date(tempEditingBookInbooksUpdate.date)
        let tempbookInbooksUpdate = Object.assign([], state.books)
        tempEditingBookInbooksUpdate.date = ('0' + tempDateInbooksUpdate.getDate()).slice(-2) + '/'
                                        + ('0' + (tempDateInbooksUpdate.getMonth()+1)).slice(-2) + '/'
                                        + tempDateInbooksUpdate.getFullYear();
        console.log(state.columnIndex)
        tempbookInbooksUpdate[state.columnIndex] = tempEditingBookInbooksUpdate
        return Object.assign({}, state, {books: tempbookInbooksUpdate}, {tabActiveKey: 1})

    case 'GET_BOOK':
        let tempValue = {...state, books:action.data.books}
        return tempValue

    case 'closeConnection':
        return {...state, books: [{
            "id" : 1,
            "title" : "The Hunger Games",
            "author" : "Suzanne Collins",
            "rating" : "4.35",
            "cover" : "http://images.gr-assets.com/books/1447303603l/2767052.jpg"
            }, {
            "id" : 2,
            "title" : "Harry Potter",
            "author" : "J.K. Rowling",
            "rating" : "4.46",
            "cover" : "https://images.gr-assets.com/books/1387141547l/2.jpg"
            }, {
            "id" : 3,
            "title" : "To Kill a Mockingbird",
            "author" : "Harper Lee",
            "rating" : "4.25",
            "cover" : "http://images.gr-assets.com/books/1361975680l/2657.jpg"
            }]}

    default:
      return state
  }
}

function parseDisplayDateToCalanderDate(inputDate){
        var parts = inputDate.split('/');
        var mydate = new Date(parts[2],parts[0]-1,parts[1]);  
        return mydate.toISOString()
}