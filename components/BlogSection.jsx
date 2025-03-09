import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import blog from "../public/images/blog.png";
const blogs = [
  {
    id: 1,
    author: "Prabhash Mishra",
    date: "1 Jan 2023 - Today",
    title: "Small business & Startup",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Tax & Audit", "Management"],
    image: blog,
  },
  {
    id: 2,
    author: "Mahesh Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    tags: ["Tax", "Research", "Compliance"],
    image: blog,
  },
  {
    id: 3,
    author: "Rakhi Verma",
    date: "1 Jan 2023",
    title: "Growing Business Package",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    tags: ["Audit", "Money Back"],
    image: blog,
  },
  {
    id: 4,
    author: "Karan Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    tags: ["Money", "Management"],
    image: blog,
  },
  {
    id: 5,
    author: "Richa Singh",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "JavaScript Frameworks make development easy with extensive features and functionalities.",
    tags: ["Tax Return", "News", "Audit"],
    image: blog,
  },
  {
    id: 6,
    author: "Miss Nora",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "Starting a community doesn't need to be complicated, but how do you get started?",
    tags: ["Private Limited Company", "Customer Success"],
    image: blog,
  },
];
function BlogSection() {
  return (
    <div>
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h3 className="text-center text-orange-500 uppercase text-sm font-medium">
          Explore Our Blogs
        </h3>
        <h2 className="text-center text-3xl font-bold mt-2 mb-8">
          Accelerate Digital Transformation
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  {blog.author} • {blog.date}
                </p>
                <h3 className="text-lg font-semibold mt-2 flex justify-between items-center">
                  {blog.title}
                  <span className="text-blue-500">↗</span>
                </h3>
                <p className="text-gray-700 text-sm mt-1">{blog.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium bg-gray-200 text-gray-800 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Show more blogs →
          </Button>
        </div>
      </section>
    </div>
  );
}

export default BlogSection;
