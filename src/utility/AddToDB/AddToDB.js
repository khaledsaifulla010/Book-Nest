import { toast } from "react-toastify";


const getStoredReadList = () => {
  const storedReadListString = localStorage.getItem("read-list");

  if (storedReadListString) {
    const storedList = JSON.parse(storedReadListString);
    return storedList;
  } else {
    return [];
  }
};
const getStoredWishList = () => {
  const storedWishListString = localStorage.getItem("wish-list");

  if (storedWishListString) {
    const storedWishList = JSON.parse(storedWishListString);
    return storedWishList;
  } else {
    return [];
  }
};

const addToReadList = (id) => {
  const storedList = getStoredReadList();

  if (storedList.includes(id)) {
    toast.error("Already Added This Book!")
  } else {
    
    storedList.push(id);
    const storedListString = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListString);
    
  }
};
const addToWishList = (id) => {
  const storedWishList = getStoredWishList();

  if (storedWishList.includes(id)) {
    toast.error("Already Added This Book!");
  } else {
    storedWishList.push(id);
    const storedWishListString = JSON.stringify(storedWishList);
    localStorage.setItem("wish-list", storedWishListString);
  }
};

export {addToReadList, addToWishList, getStoredReadList, getStoredWishList}
