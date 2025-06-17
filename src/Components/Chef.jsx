import React from "react";
 

const Chef = () => {
  return (
    <section className=" flex items-center justify-center px-4 py-12">
      <div className="bg-white shadow-xl rounded-2xl max-w-4xl w-full p-8 flex flex-col md:flex-row items-center gap-8">
        
        <img
          src="https://i.ibb.co/Z1d9n9f0/shutterstock-1518533924-min.jpg"
          alt="Chef Abir"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-orange-300"
        />

        <div>
          <h2 className="text-3xl font-bold text-orange-600 mb-2">
            Chef Abir Hasan Mahmud
          </h2>
          <p className="text-sm text-gray-500 mb-4">Home Cook | Food Lover | Recipe Creator</p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Abir Hasan Mahmud is a passionate home chef who believes that great food brings people together. From his family kitchen in Bangladesh, he began cooking with curiosity and love. Over time, he has explored traditional Bengali recipes, street food delights, and global flavors.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            His goal is simple: make delicious food accessible to all. Whether you’re a first-time cook or someone rediscovering the kitchen, Abir’s recipes are designed to inspire and excite.
          </p>

          <blockquote className="italic text-orange-500 border-l-4 border-orange-300 pl-4">
            “Cooking is not just about ingredients and recipes — it's about sharing stories, culture, and joy through every dish.”
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Chef;
