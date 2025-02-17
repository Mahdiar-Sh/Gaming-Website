import React, { useState } from "react";
import ViewAll from "../../helper/viewAll.jsx";
import BlogPostBox from "./blogPostBox.jsx";
export default function BlogPost() {
  const [boxBlogPost] = useState([
    {
      id: 1,
      size: "lg:!col-span-2 row-span-2",
      addres: "img/Blog Post Big FC 25.png",
      text: "FC25 Prepares for October 2024 Release with Enhanced Realism",
      jener: "Sports",
      year: "24 September",
    },
    {
      id: 2,
      size: "lg:!col-span-1 row-span-1",
      addres: "img/Blog Post Small(1).png",
      text: "FC25 Prepares for October 2024 Release with Enhanced Realism",
      jener: "Sports",
      year: "Sep 21",
    },
    {
      id: 3,
      size: "lg:!col-span-1 row-span-1",
      addres: "img/Blog Post Small(2).png",
      text: "The Witcher 4 Expected to Bring Back Fan-Favorite Characters",
      jener: "RPG",
      year: "Sep 20",
    },
    {
      id: 4,
      size: "lg:!col-span-1 row-span-1",
      addres: "img/Blog Post Small(3).png",
      text: "Marvel’s Wolverine Set for an Epic 2025 Launch on PS5",
      jener: "Action",
      year: "Sep 19",
    },
    {
      id: 5,
      size: "lg:!col-span-1 row-span-1",
      addres: "img/Blog Post Small(4).png",
      text: "Star Wars Outlaws Combines Open-World Action and Storytelling",
      jener: "Action",
      year: "Sep 18",
    },
  ]);
  return (
    <div className="mx-3 mt-16">
      <ViewAll text={"Blog Post"}></ViewAll>
      <div className="lg:!grid mt-5 lg:!grid-cols-4 lg:!grid-rows-2 lg:!space-y-0 space-y-3 justify-center lg:!gap-3 items-center">
        {boxBlogPost.map((x) => (
          <BlogPostBox key={x.id} {...x}></BlogPostBox>
        ))}
      </div>
    </div>
  );
}
