import React from 'react';
import { BiSearch, BiCreditCard } from 'react-icons/bi';
function ContentLeft() {
  return (
    <section className="px-14 flex-1 pt-14">
      <div className="border border-gray-300 rounded-lg w-full flex items-center py-3 px-3">
        <BiSearch className="mr-2" />
        <input type="text" placeholder="Search" />
      </div>
      <h3 className="text-xl text-indigo-700 my-8">Welcome Admin to Login Panel</h3>
      <div>
        <div className="rounded-xl w-36 bg-green-600 bg-opacity-10 p-5">
          <BiCreditCard size={25} className="mb-6" />
          <span className="text-sm">
            Transfer via
            <br />
            card Number
          </span>
        </div>
      </div>
    </section>
  );
}

export default ContentLeft;
