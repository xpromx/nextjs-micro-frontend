const domain = "http://localhost:3000";
const basePaths = {
  base: "/",
  webA: "/web-a",
  webB: "/web-b",
};

const getBaseLink = (path: string) => {
  const route = path === "/" ? "" : path;
  return `${domain}${basePaths.base}${route}`;
};

const getWebALink = (path: string) => {
  const route = path === "/" ? "" : path;
  return `${domain}${basePaths.webA}${route}`;
};

const getWebBLink = (path: string) => {
  const route = path === "/" ? "" : path;
  return `${domain}${basePaths.webB}${route}`;
};

export const ROUTES = {
  base: {
    home: () => getBaseLink("/"),
    login: () => getBaseLink("/login"),
  },
  webA: {
    home: () => getWebALink("/"),
    search: () => getWebALink("/search"),
  },
  webB: {
    home: () => getWebBLink("/"),
    search: () => getWebBLink("/search"),
  },
};
