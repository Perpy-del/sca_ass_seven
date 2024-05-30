# Bloggy App

Welcome to the Bloggy Codebase!

This is a simple blog code base. Please refer to the documentation for further information.

This repository contains the source code for the Bloggy. The server itself is implemented in node using express. Follow the instructions below to set up the codebase on your local machine.

### Here is the [API Documentation](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file?tab=readme-ov-file#api-documentation-1)

# Table of Contents

- ### [Prerequisites](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#prerequisites-1)

- ### [Installation](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#installation-1)

- ### [Configuration](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#configuration-1)

- ### [Directory Structure](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#directory-structure-1)

- ### [Usage](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#usage-1)

- ### [API Documentation](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#api-documentation-1)

  - [Post Routes](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#admins-routes)

    - [Get All Posts](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#get-methodget-all-posts-)

    - [Get A Post](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#get-methodget-a-post-postid)

    - [Create Post](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#post-methodcreate-a-post-)

    - [Update Post](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#put-methodupdate-a-post-postid)

    - [Delete Post](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#get-methodlogin-authenticationauthorization-adminsprotected)

- ### [Postman Documentation](https://github.com/sca_ass_seven#postman-documentation-1)

- ### [Troubleshooting](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#troubleshooting-1)

- ### [Project Status](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#project-status-1)

- ### [License](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#license-1)

- ### [Credits](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#credits-1)

## Prerequisites

**[Back to Table of Contents](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#table-of-contents)**

Before setting up the codebase, make sure you have the following prerequisites installed:

- Node.js (version 12 or above)
- MongoDB (version 4 or above)
- Git

## Installation

**[Back to Table of Contents](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#table-of-contents)**

1. Clone the repository using Git:
   ```bash
   git clone https://github.com/Perpy-del/sca_ass_seven.git
   ```
2. Change into the project directory:

```bash
   cd sca_ass_seven
```

3. Install the required dependencies:

```bash
   npm install
```

4. Seed the database using mongosh

```bash
   mongosh name_of_db < storage/seeder/index.js
```

4. Run the application

```bash
   npm start
```

## Configuration

**[Back to Table of Contents](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#table-of-contents)**

The codebase requires the following environment configurations:

1. Create a `.env` file in the root directory of the project.
2. Open the `.env` file and add the following configurations:

```bash
   PORT=your-port
   DB_CONNECTION=your_db_connection
   DB_HOST=your_db_host
   DB_PORT=your_db_port
   DB_DATABASE=your_db_database
```

You can also copy the variables from the `.env.example` file.

## Directory Structure

**[Back to Table of Contents](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#table-of-contents)**

The codebase follows the following directory structure:

```bash
bloggy/
└───app
    ├───controllers
    ├───errors
    ├───middlewares
    ├───model
    ├───routes
    ├───utils
    ├───services
    ├───utilities
└───config
└───storage
```

- `src/`:Contains the main source code files
- `tests/`:Contains the unit tests for the codebase.

## Usage

**[Back to Table of Contents](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#table-of-contents)**

To start the Loan_Prediction_App application on your local environment, run the following command:

npm start

Visit `http://localhost:PORT` in your web browser to access the application.

## API Documentation

**[Back to Table of Contents](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#table-of-contents)**

API Documentation for bloggy application

**Base URL**
Main URL
https://localhost:HOST

**NOTE**

- Client-Server data transfer (parameters as used in this documentation) should be via the standard JSON format

### ROUTES

#### GET Method(Get All Posts): /

**[Back to Table of Contents](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#table-of-contents)**

- EXAMPLE: Get All Posts - Successful

**_STATUS: 200 OK_**

```json
Request
curl --location 'https://localhost:HOST \

Response
(json)
{
    "data": [
        {
            "_id": "664e5ce9e484d1d246cdcdf6",
            "id": "01HXC10C9GN9RYBK4XBH6N0AGC",
            "title": "Et Magnis Dis Parturient Montes Nascetur Ridiculus Mus",
            "slug": "et-magnis-dis-parturient-montes-nascetur-ridiculus-mus",
            "author": "Gannon Ghione",
            "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum . Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, se accumsan eget, eleifend luctus, ultricies eu, nibh.",
            "is_featured": false,
            "created_at": "2023-07-04",
            "category": "Basic Industries",
            "thumbnail": "http://dummyimage.com/222x194.png/cc0000/ffffff"
        },
                {
            "_id": "664e5ce9e484d1d246cdcdf7",
            "id": "01HXC10C9TZ6DN4E9AC81A7VCJ",
            "title": "Neque Aenean Auctor Gravida Sem Praesent Id Massa",
            "slug": "neque-aenean-auctor-gravida-sem-praesent-id-massa",
            "author": "Fiorenze Yeliashev",
            "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
            "is_featured": false,
            "created_at": "2024-04-27",
            "category": "Consumer Services",
            "thumbnail": "http://dummyimage.com/127x178.png/ff4444/ffffff"
        },
        {
            "_id": "664e5ce9e484d1d246cdcdf8",
            "id": "01HXC10C9W2BHHS3R812TN66VP",
            "title": "In Hac Habitasse Platea Dictumst Etiam",
            "slug": "in-hac-habitasse-platea-dictumst-etiam",
            "author": "Natty Collingdon",
            "body": "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque  Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
            "is_featured": true,
            "created_at": "2023-10-21",
            "category": "Consumer Services",
            "thumbnail": "http://dummyimage.com/234x106.png/cc0000/ffffff"
        },
    ]
}
```

#### GET Method(Get A Post): /:postId

**[Back to Table of Contents](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#table-of-contents)**

Parameters: postId

- EXAMPLE: Get A Post - Successful

**_STATUS: 200 OK_**

```json
Request
curl --location 'https://localhost:HOST/01HXC10C9GN9RYBK4XBH6N0AGC' \

Response
(json)
{
    "data": {
        "_id": "664e5ce9e484d1d246cdcdf6",
        "id": "01HXC10C9GN9RYBK4XBH6N0AGC",
        "title": "Et Magnis Dis Parturient Montes Nascetur Ridiculus Mus",
        "slug": "et-magnis-dis-parturient-montes-nascetur-ridiculus-mus",
        "author": "Gannon Ghione",
        "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "is_featured": false,
        "created_at": "2023-07-04",
        "category": "Basic Industries",
        "thumbnail": "http://dummyimage.com/222x194.png/cc0000/ffffff"
    }
}
```

#### POST Method(Create A Post): /

**[Back to Table of Contents](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#table-of-contents)**

Parameters: title, author, body, is_featured(optional), category(optional)

- EXAMPLE: Create A Post - Successful

**_STATUS: 200 OK_**

```json
Request
curl --location 'https://localhost:HOST' \
--data-raw '{
    "title": "Brand New Post",
    "author": "Peppy Jones",
    "body": "We are checking htat thburicfei ibeifbure bfiebfejb iurbfiueibfe jfbiebfieb sjcbirbfjeww kwkbfiewbfjw fcjbwifiwebfojwjbfuw njsb cuowbcwosv sbcvuowusbvo csboucbwosb sojbcouwb sbjsbc sjcbowsb sbc oocb jksb lksl ojov wos bjk skjso kx ks k k os ljls ljsojv kj knns vksx js ls oj vs kjsk osj ljsjsx llx lws ljs ljs jlwswjv ljws vlkmlms lvjwvslm kvkv wleas lwjs vlms vls cvjws vmms vl sv"
}'

Response
(json)
{
    "data": {
        "acknowledged": true,
        "insertedId": "66582f6b550c4309d5edbf13"
    }
}
```

- EXAMPLE: Create A Post - when one or all of the parameters are missing
  **_STATUS: 422 Unprocessable Entity_**

```json
Request
curl --location 'https://nodebt-application.onrender.com/api/admins/login' \
--data-raw '{
    "title": "Brand New Post",
    "body": "We are checking htat thburicfei ibeifbure bfiebfejb iurbfiueibfe jfbiebfieb sjcbirbfjeww kwkbfiewbfjw fcjbwifiwebfojwjbfuw njsb cuowbcwosv sbcvuowusbvo csboucbwosb sojbcouwb sbjsbc sjcbowsb sbc oocb jksb lksl ojov wos bjk skjso kx ks k k os ljls ljsojv kj knns vksx js ls oj vs kjsk osj ljsjsx llx lws ljs ljs jlwswjv ljws vlkmlms lvjwvslm kvkv wleas lwjs vlms vls cvjws vmms vl sv"
}'

Response
(json)
{
    "data": {
        "error": {
            "title": "Validation error",
            "message": [
                {
                    "author": "The author field is required"
                }
            ]
        }
    }
}
```

#### PUT Method(Update A Post): /:postId

**[Back to Table of Contents](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#table-of-contents)**

Parameters: postId

- EXAMPLE: Update A Post - Successful

**_STATUS: 200 OK_**

```json
Request
curl --location 'https://localhost:HOST/01HZ47JF0H4HA1MKWX369RFG7V' \
--data-raw '{
    "title": "Updated the Brand New Post"
}'

Response
(json)
{
    "data": {
        "acknowledged": true,
        "modifiedCount": 1,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
    }
}
```

## Troubleshooting

**[Back to Table of Contents](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#table-of-contents)**

- If you encounter any issues during the setup process, please ensure that you have the latest versions of Node.js and MongoDB installed.
- If the application fails to start, make sure the MongoDB server is running and accessible.

## Project Status

**[Back to Table of Contents](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#table-of-contents)**

This app is currently developed and maintained by me. The project is primarily for personal use or demonstration purposes.

## License

**[Back to Table of Contents](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#table-of-contents)**

This codebase is released under the GNU General Public License(GPL). Please see the LICENSE.md file for more details.

## Credits

**[Back to Table of Contents](https://github.com/Perpy-del/sca_ass_seven/tree/main?tab=readme-ov-file#table-of-contents)**

The bloggy App codebase is being developed by:
- [Perpetual Meninwa](https://github.com/Perpy-del)
