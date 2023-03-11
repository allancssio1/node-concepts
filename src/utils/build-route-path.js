export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g;
  const pathWithParams = path.replace(routeParametersRegex, "([a-z0-9\-_]+)");
  console.log("🚀 ~ file: build-route-path.js:4 ~ buildRoutePath ~ pathWithParams:", pathWithParams)

  const pathRegex = new RegExp(`^${pathWithParams}`)

  return pathRegex
  
}
