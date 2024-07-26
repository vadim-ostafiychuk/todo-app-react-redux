import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTerm } from "../redux/ations";
import { BsSearch } from "react-icons/bs";
import FilterButton from "./FilterButtom";
import TodoList from "./TodoList";

const Todo = () => {
  const [newTodoText, setNewTodoText] = React.useState("");
  const [searchTerm, setSerchTerm] = React.useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };
  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
    }
  };

  const handleSearchChange = (value) => {
    setSerchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="max-w-[600px] mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2x1 font-bold text-center uppercase">
        PERSONAL TODO APP
      </h2>

      <div className="flex items-center mb-4">
        <input
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          type="text"
          name="addTodoInput"
          id="addTodoInput"
          placeholder="Add Todo"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleAddTodoClick}
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          <AiOutlinePlus />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <FilterButton />
        <div className="flex items-center mb-4 ">
          <input
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            type="text"
            name="searchInput"
            id="searchInput"
            placeholder="Search"
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleAddTodoClick}
            className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
            <BsSearch />
          </button>
        </div>
      </div>

      <TodoList></TodoList>
    </div>
  );
};

export default Todo;
