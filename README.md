# Acceptance test automation JS/TSC

## Usage

npm ci                  # installs the node modules
npm run lint            # runs the code linter
npm start               # starts the web server with a demo app
npm test                # executes report ./target/site/serenity

## Report 
## Fix Error target info
npx serenity-bdd update

## Usage sjs/REST
# API Reference

# model

import {} from '@serenity-js/rest';

DeleteRequest()
GetRequest()
HTTPRequest()
HeadRequest()


# install dependency as dev
The @serenity-js/rest module let's you interact with and test HTTP REST APIs.
Or npm install --save-dev mocha \ 
npm install chai 

Assert chai var assert = chai.assert;
assert.typeOf(foo, 'string');
assert.equal(foo, 'bar');
assert.lengthOf(foo, 3)


## Working with REST APIs using Serenity Screenplay JAVA

# Setting up your project

<dependency>
    <groupId>net.serenity-bdd</groupId>
    <artifactId>serenity-screenplay-rest</artifactId>
    <version>${serenity.version}</version>
    <scope>test</scope>
</dependency>


The CallAnApi ability allows the actor to perform the bundled Serenity REST interaction classes. This include:

    Get.resource()
    Post.to()
    Put.to()
    Delete.from()
    
    
## Postman

#  Collections Using Docker

if you want to go to another level with postman

* devops
Jenkins postman
* container
docker pull postman
docker run -t <image>/
docker run -p 

* Terminal
newman run <URL> varibles <Collections.json> or ...






