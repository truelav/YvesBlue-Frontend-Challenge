export const getCountOfPages = (totalCount, countPerPage) => {
  return Math.ceil(totalCount / countPerPage);
};

export const getPagesArray = (numOfPages) => {
  const result = [];
  for (let i = 1; i <= numOfPages; i++) {
    result.push(i);
  }
  return result;
};

export const pagesHash = {
  1: [0, 9],
  2: [10, 19],
  3: [20, 29],
  4: [30, 30],

  //((page - 1) * 10)); (page * 10 - 1)
};
