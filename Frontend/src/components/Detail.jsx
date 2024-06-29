import React, { useEffect, useState } from "react";
import styles from "./Detail.module.css"; // Import CSS module for styling
import axios from "axios"; // Import axios for making HTTP requests

const Detail = () => {
  const [items, setItems] = useState([]); // State to store items fetched from the server
  const [editingItem, setEditingItem] = useState(null); // State to store the item currently being edited
  const [addItem, setAddItem] = useState(false); // State to control the display of the add item form
  const [search, setSearch] = useState(""); // State to store the search query
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Subject: "",
    Message: "",
  }); // State to store form data for adding/editing items

  // Function to fetch data from the server
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/user");
      setItems(res.data.message); // Set the fetched items in the state
    } catch (error) {
      console.log(error); // Log any errors
    }
  };

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle deleting an item
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/user/${id}`);
      setItems(items.filter((item) => item._id !== id)); // Remove the deleted item from the state
    } catch (err) {
      console.log(err); // Log any errors
    }
    fetchData(); // Fetch the updated data
  };

  // Function to handle editing an item
  const handleEdit = (item) => {
    setEditingItem(item); // Set the item being edited
    setFormData(item); // Initialize form data with item data
  };

  // Function to handle changes in the form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update the form data state
  };

  // Function to handle updating an item
  const handleUpdate = async () => {
    try {
      const res = await axios.patch(
        `http://localhost:8000/user/${editingItem._id}`,
        formData
      );
      // Update items state with the updated item data
      setItems(
        items.map((item) => (item._id === editingItem._id ? res.data : item))
      );
      setEditingItem(null); // Reset editing state
    } catch (err) {
      console.log(err); // Log any errors
    }
    fetchData(); // Fetch the updated data
  };

  // Function to handle searching for items
  const handleSearch = async (e) => {
    e.preventDefault();
    if (search.trim() === "") return;
    try {
      const res = await axios.get(`http://localhost:8000/user?name=${search}`);
      setItems(res.data.message); // Set the search results in the state
      console.log(res); // Log the response
    } catch (err) {
      console.log(err); // Log any errors
    }
  };

  // Function to handle adding a new item
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/user", formData);
      console.log(res); // Log the response
      setAddItem(false); // Hide the add item form
    } catch (err) {
      console.log(err); // Log any errors
    }
    fetchData(); // Fetch the updated data
  };

  return (
    <div className={styles.box}>
      <div className={styles.nav}>
        <div className={styles.profile}>
          <span>
            <b>Admin Login</b>
            <br />
            Founder & CEO Help-Drive
          </span>
          <span className={styles.circle}>
            <i className="fa-solid fa-user"></i>
          </span>
          <span>
            <i className="fa-solid fa-angle-down arrow"></i>
          </span>
        </div>
      </div>
      <div className={styles.part2}>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
        <button className={styles.add} onClick={() => setAddItem(true)}>
          Add
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.Name}</td>
              <td>{item.Email}</td>
              <td>{item.Mobile}</td>
              <td>{item.Subject}</td>
              <td>{item.Message}</td>
              <td>
                <button onClick={() => handleEdit(item)}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => handleDelete(item._id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingItem && (
        <div className={styles.editForm}>
          <h2>Edit Item</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate();
            }}
          >
            <label>
              Name:
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
              />
            </label>
            <label>
              Mobile:
              <input
                type="text"
                name="Mobile"
                value={formData.Mobile}
                onChange={handleChange}
              />
            </label>
            <label>
              Subject:
              <input
                type="text"
                name="Subject"
                value={formData.Subject}
                onChange={handleChange}
              />
            </label>
            <label>
              Message:
              <textarea
                name="Message"
                value={formData.Message}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Update</button>
            <button type="button" onClick={() => setEditingItem(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}

      {addItem && (
        <div className={styles.editForm}>
          <h2>Add Item</h2>
          <form onSubmit={handleAdd}>
            <label>
              Name:
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
              />
            </label>
            <label>
              Mobile:
              <input
                type="text"
                name="Mobile"
                value={formData.Mobile}
                onChange={handleChange}
              />
            </label>
            <label>
              Subject:
              <input
                type="text"
                name="Subject"
                value={formData.Subject}
                onChange={handleChange}
              />
            </label>
            <label>
              Message:
              <textarea
                name="Message"
                value={formData.Message}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Add</button>
            <button type="button" onClick={() => setAddItem(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Detail;
