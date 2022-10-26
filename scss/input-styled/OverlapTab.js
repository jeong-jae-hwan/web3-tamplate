import styled from '@emotion/styled'

//중복확인
export const OverlapTab = styled.button`
  font-size: 13px;
  white-space: nowrap;
  //
  padding: 3px 8px;
  //
  background-color: ${({ isActive }) => (isActive ? '#e2e2e2' : '#333')};
  color: ${({ isActive }) => (isActive ? '#797979' : '#fff')};
  //
  border-radius: 100px;
`