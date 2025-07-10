export const handleDuplicateError=(error)=>{
const match =error.message.match(/"([^"]*)"/)
const extractedMessage = match && match[1];
return {
     statusCode,
    message: 'Invalid ID',
}
}