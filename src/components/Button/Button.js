import styled from 'styled-components';

export const Container = styled.div`
  button {
    opacity: 0.6;
    transition: 0.3s;
  }

  button:hover {
    opacity: 1;
  }
`;

export function Button(props) {
  return (
    <Container>
      <button type="button" className={`btn btn-${props.color} btn-lg`}>
        {props.name}
      </button>
    </Container>
  );
}
