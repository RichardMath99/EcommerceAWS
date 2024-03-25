import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";

export async function handler(event: APIGatewayProxyEvent,
    context: Context): Promise<APIGatewayProxyResult> {

    //identificador da minha lambda
    const LambdaRequestId = context.awsRequestId
    const apiRequestId = event.requestContext.requestId

    console.log(`API Gateway RequestId: ${apiRequestId} - Lambda RequestId: ${LambdaRequestId}`);
    
    const method = event.httpMethod
    if (event.resource === '/products') {
        if ( method === 'GET') {
            console.log('GET')

            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'GET Products - OK'
                })
            }
        }
    }

    return {
        statusCode: 400,
        body: JSON.stringify({
            message: "Bad request"
        })
    }
}