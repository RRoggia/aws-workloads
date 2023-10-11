export const helloFromLambdaHandler = async () => {   
    const message = 'Hello from Queue!';

    console.info(`${message}`);
    
    return message;
}
