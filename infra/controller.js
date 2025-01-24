import { InternalServerError, MethodNotAllwedError } from "infra/errors";

function onNoMatchHandler(request, response) {
  const publicErrorObject = new MethodNotAllwedError();
  response.status(publicErrorObject.statusCode).json(publicErrorObject);
}

function onErrorHandler(error, resquet, response) {
  const publicErrorObject = new InternalServerError({
    statusCode: error.statusCode,
    cause: error,
  });

  console.log(publicErrorObject);

  response.status(publicErrorObject.statusCode).json(publicErrorObject);
}

const controller = {
  errorHandlers: {
    onNoMatch: onNoMatchHandler,
    onError: onErrorHandler,
  },
};

export default controller;
