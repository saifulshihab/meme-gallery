export const getArr = (arr) => {
  const a = withFormatedDate.reduce((accum, val) => {
    const dupeIndex = accum?.findIndex(
      (arrayItem) => arrayItem.createdAt === val.createdAt
    );

    if (dupeIndex === -1) {
      // Not found, so initialize.
      accum.push({
        ...val,
        qty: 1,
      });
    } else {
      // Found, so increment counter.
      accum[dupeIndex].qty++;
    }
    return accum;
  });

  return a;
};
