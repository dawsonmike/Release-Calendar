# Release-Calendar source code.

Installation

After cloning the repository in workspace directory. Please run following command through terminal in the Release-Calendar directory.

npm install
Dependencies

Release-Calendar Tool has the following package dependencies:

node_modules/
├── body-parser
├── cfenv
├── chai
├── cookie-parser
├── debug
├── express
├── jade
├── mocha
├── moment
├── morgan
├── serve-favicon
├── soap
├── supertest
└── xml2js
Folder structure

The Release-Calendar Tool runs on the Express Node.js web application framework.

├── bin
├── config
├── controllers
├── helpers
├── models
│   ├── header
│   ├── policylogs
│   └── tiles
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── test
│   ├── controllers
│   ├── integration
│   ├── models
│   └── views
└── views
The top level folders are populated with following types of file: bin - Express startup scrips

config - defines application configuration

controllers – defines application routes and their logic

helpers – code and functionality to be shared by different parts of the application

models – represents data, implements business logic and handles storage

public – contains all static files like images, styles and javascript

views – provides templates which are rendered and served by application routes

tests – test scripts for all parts of the application

File naming

Application files are named in lowercase with following convention

controllers\myroute.js - application route which is mapped within app.js

models\mymodel.js - model component

views\myview.jade - jade file for rendering to browser

Test files have a more complex naming convention which indicates a) the component under test; b) the objective of the test (optional). To avoid any conflict with naming, the full path of the test will uniquely identify the test.

component_objective_test.js - test script for a given component.

Examples:

controllers\index.js - main route which invokes model(s) to generate object(s) to serve for rendering

helpers\soapprocessor.js - handles soap requests to external services

models\header\header.js - creates JSON object representing header

views\index.jade - jade template for rendering billing tab

tests\integration\alliancesvc_test.js - test to confirm connection to Alliance service

tests\model\header\header_structure_test.js - test of the structure of header object

tests\model\header\header_concrete_test.js - test of concrete values returned in header object

tests\controllers\index_test.js - test on the expected response and html structure of application routes.

tests\views\index_test.js - test on the content rendered to screen.
