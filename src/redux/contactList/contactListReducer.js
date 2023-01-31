import { CONTACT_LIST, SELECT_USER } from "./contactListType";

const initialState = {
  contactList: [
    {
      user_id: 1,
      name: "test1",
      last_message: "test last message",
      date: "26/01/2023",
      image: "https://reqres.in/img/faces/1-image.jpg",
      type: "Trainer",
    },
    {
      user_id: 2,
      name: "test2",
      last_message: "test last message",
      date: "26/01/2023",
      image: "https://reqres.in/img/faces/2-image.jpg",
      type: "Trainer",
    },
    {
      user_id: 3,
      name: "test3",
      last_message: "test last message",
      date: "26/01/2023",
      image: "https://reqres.in/img/faces/3-image.jpg",
      type: "Trainer",
    },
    {
      user_id: 4,
      name: "test4",
      last_message: "test last message",
      date: "26/01/2023",
      image: "https://reqres.in/img/faces/4-image.jpg",
      type: "Trainer",
    },
  ],
  userSelect: [{
    user_id: 1,
    name: "test1",
    last_message: "test last message",
    date: "26/01/2023",
    image: "https://reqres.in/img/faces/1-image.jpg",
    type: "Trainer",
  },]
};

const contactListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTACT_LIST:
      return {
        ...state,
      };
    case SELECT_USER:
      return {
        ...state,
        userSelect: state.contactList.filter(
          (user) => user.user_id === action.payload
        ),
      };
    default:
      return state;
  }
};

export default contactListReducer;
