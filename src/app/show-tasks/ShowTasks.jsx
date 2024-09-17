"use client";
import UserContext from "@/context/userContext";
import { deleteTask, getTasksOfUser } from "@/services/taskService";
import React, { useContext, useEffect, useState } from "react";
import Task from "./Task";
import { toast } from "react-toastify";

const ShowTasks = () => {
  const [tasks, setTasks] = useState([]);
  // const context = useContext(UserContext);
  // console.log(context , "context");
  const userId = localStorage.getItem("userId");
  console.log(userId);
  async function loadTasks(userId) {
    try {
      const taskss = await getTasksOfUser(userId);
      console.log(taskss , "tasks");
      setTasks(taskss.message);
      console.log(taskss);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (userId) {
      loadTasks(userId);
    }
  }, [userId]);

  async function deleteTaskParent(tasksId) {
    try {
      const result = await deleteTask(tasksId);
      console.log(result);
      const newTasks = tasks?.message.filter((item) => item._id != tasksId);
      setTasks(newTasks);
      toast.success("Your task is deleted ");
    } catch (error) {
      console.log(error);
      toast.error("Error in deleting task !!");
    }
  }

  return (
    <div className="grid grid-cols-12 mt-3">
      <div className="col-span-6 col-start-4">
        <h1 className="text-3xl mb-3 ">Your tasks ( {tasks?.message?.length} )</h1>

        {tasks?.message?.map((task) => (
          <Task
            task={task}
            key={task._id}
            deleteTaskParent={deleteTaskParent}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowTasks;