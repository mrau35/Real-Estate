import express from 'express';

const test = (req, res) => { 
   res.json({'message': 'Hello world from users api'})
}

export default test;