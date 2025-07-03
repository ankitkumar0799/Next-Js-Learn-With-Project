import React from "react";
export const metadata={
    title:"All Tasks : work watcher"
}
const ShowTasks = () => {
  return (
    <div className="grid grid-cols-12 justify-center p-10
    ">
      <div className=" col-span-6 col-start-4 p-5">
        <h1>Add Your Daily Tasks Here!!</h1>
        <form action="#!">
            <div className="mt-4 ">
                <label className="text-sm font-medium block">Title</label>
                <input type="text" className="w-full p-3 rounded-2xl bg-gray-500 focus:ring-red-700" id="show_tasks"></input>

            </div>
        </form>
      </div>
    </div>
  );
};

export default ShowTasks;
