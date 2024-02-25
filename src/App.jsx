import { useState } from "react";
import useTree from "./hooks/useTree";
import { Comment } from "./components/Comment";

const commentDB = {
  id: 1708809675737,
  createdAt: new Date(1708809675737).toLocaleString(),
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
