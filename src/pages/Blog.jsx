import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Blog = () => {
  return (
    <div className="font-nunito">
      <Navbar></Navbar>
      <h1 className="text-7xl text-center">this is blog-page</h1>
      <div className=" p-10 mx-auto ">
        <div className="mb-10">
          <div className="text-4xl font-bold mb-8">
            What is one way data binding?
          </div>
          <div className="text-lg">
            Ans: One-way data binding is a concept used in software development,
            particularly in the context of user interfaces and frameworks. It
            refers to a mechanism where data flows in a single direction: from
            the model (or source) to the view (or target). This means that any
            changes in the model are automatically reflected in the view, but
            changes in the view do not affect the model.
          </div>
        </div>
        <div className="mb-10">
          <div className="text-4xl font-bold mb-8">What is NPM in node js?</div>
          <div className="text-lg">
            Ans: npm, or Node Package Manager, is an essential tool in the
            Node.js ecosystem used for managing and sharing JavaScript code. It
            allows developers to easily install, update, and manage project
            dependencies, ensuring that the necessary libraries and tools are
            available for their applications. Additionally, npm provides an
            extensive online registry of open-source packages, enabling
            developers to access and share reusable code modules created by the
            global community. Through simple command-line operations, npm
            streamlines the development process, making it easier to integrate
            third-party libraries and maintain project consistency.
          </div>
        </div>
        <div className="">
          <div className="text-4xl font-bold mb-8">
             what is the different between Mongodb database vs mySQL database?
          </div>
          <div className="text-lg">
            Ans: MongoDB and MySQL are both widely used database management systems, but they cater to different needs and operate on distinct paradigms. MongoDB is a NoSQL database that stores data in a flexible, JSON-like format called BSON, allowing for dynamic schemas that can handle unstructured data and easily scale horizontally across distributed systems. This flexibility makes it ideal for applications requiring rapid development and dealing with varied data types. On the other hand, MySQL is a relational database management system (RDBMS) that uses structured query language (SQL) for defining and manipulating data, storing information in tables with fixed schemas and enforcing data integrity through relationships and constraints. This structured approach is beneficial for applications needing complex queries and transactional support. While MongoDB offers high performance and scalability for large datasets with its document-oriented model, MySQL provides robust ACID compliance and reliable data integrity, making it suitable for applications where data consistency and complex relationships are crucial.
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
