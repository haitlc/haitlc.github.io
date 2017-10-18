import fetch from 'isomorphic-fetch'

//action in formAction
export const dateUpdateInAction = (date, formattedValue, book) => ({
        type: "dateUpdate",
        date, //same as date: date
        formattedValue: formattedValue,
        bookInUse: book

})

export function inputUpdateInAction(target, book){
    return {
        type: "inputUpdate",
        value: target.value,
        name: target.name,
        bookInUse: book
    }
}

export function chkbxUpdateInAction(target, book){
    return{
        type: "chkbxUpdate",
        value: target.checked,
        name: target.name,
        bookInUse: book
    }
}

export const submitUpdateInAction = () => ({
        type:"booksAdd"    
})

export function getBook(data) {
    return {type:'GET_BOOK', data};
}


export function getBookNM(dispatch) {
    return fetch(`books1.json`)
      .then(response => response.json())
      .then(data =>dispatch({type:'GET_BOOK', data}))
}


//action in editForm
export const ediFormUpdateInAction = () => ({
    type: "booksUpdate"
})

//action in visibleTable
export function updateRecInAction(target) {
    console.log(target)
    return{
        type: "updateBtnPress",
        columnIndex: target.id, //accidentially get button id@@
        tabActiveKey: 3         //go to 3rd tab
    }
}

export function handleSelectTabInAction(key){
    return{
        type: "homeTabChange",
        key: key
    }
}

// Meet our first thunk action creator! / middleware function?_?
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))
export function fetchPosts() {
  return function (dispatch) {
    return fetch(`./scripts/json/books.json`)
      .then(response => response.json())
      .then(data =>dispatch(getBook(data)))
  }
}

export function closeConnectionInAction(){
    return {type: 'closeConnection'};
}