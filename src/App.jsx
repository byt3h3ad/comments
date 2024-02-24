import { useState } from "react";
import useTree from "./hooks/tree";
import { Comment } from "./components/Comment";

const commentDB = {
  id: 1,
  // text: "This is a comment",
  // items: [{
  //   id: 98490384983493,
  //   text: "This is a comment 2",
  //   items: [{
  //     id: 98490384983494,
  //     text: "This is a reply",
  //     items: [{
  //       id: 98490384983495,
  //       text: "This is a reply to the reply",
  //       items: [],
  //     }],
  //   }]
  // }]
  items: [],
};

const App = () => {
  const [data, setData] = useState(commentDB);
  const { insert, del } = useTree();

  const handleInsert = (id, text) => {
    const temp = insert(data, id, text);
    setData(temp);
  };
  const handleDelete = (id) => {
    const temp = del(data, id);
    const t = { ...temp };
    setData(t);
  };
  return (
    <>
      <Comment
        handleInsert={handleInsert}
        handleDelete={handleDelete}
        data={data}
      />
    </>
  );
};

export default App;
