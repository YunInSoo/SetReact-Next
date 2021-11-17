import React, { useCallback, useEffect } from "react";

const BlockContents = (props: any) => {
  const { id, contents } = props.data;
  const { dispatch } = props;

  const clickEvent = useCallback(
    (e) => {
      console.log(id);
      dispatch({ type: "DELETE_LIST_ITEM", data: id });
    },
    [props]
  );
  useEffect(() => {
    console.log(contents);
  }, [contents]);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "10px" }}>{contents}</div>
      <button onClick={clickEvent}>X</button>
    </div>
  );
};
export default BlockContents;
