import React from 'react';
import { BiUser } from 'react-icons/bi';
import { GrNotification } from 'react-icons/gr';
import profile from '../../img/samim.png';
function ContentRight() {
  return (
    <section className=" w-96 h-24   overflow-hidden px-8">
      <div className=" pt-12 flex justify-end space-x-9 items-center">
        <GrNotification size={20} />
        <BiUser size={20} />
        <img src={profile} alt="prfile" className="h-9 w-9 object-cover rounded-full" />
      </div>
    </section>
  );
}

export default ContentRight;
