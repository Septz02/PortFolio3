import { useState, useEffect } from "react";

export default function WorkList() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function onLoadData() {
    setLoading(true);
    let res = await fetch("/api/work");
    let data = await res.json();
    setData(data.data);
    setLoading(false);
  }

  const onDeleteItem = async (id) => {
    const request = {
      deleted_id:id
    }

    let res = await fetch(`/api/work`, {
      method: 'DELETE',
      body: JSON.stringify(request),
    })
    
    onLoadData()
  }

  // const onDeleteData = async (id) => {
  //   if (window.confirm("Are you sure you want to delete this item?")) {
  //     try {
  //       const response = await fetch(`/api/work/${id}`, {
  //         method: "DELETE",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ _id: id }), // Send the ID in the body
  //       });

  //       if (!response.ok) {
  //         throw new Error("Failed to delete the document");
  //       }

  //       const data = await response.json();
  //       console.log(data.message); // Handle success message
  //       // Optionally, refresh data or update UI
  //     } catch (error) {
  //       console.error("Error deleting data:", error);
  //       // Handle error (e.g., show a notification to the user)
  //     }
  //   }
  // };

  // const onDeleteData = async() {
  //   let res = await fetch
  // }

  useEffect(() => {
    onLoadData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">Loading...</span>
      </div>
    );
  }

  return (
    <>
      {/* <h1> List Of Work</h1> */}
      {/* <table className="table-auto">
        <thead>
          <tr>
            <th className="p-2 border-b border-blue-gray-100 bg-gray-100">
              #No
            </th>
            <th className="p-2 border-b border-blue-gray-100 bg-gray-100">
              Name
            </th>
            <th className="p-2 border-b border-blue-gray-100 bg-gray-100">
              Email
            </th>
            <th className="p-2 border-b border-blue-gray-100 bg-gray-100">
              Subject
            </th>
            <th className="p-2 border-b border-blue-gray-100 bg-gray-100">
              Message
            </th>
            <th className="p-2 border-b border-blue-gray-100 bg-gray-100">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.title}</td>
                <td>{item.employeeType}</td>
                <td>{item.companyName}</td>
                <td>{item.location}</td>
                <td>{item.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
      {/* <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border-b border-blue-gray-100 text-left">#No</th>
            <th className="p-2 border-b border-blue-gray-100 text-left">
              Name
            </th>
            <th className="p-2 border-b border-blue-gray-100 text-left">
              Employee Type
            </th>
            <th className="p-2 border-b border-blue-gray-100 text-left">
              Company Name
            </th>
            <th className="p-2 border-b border-blue-gray-100 text-left">
              Location
            </th>
            <th className="p-2 border-b border-blue-gray-100 text-left">
              Start Date
            </th>
            <th className="p-2 border-b border-blue-gray-100 text-left">
              End Date
            </th>
            <th className="p-2 border-b border-blue-gray-100 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="p-2 border-b border-gray-200">{idx + 1}</td>
              <td className="p-2 border-b border-gray-200">{item.title}</td>
              <td className="p-2 border-b border-gray-200">{item.employeeType}</td>
              <td className="p-2 border-b border-gray-200">{item.companyName}</td>
              <td className="p-2 border-b border-gray-200">{item.location}</td>
              <td className="p-2 border-b border-gray-200">{item.start_date}</td>
              <td className="p-2 border-b border-gray-200">{item.end_date}</td>
              <td className="p-2 border-b border-gray-200">
                <button className="text-blue-600 hover:underline">Edit</button>
                <button className="text-red-600 hover:underline ml-2">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4 border-b border-gray-300 text-center text-gray-600">
              #No
            </th>
            <th className="p-4 border-b border-gray-300 text-center text-gray-600">
              Name
            </th>
            <th className="p-4 border-b border-gray-300 text-center text-gray-600">
              Employee Type
            </th>
            <th className="p-4 border-b border-gray-300 text-center text-gray-600">
              Company Name
            </th>
            <th className="p-4 border-b border-gray-300 text-center text-gray-600">
              Location
            </th>
            <th className="p-4 border-b border-gray-300 text-center text-gray-600">
              Start Date
            </th>
            <th className="p-4 border-b border-gray-300 text-center text-gray-600">
              End Date
            </th>
            <th className="p-4 border-b border-gray-300 text-center text-gray-600">
              Action
            </th>
          </tr> 
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr
              key={idx}
              className={`hover:bg-gray-100 ${
                idx % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <td className="p-4 border-b border-gray-300 text-gray-800">
                {idx + 1}
              </td>
              <td className="p-4 border-b border-gray-300 text-gray-800">
                {item.title}
              </td>
              <td className="p-4 border-b border-gray-300 text-gray-800">
                {item.employeeType}
              </td>
              <td className="p-4 border-b border-gray-300 text-gray-800">
                {item.companyName}
              </td>
              <td className="p-4 border-b border-gray-300 text-gray-800">
                {item.location}
              </td>
              <td className="p-4 border-b border-gray-300 text-gray-800">
                {item.start_date}
              </td>
              <td className="p-4 border-b border-gray-300 text-gray-800">
                {item.end_date}
              </td>
              {/* <td className="p-4 border-b border-gray-300">
                <button className="text-blue-600 hover:bg-blue-100 p-2 rounded">
                  Edit
                </button>
                <button className="text-red-600 hover:bg-red-100 p-2 rounded ml-2">
                  Delete
                </button>
              </td> */}
              <td className="p-4 border-b border-gray-300 text-center">
                <div className="flex justify-center space-x-2">
                  <button className="text-blue-600 hover:bg-blue-100 p-2 rounded">
                    Edit
                  </button>
                  <button
                    onClick={() => onDeleteItem(item._id)}
                    className="text-red-600 hover:bg-red-100 p-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
