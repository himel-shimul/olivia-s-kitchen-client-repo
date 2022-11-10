import React from 'react';
import useSetTitle from '../../Hooks/useSetTitle';

const Blog = () => {
    useSetTitle('Blog')
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-full">
      <h1 className="text-5xl font-bold">Difference between SQL and NoSQL</h1>
      <p className="py-6">
      There are three practical differences between SQL and NoSQL: <br /> <br />
      
      1. Language
SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.

The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute.

Though there are many dialects of SQL, all share a common syntax and almost-identical grammar. When querying relational databases, fluency in one language translates to proficiency in most others. On the other hand, there is very little consistency between NoSQL languages, as they concern a diverse set of unrelated technologies. Many NoSQL databases have a unique data manipulation language constrained by particular structures and capabilities.
<br />
2. Scalability
Most SQL databases can be scaled vertically, by increasing the processing power of existing hardware. NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes. These are useful generalizations, but it’s important to note:

SQL databases can be scaled horizontally as well, though sharding or partitioning logic is often the user’s onus and not well supported.
NoSQL technologies are diverse and while many rely on the master-slave architecture, options for scaling vertically also exist.
Savings made using more efficient data structures can overwhelm differences in scalability; most important is to understand the use case and plan accordingly.
<br />
3. Structure
SQL database schemata always represent relational, tabular data, with rules about consistency and integrity. They contain tables with columns (attributes) and rows (records), and keys have constrained logical relationships.

NoSQL databases need not stick to this format, but generally fit into one of four broad categories:

Column-oriented databases transpose row-oriented RDBMSs, allowing efficient storage of high-dimensional data and individual records with varying attributes.
Key-Value stores are dictionaries which access diverse objects with a key unique to each.
Document stores hold semi-structured data: objects which contain all of their own relevant information, and which can be completely different from each other.
Graph databases add the concept of relationships (direct links between objects) to documents, allowing rapid traversal of greatly connected data sets.</p>
    </div>
    
  </div>
</div>
<div className="hero px-16 bg-base-200">
  <div className="hero-content text-center">
  <div className="max-w-full">
    <h1 className="text-5xl font-bold">What is JWT, and how does it work?</h1>
      <p className="py-6">JWT or JSON Web Tokens are the new industry standards for securing APIs to and from the server.
      <br />There are many algorithms used to sign the JWT tokens, one of which is none algorithm. This algorithm can be used as a gateway for attackers to tamper with the security of application.

<br /> None algorithm is supported by JWT in the cases where the integrity of the token is already verified by other means. With this algorithm, a JWT token can be issued by the server without any signature.

The attacker can use this vulnerablity to their advantage by setting the algorithm to ’none,’ giving a null signature, and fooling the server to accept it as a valid token. However, many libraries have already been patched for this vulnerability and added security checks to reject the none algorithm.
      </p>
      
    </div>
  </div>
</div>
<div className="hero px-16 bg-base-200">
  <div className="hero-content text-center">
  <div className="max-w-full">
    <h1 className="text-5xl font-bold">What is the difference between javascript and NodeJS?</h1>
      <p className="py-6">At first it was hard for me to understand the differences because for me, they were the same thing. It was all javascript. But then, I started to understand what each one was used for. For this reason, I share it :)

☘ JavaScript is a language that runs inside web browsers as part of the documents loaded by the browser and is used as a client-side development language. It provides the behavior of the pages. Like HTML it provides the semantic structure and CSS the look and feel.

However, being an interpreted language, it needs an interpreter to run. V8 is Google Chrome's JS engine and 'node' is a front-end that can be used to run JavaScript scripts outside the browser. In other words:

☘ NodeJs is an open source, cross-platform environment that allows you to create server-side applications and tools using JavaScript.</p>
      
    </div>
  </div>
</div>
<div className="hero px-16 bg-base-200">
  <div className="hero-content text-center">
  <div className="max-w-full">
    <h1 className="text-5xl font-bold">How does NodeJS handle multiple requests at the same time?</h1>
      <p className="py-6">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 

If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;

