const actionTypes = Object.freeze({
  //app
  APP_START_UP_COMPLETE: "APP_START_UP_COMPLETE",
  SET_CONTENT_OF_CONFIRM_MODAL: "SET_CONTENT_OF_CONFIRM_MODAL",
  CHANGE_LANGUAGE: "CHANGE_LANGUAGE",

  //user
  ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
  USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
  USER_LOGIN_FAIL: "USER_LOGIN_FAIL",
  PROCESS_LOGOUT: "PROCESS_LOGOUT",

  USER_REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
  USER_REGISTER_FAILED: 'USER_REGISTER_FAILED',

  GET_USER_IMAGE_SUCCESS: 'GET_USER_IMAGE_SUCCESS',
  GET_USER_IMAGE_FAILED: 'GET_USER_IMAGE_SUCCESS',

  FETCH_ROLE_START: 'FETCH_ROLE_START',
  FETCH_ROLE_SUCCESS: 'FETCH_ROLE_SUCCESS',
  FETCH_ROLE_FAILED: 'FETCH_ROLE_FAILED',

  //admin
  CREAT_NEW_ACCOUNT_SUCCESS: 'CREAT_NEW_ACCOUNT_SUCCESS',
  CREAT_NEW_ACCOUNT_FAILED: 'CREAT_NEW_ACCOUNT_FAILED',

  GET_ALL_ACCOUNT_SUCCESS: 'GET_ALL_ACCOUNT_SUCCESS',
  GET_ALL_ACCOUNT_FAILED: 'GET_ALL_ACCOUNT_FAILED',

  DELETE_ACCOUNT_SUCCESS: 'DELETE_ACCOUNT_SUCCESS',
  DELETE_ACCOUNT_FAILED: 'DELETE_ACCOUNT_SUCCESS',

  EDIT_ACCOUNT_SUCCESS: 'EDIT_ACCOUNT_SUCCESS',
  EDIT_ACCOUNT_FAILED: 'EDIT_ACCOUNT_FAILED',

  //manager

  //book
  CREATE_NEW_BOOK_SUCCESS: 'CREATE_NEW_BOOK_SUCCESS',
  CREATE_NEW_BOOK_FAILED: 'CREATE_NEW_BOOK_FAILED',
  
  GET_BOOK_SUCCESS: 'GET_BOOK_SUCCESS',
  GET_BOOK_FAILED: 'GET_BOOK_FAILED',
  
  DELETE_BOOK_SUCCESS: 'DELETE_BOOK_SUCCESS',
  DELETE_BOOK_FAILED: 'DELETE_BOOK_SUCCESS',

  EDIT_BOOK_SUCCESS: 'EDIT_BOOK_SUCCESS',
  EDIT_BOOK_FAILED: 'EDIT_BOOK_FAILED',

  //author
  CREATE_AUTHOR_SUCCESS: 'CREATE_AUTHOR_SUCCESS',
  CREATE_AUTHOR_FAILED: 'CREATE_AUTHOR_FAILED',

  GET_AUTHOR_SUCCESS: 'GET_AUTHOR_SUCCESS',
  GET_AUTHOR_FAILED: 'GET_AUTHOR_FAILED',
  
  

  DELETE_AUTHOR_SUCCESS: 'DELETE_AUTHOR_SUCCESS',
  DELETE_AUTHOR_FAILED: 'DELETE_AUTHOR_SUCCESS',

  EDIT_AUTHOR_SUCCESS: 'EDIT_AUTHOR_SUCCESS',
  EDIT_AUTHOR_FAILED: 'EDIT_AUTHOR_FAILED',

  //publisher
  CREATE_PUBLISHER_SUCCESS: 'CREATE_PUBLISHER_SUCCESS',
  CREATE_PUBLISHER_FAILED: 'CREATE_PUBLISHER_FAILED',

  GET_PUBLISHER_SUCCESS: 'GET_PUBLISHER_SUCCESS',
  GET_PUBLISHER_FAILED: 'GET_PUBLISHER_FAILED',

  DELETE_PUBLISHER_SUCCESS: 'DELETE_PUBLISHER_SUCCESS',
  DELETE_PUBLISHER_FAILED: 'DELETE_PUBLISHER_SUCCESS',

  EDIT_PUBLISHER_SUCCESS: 'EDIT_PUBLISHER_SUCCESS',
  EDIT_PUBLISHER_FAILED: 'EDIT_PUBLISHER_FAILED',
  
  //category
  CREATE_CATEGORY_SUCCESS: 'CREATE_CATEGORY_SUCCESS',
  CREATE_CATEGORY_FAILED: 'CREATE_CATEGORY_FAILED',

  GET_CATEGORY_SUCCESS: 'GET_CATEGORY_SUCCESS',
  GET_CATEGORY_FAILED: 'GET_CATEGORY_FAILED',

  DELETE_CATEGORY_SUCCESS: 'DELETE_CATEGORY_SUCCESS',
  DELETE_CATEGORY_FAILED: 'DELETE_CATEGORY_SUCCESS',

  EDIT_CATEGORY_SUCCESS: 'EDIT_CATEGORY_SUCCESS',
  EDIT_CATEGORY_FAILED: 'EDIT_CATEGORY_FAILED',
 
  //type
  CREATE_TYPE_SUCCESS: 'CREATE_TYPE_SUCCESS',
  CREATE_TYPE_FAILED: 'CREATE_TYPE_FAILED',

  GET_TYPE_SUCCESS: 'GET_TYPE_SUCCESS',
  GET_TYPE_FAILED: 'GET_TYPE_FAILED',

  DELETE_TYPE_SUCCESS: 'DELETE_TYPE_SUCCESS',
  DELETE_TYPE_FAILED: 'DELETE_TYPE_SUCCESS',

  EDIT_TYPE_SUCCESS: 'EDIT_TYPE_SUCCESS',
  EDIT_TYPE_FAILED: 'EDIT_TYPE_FAILED',

  //get by name
  GET_AUTHOR_BY_NAME_SUCCESS: 'GET_AUTHOR_BY_NAME_SUCCESS',
  GET_AUTHOR_BY_NAME_FAILED: 'GET_AUTHOR_BY_NAME_FAILED',

  GET_PUBLISHER_BY_NAME_SUCCESS: 'GET_PUBLISHER_BY_NAME_SUCCESS',
  GET_PUBLISHER_BY_NAME_FAILED: 'GET_PUBLISHER_BY_NAME_FAILED',

  GET_CATEGORY_BY_NAME_SUCCESS: 'GET_CATEGORY_BY_NAME_SUCCESS',
  GET_CATEGORY_BY_NAME_FAILED: 'GET_CATEGORY_BY_NAME_FAILED',

  GET_TYPE_BY_NAME_SUCCESS: 'GET_TYPE_BY_NAME_SUCCESS',
  GET_TYPE_BY_NAME_FAILED: 'GET_TYPE_BY_NAME_FAILED',

});

export default actionTypes;
