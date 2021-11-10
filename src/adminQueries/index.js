import Amplify, { Auth, API } from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

let nextToken;

export async function fetchUserAPI(limit) {
  let apiName = "AdminQueries";
  let path = "/listUsers";
  let myInit = {
    queryStringParameters: {
      limit: limit,
      token: nextToken,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    },
  };
  const { NextToken, ...rest } = await API.get(apiName, path, myInit);
  nextToken = NextToken;

  return rest;
}

export async function listGroupsForUser(username) {
  let apiName = "AdminQueries";
  let path = "/listGroupsForUser";
  let myInit = {
    queryStringParameters: {
      username: username,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    },
  };
  const { NextToken, ...rest } = await API.get(apiName, path, myInit);
  nextToken = NextToken;

  return rest;
}

export async function fetchAdminGroupUsers(groupname) {
  let apiName = "AdminQueries";
  let path = "/listUsersInGroup";
  let myInit = {
    queryStringParameters: {
      groupname: groupname,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    },
  };
  const { NextToken, ...rest } = await API.get(apiName, path, myInit);
  nextToken = NextToken;

  return rest;
}

export async function fetchBusinessGroupUsers(groupname) {
  let apiName = "AdminQueries";
  let path = "/listUsersInGroup";
  let myInit = {
    queryStringParameters: {
      groupname: groupname,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    },
  };
  const { NextToken, ...rest } = await API.get(apiName, path, myInit);
  nextToken = NextToken;

  return rest;
}

export async function fetchProductGroupUsers(groupname) {
  let apiName = "AdminQueries";
  let path = "/listUsersInGroup";
  let myInit = {
    queryStringParameters: {
      groupname: groupname,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    },
  };
  const { NextToken, ...rest } = await API.get(apiName, path, myInit);
  nextToken = NextToken;

  return rest;
}

export async function deleteUserAPI(username) {
  let apiName = "AdminQueries";
  let path = "/adminDeleteUser";
  let myInit = {
    queryStringParameters: {
      username: username,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    },
    body: { username },
  };

  return await API.post(apiName, path, myInit);
}

export async function adminCreateUser(username, password, userAttributes) {
  const apiName = "AdminQueries";
  const path = "/adminCreateUser";
  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    },
    body: {
      username,
      password,
      userAttributes,
    },
  };

  return await API.post(apiName, path, params);
}

export async function adminAddUserToGroup(username, groupname) {
  const apiName = "AdminQueries";
  const path = "/addUserToGroup";
  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    },
    body: {
      username,
      groupname,
    },
  };

  return await API.post(apiName, path, params);
}
