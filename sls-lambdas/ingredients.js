'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

// The document client affords developers the use of native JavaScript
// types instead of AttributeValues to simplify the JavaScript development
// experience with Amazon DynamoDB.
// - AWS Documentation
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = async event => {
  
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
  console.log('> data from User event: ', data);

  if (typeof data.name !== 'string' || typeof data.supermarket !== 'string') {
    console.error('Validation Failed');
    throw new Error('Couldn\'t create an item.');
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE_INGREDIENTS,
    Item: {
      id: uuid.v1(),
      name: data.name,
      supermarket: data.supermarket,
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };

  let putItem = new Promise((resolve, reject) => {
    dynamoDb.put(params, function(err, data) {
        if (err) {
          console.log("> putItem Error", err);
          reject(err);
        } else {
          console.log("> putItem Success"); // data is {}
          resolve();
        }
      }); 
  });

  await putItem;
  
  const apiResponse = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body: JSON.stringify(params.Item),
  };
  return apiResponse;

}

module.exports.list = async event => {

  const params = {
    TableName: process.env.DYNAMODB_TABLE_INGREDIENTS,
  };

  let listItems = new Promise((resolve, reject) => {
    dynamoDb.scan(params, function(err, result) {
        if (err) {
          console.log("> SELECT / List Error", err);
          reject(err);
        } else {
          console.log("> SELECT / List Success - result:", result);
          resolve(result);
        }
      }); 
  });

  const queryResult = await listItems;
  
  const apiResponse = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body: JSON.stringify(queryResult.Items)
  };
  return apiResponse;

}
