import React from "react";
import loginSvg from "../../assets/addtask.svg";
import Image from "next/image";

export const metadata = {
  title: "All Tasks : Work Watcher",
};

const ShowTasks = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="backdrop-blur-lg bg-white/10 shadow-xl border border-white/20 rounded-3xl p-8 w-full max-w-2xl transition-all">
        <h1 className="text-4xl font-semibold text-center mb-6">Add Your Daily Task</h1>

        <div className="flex justify-center mb-6">
          <Image src={loginSvg} alt="Add Task" width={150} height={150} />
        </div>

        <form action="#!">
          {/* Task Title */}
          <div className="mb-5">
            <label htmlFor="task_title" className="text-sm font-medium mb-2 block">
              Title
            </label>
            <input
              type="text"
              id="task_title"
              className="w-full p-3 rounded-xl bg-white/10 text-white border border-white/20 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="Enter your task title"
            />
          </div>

          {/* Task Content */}
          <div className="mb-5">
            <label htmlFor="task_content" className="text-sm font-medium mb-2 block">
              Content
            </label>
            <textarea
              id="task_content"
              rows={5}
              className="w-full p-3 rounded-xl bg-white/10 text-white border border-white/20 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="Describe your task..."
            ></textarea>
          </div>

          {/* Task Status */}
          <div className="mb-5">
            <label htmlFor="task_status" className="text-sm font-medium mb-2 block">
              Task Status
            </label>
            <select
  id="task_status"
  className="w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none placeholder-white font-medium"
>
  <option disabled selected value="" className="bg-gray-900 text-gray-400">
    -- Select Status --
  </option>
  <option value="pending" className="text-white">Pending</option>
  <option value="completed" className="text-white">Completed</option>
</select>

          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-700 transition-colors text-white py-2 px-6 rounded-xl shadow-md"
            >
              Add Task
            </button>
            <button
              type="reset"
              className="bg-red-500 hover:bg-red-700 transition-colors text-white py-2 px-6 rounded-xl shadow-md"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShowTasks;
