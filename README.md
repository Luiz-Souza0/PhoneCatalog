# About the project


The project consists of a mobile phone catalog, where the user can Create, View, Update, and Delete mobile phone data.

The project layout followed the prototype shown below:

<a href="https://drive.google.com/file/d/1H6fZ2HiZzBQNrzp4TrdD4vh69i5e3-FC/view?usp=sharing"> Prototype PDF </a>

The Frontend was made with javascript/react
The Backend was made with node.js/express using a non-relational database (`MongoDB ATLAS`)

<h2> It is a requirement to run the project: </h2>

* o [Node LTS] {`https://nodejs.org/`} 
* o [Mongodb ATLAS] {`https://account.mongodb.com/`}

# How to run it on my machine?

## You need replace the connection URL

`mongoose.connect('mongodb+srv://user:<password>@cluster0.z9e6l1j.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });`


```ini

- Clone the project with `git clone https://github.com/alura/techguide.git`

```

## To run the project

<h3> In the terminal </h3>

```ini

- Run `npm install` to download the dependecies
- Run `npm start` to start the Frontend

```

<h3> In another terminal </h3>

```ini

- Enter the `backend` folder
- Run `node .\Server.js` to start the Backend
- Ready 🎉

```

### Project Structure

- `./src/Pages`: This is where all the project pages are listed.
- `./src/components`: These are the fundamental slices of the interface, such as the Cellphone components.
- `./src/api`: This is where the axios component is located to facilitate the sending and receiving of data.

    <h4>All the used stylesheets are in separate Style.css files within the respective folders where the files are located</h4>


### How can I locate myself in the project?

"The files located in `./src` are part of the Frontend content.

- All visual content, such as components and pages, is located in the Frontend.

The files located in `./backend` are part of the Backend content.

- All content related to database connection, routes, and schemas is located in the Backend."