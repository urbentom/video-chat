/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createActiveCalls = /* GraphQL */ `
  mutation CreateActiveCalls(
    $input: CreateActiveCallsInput!
    $condition: ModelActiveCallsConditionInput
  ) {
    createActiveCalls(input: $input, condition: $condition) {
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
export const updateActiveCalls = /* GraphQL */ `
  mutation UpdateActiveCalls(
    $input: UpdateActiveCallsInput!
    $condition: ModelActiveCallsConditionInput
  ) {
    updateActiveCalls(input: $input, condition: $condition) {
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
export const deleteActiveCalls = /* GraphQL */ `
  mutation DeleteActiveCalls(
    $input: DeleteActiveCallsInput!
    $condition: ModelActiveCallsConditionInput
  ) {
    deleteActiveCalls(input: $input, condition: $condition) {
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
