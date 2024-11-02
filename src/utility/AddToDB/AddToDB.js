

const getStoredReadList = () => {
  const storedReadListString = localStorage.getItem("read-list");

  if (storedReadListString) {
    const storedList = JSON.parse(storedReadListString);
    return storedList;
  } else {
    return [];
  }
};

const addToReadList = (id) => {
  const storedList = getStoredReadList();

  if (storedList.includes(id)) {
    console.log(id, "already exist");
  } else {
    storedList.push(id);
    const storedListString = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListString);
  }
};

export {addToReadList}
