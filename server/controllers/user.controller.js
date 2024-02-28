import express from 'express';

const test = (req, res) => { 
   res.json({message: 'Hello world from user api'})
}

export default test;