// function that accecpt one argument
// Returns apromise rejecting with an Error and thw string

export default function uploadPhoto(filename) {
  return Promise.reject(
    new Error(`${filename} cannot be processed`),
  );
}
