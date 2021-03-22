/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncActiveCalls = /* GraphQL */ `
  query SyncActiveCalls(
    $filter: ModelActiveCallsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncActiveCalls(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        offerCandidates {
          sdp
          type
        }
        answerCandidates {
          sdp
          type
        }
        offerUser
        answerUser
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getActiveCalls = /* GraphQL */ `
  query GetActiveCalls($id: ID!) {
    getActiveCalls(id: $id) {
      id
      name
      offerCandidates {
        sdp
        type
      }
      answerCandidates {
        sdp
        type
      }
      offerUser
      answerUser
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listActiveCallss = /* GraphQL */ `
  query ListActiveCallss(
    $filter: ModelActiveCallsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActiveCallss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        offerCandidates {
          sdp
          type
        }
        answerCandidates {
          sdp
          type
        }
        offerUser
        answerUser
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
