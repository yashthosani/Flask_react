exports.getData = () => {
  return fetch("http://127.0.0.1:5000/")
    .then((res) => {
      console.log(res);
     
      return res.json();
    })
    .catch((error) => {
      return { error: "Something went wrong" };
    });
};

exports.getTableData = () => {
  return fetch("http://127.0.0.1:5000/table")
    .then((res) => {
      console.log(res);
     
      return res.json();
    })
    .catch((error) => {
      return { error: "Something went wrong" };
    });
};
