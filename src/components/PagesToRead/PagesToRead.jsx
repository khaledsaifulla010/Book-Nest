import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { getStoredReadList } from "../../utility/AddToDB/AddToDB";

const PagesToRead = () => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const [readList, setReadList] = useState([]);

  const allBooks = useLoaderData();
  // console.log(allBooks);

  useEffect(() => {
    const storedReadList = getStoredReadList();

    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    // console.log(storedReadList);

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    // console.log(readBookList);
    setReadList(readBookList);
  }, []);

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="mt-24 ">
      <BarChart
        width={1400}
        height={400}
        data={readList}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        
        <Bar
          dataKey="totalPages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {readList.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
        
      </BarChart>
    </div>
  );
};

export default PagesToRead;
