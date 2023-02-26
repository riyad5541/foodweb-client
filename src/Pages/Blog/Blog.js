import React from 'react';

const Blog = () => {
    return (
        <div>
      <h2 className="text-center text-4xl font-bold my-8">
        Welcome To My Blog!!!
      </h2>
      <div className="grid mb-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-4/5 mx-auto">
        <div className="card bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">
              Ques : Difference between SQL and NoSQL?
            </h2>
            <p>
              Answer : SQL is the programming language used to interface with
              relational databases. (Relational databases model data as records
              in rows and tables with logical links between them). NoSQL is a
              class of DBMs that are non-relational and generally do not use
              SQL.
              <br />
              There are five practical differences between SQL and NoSQL:
              <br />
              <p>1.Language</p>
              <p>2.Scalability</p>
              <p>3.Structure</p>
              <p>4.Properties</p>
              <p>5.Support and communities</p>
            </p>
          </div>
        </div>
        <div className="card bg-success text-primary-content">
          <div className="card-body">
            <h2 className="card-title">
              Ques : What is JWT, and how does it work?
            </h2>
            <p>
              Answer : JWT, or JSON Web Token, is an open standard used to share
              security information between two parties — a client and a server.
              <br />
              JWT differ from other web tokens in that they contain a set of
              claims. Claims are used to transmit information between two
              parties. What these claims are depends on the use case at hand.
              For example, a claim may assert who issued the token, how long it
              is valid for, or what permissions the client has been granted. A
              JWT is a string made up of three parts, separated by dots (.), and
              serialized using base64. In the most common serialization format,
              compact serialization, the JWT looks something like this:
              xxxxx.yyyyy.zzzzz.
            </p>
          </div>
        </div>
        <div className="card bg-warning text-primary-content">
          <div className="card-body">
            <h2 className="card-title">
              Ques : What is the difference between javascript and NodeJS?
            </h2>
            <p>
              Answer : 1. JavaScript is a client-side scripting language that is
              lightweight, cross-platform, and interpreted. Both Java and HTML
              include it. Node.js, on the other hand, is a V8-based server-side
              programming language.
              <br />
              <br />
              2. JavaScript is a simple programming language that can be used
              with any browser that has the JavaScript Engine installed.
              Node.js, on the other hand, is an interpreter or execution
              environment for the JavaScript programming language.
              <br />
              <br />
              3. Any engine may run JavaScript. As a result, writing JavaScript
              is incredibly easy, and any working environment is similar to a
              complete browser. Node.js, on the other hand, only enables the V8
              engine. Written JavaScript code, on the other hand, can run in any
              context, regardless of whether the V8 engine is supported.
            </p>
          </div>
        </div>
        <div className="card bg-error text-primary-content">
          <div className="card-body">
            <h2 className="card-title">
              Ques : How does NodeJS handle multiple requests at the same time?
            </h2>
            <p>
              Answer : NodeJS receives multiple client requests and places them
              into EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue.
              <br />
              <br />
              If NodeJS can process the request without I/O blocking then the
              event loop would itself process the request and sends the response
              back to the client by itself. But, it is possible to process
              multiple requests parallelly using the NodeJS cluster module or
              worker_threads module.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Blog;